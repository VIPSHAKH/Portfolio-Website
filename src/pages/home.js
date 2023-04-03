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

import Model from "../components/logo";
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
      value: "90",
      icon: <FaHtml5 size="1.5em" />,
    },
    {
      name: "CSS",
      value: "70",
      icon: <FaCss3Alt size="1.5em" />,
    },
    {
      name: "JavaScript",
      value: "70",
      icon: <FaJs size="1.5em" />,
    },
    {
      name: "React",
      value: "75",
      icon: <FaReact size="1.5em" />,
    },
    {
      name: "RPG GAMES",
      value: "100",
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
            <Canvas
              width={700}
              height={700}
              pixelRatio={[1, 2]}
              camera={{ position: [-3, 2, 15], fov: fov }}
            >
              <ambientLight intensity={0.6} />
              <directionalLight position={[-2, 5, 2]} />
              <Suspense fallback={null}>
                <Model />
                <ContactShadows
                  rotation-x={Math.PI / 2}
                  position={[0, -0.8, 0]}
                  opacity={1}
                  width={10}
                  height={10}
                  blur={1.5}
                  far={0.8}
                />
              </Suspense>
              <OrbitControls
                makeDefault
                minPolarAngle={0}
                maxPolarAngle={Math.PI / 1.75}
              />
            </Canvas>
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
                I'm
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
                  Ediz Keskin
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
                About
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
              Favorite activities
            </Heading>
            <List spacing={3} color="white">
              <ListItem>
                <ListIcon as={AiOutlineDoubleRight} color="green.500" />
                Playing video games
              </ListItem>
              <ListItem>
                <ListIcon as={AiOutlineDoubleRight} color="green.500" />
                Reading book
              </ListItem>
              <ListItem>
                <ListIcon as={AiOutlineDoubleRight} color="green.500" />
                Learning something new
              </ListItem>
              <ListItem>
                <ListIcon as={AiOutlineDoubleRight} color="green.500" />
                Love chit chat with my friends
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
              Favorite Movies and Series
            </Heading>
            <List spacing={3} color="white">
              <ListItem>
                <ListIcon as={AiOutlineDoubleRight} color="green.500" />
                Breaking Bad
              </ListItem>
              <ListItem>
                <ListIcon as={AiOutlineDoubleRight} color="green.500" />
                Daredevil
              </ListItem>
              <ListItem>
                <ListIcon as={AiOutlineDoubleRight} color="green.500" />
                Star Wars series
              </ListItem>
              <ListItem>
                <ListIcon as={AiOutlineDoubleRight} color="green.500" />
                Leon The Professional
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
          Skills
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
