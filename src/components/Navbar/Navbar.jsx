import React, { useContext } from "react";
import './Navbar.css'
import UserContext from "../UserContext/UserContext";

const Navbar = () => {
    const { name } = useContext(UserContext);
    return <div className="user-context">Hi {name}!</div>;
};
export default Navbar;