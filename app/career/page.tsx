"use client";
import styles from '../styles/Home.module.css'
import { ReactElement, useState, JSXElementConstructor, ReactNode, ReactPortal, AwaitedReactNode } from "react";
import DHNavbar from "../navbar";
import Icon from '../dhl';
import Head from 'next/head';
export default function Home() {
    return (
        <div className={styles.container}>
        <Head>
            <title>Waitlist</title>
            <meta name="description" content="A quick, scalable waitlist"/>
            <link rel="icon" href="/favicon.ico"/>
        </Head>
        <LeftSide/>
        <RightSide/>
        </div>

    );
};
function LeftSide() {
    return <div className={styles.column}>
        <h1 className={styles.title}>
            <span className={styles.title}>We are not hiring at the moment.. But we really hope that we do in near future. Watch this space</span>
        </h1>
    </div>
}
function RightSide() {
    return <div className={styles.column}>
        <img width="100%" height="100%" src="/nothing.jpeg"/>
    </div>
}