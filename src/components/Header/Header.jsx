import React from "react";
import cls from "./Header.module.css";

const Header = () => {
  console.log(cls);
  return (
    <header className={cls.header}>
      <img src="https://sdb-studio.com/templates/yoo_helios/images/custom/logo_r.png" />
    </header>
  );
};

export default Header;
