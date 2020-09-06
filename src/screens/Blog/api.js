import Prismic from "prismic-javascript";
import fetch from "isomorphic-unfetch";
import { RichText } from "prismic-reactjs";
import readingTime from "reading-time";

const REPOSITORY = process.env.PRISMIC_REPOSITORY_NAME;
const REF_API_URL = `https://${REPOSITORY}.prismic.io/api/v2`;
const GRAPHQL_API_URL = `https://${REPOSITORY}.prismic.io/graphql`;
export const API_TOKEN = process.env.PRISMIC_API_TOKEN;
export const API_LOCALE = process.env.PRISMIC_REPOSITORY_LOCALE;

export const PrismicClient = Prismic.client(REF_API_URL, {
  accessToken: API_TOKEN,
});

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

export async function getAllPostsWithSlug() {
  const data = await fetchAPI(`
    {
      allPosts {
        edges {
          node {
            _meta {
              uid
            }
          }
        }
      }
    }
  `);
  return data?.allPosts?.edges;
}

export async function getPostAndMorePosts(slug, previewData) {
  const data = await fetchAPI(
    `
  query PostBySlug($slug: String!, $lang: String!) {
    post(uid: $slug, lang: $lang) {
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
      category {
        ...on Category {
          name
          badge_color
        }
      }
      _meta {
        uid
        firstPublicationDate
        lastPublicationDate
      }
      body {
        ... on PostBodyText{
          type
          primary{
            text
          }
        }

        ... on PostBodyQuote{
          type
          primary{
            quote
          }
        }
   
        ... on PostBodyImage_with_caption{
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
   morePosts: allPosts(sortBy: date_DESC, first: 3) {
      edges {
        node {
          title        
          date
          cover_image
          excerpt
          author {
            ...on Author {
              name
              picture
            }
          }
          category {
            ...on Category {
              name
              badge_color
            }
          }
          _meta {
            uid
          }
          body {
            ... on PostBodyText{
              type
              primary{
                text
              }
            }
    
            ... on PostBodyQuote{
              type
              primary{
                quote
              }
            }
       
            ... on PostBodyImage_with_caption{
              type
              primary{
                image
                caption
              }
              label
              
            }
            __typename
          }
        }
      }
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

  data.morePosts = data.morePosts.edges
    .filter(({ node }) => node._meta.uid !== slug)
    .slice(0, 2);

  const bodyWithText = data.post.body
    .filter(({ type }) => type === "text" || type === "quote")
    .map(({ primary }) => primary?.quote || primary?.text);

  const baseText = RichText.asText(flatten(bodyWithText));

  return {
    ...data,
    post: {
      ...data.post,
      readingTime: readingTime(baseText),
    },
  };
}

export async function getAllPosts(previewData) {
  try {
    const data = await fetchAPI(
      `
    query {
      allPosts(sortBy: date_DESC) {
        edges {
          node {
            date
            title    
            cover_image    
            excerpt
            author {
              ...on Author {
                name
                picture
              }
            }
            category {
              ...on Category {
                name
                badge_color
              }
            }
            _meta {
              uid
            }
            body {
              ... on PostBodyText{
                type
                primary{
                  text
                }
              }
      
              ... on PostBodyQuote{
                type
                primary{
                  quote
                }
              }
         
              ... on PostBodyImage_with_caption{
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

    const textArrayPosts = data.allPosts.edges.map(({ node: { body } }) => {
      const bodyWithText = body
        .filter(({ type }) => type === "text" || type === "quote")
        .map(({ primary }) => primary?.quote || primary?.text);
      return bodyWithText;
    });

    const textStringPosts = textArrayPosts.map((post) =>
      RichText.asText(flatten(post))
    );

    return data.allPosts.edges.map((post, index) => ({
      ...post,
      readingTime: readingTime(textStringPosts[index]),
    }));
  } catch (error) {
    console.log({ error });
  }
}
