import NavBar from "./navbar"
import styles from '../../styles/landing.module.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Image from "next/image";
import Footer from "./footer";
import Link from 'next/link';


const LandingPage = (iconApp : string) => {
    return (
    <div className={`${styles.bodyContainer} bodyContainer`}>    
        <div className="container-fluid py-3" id={`${styles.component} component`}>
            <div className="bg-transparent">
                <NavBar title="SENTIMENT" iconSrc="/lg.png"/> 
                <div className={`${styles.wrapper} wrapper`}>
                    <div className="col-xxl-11">
                        <div style={{display : "flex", flexDirection : "column", gap : "24px", alignItems : "center"}}>
                            <div style={{display : "flex", flexDirection : "column", gap : "24px", alignItems : "center"}}>
                                <p style={{fontSize : "3.5rem", fontWeight  : "bold"}}
                                className="text-center text-dark font-family-Montserrat col-xxl-12 m-0 px-3 py-2">
                                    Bienvenue sur Sentiment !
                                </p>
                                <p className="text-center text-dark fs-6 fs-4 fw-normal font-family-Montserrat col-xxl-6 m-0 px-3 py-2">
                                    Comprenez vos habitudes et plongez dans une exploration introspective et découvrez
                                    comment vos interactions sur Facebook influencent votre
                                    bien-être émotionnel.
                                </p>
                            </div>
                            <div style={{display : "flex", flexDirection : "row", gap : "100px", alignItems : "center",
                             justifyContent : "center"} }> 
                                <div style={{display : "flex", flexDirection : "column", gap : "24px", alignItems : "center"}}>
                                    <img src="/logos_facebook.png" className="rounded-4 col-xl-7"/>
                                    <p className="text-secondary fs-4 fw-normal font-family-Montserrat m-0">
                                        Facebook
                                    </p>
                                </div>
                                <p className="text-secondary fs-4 fw-normal font-family-Montserrat m-0">+</p>
                                <div style={{display : "flex", flexDirection : "column", gap : "20px", alignItems : "center"}}>
                                    <img src="/lg.png" id={`${styles.lg}`} className="rounded-4"/>
                                    <p className="text-secondary fs-4 fw-normal font-family-Montserrat m-0">
                                        SENTIMENT
                                    </p>
                                </div>
                            </div>
                            <Link href="/login"><button className={`${styles.connectezVous} connectezVous`}>
                                <p style={{margin : "18px", color : "antiquewhite"}}>Connectez-vous avec Facebook</p>
                            </button></Link>
                        </div>
                    </div>
                    <p className="text-center text-dark fs-6 fw-normal font-family-Montserrat col-xxl-6 m-0 px-3 py-2">
                        Voici un exemple de proposition réalisée en quelques clics 👇
                    </p>
                    <p id="about" className="text-primary fs-5 fw-bold font-family-Montserrat col-xxl-2 m-0 px-3 py-2">
                        Comment ça marche ?
                    </p>
                    <div className="px-1 py-1 col-xxl-12 row justify-content-center align-items-center">
                        <div className={`${styles.step}`}>
                            <Image alt="detail" src="/detail1.png" width={569.33} height={337.38} style={{borderRadius : "25px"}}/>
                            <div className={`${styles.advice}`}>
                                <div className={`${styles.number}`}>
                                    <div className={`${styles.un}`}>01.</div>
                                </div>
                                <b><div className={`${styles.textAdvice}`}>
                                    Connectez-vous à partir de votre compte Facebook 
                                </div></b>
                            </div>
                        </div>
                    </div>
                    <div className="px-1 py-1 col-xxl-12 row justify-content-center align-items-center">
                        <div className={`${styles.step}`}>
                            <div className={`${styles.advice}`}>
                                <div className={`${styles.number}`}>
                                    <div className={`${styles.un}`}>02.</div>
                                </div>
                                <b><div className={`${styles.textAdvice}`}>
                                    Et recevez vos résultats sous forme d’un statistique 
                                </div></b>
                            </div>
                            <Image alt="detail" src="/detail2.png" width={569.33} height={337.38} style={{borderRadius : "25px"}}/>
                        </div>
                    </div>
                    <Footer/>
                </div>
            </div>
        </div>
    </div>
    )
}

export default LandingPage;