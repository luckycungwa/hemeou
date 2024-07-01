import { Card, CardBody, Chip, Divider } from "@nextui-org/react";
import React, { useState, useEffect } from "react";

const CategoriesCard = () => {
  const [categories, setCategories] = useState([]);

  const TagsItems = () => {
    return (
      <div className="flex flex-wrap gap-2">
        {categories.map((category) => (
          <Chip
          size="sm"
            color="primary"
            variant="bordered"
            onPress={() => console.log("Pressed")}
            className="w-auto px-2 cursor-pointer"
          >
            <p className="text-xs">{category.username}</p>
          </Chip>
        ))}
      </div>
    );
  };

  useEffect(() => {
    const getCategories = async () => {
      const res = await fetch("https://jsonplaceholder.typicode.com/users");
      const data = await res.json();
      setCategories(data);
    };
    getCategories();
  }, []);
  return (
    <>
      <div>
        <Card>
          <CardBody className="flex flex-col gap-4 p-4">
            <p className="text-xl font-normal">Popular Tags</p>
            <Divider />
            <TagsItems />
          </CardBody>
        </Card>
      </div>
    </>
  );
};

export default CategoriesCard;
