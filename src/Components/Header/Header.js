import React from "react";
import { NavLink } from "react-router-dom";
import logo from "../../Images/logo.png";

const Header = () => {
    let activeStyle = {
        textDecoration: "underline",
        color: "red",
    };
    const navItems = ["Home", "About", "Meals", "Ingredients", "Contact"];
    const navigation = [
        { name: "Home", href: "/" },
        { name: "About", href: "/about" },
        { name: "Meals", href: "/meals" },
        { name: "Ingredients", href: "/ingredients" },
        { name: "Contact", href: "/contact" },
    ];
    return (
        <header className="grid grid-cols-12">
            <div className="col-span-3">
                <img className="w-full" src={logo} alt="" />
            </div>
            <nav className="col-span-9">
                <ul className="list-none flex gap-x-5 justify-end">
                    {/* {navItems.map((item, index) => (
                        <li key={index}>
                            <NavLink style={({ isActive }) => (isActive ? activeStyle : undefined)} to={item.includes("Home") ? "/" : `/${item.toLowerCase()}`}>
                                {item}
                            </NavLink>
                        </li>
                    ))} */}
                    {navigation.map((nav, index) => (
                        <li key={index}>
                            <NavLink style={({ isActive }) => (isActive ? activeStyle : undefined)} to={nav.href}>
                                {nav.name}
                            </NavLink>
                        </li>
                    ))}
                </ul>
            </nav>
        </header>
    );
};

export default Header;
