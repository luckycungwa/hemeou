import React from "react";
import {
  Navbar,
  NavbarBrand,
  NavbarMenuToggle,
  NavbarMenuItem,
  NavbarMenu,
  NavbarContent,
  NavbarItem,
  Link,
  Button,
} from "@nextui-org/react";

const Navigationbar = () => {
    const [isMenuOpen, setIsMenuOpen] = React.useState(false);
  const navItems = [
    { name: "Home", link: "/" },
    { name: "About", link: "/about" },
    { name: "Blog", link: "/blog" },
    { name: "Login", link: "/login" },
    { name: "Signup", link: "/signup" },
    { name: "Read Post", link: "/readpost" },
  ];

  const menuItems = [
    { name: "Home", link: "/" },
    { name: "About", link: "/about" },
    { name: "Blog", link: "/blog" },
    { name: "Login", link: "/login" },
    { name: "Signup", link: "/signup" },
    { name: "Read Post", link: "/readpost" },
    { name: "Logout", link: "/logout" },
  ];

  return (
    <Navbar isBordered isMenuOpen={isMenuOpen} onMenuOpenChange={setIsMenuOpen}>
      <NavbarContent className="sm:hidden" justify="start">
        <NavbarMenuToggle
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
        />
      </NavbarContent>

      <NavbarContent className="sm:hidden pr-3" justify="center">
        <NavbarBrand>
          <p className="font-bold text-inherit">BLOG</p>
        </NavbarBrand>
      </NavbarContent>

      <NavbarContent justify="end">
        <NavbarItem className="hidden lg:flex">
          <Link href="#">Login</Link>
        </NavbarItem>
        <NavbarItem>
          <Button as={Link} color="warning" href="#" variant="flat">
            Sign Up
          </Button>
        </NavbarItem>
      </NavbarContent>

      <NavbarMenu isMenuOpen={isMenuOpen} onMenuOpenChange={setIsMenuOpen} className="bg-black-200">
        {menuItems.map((item, index) => (
          <div key={`${item}-${index}`} className="sm:w-1/2 p-2 sm:p-4">
            <Link
              className="w-full"
              color={
                index === 2
                  ? "warning"
                  : index === menuItems.length - 1
                  ? "danger"
                  : "foreground"
              }
              href="#"
              size="lg"
            >
              {item.name}
            </Link>
          </div>
        ))}
      </NavbarMenu>
    </Navbar>
  );
};

export default Navigationbar;
