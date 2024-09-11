import { useState } from "react";
import "./App.css";
import { Address, Restaurant } from "./model/resturant";
import Store from "./Store";
import BestMenu from "./model/BestMenu";
const data: Restaurant = {
    name: "요한버거",
    category: "burger",
    address: {
        city: "seoul",
        detail: "where",
        zipCode: 12345,
    },
};

const App: React.FC = () => {
    //제네릭 문법
    const [myRestaurant, setMyRestaurant] = useState<Restaurant>(data);
    const changeAddress = (address: Address) => {
        setMyRestaurant({ ...myRestaurant, address: address });
    };
    const showBestMenuName = (name: string) => {
        return name;
    };
    return (
        <>
            <div className="App">
                <Store info={myRestaurant} changeAddress={changeAddress} />
                <BestMenu
                    name="불고기피자"
                    category="피자"
                    price={10000}
                    showBestMenuName={showBestMenuName}
                />
            </div>
        </>
    );
};

export default App;
