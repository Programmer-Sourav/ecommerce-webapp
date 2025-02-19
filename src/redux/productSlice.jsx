import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import { productsData } from "../data/productdata";

const initialState = {
    selectedFilters : []
}


export const fetchProductsByFiltering = createAsyncThunk("products/fetchProductsByFiltering", 
    async(filter) =>{
        const response = await fetch(``)
        return response.json();
    }
)


const productSlice = createSlice({
    name: "products", 
    initialState: {
        products: [],
        selectedFilters: [],
        status: "idle", 
        error: null
    },

    reducers : {
    productsOperation : (state) =>{
           state.products = null;
           state.status = "idle", 
           state.error = null;
        },
    updateCheckbox : (state, action) =>{
        console.log(555, action.payload)
        const key = Object.keys(action.payload).toString().toLowerCase();
        const value = Object.values(action.payload).toString().toLowerCase();
        console.log(5551, key, value)
        ///I will check if key already exists, then filter it
        ///else add key to the array
        ////for each key push the incoming elements to an array
        ////[{fit: ["Relaxed", "Regular"]}, {size: ["S", "M"]}]
        console.log(121212, state.selectedFilters)
        if(state.selectedFilters.includes(key)){
            console.log(4545, state.selectedFilters)
            // let valuesForTheKey = [];
            // valuesForTheKey = [...valuesForTheKey, value]
            // const itemToPush = {[key]: valuesForTheKey}
            state.selectedFilters.reduce((acc, curItem)=>((curItem===key) ? acc.push({ [key]: [...new Set([...item[key], value])] }) : acc.push(item)), [])     
        }
        else{
            console.log(4646, state.selectedFilters)
            let valuesForTheKey = [];
            valuesForTheKey = [...valuesForTheKey, value]
            const itemToPush = {[key]: valuesForTheKey}
            state.selectedFilters.push(itemToPush)
            console.log(777, state.selectedFilters, itemToPush)
        }
        //switch case"gender": const {gender} = action.payload
        //Object.key
        console.log(4646, state.selectedFilters)

    }    
    },
    extraReducers : (builder) =>{
        builder.addCase(fetchProductsByFiltering.pending, (state)=>{
            state.status = "loading"
        })
        .addCase(fetchProductsByFiltering.fulfilled, (state, action)=>{
            state.status = "succeeded",
            state.products = action.payload;
        })
        .addCase(fetchProductsByFiltering.rejected, (state, action)=>{
            state.status = "failed",
            state.error = action.error.message;
        })
    }
})

export const { productsOperation, updateCheckbox } = productSlice.actions;
export default productSlice.reducer;

