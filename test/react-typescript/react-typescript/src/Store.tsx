import { Address, Restaurant } from "./model/resturant";

interface OwnProps {
    info: Restaurant;
    changeAddress(address: Address): void;
}
const Store: React.FC<OwnProps> = ({ info }) => {
    return (
        <>
            <div>Store</div>
            <p>{info.name}</p>
        </>
    );
};

export default Store;
