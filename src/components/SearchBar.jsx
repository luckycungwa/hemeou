import React, { useState } from 'react';
import { Button, Input } from "@nextui-org/react";
import { FiSearch } from 'react-icons/fi';

const SearchBar = ({ onClick, value, onInputChange }) => {
  const [searchQuery, setSearchQuery] = useState("");

  const handleInputChange = (e) => {
    setSearchQuery(e.target.value);
    onInputChange(e.target.value);
  };

  return (
    <div className='w-auto flex gap-2 items-center justify-center'>
      <Input
        isClearable
        value={value || searchQuery}
        onChange={handleInputChange}
        radius="md"
        variant="default"
        classNames={{
          label: "text-black/50 dark:text-white/90",
          input: [
            "bg-transparent",
            "text-black/90 dark:text-white/90",
            "placeholder:text-default-700/50 dark:placeholder:text-white/60",
          ],
          innerWrapper: "bg-transparent",
          inputWrapper: [
            "shadow-xl",
            "bg-default-200/50",
            "dark:bg-default/60",
            "backdrop-blur-xl",
            "backdrop-saturate-200",
            "hover:bg-default-200/70",
            "dark:hover:bg-default/70",
            "group-data-[focus=true]:bg-default-200/50",
            "dark:group-data-[focus=true]:bg-default/60",
            "!cursor-text",
          ],
        }}
        placeholder="Type to search..."
        startContent={
          <FiSearch
            size={20}
            className="text-black/50 dark:text-white/90"
          />
        }
      />
      <Button auto color="default" className="px-8" onClick={onClick}>
        Search
      </Button>
    </div>
  );
};

export default SearchBar;
