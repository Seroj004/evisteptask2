import React from "react"
import s from "./topheader.module.css"
import logo from "../../images/logo.png"
import { NavLink } from "react-router-dom";
import { AiFillHeart } from "react-icons/ai"
import shop from "../../images/shop.png"
import usa from "../../images/usa.png"
import ru from "../../images/ru.png"
import arm from "../../images/arm.png"


const Topheader = () =>{


    return <div className={s.topheader}>

        <div className={s.center}>
<div>

    <NavLink to="/" > <img src={logo} alt=""/></NavLink>

</div>

       <nav className={s.first}>

            <ul>

               <NavLink to="Գlխավոր" className={s.n}  activeClassName={s.active}> Գlխավոր</NavLink>
                <NavLink to="Մեր Մասին" className={s.navv}  activeClassName={s.active}>  Մեր Մասին</NavLink>
                <NavLink to="Զարդեր" className={s.z} activeClassName={s.active}>  Զարդեր</NavLink>
                <NavLink to="Կապ մեզ հետ" className={s.n} activeClassName={s.active}>  Կապ մեզ հետ</NavLink>


            </ul>
       </nav>

            <div className={s.second}>
                <div>
                <ul>
                    <NavLink to="Մուտք" className={s.nav} activeClassName={s.active}>Մուտք</NavLink>
                    <NavLink to="Գրանցում" className={s.nav} activeClassName={s.active}>Գրանցում </NavLink>

                </ul>
                </div>
                <div className={s.ic}>
                    <div className={s.heart}>
                        <NavLink to="heart" className={s.nav} activeClassName={s.active}> <AiFillHeart size={25} color="white"/></NavLink>
                    </div>
                <div className={s.shop}>
                    <NavLink to="shop" className={s.nav} >
                    <img src={shop} alt=""/>
                    </NavLink>
                </div>
                </div>

                <div className={s.languages}>
                    <div className={s.lang}>
                        <img src={usa} alt=""/>
                    </div>
                    <div className={s.lang}>
                        <img src={ru} alt=""/>
                    </div>
                    <div className={s.lang}>
                        <img src={arm} alt=""/>
                    </div>

                </div>
            </div>

        </div>

    </div>
}


export default Topheader;