import React from "react";
import s from "./footer.module.scss";

const Footer = () => {
  return (
    <footer className={s.footer}>
      <div className={s.footer__container}>
        <a href="https://github.com/vagnermengali" className={s.footer__link}>
          © 2025 Vagner Mengali. All rights reserved.
        </a>
      </div>
    </footer>
  );
};

export default Footer;
