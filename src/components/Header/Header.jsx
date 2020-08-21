import React from "react";
import cls from "./Header.module.css";
import { NavLink } from "react-router-dom";

const Header = (props) => {
  const handleClick = () => {
    props.logout();
  }

  return (
    <header className={cls.header}>
      <img src="https://sdb-studio.com/templates/yoo_helios/images/custom/logo_r.png" alt="header landscape" />
      <div className={cls.loginBlock}>
        { props.isAuth 
        ? <div>{props.login} - <button type="button" onClick={handleClick}>Logout</button></div>
        : <NavLink to="login">login</NavLink> }
      </div>
</header>
  );
};

export default Header;
