/**@jsx jsx */
import {
  Avatar,
  Box,
  Flex,
  Image,
  Stack,
  Text,
  Tooltip,
  useColorMode,
} from "@chakra-ui/core";
import { css, jsx } from "@emotion/core";
import dayjs from "dayjs";
import { BlogJsonLd, NextSeo } from "next-seo";
import {
  TwitterIcon,
  TwitterShareButton,
  FacebookIcon,
  RedditIcon,
  FacebookShareButton,
  RedditShareButton,
} from "react-share";
import Header from "../../components/Header";
import { textColor } from "../../styles/colors";
import SliceZone from "./components/SliceZone";
import TextSlice from "./components/Slices/Text";
import { RichText } from "prismic-reactjs";

const Post = ({ post = {} }) => {
  const { colorMode } = useColorMode();

  const bgColor = { light: "gray.50", dark: "gray.800" };

  const {
    title = [{ text: "" }],
    author = {},
    date = new Date(),
    body = [],
    cover_image,
    _meta: {
      uid = "",
      lastPublicationDate = new Date(),
      firstPublicationDate = new Date(),
    } = {},
    readingTime,
    og_description = "",
    caption,
  } = post;

  const SEO = {
    title: title[0]?.text,
    description: og_description?.[0]?.text,
    canonical: `https://umarluqman.dev/blog/${uid}`,
    openGraph: {
      type: "website",
      locale: "en_GB",
      url: `https://umarluqman.dev/blog/${uid}`,
      title: title[0]?.text,
      description: og_description?.[0]?.text,
      images: [
        {
          url: cover_image?.url,
          width: 800,
          height: 600,
          alt: cover_image?.url,
        },
      ],
    },
  };

  return (
    <React.Fragment>
      <NextSeo
        {...SEO}
        twitter={{
          handle: "@umarlqmn",
          site: "@umarlqmn",
          cardType: "summary_large_image",
        }}
      />

      <BlogJsonLd
        url={`https://umarluqman.dev/${uid}`}
        title={title[0]?.text}
        images={[cover_image?.url]}
        datePublished={firstPublicationDate}
        dateModified={lastPublicationDate}
        authorName={author?.name}
        description={og_description?.[0]?.text}
      />

      <Flex
        display="flex"
        flexDirection="column"
        alignItems="center"
        backgroundColor={bgColor[colorMode]}
        pb={80}
        width="full"
      >
        <Box
          maxWidth={710}
          w="full"
          as="article"
          p={6}
          css={css`
            #quote {
              * {
                margin: 0;
              }
              * + * {
                margin: 1.2em 0 0;
              }
              margin-top: 32px;
              margin-bottom: 32px;
            }
            .stack {
              margin-top: 0;
            }
            #box {
              margin-top: 0;
            }
            .stack > * {
              margin-top: 0;
              margin-right: 12px;
            }
            ol,
            ul {
              margin-left: 40px;
            }
          `}
        >
          <Header colorMode={colorMode}>{title[0]?.text}</Header>
          <Flex align="center" className="stack" justify="space-between">
            <Stack isInline align="center">
              <Avatar src={author?.picture?.url} size="sm"></Avatar>{" "}
              <Box id="box">
                <Text
                  fontWeight={600}
                  color={textColor[colorMode]}
                  fontSize="sm"
                  mt={0}
                >
                  {author?.name}
                </Text>{" "}
                <Text
                  fontWeight={400}
                  color={textColor[colorMode]}
                  fontSize="sm"
                  mt={0}
                >
                  {dayjs(date).format("DD MMMM YYYY")}
                </Text>{" "}
              </Box>
            </Stack>

            <Text fontWeight={400} color={textColor[colorMode]} fontSize="sm">
              {readingTime?.text}
            </Text>
          </Flex>
          <Box
            borderRadius={8}
            h={400}
            mt={12}
            mb={16}
            boxShadow="0 30px 60px -10px rgba(0,0,0,0.2), 0 18px 36px -18px rgba(0,0,0,0.22)"
          >
            <Image
              src={cover_image?.url}
              alt={cover_image?.alt}
              objectFit="cover"
              w="full"
              h="inherit"
              borderRadius={8}
            />
            <Text color={textColor[colorMode]} fontSize="xs">
              {RichText.asText(caption)}
            </Text>
          </Box>

          <SliceZone sliceZone={body} />
          <Stack spacing={8} className="stack" isInline>
            <Tooltip label="Share on Twitter">
              <TwitterShareButton
                url={`https://umarluqman.dev/blog/${uid}`}
                title={title[0]?.text}
              >
                <TwitterIcon size={45} round />
              </TwitterShareButton>
            </Tooltip>
            <Tooltip label="Share on Facebook">
              <FacebookShareButton
                url={`https://umarluqman.dev/blog/${uid}`}
                title={title[0]?.text}
              >
                <FacebookIcon size={45} round />
              </FacebookShareButton>
            </Tooltip>
            <Tooltip label="Share on Reddit">
              <RedditShareButton
                url={`https://umarluqman.dev/blog/${uid}`}
                title={title[0]?.text}
              >
                <RedditIcon size={45} round />
              </RedditShareButton>
            </Tooltip>
          </Stack>
        </Box>
      </Flex>
    </React.Fragment>
  );
};

Post.propTypes = {};

export default Post;
