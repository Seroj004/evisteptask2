import React from "react"
import s from "./header.module.css"
import Topheader from "../topheader/topheader";




const Header = () =>{
    return <div className={s.header} id="header">

        <Topheader/>

        <div className={s.center}>


        <h1 className={s.title}>Նոր ձմեռային  Ոսկյա հավաքածու</h1>

            <p className={s.text}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. <br/>
                Commodo scelerisque integer.Lorem ipsum dolor sit amet, <br/>
                consectetur adipiscing elit. Commodo scelerisque <br/>
                integer.Lorem ipsum dolor sit amet, consectetur adipiscing <br/>
                elit. Commodo scelerisque integer.
            </p>

            <div className={s.button}>
                <button className={s.btn}>Տեսնել ավելին </button>
            </div>

        </div>

    </div>

}

export default Header;