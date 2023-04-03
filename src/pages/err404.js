import { Box, Button, Flex, Image } from "@chakra-ui/react";
import { Link } from "react-router-dom";

function Err404() {
  return (
    <Box textAlign="center" py={10} px={6}>
      <Box display="inline-block">
        <Flex
          flexDirection="column"
          justifyContent="center"
          alignItems="center"
          textAlign="center"
        >
          <Image
            rounded={"md"}
            backdropFilter={"blur(2px)"}
            alt={"avatar"}
            fit={"cover"}
            align={"center"}
            w={"100%"}
            h={{ base: "100%", sm: "100%", lg: "500px" }}
            src="https://http.cat/404.jpg"
          ></Image>
        </Flex>
        <Link to={"/"}>
          <Button
            mt={"5"}
            size="md"
            height="48px"
            width="200px"
            border="2px"
            borderColor="red.400"
            variant={"outline"}
            color="red.400"
            _hover={{
              bg: "transparent",
              transform: "translateY(2px)",
            }}
            bg="transparent"
            backdropFilter={"blur(2px)"}
          >
            Asosiy
          </Button>
        </Link>
      </Box>
    </Box>
  );
}
export default Err404;
