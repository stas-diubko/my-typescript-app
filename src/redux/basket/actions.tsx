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

export const getBooksTryThunk = (data:any) => {
    return { type:BasketActions.GET_BOOKS_TO_TRY_THUNK, data }
}

// просто пробую thunk :)

export const getBooks = () => {
    return (dispatch:any) => {
        fetch('http://localhost:4200/books')
            .then(res => res.json())
            .then(
                data => (
                    dispatch(getBooksTryThunk(data))
                ),
            );
    }
  }