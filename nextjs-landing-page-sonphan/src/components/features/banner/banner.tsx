"use client";
import React from "react";
import styles from "@/styles/banner.module.scss";
import FloatCharacters from "@/components/commons/float-character/float-character";

const Banner = () => {

    return (
        <>
            <section className={styles.banner__container}>
                <section className={styles.footer__background}>
                </section>
                <section className={styles.banner__contents}>
                    <section className={styles.textBlock}>
                        <div className={styles.textBlock__new}>
                            <img
                                src={"assets/images/new__tag.svg"}
                                alt={"New text"}
                                width={"100%"}
                                height={"auto"}
                                className={styles.textBlock__newTag__image}
                            />
                            <div className={styles.textBlock__shopNowContainer}>
                                <button className={styles.textBlock__shopNowBtn}></button>
                            </div>
                        </div>
                        <div className={styles.textBlock__arrival}></div>
                        <div className={styles.highlight__character}></div>
                        <FloatCharacters/>
                    </section>
                </section>


            </section>
        </>
    );
};

export default Banner;
