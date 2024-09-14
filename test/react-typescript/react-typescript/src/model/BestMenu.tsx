import { Menu } from "./resturant";

interface OwnProps extends Menu {
    showBestMenuName(name: string): string;
}
interface OwnPropsNoPrice extends Omit<Menu, "price"> {
    showBestMenuName(name: string): string;
}

const BestMenu: React.FC<OwnProps> = ({
    name,
    price,
    category,
    showBestMenuName,
}) => {
    return (
        <div>
            {name}
            <p>{price}</p>
            <p>{category}</p>
            <p>{showBestMenuName(name)}</p>
        </div>
    );
};

export default BestMenu;
