import React from "react";
import styles from "./Main.module.scss"
import DefaultPhoto from "../common/assets/image/Avatar.png"


type PropsType = {

}

export const Main: React.FC<PropsType> = (props) => {

const DefaultImage ={
    backgroundImage: `url(${DefaultPhoto})`
}
    return (
        <div className={styles.Main}>
            <div className= {styles.Container} >
                <div className={styles.ImgContainer} style={DefaultImage}>
                </div>
                <div className={styles.Text} >
                    <span> Hi There</span>
                    <h1>I Am <p>Serj_Y</p></h1>
                    <p>Front_end Developer.</p>
                </div>
            </div>
        </div>
    )
}
// 