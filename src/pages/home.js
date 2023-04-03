import { Suspense } from "react";
import {
  Box,
  Container,
  Stack,
  Text,
  Flex,
  Heading,
  SimpleGrid,
  useColorModeValue,
  Tooltip,
  VStack,
  ListItem,
  ListIcon,
  List,
  Grid,
  IconButton,
  Button,
  Link,
  useBreakpointValue,
} from "@chakra-ui/react";
import {
  FaInstagram,
  FaSteam,
  FaTwitter,
  FaGithub,
  FaReact,
  FaHtml5,
  FaCss3Alt,
  FaJs,
} from "react-icons/fa";
import Typewriter from "typewriter-effect";
import { AiOutlineDoubleRight } from "react-icons/ai";
import ProgressBar from "react-animated-progress-bar";


import { Canvas } from "@react-three/fiber";
import { Loader, OrbitControls, ContactShadows } from "@react-three/drei";

function Home() {
  const textColor = useColorModeValue("black", "white");
  const fov = useBreakpointValue({ base: 6, sm: 6, md: 4 });

  const barSize = useBreakpointValue({
    base: "300px",
    md: "400px",
  });

  const skills = [
    {
      name: "HTML",
      value: "59",
      icon: <FaHtml5 size="1.5em" />,
    },
    {
      name: "CSS",
      value: "43",
      icon: <FaCss3Alt size="1.5em" />,
    },
    {
      name: "JavaScript",
      value: "32",
      icon: <FaJs size="1.5em" />,
    },
    {
      name: "React",
      value: "19",
      icon: <FaReact size="1.5em" />,
    },
    {
      name: "PUBG MOBILE",
      value: "86",
    },
  ];
  return (
    <Container maxW={"7xl"}>
      <SimpleGrid
        columns={{ base: 1, lg: 2 }}
        spacing={{ base: 8, md: 10 }}
        py={{ base: 18, md: 24 }}
      >
        <Flex data-aos="zoom-in-up">
          <Box
            align={"center"}
            backdropFilter={"blur(2px)"}
            w="500px"
            h="500px"
          >
          <Loader />
          </Box>
        </Flex>
        <Stack data-aos="zoom-in-up">
          <Box as={"header"}>
            <Heading
              lineHeight={1.1}
              fontWeight={600}
              fontSize={{ base: "3xl", sm: "4xl", lg: "6xl" }}
              textAlign={"center"}
            >
              <Text mb={"2"} color="white">
                Men
                <Text
                  as={"span"}
                  position={"relative"}
                  color={"white"}
                  ml={2}
                  _after={{
                    content: "''",
                    width: "full",
                    height: "30%",
                    position: "absolute",
                    bottom: 1,
                    left: 0,
                    bg: "red.400",
                    zIndex: -1,
                  }}
                >
                  Shaxrux
                </Text>
              </Text>
              <Text fontSize={{base:"2xl", sm: "4xl", lg: "6xl" }} as={"span"} color={"red.400"}>
                <Typewriter
                  options={{
                    autoStart: true,
                    delay: 75,
                    loop: true,
                  }}
                  onInit={(typewriter) => {
                    typewriter
                      .pauseFor(120)
                      .typeString("<span>Yosh dasturchi<span>")
                      .pauseFor(600)
                      .deleteAll()
                      .pauseFor(600)
                      .typeString("<span>Student<span>")
                      .pauseFor(600)
                      .start();
                  }}
                />
              </Text>
            </Heading>
          </Box>
          <Stack alignItems={"center"}>
            <Box
              display={"flex"}
              flexDirection={"row"}
              alignItems={"center"}
              justifyContent="center"
              backdropFilter={"blur(2px)"}
              p={3}
              mt={10}
              borderRadius={"md"}
            >
              <Tooltip
                hasArrow
                label="Github"
                bg="gray.300"
                color="black"
                borderRadius={"md"}
              >
                <Text
                  as={"a"}
                  href={"https://github.com/VIPSHAKH"}
                  mr="6"
                  target="_blank"
                  rel="noopener noreferrer"
                  color={textColor}
                  _hover={{ color: "yellow.300" }}
                  transition="all 0.3s"
                >
                  <FaGithub size={"30px"} color="white" />
                </Text>
              </Tooltip>

              <Tooltip
                hasArrow
                label="Instagram"
                bg="gray.300"
                color="black"
                borderRadius={"md"}
              >
                <Text
                  as={"a"}
                  href={"https://www.instagram.com/shokirovc.1"}
                  mr="6"
                  target="_blank"
                  rel="noopener noreferrer"
                  color={textColor}
                  _hover={{ color: "yellow.300" }}
                  transition="all 0.3s"
                >
                  <FaInstagram size={"30px"} color="white" />
                </Text>
              </Tooltip>

              <Tooltip
                hasArrow
                label="Steam"
                bg="gray.300"
                color="black"
                borderRadius={"md"}
              >
                <Text
                  as={"a"}
                  href={"https://steamcommunity.com/id/vipshakh"}
                  mr="6"
                  target="_blank"
                  rel="noopener noreferrer"
                  color={textColor}
                  _hover={{ color: "yellow.300" }}
                  transition="all 0.3s"
                >
                  <FaSteam size={"30px"} color="white" />
                </Text>
              </Tooltip>

              <Tooltip
                hasArrow
                label="Twitter"
                bg="gray.300"
                color="black"
                borderRadius={"md"}
              >
                <Text
                  as={"a"}
                  href={"https://twitter.com/VIPSHAKH"}
                  target="_blank"
                  rel="noopener noreferrer"
                  color={textColor}
                  _hover={{ color: "yellow.300" }}
                  transition="all 0.3s"
                >
                  <FaTwitter size={"30px"} color="white" />
                </Text>
              </Tooltip>
            </Box>
          </Stack>
          <Stack
            pt={"20"}
            justifyContent="center"
            direction="row"
            display={{ base: "none", md: "flex" }}
          >
            <Link href="#skills">
              <Button
                variant={"outline"}
                backdropFilter={"blur(2px)"}
                color="white"
                transition="all 0.3s"
                _hover={{ bgColor: "transparent", color: "red.400" }}
              >
                Haqida
              </Button>
            </Link>
          </Stack>
        </Stack>
      </SimpleGrid>
      <Stack spacing={{ base: 6, md: 10 }} py={{ base: 16, md: 24 }}>
        <Text
          color={"gray.300"}
          fontSize="lg"
          textAlign={"center"}
          data-aos="zoom-in-up"
        >
          Assalomu Aleykum. Mening ismim Shaxrux. Xorazmlik yosh dasturchiman. 
		Sizga quyidagi xizmatlarni taklif etaman. 
        </Text>
        <Stack
          spacing={{ base: 4, sm: 6 }}
          justifyContent={"space-between"}
          direction={{ base: "column", md: "row" }}
        >
          <VStack
            spacing={{ base: 4, sm: 6 }}
            alignItems="rigth"
            backdropFilter={"blur(2px)"}
            data-aos="zoom-in-up"
          >
            <Heading as={"h2"} color={"red.400"}>
              Sevimli mashg'ulotlarim
            </Heading>
            <List spacing={3} color="white">
              <ListItem>
                <ListIcon as={AiOutlineDoubleRight} color="green.500" />
                PUBG MOBILE o'yini
              </ListItem>
              <ListItem>
                <ListIcon as={AiOutlineDoubleRight} color="green.500" />
                Sayt yaratish
              </ListItem>
              <ListItem>
                <ListIcon as={AiOutlineDoubleRight} color="green.500" />
                Yangi narsa o'rganish
              </ListItem>
              <ListItem>
                <ListIcon as={AiOutlineDoubleRight} color="green.500" />
                Do'stlar bilan suhbat
              </ListItem>
            </List>
          </VStack>
          <VStack
            spacing={{ base: 4, sm: 6 }}
            alignItems="rigth"
            backdropFilter={"blur(2px)"}
            data-aos="zoom-in-up"
          >
            <Heading as={"h2"} color={"red.400"}>
              Mufaqqiyatlarim
            </Heading>
            <List spacing={3} color="white">
              <ListItem>
                <ListIcon as={AiOutlineDoubleRight} color="green.500" />
                2020-yil Litseyga kirish.
              </ListItem>
              <ListItem>
                <ListIcon as={AiOutlineDoubleRight} color="green.500" />
                Web-dasturlash kursini tugallash.
              </ListItem>
              <ListItem>
                <ListIcon as={AiOutlineDoubleRight} color="green.500" />
                Python kursini tugallash
              </ListItem>
              <ListItem>
                <ListIcon as={AiOutlineDoubleRight} color="green.500" />
                SMM
              </ListItem>
            </List>
          </VStack>
        </Stack>
        <Heading
          as={"h2"}
          color={"red.400"}
          backdropFilter={"blur(2px)"}
          id="skills"
          data-aos="zoom-in-up"
        >
          NIMANI BILAMAN?
        </Heading>
        <Grid
          templateColumns={{
            sm: "repeat(1, 1fr)",
            md: "repeat(2, 1fr)",
            lg: "repeat(3, 1fr)",
          }}
          gap={6}
          mt={"16"}
        >
          {skills.map((skill) => (
            <Box
              key={skill.name}
              display={"flex"}
              flexDirection="column"
              textAlign={"center"}
              backdropFilter={"blur(2px)"}
              alignItems={"center"}
              justifyContent="center"
              data-aos="zoom-in-up"
              color="white"
            >
              <Box display={"flex"} flexDirection="row" mr={"20px"}>
                {skill.icon && (
                  <IconButton
                    aria-label="twitter"
                    variant="ghost"
                    size="lg"
                    _hover={{
                      bg: "transparent",
                      cursor: "default",
                    }}
                    icon={skill.icon}
                  />
                )}
                <Text fontSize={"2xl"} fontWeight="bold" variant="ghost">
                  {skill.name}
                </Text>
              </Box>
              <ProgressBar
                width={barSize}
                height="10px"
                rect
                fontColor="gray"
                percentage={skill.value}
                rectPadding="1px"
                rectBorderRadius="20px"
                trackPathColor="transparent"
                bgColor="#333333"
                trackBorderColor="grey"
              />
            </Box>
          ))}
        </Grid>
      </Stack>
    </Container>
  );
}
export default Home;
