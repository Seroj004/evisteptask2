import React from "react"
import s from "./jewel.module.css"
import photo1 from "../../images/photo1.png"
import photo2 from "../../images/photo2.png"
import photo3 from "../../images/photo3.png"
import photo4 from "../../images/photo4.png"
import Crown from "../crowns/crown";
import {Switch} from "react-router-dom";

const Jewel = () =>{
    return <div className={s.jewel}>


        <div className={s.center}>
            <div className={s.blocks}>

                <div className={s.block}>
            <div className={s.img1}><img src={photo1} alt=""/></div>
                    <div className={s.col}>
            <h3 className={s.tesakani}>Նոր Տեսականի</h3>
                    <h2 className={s.tesak}>վԶՆՈՑ</h2>
                        </div>
                </div>

                <div className={s.block}>
            <div className={s.img2}><img src={photo2} alt=""/></div>
                    <div className={s.col}>
                <h3 className={s.tesakani} id={s.p}>Նոր Տեսականի</h3>
                    <h2 className={s.tesak} id={s.p}>թևՆՈՑ</h2>
                    </div>
                </div>

                <div className={s.block}>
            <div className={s.img3}><img src={photo3} alt=""/></div>
                    <div>
                        <div className={s.col}>
                <h3 className={s.tesakani}>Նոր Տեսականի</h3>
                    <h2 className={s.tesak}>Մատանի</h2>
                        </div>
                    </div>
                </div>


                    <div className={s.block}>
            <div className={s.img4}><img src={photo4} alt=""/> </div>
                        <div className={s.col}>
                <h3 className={s.tesakani}>Նոր Տեսականի</h3>
                        <h2 className={s.tesak}>Օղեր</h2>
                            </div>
                    </div>

            </div>
        </div>
        <Crown/>
    </div>
}

export default Jewel;