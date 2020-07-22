/**@jsx jsx */
import { jsx } from "@emotion/core";
import { getAllPosts } from "../../screens/Blog/api";
import BlogScreen from "../../screens/Blog/BlogList";

export default function Blog(props) {
  return <BlogScreen {...props} />;
}

Blog.propTypes = {};

export async function getStaticProps({ preview = false, previewData }) {
  const allPosts = await getAllPosts(previewData);

  return {
    props: {
      preview,
      allPosts,
    },
  };
}
