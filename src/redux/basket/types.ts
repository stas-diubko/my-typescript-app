export enum BasketActions {
    ADD_TO_BASKET = "ADD_TO_BASKET",
    INCREASE_COUNT = "INCREASE_COUNT",
    DECREASE_COUNT = "DECREASE_COUNT",
    GET_DATA_BASKET = "GET_DATA_BASKET",
    GOT_DATA_BASKET = "GOT_DATA_BASKET",
    REMOVE_FROM_CART = "REMOVE_FROM_CART"
}

export interface BasketState {
    basket: any;
    dataStore: any
   
}