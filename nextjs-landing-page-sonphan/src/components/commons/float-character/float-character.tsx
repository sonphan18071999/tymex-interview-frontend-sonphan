import React from "react";
import {Character} from "@/models/character";
import styles from '@/styles/features/float-characters.module.scss'

const FloatCharacters = () => {
    const characters: Character[] = [
        {name: "Assassin", image: "assets/images/assassin.svg"},
        {name: "Neon guy", image: "assets/images/neon-guy.svg"},
        {name: "Mafia england", image: "assets/images/mafia-england.svg"},
        {name: "Basketball guy", image: "assets/images/basket-ball.svg"},
    ];
    return (
        <>
            <div className={styles.characters}>
                {characters.map((item) => <div className={styles.character} key={item.name}
                >
                    <div className={styles.character_image__container}>
                        <img
                            src={item.image}
                            alt="Top character"
                        />
                    </div>
                    <div className={`flex justify-center my-2 ${styles.character__name}`}>
                        <p>
                            {item.name}
                        </p>
                    </div>
                </div>)}
            </div>

        </>
    );
};

export default FloatCharacters;
