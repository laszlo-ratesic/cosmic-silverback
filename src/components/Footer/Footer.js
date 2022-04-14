/*eslint-disable*/
import React from "react";
import { Flex, Link, List, ListItem, Text } from "@chakra-ui/react";
import PropTypes from "prop-types";

export default function Footer(props) {
  // const linkTeal = useColorModeValue("teal.400", "red.200");=
  return (
    <Flex
      flexDirection={{
        base: "column",
        xl: "row",
      }}
      alignItems={{
        base: "center",
        xl: "start",
      }}
      justifyContent="space-between"
      px="30px"
      pb="20px"
    >
      <Text
        color="gray.400"
        textAlign={{
          base: "center",
          xl: "start",
        }}
        mb={{ base: "20px", xl: "0px" }}
      >
        &copy; {new Date().getFullYear()},{" "}
        <Text as="span">
          {"Made with ❤️ by "}
        </Text>
        <Link
          // color={linkTeal}
          color="teal.400"
          href="https://www.keenan.vip"
          target="_blank"
        >
          Keenan Chiasson
        </Link>
      </Text>
    </Flex>
  );
}
