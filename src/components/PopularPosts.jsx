import { Card, Divider, Image } from "@nextui-org/react";
import React from "react";

const PopularPosts = () => {
  const formatDate = {
    // weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
  };

  const dummyPosts = [
    {
      title: "Top 5 Horror movies of 2024",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non risus. Suspendisse lectus tortor, dignissim sit amet, adipiscing nec, ultricies sed, dolor.",
      image:
        "https://images.pexels.com/photos/20954747/pexels-photo-20954747/free-photo-of-black-and-white-photo-of-two-buildings.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    },
    {
      title: "Top 5 Comedy movies of 2024",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non risus. Suspendisse lectus tortor, dignissim sit amet, adipiscing nec, ultricies sed, dolor.",
      image:
        "https://images.pexels.com/photos/20954747/pexels-photo-20954747/free-photo-of-black-and-white-photo-of-two-buildings.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    },
    {
      title: "Top 5 action movies of 2024",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non risus. Suspendisse lectus tortor, dignissim sit amet, adipiscing nec, ultricies sed, dolor.",
      image:
        "https://images.pexels.com/photos/20954747/pexels-photo-20954747/free-photo-of-black-and-white-photo-of-two-buildings.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    },
    {
      title: "Top 5 adventure movies of 2024",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non risus. Suspendisse lectus tortor, dignissim sit amet, adipiscing nec, ultricies sed, dolor.",
      image:
        "https://images.pexels.com/photos/20954747/pexels-photo-20954747/free-photo-of-black-and-white-photo-of-two-buildings.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    },
  ];

  return (
    <div className="flex flex-col gap-4">
      <p className="text-xl font-bold">Popular Posts</p>
      <Divider />

      {dummyPosts.map((post) => (
        <div>
          <div key={post.title} className="flex flex-row gap-4 cursor-pointer">
            <Image
              shadow="sm"
              radius="lg"
              //   width="100%"
              height={300}
              alt="card image"
              className="min-w-[100px] object-cover h-[100px]"
              src={post.image}
            />
            <div className="flex flex-col gap-2 justify-between ">
              <p className="text-lg font-bold truncate-1">{post.title}</p>
              <p className="text-default-500 text-xs truncate ">{post.description}</p>
              <p className="text-xs font-normal">
                {" "}
                {new Date().toLocaleDateString("en-GB", formatDate)}
              </p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default PopularPosts;
