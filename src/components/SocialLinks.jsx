import { Button } from "@nextui-org/react";
import React from "react";
import { FiFacebook, FiInstagram, FiTwitter, FiLinkedin } from "react-icons/fi";

const SocialLinks = () => {
  const socialLinks = [
    { name: "Facebook", icon: <FiFacebook />, link: "https://www.facebook.com" },
    { name: "Twitter", icon: <FiTwitter />, link: "https://www.twitter.com" },
    { name: "Instagram", icon: <FiInstagram />, link: "https://www.instagram.com" },
    { name: "LinkedIn", icon: <FiLinkedin />, link: "https://www.linkedin.com" },
  ];
  const handleClick = () => {};
  return (
    <>
      <div className="flex gap-2">
        {socialLinks.map((item, index) => (
          <Button
            key={`${item}-${index}`}
            color="primary"
            size="sm"
            isIconOnly
            onClick={handleClick}
          >
            {item.icon}
          </Button>
        ))}
      </div>
    </>
  );
};

export default SocialLinks;
