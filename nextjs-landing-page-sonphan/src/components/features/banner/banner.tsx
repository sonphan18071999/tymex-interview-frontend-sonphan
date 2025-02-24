"use client";
import React from "react";
import styles from "./banner.module.scss";

const Banner = () => {
  const characters: Character[] = [
    { name: "Assassin", image: "assets/images/assassin.svg" },
    { name: "Neon guy", image: "assets/images/neon-guy.svg" },
    { name: "Mafia england", image: "assets/images/mafia-england.svg" },
    { name: "Basketball guy", image: "assets/images/basket-ball.svg" },
  ];
  return (
    <>
      <section className={styles.banner__container}>
        <div className={styles.highlight__text}>
          <section className={styles.new__container}>
            <div className={styles.new_tag} />
            <button className={styles.shop_now_btn} id="shop-now-button" />
          </section>

          <div className={styles.arrival} />
        </div>
        <section className={styles.characters}>
          <div className={styles.top_characters}>
            {characters.map((character) => (
              <div className="flex flex-col items-center gap-y-6">
                <div className={styles.character}>
                  <div
                    style={{
                      backgroundImage: `url(${character.image})`,
                      backgroundSize: "cover",
                      backgroundPosition: "center",
                      width: "100%",
                      height: "12rem",
                      position: "absolute",
                      bottom: "0",
                    }}
                  ></div>
                </div>
                <p className="text-black">{character.name}</p>
              </div>
            ))}
          </div>
          <div id="the-dj" className={styles.top_character}></div>
        </section>
      </section>
    </>
  );
};

export default Banner;

interface Character {
  name: string;
  image: string;
}
