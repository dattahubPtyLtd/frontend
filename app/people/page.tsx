"use client";
import styles from '../styles/Home.module.css'
import { ReactElement, useState, JSXElementConstructor, ReactNode, ReactPortal, AwaitedReactNode } from "react";
import DHNavbar from "../navbar";
import Icon from '../dhl';
import Head from 'next/head';
import Image from 'next/image';
export default function Home() {
    return (
        <>
        <div className={styles.container}>
        <LeftSide/>
        <RightSide/>
        </div>
        </>
    );
};
function RightSide() {
    return (
        <>
    <div className={styles.column}>
        <h1 className={styles.titleName}>
            Tanmay Dutta<br/>
        </h1>
        <div className={styles.subtitle}>
            Tanmay has been working as a software engineer for 20 years now. <br></br>
            Tanmay Dutta is a seasoned programmer with expertise in programming languages such as Python, Erlang, C++, Haskell, and F#. He has extensive experience in developing numerical libraries and frameworks for investment banking businesses. He was also instrumental in the design and development of a risk framework in Python (pandas, NumPy, and Django) for a wealth fund in Singapore. Tanmay has a master's degree in financial engineering from Nanyang Technological University, Singapore, and a certification in computational finance from Tepper Business School, Carnegie Mellon University.
            <br></br>
            He has been involved in writing many production softwares for different organisations and have been consulting firms for creating APIs for their products.
            <br></br>
            He has written a book on Python Numpy <a href='https://www.packtpub.com/product/numpy-essentials/9781784393670' className='text-teal-800 font-semibold font-mono'> Numpy Essentials</a>
            <br></br>
            He was the original author for <a href='https://github.com/fattmerchantorg/fattmerchant_python_client' className='text-lime-600'> fattmerchant's python API </a>
        </div>
    </div>
    <div className={styles.column}>
        <h1 className={styles.titleName}>
            Manu Datta<br/>
        </h1>
        <div className={styles.subtitle}>
            Manu is a polyglot programmer and has led various technologies team in his carreer. <br></br>
            He has expertise in Python,Java, C++, C, Erlang, Perl, Ruby, Excel-VBA, SQL, Assembly (x86, MIPS), Lisp/Clojure(JVM), R, JavaScript, Shell scripting, Transact-SQL Familiar:C#, SmallTalk, Prolog, Haskell XML, HTML, CSS, XML, XPath, Solidity 
            Tools Used Autosys, Excel, Eclipse Sybase, Oracle Coherence,Gigaspaces, MySQL, g++, make, gdb, jdb, perforce,ITIL methodology,git
        
            <br></br>
            He has been involved in writing many production softwares, Designing and coding system to persist market data from TSE for internal and client usage.
            <br></br>
            He has published many android and ios applications
            <br></br>
        </div>
    </div>
        </>
);
}
function LeftSide() {
    return (<>
    <div className={styles.column}>
    <Image
      src="/TD_profile.jpg"
      width={1200}
      height={1200}
      alt="Picture of the Tanmay"
      style={{width:"50%", height:"50%", borderRadius:"10%"}}
    />
    </div>
    <div className={styles.column}>
    <Image
      src="/manudatta.webp"
      width={1200}
      height={1200}
      alt="Picture of the Tanmay"
      style={{width:"50%", height:"50%", borderRadius:"10%"}}
    />
    </div>
    </>);
}