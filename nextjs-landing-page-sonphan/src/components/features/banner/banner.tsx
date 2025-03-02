"use client";
import React from "react";
import styles from "@/styles/banner.module.scss";
import {Character} from "@/models/character";
import FloatCharacter from "@/components/commons/float-character/float-character";
import {Carousel} from "antd";

const Banner = () => {


    return (
        <>
            <section className={styles.banner__container}>
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
                    </section>

                    {/*<section className={styles.footer__background}></section>*/}

                    {/*<section className={styles.characters__contents}>*/}
                    {/*    <FloatCharacter/>*/}
                    {/*</section>*/}

                </section>
            </section>
        </>
    );
};

export default Banner;
