import {BasketActions} from "./types";

export function addToBasket (data:any) {
    return { type: BasketActions.ADD_TO_BASKET, data }
}

export function increaseCount (data:any) {
    return { type: BasketActions.INCREASE_COUNT, data }
}

export function decreaseCount (data:any) {
    return { type: BasketActions.DECREASE_COUNT, data }
}

export function getDataBasket () {
    return { type: BasketActions.GET_DATA_BASKET }
}