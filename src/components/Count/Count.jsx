import { useDispatch } from "react-redux"
import style from "./Count.module.css"
import { addProduct, removeProduct } from "../../store/order/orderSlice"

export const Count = ({count, id}) => {
    const dispath = useDispatch()

    const addCount = () => {
        dispath(addProduct({id}))
    }

    const removeCount = () => {
        dispath(removeProduct({id}))
    }

    return (
        <div className={style.count}>
            <button className={style.minus} onClick={removeCount}>-</button>
            <p className={style.amount}>{count}</p>
            <button className={style.plus} onClick={addCount}>+</button>
        </div>
    )
}