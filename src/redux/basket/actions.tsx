import {BasketActions} from "./types";

export function addToBasket (data:any) {
    return { type: BasketActions.ADD_TO_BASKET, data }
}