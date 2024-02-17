import NavBar from "./navbar"
import styles from '../../styles/landing.module.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Image from "next/image";

const LandingPage = (iconApp : string) => {
    return (
    <div className={`${styles.bodyContainer}`}>    
        <div className="container-fluid py-3" id={`${styles.component}`}>
            <div className="bg-transparent">
                <NavBar title="SENTINENT" iconSrc="/lg.png"/>
                <div className={`${styles.wrapper}`}>
                    <div className="col-xxl-11">
                        <div style={{display : "flex", flexDirection : "column", gap : "24px", alignItems : "center"}}>
                            <div style={{display : "flex", flexDirection : "column", gap : "24px", alignItems : "center"}}>
                                <p style={{fontSize : "4rem", fontWeight  : "bold"}}
                                className="text-center text-dark font-family-Montserrat col-xxl-4 m-0 px-3 py-2">
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
                                        Sentiment
                                    </p>
                                </div>
                            </div>
                            <button className={`${styles.connectezVous}`}>
                                <p style={{margin : "18px", color : "antiquewhite"}}>Connectez-vous avec Facebook</p>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    )
}

export default LandingPage;