import React from 'react';
import {Navbar, NavbarBrand, NavbarContent, NavbarItem, NavbarMenuToggle, NavbarMenu, NavbarMenuItem, Link, Button} from "@nextui-org/react";


const Navigationbar = () => {
    const [isMenuOpen, setIsMenuOpen] = React.useState(false);
    
    const navLinks = [
        { name: 'Home', path: '/' },
        { name: 'Blog', path: '/blog' },
        { name: 'About', path: '/about' },
        { name: 'Login', path: '/login' },
        { name: 'Signup', path: '/signup' },
    ]

    return (
        <>

        <div>
            <Navbar isBordered variant="sticky">
                <NavbarContent>
                    <NavbarBrand>
                        <Link href="/">
                            <img
                                src="https://raw.githubusercontent.com/PokeAPI/media/master/logo/pokeapi_256.png"
                                alt="PokeAPI"
                                width={40}
                                height={40}
                            />
                        </Link>
                    </NavbarBrand>
                    <NavbarMenu>
                        <NavbarMenuToggle
                            onClick={() => setIsMenuOpen(!isMenuOpen)}
                        />
                        <NavbarMenu
                            open={isMenuOpen}
                        >
                            {navLinks.map((link, index) => (
                                <NavbarMenuItem key={index}>
                                    <Link
                                        color="inherit"
                                        href={link.path}
                                    >
                                        {link.name}
                                    </Link>
                                </NavbarMenuItem>
                            ))}
                        </NavbarMenu>
                    </NavbarMenu>
                </NavbarContent>
            </Navbar>
        </div>
        </>
    );
}

export default Navigationbar;
