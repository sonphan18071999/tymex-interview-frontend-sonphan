import styles from "@/styles/banner.module.scss";
import React from "react";
import { Character } from "@/models/character";

interface FloatCharacterProps {
  character: Character;
}

const FloatCharacter = ({ character }: FloatCharacterProps) => {
  return (
    <section className={styles.character__container} key={character.name}>
      <div className={styles.character}>
        <img
          className={styles.character__image}
          src={character.image}
          alt="Top character"
          width="100%"
        />
      </div>
      <p className="text-black block">{character.name}</p>
    </section>
  );
};

export default FloatCharacter;
