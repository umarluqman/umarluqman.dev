import Prismic from "prismic-javascript";
import fetch from "isomorphic-unfetch";

const REPOSITORY = process.env.PRISMIC_REPOSITORY_NAME;
const REF_API_URL = `https://${REPOSITORY}.prismic.io/api/v2`;
const GRAPHQL_API_URL = `https://${REPOSITORY}.prismic.io/graphql`;
// export const API_URL = 'https://your-repo-name.cdn.prismic.io/api/v2'
export const API_TOKEN = process.env.PRISMIC_API_TOKEN;
export const API_LOCALE = process.env.PRISMIC_REPOSITORY_LOCALE;

export const PrismicClient = Prismic.client(REF_API_URL, {
  accessToken: API_TOKEN,
});

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
      author {
        ...on Author {
          name
          picture
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

  return data;
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

    return data.allPosts.edges;
  } catch (error) {
    console.log({ error });
  }
}
