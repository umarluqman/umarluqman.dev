/**@jsx jsx */
import {
  Avatar,
  Box,
  Flex,
  Heading,
  Text,
  useColorMode,
  Image,
} from "@chakra-ui/core";
import { css, jsx } from "@emotion/core";
import dayjs from "dayjs";
import SliceZone from "./components/SliceZone";
import Header from "../../components/Header";

const Post = ({ post = {} }) => {
  console.log("post", post);
  const { colorMode } = useColorMode();

  const bgColor = { light: "gray.50", dark: "gray.800" };
  const textColor = { light: "black", dark: "white" };
  const headingColor = { light: "black", dark: "white" };

  const {
    title = [{ text: "" }],
    author = {},
    date = new Date(),
    body = [],
    cover_image,
  } = post;
  console.log("cover_image", cover_image);

  return (
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
          * {
            margin: 0;
          }
          * + * {
            margin: 1.2em 0 0;
          }
          #quote {
            margin-top: 32px;
            margin-bottom: 32px;
          }
          #stack {
            margin-top: 0;
          }
          #stack > * {
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
        <Flex align="center" id="stack">
          <Avatar src={author?.picture?.url} size="sm"></Avatar>{" "}
          <Text fontWeight={600} color="gray.600">
            {author?.name}
          </Text>{" "}
          <Box
            h="4px"
            w="4px"
            backgroundColor="gray.400"
            borderRadius="50%"
            display="inline-block"
          ></Box>
          <Text fontWeight={400} color="gray.600">
            {dayjs(date).format("DD MMMM YYYY")}
          </Text>{" "}
          <Box
            h="4px"
            w="4px"
            backgroundColor="gray.400"
            borderRadius="50%"
            display="inline-block"
          ></Box>
          <Text fontWeight={400} color="gray.600">
            4 mins read
          </Text>
        </Flex>
        <Box
          borderRadius={8}
          h={400}
          my={16}
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
        </Box>

        <SliceZone sliceZone={body} />
      </Box>
    </Flex>
  );
};

Post.propTypes = {};

export default Post;
