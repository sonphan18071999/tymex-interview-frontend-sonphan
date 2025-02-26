"use client";
import React from "react";
import styles from "@/styles/banner.module.scss";
import { Character } from "@/models/character";
import FloatCharacter from "@/components/commons/float-character/float-character";

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
        <section className={styles.banner__contents}>
          <section className={styles.textBlock}>
            <div className={styles.textBlock__new}>
              <div>
                <img
                  src={"assets/images/new__tag.svg"}
                  alt={"New text"}
                  width={"100%"}
                  height={"auto"}
                  className={styles.textBlock__newTag__image}
                />
              </div>
              <div className={styles.textBlock__shopNowContainer}>
                <button className={styles.textBlock__shopNowBtn}></button>
              </div>
            </div>
            <div className={styles.textBlock__arrival}></div>
          </section>

          <section className={styles.footer__background}></section>

          <section className={styles.characters__contents}>
            <div className={styles.characters__list}>
              {characters.map((character: Character) => (
                <FloatCharacter character={character} />
              ))}
            </div>
          </section>

          <section>
            <div id="the-dj" className={styles.highlight__character}></div>
          </section>
        </section>
        <section className={styles.characters} />
      </section>
    </>
  );
};

export default Banner;
