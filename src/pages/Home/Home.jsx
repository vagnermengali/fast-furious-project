import React from "react";
import s from "./home.module.scss";
import Card from "../../components/Card";
import { cars } from "../../data/cars";

const Home = () => {
  return (
    <main className={s.main}>
      <section className={s.main__container}>
        <ul className={s.main__list}>
          {cars.map((car, index) => (
            <Card key={index} {...car} />
          ))}
        </ul>
      </section>
    </main>
  );
};

export default Home;
