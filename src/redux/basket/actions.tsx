import {BasketActions} from "./types";

export function addToBasket (data:object) {
    return { type: BasketActions.ADD_TO_BASKET, data }
}

export function increaseCount (data:string) {
    return { type: BasketActions.INCREASE_COUNT, data }
}

export function decreaseCount (data:string) {
    return { type: BasketActions.DECREASE_COUNT, data }
}

export function getDataBasket () {
    return { type: BasketActions.GET_DATA_BASKET }
}

export function removeFromCart (data:string) {
    return { type:BasketActions.REMOVE_FROM_CART, data }
}
