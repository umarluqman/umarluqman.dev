/**@jsx jsx */
import { jsx } from "@emotion/core";
import BlogScreen from "../../modules/Blog";
import { getAllPosts } from "./fetcher";

export default function Blog(props) {
  return <BlogScreen></BlogScreen>;
}

Blog.propTypes = {};

export async function getStaticProps({ preview = false, previewData }) {
  const allPosts = await getAllPosts(previewData);
  return {
    props: { preview, allPosts },
  };
}
