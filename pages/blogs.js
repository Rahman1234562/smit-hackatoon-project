import { Box, Button, Card, CardBody, Flex, Heading, Image, Input, SimpleGrid, Stack, Text, Tooltip, useToast } from "@chakra-ui/react";
import { useDispatch, useSelector } from "react-redux";
import Link from "next/link";
import { useEffect, useState } from "react";
import Head from "next/head";
import Navbar from "../Components/Navbar";
import { getAllBlogs, getSearchBlogs } from "../Redux/BlogReducer/blogAction";


const Blogs = () => {
  let blogs = useSelector((state) => state.blogs);
  console.log(blogs);
  const [text, setText] = useState("");
  const toast = useToast();
  const dispatch = useDispatch();

  //---------------------------get all blogs-----------------------------------//

  useEffect(() => {
    dispatch(getAllBlogs())
  }, [text])

  //-----------------setting search input-------------------------//

  const handleChange = (e) => {
    setText(e.target.value);
  }

  //------------------dispatching Search function----------------------//

  const handleSearch = (text) => {
    dispatch(getSearchBlogs(text, toast));
  }

  return (
    <>
      <Head>
        <title>SMIT HACKTHONE PROJECT</title>
        <meta name="description" content="Create Your own blog" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navbar />
      <br />
      <br />
      <Flex width={"94%"} m={"auto"} mt={'50px'} justifyContent={"space-between"} flexDirection={{ base: "column", sm: "column", md: "row", lg: "row", xl: "row" }} gap={"20px"} alignItems={"center"} >
        <Text fontSize={"20px"} fontWeight={"bold"}>All Blogs</Text>
        <Flex>
          <Input type="search" placeholder="search" value={text} onChange={(e) => handleChange(e)} />
          <Button onClick={() => handleSearch(text)}>Search</Button>
        </Flex>
        <Tooltip label="Create your own blog">
          <Link href="/createBlog">
            <Button>Create blog</Button>
          </Link>
        </Tooltip>
      </Flex>
      <Box width={"80%"} m={"auto"} mt={'50px'}>
        {
          blogs.allblogs?.map((el, index) => (

            <Card
              direction={{ base: 'column', sm: 'row' }}
              overflow='hidden'
              variant='outline'
              mb={"30px"}
            >
              <Stack>
                <CardBody text={"bold"}dy>
                  <Text  layerStyle='selected'>WELLCOME TO BLOGS</Text>
                  <Flex justifyContent={"space-between"}>
                    <Heading size='md' wordBreak={"break-word"}>{}</Heading>
                    <Heading size='md' color={"white"} rounded={"full"} px={3} py={1.5}>{}</Heading>
                  </Flex>
                  <Text py='2' wordBreak={"break-word"}>{}</Text>
                  <br />
                  <Text wordBreak={"break-word"}>Author : Rehman</Text>
                  <br />
                </CardBody>
              </Stack>
            </Card>

          ))
        }
      </Box>
    </>
  );
};

export default Blogs;
