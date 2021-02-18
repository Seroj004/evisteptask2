import {SET_CROWN} from "../types/menuTypes";
import crown from "../../images/crown.png"
import rose from "../../images/rose.png"
import gold from "../../images/gold.png"
import silver from "../../images/silver.png"
import {FaHeart  } from "react-icons/fa"
import {FaSearchPlus} from "react-icons/fa"
import shop from "../../images/shop.png"


const crownState = {
    data:[

        {id:1,photo:crown,title:"Jewelery",price:"1000$",search:<FaHeart/>,heart:<FaSearchPlus/>,gold:gold,silver:silver,rose:rose,shop:shop},
        {id:2,photo:crown,title:"Jewelery",price:"1000$",search:<FaHeart/>,heart:<FaSearchPlus/>,gold:gold,silver:silver,rose:rose,shop:shop},
        {id:3,photo:crown,title:"Jewelery",price:"1000$",search:<FaHeart/>,heart:<FaSearchPlus/>,gold:gold,silver:silver,rose:rose,shop:shop},
        {id:4,photo:crown,title:"Jewelery",price:"1000$",search:<FaHeart/>,heart:<FaSearchPlus/>,gold:gold,silver:silver,rose:rose,shop:shop},
        {id:5,photo:crown,title:"Jewelery",price:"1000$",search:<FaHeart/>,heart:<FaSearchPlus/>,gold:gold,silver:silver,rose:rose,shop:shop},
        {id:6,photo:crown,title:"Jewelery",price:"1000$",search:<FaHeart/>,heart:<FaSearchPlus/>,gold:gold,silver:silver,rose:rose,shop:shop},
        {id:7,photo:crown,title:"Jewelery",price:"1000$",search:<FaHeart/>,heart:<FaSearchPlus/>,gold:gold,silver:silver,rose:rose,shop:shop},
        {id:8,photo:crown,title:"Jewelery",price:"1000$",search:<FaHeart/>,heart:<FaSearchPlus/>,gold:gold,silver:silver,rose:rose,shop:shop},
        {id:9,photo:crown,title:"Jewelery",price:"1000$",search:<FaHeart/>,heart:<FaSearchPlus/>,gold:gold,silver:silver,rose:rose,shop:shop},
        {id:10,photo:crown,title:"Jewelery",price:"1000$",search:<FaHeart/>,heart:<FaSearchPlus/>,gold:gold,silver:silver,rose:rose,shop:shop},
        {id:11,photo:crown,title:"Jewelery",price:"1000$",search:<FaHeart/>,heart:<FaSearchPlus/>,gold:gold,silver:silver,rose:rose,shop:shop},
        {id:12,photo:crown,title:"Jewelery",price:"1000$",search:<FaHeart/>,heart:<FaSearchPlus/>,gold:gold,silver:silver,rose:rose,shop:shop},
        {id:13,photo:crown,title:"Jewelery",price:"1000$",search:<FaHeart/>,heart:<FaSearchPlus/>,gold:gold,silver:silver,rose:rose,shop:shop},
        {id:14,photo:crown,title:"Jewelery",price:"1000$",search:<FaHeart/>,heart:<FaSearchPlus/>,gold:gold,silver:silver,rose:rose,shop:shop},
        {id:15,photo:crown,title:"Jewelery",price:"1000$",search:<FaHeart/>,heart:<FaSearchPlus/>,gold:gold,silver:silver,rose:rose,shop:shop},
        {id:16,photo:crown,title:"Jewelery",price:"1000$",search:<FaHeart/>,heart:<FaSearchPlus/>,gold:gold,silver:silver,rose:rose,shop:shop},
        {id:17,photo:crown,title:"Jewelery",price:"1000$",search:<FaHeart/>,heart:<FaSearchPlus/>,gold:gold,silver:silver,rose:rose,shop:shop},
        {id:18,photo:crown,title:"Jewelery",price:"1000$",search:<FaHeart/>,heart:<FaSearchPlus/>,gold:gold,silver:silver,rose:rose,shop:shop},
        {id:19,photo:crown,title:"Jewelery",price:"1000$",search:<FaHeart/>,heart:<FaSearchPlus/>,gold:gold,silver:silver,rose:rose,shop:shop},
        {id:20,photo:crown,title:"Jewelery",price:"1000$",search:<FaHeart/>,heart:<FaSearchPlus/>,gold:gold,silver:silver,rose:rose,shop:shop}


    ]
}

const crownReducer = (state = crownState, action) => {

    switch (action.type){
        case SET_CROWN :
            return {
                ...state, menu: state.menu.concat([action.payload])
            }

        default:
            return state
    }
}

export default crownReducer