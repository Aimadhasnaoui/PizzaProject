import { createSlice } from "@reduxjs/toolkit"
const initialData = {
    Data:[]
}
const CartSlice = createSlice({
    name: "cart",
    initialState: initialData, 
    reducers: {
        Add:(state,action)=>{
            return {...state,Data:[...state.Data,
                {
                    list:action.payload,
                    id:action.payload.id,
                    count:1
                }
            ]}
        },
        AddItemExiste:(state, action)=>{
            // if(action.payload)
            const existingItemIndex = state.Data.findIndex(item => item.id === action.payload.id);
            if (existingItemIndex >= 0) {
                state.Data[existingItemIndex].count += 1;
            }
        },
        Remove:(state,action)=>{
            return {...state,Data:state.Data.filter(item=>item.id!==action.payload)}
        },
        RemoveAll:(state) => {
            return {...state, Data: [] }
        },
        RemovItemExiste:(state, action)=>{
            const existingItemIndex = state.Data.findIndex(item => item.id === action.payload.id);
            if (existingItemIndex >= 0) {
                state.Data[existingItemIndex].count -= 1;
            }
        },
    }
})

export const { Add,Remove,AddItemExiste,RemoveAll,RemovItemExiste } = CartSlice.actions

export default CartSlice.reducer