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
        selectedFiltersWithoutCategory: [],
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
        const key = Object.keys(action.payload).toString().toLowerCase();
        const value = Object.values(action.payload).toString().toLowerCase();

        ///I will check if key already exists, then filter it
        ///else add key to the array
        ////for each key push the incoming elements to an array
        ////[{fit: ["Relaxed", "Regular"]}, {size: ["S", "M"]}]

        if(state.selectedFiltersWithoutCategory.includes(value)){
             state.selectedFiltersWithoutCategory = state.selectedFiltersWithoutCategory.filter((item)=>item!==value)
        }
        else{
            state.selectedFiltersWithoutCategory.push(value)
        }
        const keyExists = state.selectedFilters.some(item=>Object.keys(item)[0]===key)
        if(keyExists){
            state.selectedFilters = state.selectedFilters.reduce((acc, item)=>{
                const existingKey = Object.keys(item)[0];
               
                if(existingKey === key){
                     // Check if value already exists in the key's array
                if (item[key]?.includes(value)) {
                    // Remove the value from the array
                    const filteredValues = item[key].filter((v) => v !== value);

                    if (filteredValues.length > 0) {
                        acc.push({ [key]: filteredValues });
                    } // If empty, we remove the key entirely
                }
                    else{
                    acc.push({ [key] : [...new Set([...item[key], value])]})
                    }
                }
                else{
                    acc.push(item);
                }
                return acc;
            }, [])  
        }
        else{
             state.selectedFilters.push({ [key]: [value] });
        }
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

