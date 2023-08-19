import Navbar from "../Components/Navbar";
import React from "react";
import emailjs from "@emailjs/browser";
import { CgWebsite } from "react-icons/cg";
import { useRef } from "react";
import {
  Box,
  Button,
  Flex,
  FormControl,
  FormLabel,
  Heading,
  IconButton,
  Input,
  InputGroup,
  InputLeftElement,
  Stack,
  Textarea,
  Tooltip,
  useClipboard,
  useToast,
  VStack,
} from "@chakra-ui/react";
import { BsGithub, BsLinkedin, BsPerson } from "react-icons/bs";
import { MdEmail, MdOutlineEmail } from "react-icons/md";
import Head from "next/head";

const Contact = () => {
  const toast = useToast();
  const form = useRef();
  const { hasCopied, onCopy } = useClipboard("current@gmain.com");

  //----------------------------mailing function----------------------------------//

  const sendEmail = (e) => {
    e.preventDefault();
    console.log("mail");

    emailjs
      .sendForm(
        "service_ztr51t1",
        "template_206epqe",
        form.current,
        "fx2CKE-tde2TgeDso"
      )
      .then(
        (result) => {
          toast({
            title: "Email sent",
            description:
              "Your message sent successfully. We will connect you soon.",
            status: "success",
            duration: 3000,
            isClosable: true,
            position: "top",
          });
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
    e.target.reset();
  };

  return (
    <>
      <Head>
        <title></title>
        <meta name="description" content="Create Your own blog" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navbar />
      <br />
      <br />
      <Flex bg={"white"} align="center" justify="center">
        <Box
          borderRadius="lg"
          m={{ base: 5, md: 16, lg: 10 }}
          p={{ base: 5, lg: 10 }}
        >
          <Box>
            <VStack spacing={{ base: 4, md: 8, lg: 8 }}>
              <Heading>...Let's Connect...</Heading>

              {/*----------------------- email box start------------------------------------- */}

              <Stack
                spacing={{ base: 4, md: 8, lg: 20 }}
                direction={{ base: "column", md: "row" }}
              >
                <Stack
                  align="center"
                  justify="space-around"
                  direction={{ base: "row", md: "column" }}
                >

                </Stack>

                <Box
                  bg={"white"}
                  borderRadius="lg"
                  p={8}
                  color={"gray.700"}
                  shadow="base"
                >
                  <VStack spacing={5}>
                    <form ref={form} onSubmit={sendEmail}>
                      <FormControl
                        isRequired
                        width={{
                          base: "200px",
                          sm: "280px",
                          md: "400px",
                          lg: "400px",
                        }}
                      >
                        <FormLabel>Name</FormLabel>

                        <InputGroup>
                          <InputLeftElement children={<BsPerson />} />
                          <Input
                            type="text"
                            name="to_name"
                            placeholder="Your Name"
                          />
                        </InputGroup>
                      </FormControl>
                      <br />
                      <FormControl isRequired>
                        <FormLabel>Email</FormLabel>

                        <InputGroup>
                          <InputLeftElement children={<MdOutlineEmail />} />
                          <Input
                            type="email"
                            name="from_name"
                            placeholder="Your Email"
                          />
                        </InputGroup>
                      </FormControl>
                      <br />
                      <FormControl isRequired>
                        <FormLabel>Message</FormLabel>

                        <Textarea
                          name="message"
                          placeholder="Your Message"
                          rows={4}
                          resize="none"
                        />
                      </FormControl>
                      <br />
                      <Button
                        type="submit"
                        colorScheme="#05a0e8"
                        bg="#05a0e8"
                        width={"100%"}
                        color="white"
                        _hover={{
                          bg: "#05a0e8",
                        }}
                      >
                        Send Message
                      </Button>
                    </form>
                  </VStack>
                </Box>
              </Stack>
            </VStack>
          </Box>
        </Box>
      </Flex>
    </>
  );
};

export default Contact;
