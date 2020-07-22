/**@jsx jsx */
import { jsx } from "@emotion/core";
import {
  getPostAndMorePosts,
  getAllPostsWithSlug,
} from "../../screens/Blog/api";
import PostScreen from "../../screens/Blog/Post";
import Head from "next/head";

export default function Post({ post, ...others }) {
  console.log("x", post);

  return (
    <React.Fragment>
      <Head>
        <title key="title">{post?.title?.[0]?.text}</title>
      </Head>
      <PostScreen post={post} {...others} />
    </React.Fragment>
  );
}

Post.propTypes = {};

export async function getStaticProps({ params, preview = false, previewData }) {
  const data = await getPostAndMorePosts(params.slug, previewData);

  return {
    props: {
      preview,
      post: data?.post ?? null,
      morePosts: data?.morePosts ?? [],
    },
  };
}

export async function getStaticPaths() {
  const allPosts = await getAllPostsWithSlug();
  return {
    paths: allPosts?.map(({ node }) => `/blog/${node._meta.uid}`) || [],
    fallback: true,
  };
}
