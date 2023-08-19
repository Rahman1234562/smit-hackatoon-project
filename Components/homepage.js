import { Image } from "@chakra-ui/react";
import {VerticalTimeline,VerticalTimelineElement,} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";


export const HomePage = () => {
  return (
    <>
      <Image src="/home2.avif" alt="img-1" width={"100%"} height={"600px"} />
      <VerticalTimeline>
        <VerticalTimelineElement>
          <Image
            src="https://theplanetd.com/images/How-to-start-a-travel-blog.jpg"
            alt="img-1"
          />
          <h1>
            Travel Blogs
          </h1>
          <p>
            A travel blog is a great way to share your personal experiences with
            others and inspire them to explore new places and cultures. People
            love reading about other travel experiences. Thus, you can provide
            valuable information and inspiration to others.
          </p>
        </VerticalTimelineElement>

        <VerticalTimelineElement>
          <Image
            src="https://www.proideators.com/wp-content/uploads/2022/07/How-To-Make-Your-Career-As-A-Food-Blogger-In-India-ProiDeators.jpg"
            alt="img-1"/>
          <h1>
            Food Blogs
          </h1>
          <h1>
            Food blogging is a feature of food journalism interlinking a gourmet
            interest in food, blog writing, and food photography. Food blogs are
            generally written by food enthusiasts often referred to as a
            “foodies” and can be used commercially by the blogger to earn a
            profit.
          </h1>
        </VerticalTimelineElement>

        <VerticalTimelineElement>
          <Image
            src="https://blog.feedspot.com/wp-content/uploads/2016/09/Music-Blogs.jpg"
            alt="img-1"/>
          <h1>
            Music Blogs
          </h1>
          <h1>
            A music blog is just a blog dedicated to music topics. You can get
            new music blogs that share up and coming releases, music review
            blogs that review new releases and educational music blogs. Most
            music blogs share music streaming options, music videos, album
            artwork, and publish interviews with artists.
          </h1>
        </VerticalTimelineElement>
      </VerticalTimeline>
    </>
  );
};
