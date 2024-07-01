import { Avatar, Button, Image } from "@nextui-org/react";
import React from "react";
import { FiArrowLeft, FiUser } from "react-icons/fi";
import { useNavigate } from "react-router-dom";
import SocialLinks from "../components/SocialLinks";
import SearchBar from "../components/SearchBar";
import PopularPosts from "../components/PopularPosts";
import CategoriesCard from "../components/CategoriesCard";

const ReadPost = () => {
  // return to previous page
  const navigate = useNavigate();

  const handleReturn = () => {
    navigate(-1);
  };

  return (
    <>
      <div className="justify-around flex gap-4 items-start flex-row w-full sm:reverse sm:flex-wrap ">
        <div className="flex justify-start gap-4 items-start flex-col w-full sm:w-1/2">
          <Button isIconOnly onClick={handleReturn}>
            <FiArrowLeft />
          </Button>

          <p className="text-2xl font-bold py-4">
            Title of the post : Top 5 Horror Movies of 2024
          </p>
          <div className="w-full flex flex-row justify-between items-center">
            <div className="flex flex-row gap-2 items-center">
              <p className="text-sm font-bold flex items-center flex-row gap-2">
                <Avatar size="sm" isBordered src={<FiUser />} /> Author Name{" "}
              </p>
              <p className="text-xs text-gray-500 font-medium">
                {" "}
                - posted on {new Date().toDateString()}
              </p>
            </div>
            <div className="flex flex-end">
              <SocialLinks />
            </div>
          </div>
          <div className="w-full">
            <Image
              src="https://images.pexels.com/photos/274937/pexels-photo-274937.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
              alt="image"
              className="w-full h-full bg-black"
            />
          </div>
          <div className="flex flex-col gap-8">
            <p>
              To implement a feature that generates new stories every day on
              your landing page, you can follow these steps: Store Daily
              Stories: Create a database table to store daily stories. Each
              story should include the word to be learned, its definition, and a
              sentence or paragraph that uses the word. Populate the table with
              a set of stories for the first day. You can use a predefined set
              of stories or generate them programmatically. Generate New
              Stories: Create a script that runs daily (e.g., using a scheduler
              like cron on Unix-based systems or Task Scheduler on Windows) to
              generate new stories. This script can: Retrieve a list of words
              from a dictionary or word list. Choose a random word from the
              list. Look up the word's definition and a sentence or paragraph
              that uses the word. Insert the word, definition, and sentence into
              the database table. Display New Stories: On your landing page,
              query the database for the latest stories. Display the stories on
              the page, along with the word, definition, and sentence.
            </p>
            <p>
              To implement a feature that generates new stories every day on
              your landing page, you can follow these steps: Store Daily
              Stories: Create a database table to store daily stories. Each
              story should include the word to be learned, its definition, and a
              sentence or paragraph that uses the word. Populate the table with
              a set of stories for the first day. You can use a predefined set
              of stories or generate them programmatically. Generate New
              Stories: Create a script that runs daily (e.g., using a scheduler
              like cron on Unix-based systems or Task Scheduler on Windows) to
              generate new stories. This script can: Retrieve a list of words
              from a dictionary or word list. Choose a random word from the
              list. Look up the word's definition and a sentence or paragraph
              that uses the word.
            </p>
            <p>
              Stories: Create a script that runs daily (e.g., using a scheduler
              like cron on Unix-based systems or Task Scheduler on Windows) to
              generate new stories. This script can: Retrieve a list of words
              from a dictionary or word list. Choose a random word from the
              list. Look up the word's definition and a sentence or paragraph
              that uses the word.
            </p>
          </div>
        </div>
        {/* Right Sidebar sections */}
        <div className="w-full sm:w-1/4 sm:sticky flex flex-col justify-center sm:sticky gap-8">
          <SearchBar />
          <PopularPosts />
          <CategoriesCard />
        </div>
      </div>
    </>
  );
};

export default ReadPost;
