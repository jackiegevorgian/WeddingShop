import { useContext } from "react";
import FeatShopItemsContext from './FeatShopItemsContext';
import './FeatShopItems.css'


const Child = () => {

    const data = useContext(FeatShopItemsContext)
    return (
            data.map((e) => {
                return (
                    <div className="Product">
                        <div className="FeatShop_Img">
                            <img  src={e.Image}/>
                        </div>
                        <div className="FeatShop_Info">
                            <div>
                                <h4>{e.name}</h4>
                            </div>
                            <div>
                                <span>${e.price}</span>
                                <button>{e.purch}</button>

                            </div>
                        </div>
                    </div>
                )
            })
        )
}

export default Child