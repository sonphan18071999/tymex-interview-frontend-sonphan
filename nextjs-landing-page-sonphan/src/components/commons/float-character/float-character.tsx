import styles from "@/styles/banner.module.scss";
import React from "react";
import {Character} from "@/models/character";
import {Carousel} from "antd";


const FloatCharacter = () => {
    const characters: Character[] = [
        {name: "Assassin", image: "assets/images/assassin.svg"},
        {name: "Neon guy", image: "assets/images/neon-guy.svg"},
        {name: "Mafia england", image: "assets/images/mafia-england.svg"},
        {name: "Basketball guy", image: "assets/images/basket-ball.svg"},
    ];
    return (
        <>
            <div className={styles.character_item_flex}>
                {characters.map((item) => <section key={item.name}
                >
                    <div className={styles.character}>
                        <img
                            className={styles.character__image}
                            src={item.image}
                            alt="Top character"
                            width="100%"
                        />
                    </div>
                    <div className={'flex justify-center py-2'}>{item.name}</div>
                </section>)}
            </div>

        </>
    );
};

export default FloatCharacter;
