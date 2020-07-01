/**@jsx jsx */
import {
  Avatar,
  Box,
  Flex,
  Heading,
  Text,
  useColorMode,
} from "@chakra-ui/core";
import { css, jsx } from "@emotion/core";
import dayjs from "dayjs";
import SliceZone from "./components/SliceZone";
import Header from "../../components/Header";

const Post = ({ post }) => {
  const { colorMode } = useColorMode();

  const bgColor = { light: "gray.50", dark: "gray.800" };
  const textColor = { light: "black", dark: "white" };
  const headingColor = { light: "black", dark: "white" };

  const { title, author, date, body } = post;
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
          <Avatar src={author?.picture?.url}></Avatar>{" "}
          <Text fontWeight={600} color="gray.600">
            {author?.name}
          </Text>{" "}
          <Box
            h="6px"
            w="6px"
            backgroundColor="gray.400"
            borderRadius="50%"
            display="inline-block"
          ></Box>
          <Text fontWeight={500} textTransform="uppercase" color="gray.600">
            {dayjs(date).format("DD MMMM YYYY")}
          </Text>{" "}
          <Box
            h="6px"
            w="6px"
            backgroundColor="gray.400"
            borderRadius="50%"
            display="inline-block"
          ></Box>
          <Text fontWeight={600} color="gray.500">
            4 mins read
          </Text>
        </Flex>

        <SliceZone sliceZone={body} />
      </Box>
    </Flex>
  );
};

Post.propTypes = {};

export default Post;
