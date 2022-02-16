/* eslint-disable @typescript-eslint/ban-ts-comment */
import { useColorModeValue } from "@chakra-ui/color-mode";
import { VStack, Image, Box, Text } from "@chakra-ui/react";
import { useEffect, useRef } from "react";
import { useInViewport } from "react-in-viewport";

function CardMedia(props: any) {
  const { children, src, ...others } = props;
  const myRef = useRef();
  const { inViewport } = useInViewport(myRef, {}, {}, props);

  return (
    <VStack
      ref={myRef}
      alignItems="center"
      bg="none"
      h="auto"
      w="full"
      rounded="3xl"
      color="purple.200"
      {...others}
    >
      <Image
        h="360px"
        w="full"
        src={inViewport ? src : "/not-sure-if-loading_o_427193.webp"}
        roundedTop="2xl"
        objectFit="cover"
        fallbackSrc="/not-sure-if-loading_o_427193.webp"
      />
      {children}
    </VStack>
  );
}

export default CardMedia;
