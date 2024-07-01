import React from "react";
import {
  Button,
  Card,
  CardBody,
  CardFooter,
  CardHeader,
  Chip,
  Divider,
  Image,
  Link,
} from "@nextui-org/react";
import { FiArrowUpRight } from "react-icons/fi";

const RecentPosts = () => {
  const list = [
    {
      title: "Orange",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non risus. Suspendisse lectus tortor, dignissim sit amet, adipiscing nec, ultricies sed, dolor.",
      imgUrl:
        "https://images.pexels.com/photos/20954747/pexels-photo-20954747/free-photo-of-black-and-white-photo-of-two-buildings.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      date: "2022-01-01",
      tags: "Music",
    },
    {
      title: "Orange",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non risus. Suspendisse lectus tortor, dignissim sit amet, adipiscing nec, ultricies sed, dolor.",
      imgUrl:
        "https://images.pexels.com/photos/20954747/pexels-photo-20954747/free-photo-of-black-and-white-photo-of-two-buildings.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      date: "2022-01-01",
      tags: "Productivity",
    },
    {
      title: "Orange",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non risus. Suspendisse lectus tortor, dignissim sit amet, adipiscing nec, ultricies sed, dolor.",
      imgUrl:
        "https://images.pexels.com/photos/20954747/pexels-photo-20954747/free-photo-of-black-and-white-photo-of-two-buildings.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      date: "2022-01-01",
      tags: "entertainment",
    },
    {
      title: "Orange",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non risus. Suspendisse lectus tortor, dignissim sit amet, adipiscing nec, ultricies sed, dolor.",
      imgUrl:
        "https://images.pexels.com/photos/20954747/pexels-photo-20954747/free-photo-of-black-and-white-photo-of-two-buildings.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      date: "2022-01-01",
      tags: "Movies",
    },
  ];

  const handleViewMore = () => {
    console.log("View more");
    window.location.href = "/blog";
  };

  return (
    <>
      <div className="w-auto flex flex-col items-center gap-4 py-8">
        {/* Grid Heading */}
        <div className="w-full flex flex-col justify-between items-center my-0">
          <div className="w-full flex flex-row justify-between mb-1 ">
            <p className="text-2xl font-bold">Recent Posts</p>
            <Link
              href="/blog"
              className="text-lg flex items-center gap-2 text-blue-600 hover:text-blue-800"
            >
              See more
              <FiArrowUpRight />
            </Link>
          </div>
          <Divider className="bg-black" />
        </div>

        {/* Grid layout */}
        <div className="w-full gap-4 grid grid-cols-1 sm:grid-cols-4">
          {list.map((item, index) => (
            <Card
              shadow="sm"
              key={index}
              isPressable
              onPress={() => console.log("item pressed")}
            >
              <CardBody className="overflow-visible p-0">
                <Chip size="sm" className="absolute top-2 left-2 z-10">
                  {item.tags}
                </Chip>
                <Image
                  shadow="sm"
                  radius="lg"
                  width="100%"
                  alt={item.title}
                  className="w-full object-cover h-[140px] z-0"
                  src={item.imgUrl}
                />
              </CardBody>
              <CardFooter className="flex flex-col text-small items-start gap-2">
                <p className="font-bold text-lg truncate">{item.title}</p>
                <p className="text-default-500 text-start truncate">
                  {item.description}
                </p>
                <p className="text-default-400 text-start"> {item.date}</p>
              </CardFooter>
            </Card>
          ))}
        </div>
        <Button
          auto
          shadow
          color="secondary"
          className="w-auto"
          onClick={handleViewMore}
        >
          Load More
        </Button>
      </div>
    </>
  );
};

export default RecentPosts;
