/**@jsx jsx */
import { jsx } from "@emotion/core";
import Head from "next/head";
import PageScreen from "../../screens/Page";
import { getPageAndMorePages } from "../../screens/Page/api";

export default function Page({ page, ...others }) {
  return (
    <React.Fragment>
      <Head>
        <title key="title">{page?.title?.[0]?.text}</title>
      </Head>
      <PageScreen page={page} {...others} />
    </React.Fragment>
  );
}

Page.propTypes = {};

export async function getStaticProps({ params, preview = false, previewData }) {
  const data = await getPageAndMorePages(params.slug, previewData);

  return {
    props: {
      preview,
      page: data?.page ?? null,
      morePages: data?.morePages ?? [],
    },
  };
}
