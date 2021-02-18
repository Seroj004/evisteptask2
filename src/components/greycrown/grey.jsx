import React, {useState, useEffect} from "react"
import s from "./grey.module.css"
import {useSelector} from "react-redux";



const Grey = () =>{

    const [count, setCount] = useState(5)
    const [dat, setDat] = useState(null);



    const data = useSelector(state=> state.crownStore.data);

    useEffect(() => {
        const d = data.filter((item, index) => index < count)
        setDat(d)
    }, [count])

    const more = () => {
        setCount(count + 5)
    }





    return <div className={s.crown}>



        <div className={s.center}>

            <h1 className={s.title}>Լավագույն ապրանքատեսականի</h1>



            <div className={s.blocks}>

                {dat && dat.map(d=>{
                    return <div className={s.block} key={d.id}>

                        <div className={s.icons}>
                            <div className={s.i1}>{d.heart}</div>
                            <div className={s.i2}>{d.search}</div>

                        </div>

                        <div className={s.img}>
                            <img src={d.photo} alt=""/>
                        </div>


                        <div className={s.titimg}>
                            <h3>{d.title}</h3>

                            <div className={s.images}>
                                <div className={s.photo}><img src={d.silver} alt=""/></div>
                                <div className={s.photo}><img src={d.rose} alt=""/></div>
                                <div className={s.photo}><img src={d.gold} alt=""/></div>
                            </div>


                        </div>
                        <h3 className={s.price}>{d.price}</h3>

                        <div className={s.ictext}>
                            <div><p className={s.text}>1/2 CT. T.W. Princess-Cut <br/>
                                Diamond Solitaire Stud <br/>
                                Earrings in 10K White Gold <br/></p></div>

                            <div className={s.icon}><img src={d.shop} alt=""/></div>

                        </div>

                    </div>
                })}



            </div>


            <div className={s.more} onClick={more}>
                <h2 className={s.titmore}>ՏԵՍՆԵԼ ԱՎԵԼԻՆ</h2>
            </div>
        </div>


    </div>
}

export default Grey;