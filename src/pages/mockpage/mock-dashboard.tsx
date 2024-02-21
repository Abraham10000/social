import styles from '../../styles/dashboard.module.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import React, { useEffect, useState } from "react";
import { useProfile } from "../../utils/ProfileContext";
import Chart from "chart.js/auto";
import Cookies from "js-cookie";
import Link from 'next/link';


export default function Dashboard() {

    return (
        <div className={`${styles.bodyContainer} bodyContainer`} style={{display: "flex", flexDirection: "column", alignItems: "flex-start"}}>
            <div id="component" className="container-fluid py-2">
                <div style={{display : "flex", justifyContent : "space-between"}}>
                    <p style={{width: "372px"}} className="text-primary fs-4 fw-bold font-family-Montserrat m-0 px-3 py-2">
                        SENTIMENT
                    </p>
                    <div style={{display: "flex",justifyContent: "space-between", width: "80%"}}>
                    <p className="text-center text-black fs-5 fw-bold font-family-Gotham col-xl-1 m-0 px-3 py-2">
                        Statistique
                    </p>
                    <button className={styles.logoutButton}>
                        Déconnexion
                    </button>
                </div>
                </div>
            </div>
            <div style={{display : "flex", width : "100%"}}>
                <div style={{width : "372px", height : "80vh"}} id="component" className="container-fluid py-3">
                    <div style={{height: "100%"}} className="px-1 py-1 row justify-content-between">
                        <div style={{display: "flex", flexDirection: "column", gap: "12px", justifyContent: "space-between"}}>
                            <div style={{display: "flex", flexDirection: "column", gap: "12px"}}>
                                <div style={{backgroundColor: "rgb(217, 230, 243)"}} className="p-4 rounded-3 row align-items-center">
                                    <img style={{width: "fit-content"}} src="/chart'pie.png"/>
                                    <p className="text-black fs-6 fw-bold font-family-Gotham col-4 m-0">
                                        <a style={{textDecoration: "none"}} href="dashboard">Statistique</a>
                                    </p>
                                </div>
                                <div className="p-4 rounded-3 row align-items-center">
                                    <img style={{width: "fit-content"}} src="/dash.png"/>
                                    <p className="text-black fs-6 fw-bold font-family-Gotham col-4 m-0">
                                        <a style={{textDecoration: "none"}} href="result">Resultat</a>
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className={`${styles.longStyle} longStyle`}>
                <div className={`${styles.longStyleChild} longStyleChild`}>
                    <p className="m-0">Bienvenu sur My App</p>
                    <p className="m-0">Votre nom</p>
                </div>
                <div style={{width: "100%"}}>
                    <div className={`${styles.anotherStyle} anotherStyle`}>
                        <p style={{fontWeight: "700"}}>Taux de réactions sur facebook</p>
                        <div style={{display: "flex", justifyContent: "space-between", width: "100%"}}>
                            <div style={{display: "flex", flexDirection: "column", gap: "12px"}}>
                                <ul id={`${styles.legend} legend`}>
                                    <li><span style={{backgroundColor: "#4267B2"}}></span> Like</li>
                                    <li><span style={{backgroundColor: "#FD7D84"}}></span> Love</li>
                                    <li><span style={{backgroundColor: "#1AA1F2"}}></span> Wow</li>
                                    <li><span style={{backgroundColor: "#FAB81E"}}></span> Haha</li>
                                    <li><span style={{backgroundColor: "#FFAC53"}}></span> Angry</li>
                                </ul>
                                <div className={`${styles.analyse} analyse`}>
                                    <p>Selon l’analyse de votre profil facebook, vous êtes une personnes sensible, Morbi in nibh aliquam consequat sed at et phasellus eros. Eget in dolor mattis </p>
                                    <Link href="/mock-result"><div style={{borderRadius: "44px", width: "fit-content"}} className="bg-primary border border-1 border-white border-opacity-50 col-xxl-3 row justify-content-center align-items-center">
                                        <a href="result" style={{textDecoration: "none", width: "fit-content"}} className="text-center text-white p-2 fs-6 fw-normal font-family-Gotham m-0">
                                            Voir plus de résultat
                                        </a>
                                    </div></Link>
                                </div>
                            </div>
                        <div className={`${styles.chartContainer} chartContainer`}>
                            <canvas id="myChart"></canvas>
                        </div>
                    </div>
                </div>
            </div>
            </div>
            </div>
        </div>
    )
}