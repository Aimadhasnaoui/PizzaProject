import { formatCurrency } from "../../utilis/helpers";
import Button from "../../ui/Button";
import { useDispatch, useSelector } from "react-redux";
import { Add,Remove,AddItemExiste,RemovItemExiste } from "../cart/CartSlice";
import { useEffect, useState } from "react";
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';

export default function MenuItem({ item }) {
    const [state, setState] = useState(false)
    const [count, setCount] = useState(1);
    const dispatch = useDispatch();
    const cart = useSelector(state => state.cart.Data);
    useEffect(() => {
        if(cart.length > 0){
            const existingItemIndex = cart.findIndex(items => items.id === item.id);
            if (existingItemIndex >= 0) {
                setState(true);
                setCount(cart[existingItemIndex].count)
            }
        }
    }, [cart]);



    return (
        <div className="flex gap-3 w-[700px] border-b-[1px] border-gray-300 py-2">
            <div className="w-40 h-full">
                <img src={item.imageUrl} alt="image pour le pizza" className={`${item.soldOut ? "grayscale" : ""}`} />
            </div>
            <div className="w-full flex flex-col">
                <h1 className="capitalize font-semibold">{item.name}</h1>
                <ul className="flex gap-2 flex-row w-full">
                    {item.ingredients.map((i, index) => (
                        <li key={index} className={`capitalize font-mono ${item.soldOut ? "text-gray-400" : ""}`}>{i},</li>
                    ))}
                </ul>
                {!item.soldOut &&
                    <div className="flex justify-between w-full items-center mt-auto">
                        <p>{formatCurrency(item.unitPrice)}</p>
                        {
                            !state &&
                            <Button onClick={() => {
                                dispatch(Add(item))
                                setState(true)
                            }
                            }>
                                ADD To Cart
                            </Button>
                        }
                        {
                            state &&
                            <div className='flex gap-3'>
                                <div className='flex items-center gap-2'>
                                    <button onClick={() => { 
                                        count >= 0 ? setCount((e) => e + 1) : "" 
                                        dispatch(AddItemExiste(item))
                                        }} className='rounded-full bg-red-500 h-8 flex justify-center items-center w-8'>
                                        <AddIcon></AddIcon>
                                    </button>
                                    <div>{count}</div>
                                    <button onClick={() => { 
                                        count > 0 ? setCount((e) => e - 1) : "" 
                                        if(count <= 1){
                                            setState(false)   
                                            dispatch(Remove(item.id))
                                        }else{
                                            dispatch(RemovItemExiste(item))
                                        }
                                        }} 
                                        className='rounded-full bg-red-500 h-8 flex justify-center items-center w-8'>
                                        <RemoveIcon></RemoveIcon>
                                    </button>
                                </div>
                                <Button onClick={() => {
                                    dispatch(Remove(item.id))
                                    setState(false)
                                    }}>Delete</Button>
                            </div>

                        }
                    </div>
                }
                {
                    item.soldOut &&
                    <p className="text-gray-400 mt-auto">Sold Out</p>
                }
            </div>
        </div>
    );
}