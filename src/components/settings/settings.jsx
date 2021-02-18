import React,{useState} from "react"
import s from "./settings.module.css"
import Grey from "../greycrown/grey";
import Crown from "../crowns/crown";




const Settings = () =>{


    const [value,setValue] = useState("10")
    const [val,setVal] = useState("60")

    const change = (e) => {
        setValue(e.target.value)
    }

    const onchange = (e) => {
        setVal(e.target.value)
    }

    return <div className={s.settings}>


        <div className={s.main}>

            <div className={s.first}>

                <h1 className={s.titlef}>Filter</h1>

                <p className={s.text}>Lorem ipsum dolor sit amet, <br/>
                consectetur adipiscing elit. </p>

<div className={s.inputs}>
                <div className={s.input}><input type="text" className={s.inp}/></div>
                <div className={s.input}><input type="text" className={s.inp}/></div>
                <div className={s.input}><input type="text" className={s.inp}/></div>
                <div className={s.input}><input type="text" className={s.inp}/></div>
                <div className={s.input}><input type="text" className={s.inp}/></div>
                <div className={s.input}><input type="text" className={s.inp}/></div>
                <div className={s.input}><input type="text" className={s.inp}/></div>
                <div className={s.input}><input type="text" className={s.inp}/></div>
                <div className={s.input}><input type="text" className={s.inp}/></div>
</div>
            </div>

            <div className={s.second}>

                <div className={s.titles}>
                    <h2 id={s.h1}>քարի տեսակ</h2>
                    <h2 id={s.h2}>գույն</h2>
                    <h2 id={s.h3}>տաշվածք</h2>
                    <h2 id={s.h4}>չափս</h2>
                    <h2 id={s.h5}>պարզություն</h2>

                </div>

                <div className={s.price}>

                    <h2 id={s.h6}>գին</h2>

                    <div className={s.values}>
                        <div className={s.value}>{value} </div>
                        <div className={s.val}>{val}</div>




                    </div>

                    <div className={s.main2}>
                        <div className={s.inputs}>
                            <div className={s.input1}>
                                <input type="range" min="0" max="50" value="0" className={s.slider1} value={value} onChange={change}/>
                            </div>
                            <div className={s.input2}>
                                <input type="range" min="50" max="100" value="50" className={s.slider2} value={val} onChange={onchange}/>
                            </div>
                        </div>


                    </div>

                </div>


            </div>

        </div>
        <Grey/>
        <Crown/>

    </div>

}


export default Settings;