/**@jsx jsx */
import { jsx } from "@emotion/core";
import { getAllPosts } from "../../screens/Blog/api";
import BlogScreen from "../../screens/Blog/BlogList";
import { RichText } from "prismic-reactjs";
import readingTime from "reading-time";

export default function Blog(props) {
  return <BlogScreen {...props} />;
}

Blog.propTypes = {};

export async function getStaticProps({ preview = false, previewData }) {
  const allPosts = await getAllPosts(previewData);
  const textArrayPosts = allPosts.map(({ node: { body } }) => {
    const bodyWithText = body
      .filter(({ type }) => type === "text" || type === "quote")
      .map(({ primary }) => primary?.quote || primary?.text);
    return bodyWithText;
  });

  const flatten = function (input) {
    var result = [];

    input.forEach(function (element) {
      result = result.concat(
        Array.isArray(element) ? flatten(element) : element
      );
    });

    return result;
  };

  const textStringPosts = textArrayPosts.map((post) =>
    RichText.asText(flatten(post))
  );

  return {
    props: {
      preview,
      allPosts: allPosts.map((post, index) => ({
        ...post,
        readingTime: readingTime(textStringPosts[index]),
      })),
    },
  };
}
