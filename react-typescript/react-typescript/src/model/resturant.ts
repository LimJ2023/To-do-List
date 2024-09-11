// let data = {
//     name: "요한버거",
//     category: "burger",
//     address: {
//         city: "seoul",
//         detail: "where",
//         zipCode: 12345,
//     },
// };

export type Restaurant = {
    name: string;
    category: string;
    address: Address;
    menu: Menu[];
};

export type Address = {
    city: string;
    detail: string;
    //있을수도 없을수도 의 경우. 없어도 통과되기 때문에 주의!
    zipCode?: number;
};
export type Menu = {
    name: string;
    price: number;
    category: string;
};

export type AddressWithoutzipCode = Omit<Address, "zipCode">;
export type RestaurantCategory = Pick<Restaurant, "category">;

export type ApiResponse<T> = {
    data: T[];
    totalPage: number;
    page: number;
};

export type RestaurantResponse = ApiResponse<Restaurant>;
export type MenuApi = ApiResponse<Menu>;
