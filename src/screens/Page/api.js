import fetch from "isomorphic-unfetch";
import { RichText } from "prismic-reactjs";
import readingTime from "reading-time";
import {
  PrismicClient,
  API_LOCALE,
  API_TOKEN,
  GRAPHQL_API_URL,
} from "../../config";

const flatten = function (input) {
  var result = [];

  input.forEach(function (element) {
    result = result.concat(Array.isArray(element) ? flatten(element) : element);
  });

  return result;
};

async function fetchAPI(query, { previewData, variables } = {}) {
  const prismicAPI = await PrismicClient.getApi();

  try {
    const res = await fetch(
      `${GRAPHQL_API_URL}?query=${query}&variables=${JSON.stringify(
        variables
      )}`,
      {
        headers: {
          "Prismic-Ref": previewData?.ref || prismicAPI.masterRef.ref,
          "Content-Type": "application/json",
          "Accept-Language": API_LOCALE,
          Authorization: `Token ${API_TOKEN}`,
        },
      }
    );

    if (res.status !== 200) {
      console.log(await res.text());
      throw new Error("Failed to fetch API");
    }

    const json = await res.json();
    if (json.errors) {
      console.error(json.errors);
      throw new Error("Failed to fetch API");
    }
    return json.data;
  } catch (error) {
    console.log("error", error);
  }
}

export async function getPageAndMorePages(slug, previewData) {
  const data = await fetchAPI(
    `
  query PageBySlug($slug: String!, $lang: String!) {
    page(uid: $slug, lang: $lang) {
      title
      date
      cover_image
      caption
      author {
        ...on Author {
          name
          picture
        }
      }
      _meta {
        uid
        firstPublicationDate
        lastPublicationDate
      }
      body {
        ... on PageBodyText{
          type
          primary{
            text
          }
        }

        ... on PageBodyQuote{
          type
          primary{
            quote
          }
        }
   
        ... on PageBodyImage_with_caption{
          type
          primary{
            image
            caption
          }
          label
          
        }
        __typename
      }
      og_description
    }
  }
  `,
    {
      previewData,
      variables: {
        slug,
        lang: API_LOCALE,
      },
    }
  );

  console.log("data", data);

  data.morePages = data.morePages.edges
    .filter(({ node }) => node._meta.uid !== slug)
    .slice(0, 2);

  const bodyWithText = data.page.body
    .filter(({ type }) => type === "text" || type === "quote")
    .map(({ primary }) => primary?.quote || primary?.text);

  const baseText = RichText.asText(flatten(bodyWithText));

  return {
    ...data,
    page: {
      ...data.page,
      readingTime: readingTime(baseText),
    },
  };
}

export async function getAllPages(previewData) {
  try {
    const data = await fetchAPI(
      `
    query {
      allPages(sortBy: date_DESC) {
        edges {
          node {
            page_name,
            title    
            
            _meta {
              uid
            }
            body {
              ... on PageBodyText{
                type
                primary{
                  text
                }
              }
      
              ... on PageBodyQuote{
                type
                primary{
                  quote
                }
              }
         
              ... on PageBodyImage_with_caption{
                type
                primary{
                  image
                  caption
                }
                
              }
              __typename
            }
            
          }
        }
      }
    }
  `,
      { previewData }
    );

    console.log("data.allPages", data.allPages);

    const textArrayPages = data.allPages.edges.map(({ node: { body } }) => {
      const bodyWithText = body
        .filter(({ type }) => type === "text" || type === "quote")
        .map(({ primary }) => primary?.quote || primary?.text);
      return bodyWithText;
    });

    const textStringPages = textArrayPages.map((page) =>
      RichText.asText(flatten(page))
    );

    return data.allPages.edges.map((page, index) => ({
      ...page,
      readingTime: readingTime(textStringPages[index]),
    }));
  } catch (error) {
    console.log({ error });
  }
}
