import React, { useState } from "react";
import {
  Button,
  Card,
  CardBody,
  CardFooter,
  Chip,
  Image,
  Link,
  Pagination,
} from "@nextui-org/react";
import HeroSection from "../components/HeroSection";
import SearchBar from "../components/SearchBar";

const Blog = () => {
  const [searchValue, setSearchValue] = useState("");

  const FilterItems = () => {
    return (
      <div className="flex flex-wrap gap-4">
        <Chip
          color="primary"
          bordered
          onPress={() => console.log("Pressed")}
          css={{ p: "0.5rem", height: "auto" }}
        >
          <p className="text-sm">All</p>
        </Chip>
        <Chip
          color="primary"
          bordered
          onPress={() => console.log("Pressed")}
          css={{ p: "0.5rem", height: "auto" }}
        >
          <p className="text-sm">Music</p>
        </Chip>
        <Chip
          color="primary"
          bordered
          onPress={() => console.log("Pressed")}
          css={{ p: "0.5rem", height: "auto" }}
        >
          <p className="text-sm">Productivity</p>
        </Chip>
        <Chip
          color="primary"
          bordered
          onPress={() => console.log("Pressed")}
          css={{ p: "0.5rem", height: "auto" }}
        >
          <p className="text-sm">Entertainment</p>
        </Chip>
        <Chip
          color="primary"
          bordered
          onPress={() => console.log("Pressed")}
          css={{ p: "0.5rem", height: "auto" }}
        >
          <p className="text-sm">Movies</p>
        </Chip>
      </div>
    );
  };

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

  const handleViewPost = () => {
    window.location.href = "/post";
    console.log("Viewing post");

  };

  // search bar stuff
  const handleSearch = () => {
    // Perform search action
    console.log("Searching for:", searchValue);
  };

  const handleInputChange = (value) => {
    setSearchValue(value);
  };
  return (
    <>
      <HeroSection />
      <div className="w-auto py-8 px-32">
        {/* Grid Heading */}
        <div className="w-full flex flex-col justify-center items-center my-8">
          <p className="text-xl font-bold text-center uppercase">
            Latest Posts
          </p>
          <p>See the Latest Posts</p>
        </div>
        {/* Filter bar component */}
        <div className="w-full flex justify-between items-center py-8">
          <FilterItems />
          <SearchBar onClick={handleSearch} onInputChange={handleInputChange} />
        </div>

        {/* Grid layout */}
        <div className="w-full gap-4 grid grid-cols-1 sm:grid-cols-3">
          {list.map((item, index) => (
            <Card
              shadow="sm"
              key={index}
              isPressable
              onPress={handleViewPost}
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
                <p className="font-bold text-lg">{item.title}</p>
                <p className="text-default-500 text-start truncate">
                  {item.description}
                </p>
                <p className="text-default-400 text-start"> {item.date}</p>
              </CardFooter>
            </Card>
          ))}
        </div>
        <div className="w-full flex justify-center items-center py-8">
          <Pagination showControls total={10} initialPage={1} />
        </div>
      </div>
    </>
  );
};

export default Blog;
