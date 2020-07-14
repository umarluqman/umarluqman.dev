import React from "react";
import { RichText, Elements } from "prismic-reactjs";
import { Text, Heading, Link, useColorMode } from "@chakra-ui/core";
import { textColor, headingColor } from "../../../../styles/colors";
import { linkResolver } from "../../../../pages/api/preview";

// import { customLink } from "utils/prismicHelpers";

/**
 * Text slice component
 */
const TextSlice = ({ slice }) => {
  const { colorMode } = useColorMode();
  const linkColor = { light: "#13AAB5", dark: "#16bdca" };
  const propsWithUniqueKey = function (props, key) {
    return Object.assign(props || {}, { key });
  };
  const htmlSerializer = (type, element, content, children, key) => {
    switch (type) {
      //Add a class to paragraph elements

      case Elements.span: // Span
        if (content) {
          return content.split("\n").reduce((acc, p) => {
            if (acc.length === 0) {
              return [p];
            } else {
              const brIndex = (acc.length + 1) / 2 - 1;
              const br = React.createElement(
                "br",
                propsWithUniqueKey({}, brIndex)
              );
              return acc.concat([br, p]);
            }
          }, []);
        } else {
          return null;
        }
      case Elements.paragraph:
        return React.createElement(
          Text,
          propsWithUniqueKey(
            { lineHeight: 2, fontFamily: "Inter", color: textColor[colorMode] },
            key
          ),
          children
        );

      // Don't wrap images in a <p> tag
      case Elements.heading2:
        return React.createElement(
          Heading,
          propsWithUniqueKey(
            { as: "h2", size: "xl", color: headingColor[colorMode] },
            key
          ),
          children
        );
      case Elements.heading3:
        return React.createElement(
          Heading,
          propsWithUniqueKey(
            { as: "h3", size: "lg", color: headingColor[colorMode] },
            key
          ),
          children
        );

      case Elements.em: // Emphasis
        return React.createElement(
          "em",
          propsWithUniqueKey({ color: textColor[colorMode] }, key),
          children
        );

      case Elements.listItem: // Unordered List Item
        return React.createElement(
          "li",
          propsWithUniqueKey({ color: textColor[colorMode] }, key),
          children
        );

      case Elements.oListItem: // Ordered List Item
        return React.createElement(
          "li",
          propsWithUniqueKey({ color: textColor[colorMode] }, key),
          children
        );

      case Elements.list: // Unordered List
        return React.createElement(
          "ul",
          propsWithUniqueKey({ color: textColor[colorMode] }, key),
          children
        );

      case Elements.oList: // Ordered List
        return React.createElement(
          "ol",
          propsWithUniqueKey({ color: textColor[colorMode] }, key),
          children
        );
      case Elements.hyperlink:
        const targetAttr = element.data.target
          ? { target: element.data.target }
          : {};
        const relAttr = element.data.target ? { rel: "noopener" } : {};
        const props = Object.assign(
          {
            href: element.data.url || linkResolver(element.data),
            isExternal: true,
            color: linkColor[colorMode],
          },
          targetAttr,
          relAttr
        );
        return React.createElement(
          Link,
          propsWithUniqueKey(props, key),
          children
        );
      // Return null to stick with the default behavior for all other elements
      default:
        return null;
    }
  };

  return (
    <RichText
      render={slice.primary.text}
      // linkResolver={linkResolver}
      // serializeHyperlink={customLink}
      htmlSerializer={htmlSerializer}
    />
  );
};

export default TextSlice;
