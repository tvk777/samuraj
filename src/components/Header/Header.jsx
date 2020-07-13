import React from "react";
import cls from "./Header.module.css";
import { NavLink } from "react-router-dom";

const Header = (props) => {
  return (
    <header className={cls.header}>
      <img src="https://sdb-studio.com/templates/yoo_helios/images/custom/logo_r.png" alt="header landscape" />
      <div className={cls.loginBlock}>
        { props.isAuth ? props.login : <NavLink to="login">login</NavLink> }
      </div>
</header>
  );
};

export default Header;
