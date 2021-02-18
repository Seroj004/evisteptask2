import React from "react"
import s from  "./footer.module.css"
import img1 from "../../images/img1.png"
import img2 from "../../images/img2.png"
import img3 from "../../images/img3.png"
import img4 from "../../images/img4.png"
import img5 from "../../images/img5.png"
import img6 from "../../images/img6.png"
import img7 from "../../images/img7.png"
import {AiOutlineUp} from "react-icons/all";
import {HashLink as Link} from "react-router-hash-link"



const Footer = () =>{
    return <div className={s.footer}>

        <div className={s.grey}>
            <div className={s.sec1}>
<div className={s.images}>

    <div className={s.img}><img className={s.i} src={img1} alt=""/>
    <div className={s.hover}>
        <h2 className={s.ring}>Մատանի
        </h2>
    </div>
    </div>
    <div className={s.img}><img className={s.i} src={img2} alt=""/>
        <div className={s.hover}>
            <h2 className={s.ring}>Մատանի
            </h2>
        </div>
    </div>
    <div className={s.img}><img className={s.i} src={img3} alt=""/>
        <div className={s.hover}>
            <h2 className={s.ring}>Մատանի
            </h2>
        </div></div>
    <div className={s.img}><img className={s.i} src={img4} alt=""/>
        <div className={s.hover}>
            <h2 className={s.ring}>Մատանի
            </h2>
        </div></div>
    <div className={s.left}>
    <div className={s.img} id={s.down}><img className={s.i} src={img5} alt=""/>
        <div className={s.hover}>
            <h2 className={s.ring}>Մատանի
            </h2>
        </div></div>
    <div className={s.img} id={s.down}><img className={s.i} src={img6} alt=""/>
        <div className={s.hover}>
            <h2 className={s.ring}>Մատանի
            </h2>
        </div></div>
    <div className={s.img} id={s.down}><img className={s.i} src={img7} alt=""/>
        <div className={s.hover}>
            <h2 className={s.ring}>Մատանի
            </h2>
        </div></div>
    </div>

</div>
            </div>

            <div className={s.lines}></div>

            <div className={s.sec2}>

<div className={s.center}>
                <div className={s.sec}>

                        <div className={s.a}>
                        <a href="https://www.google.com">Մեր Մասին</a>
                        </div>
                        <div className={s.a}>
                        <a href="https://www.google.com">Հաճախ տրվող հարցեր</a>
                    </div>

                </div>

                <div className={s.sec}>

                    <div className={s.a}>
                        <a href="https://www.google.com">Հետադարձ կապ</a>
                    </div>
                    <div className={s.a}>
                        <a href="https://www.google.com">+374 (00) 000 000</a>
                    </div>
                    <div className={s.a}>
                        <a href="https://www.google.com">Հասցե՝ Հակոբ հակոբյան 3</a>
                    </div>

                </div>
                <div className={s.sec}>
                    <div className={s.a}><a href="https://www.google.com">Գրանցվել</a></div>
                    <div className={s.a}><a href="https://www.google.com">Մուտք Գործել</a></div>
                </div>


            </div>
            <Link smooth to="#header">    <div className={s.role}><AiOutlineUp color="white"size={30}/></div></Link>

            </div>
        </div>
        <div className={s.white}>jewelery brand 2020</div>

    </div>
}

export default Footer;