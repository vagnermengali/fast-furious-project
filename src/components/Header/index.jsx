import s from "./header.module.scss";

const Header = () => {
  return (
    <header className={s.header}>
      <div className={s.header__container}>
        <a href="/">
          <img
            className={s.header__logo}
            src="./assets/images/logo.png"
            alt="Logo"
          />
        </a>
      </div>
    </header>
  );
};

export default Header;
