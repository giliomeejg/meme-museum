import { Search2Icon } from "@chakra-ui/icons";
import {
  Box,
  Flex,
  HStack,
  Stack,
  Button,
  Container,
  InputGroup,
  InputLeftElement,
  Input,
  useColorModeValue,
} from "@chakra-ui/react";
import NextLink from "next/link";
import React from "react";

import { brandColors } from "../../helpers";
import ConnectButton from "../Buttons/ConnectButton";
import LogoIcon from "../Icons/LogoIcon";

// import DiscordButton from "../Buttons/DiscordButton";
// import TwitterButton from "../Buttons/TwitterButton";
// import LogoDarkIcon from "../Icons/LogoDarkIcon";

import ThemeToggle from "./ThemeToggle";

function Navbar() {
  const headingColor = "purple.200"; // useColorModeValue("white", "purple.200");
  const navBg = "none"; // useColorModeValue("spacelightalpha", "purple.500");
  const color = useColorModeValue(brandColors.mainPurple, "white");
  const altColor = useColorModeValue("white", brandColors.darkPurple);
  const borderColor = useColorModeValue("#8C65F7", "white");
  return (
    <Box as="nav" w="100%" top="0" zIndex={1}>
      <Container
        display="flex"
        p={2}
        maxW="8xl"
        wrap="wrap"
        align="center"
        justify="space-between"
        bg={navBg}
        roundedBottom="3xl"
      >
        {/* <Flex h={16} alignItems="center" justifyContent="space-between"> */}
        <HStack w="full" spacing={8} alignItems="center">
          <Flex _hover={{ cursor: "pointer" }} align="center" mr={5}>
            <NextLink href="/">
              <Flex _hover={{ cursor: "pointer" }} align="center" mr={5}>
                <LogoIcon size="160px" />
              </Flex>
            </NextLink>
          </Flex>
          <NextLink href="/">
            <Button
              rounded="full"
              size="md"
              variant="solid"
              bg="purple.200"
              border={`solid 5px ${borderColor}`}
              color="white"
              _hover={{
                bg: altColor,
                color,
              }}
            >
              MEMES
            </Button>
          </NextLink>
          <NextLink href="/about">
            <Button
              rounded="full"
              size="md"
              variant="solid"
              bg="purple.200"
              border={`solid 5px ${borderColor}`}
              color="white"
              _hover={{
                bg: altColor,
                color,
              }}
            >
              ABOUT
            </Button>
          </NextLink>
        </HStack>

        <Flex alignItems="center" w="full">
          <Stack direction="row" spacing={3} w="full">
            <InputGroup>
              <InputLeftElement pointerEvents="none">
                <Search2Icon color="white" />
              </InputLeftElement>
              <Input
                rounded="full"
                size="md"
                variant="solid"
                bg="purple.200"
                border={`solid 5px ${borderColor}`}
                color="white"
                _hover={{
                  bg: altColor,
                  color,
                }}
                type="search"
                fontWeight="bold"
                style={{
                  textTransform: "uppercase",
                }}
                placeholder="SEARCH.."
              />
            </InputGroup>
            <ConnectButton />
            <ThemeToggle />
          </Stack>
        </Flex>
        {/* </Flex> */}
      </Container>
    </Box>
  );
}
export default Navbar;
