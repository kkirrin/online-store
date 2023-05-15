import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import axios from "axios"
import { BASE_URL } from "../../utils/constans"
import { shuffle } from "../../utils/command"

export const getProducts = createAsyncThunk('products/getProducts', async(_, thunkAPI)  => {
  try {
    const result = await axios(`${BASE_URL}/products`)
    console.log(result)
    return result.data
    
  } catch(err){
    console.log(err)
    return thunkAPI.rejectWithValue(err)}
    

})
    
// Тот же reducer, но в другой обёртке
const productsSlice = createSlice({
  name: 'products',
  initialState: {
    isLoading: false,
    list:[],
    filtered:[],
    related:[],
  },
  reducers: {
    filterByPrice: (state, { payload }) => {
      state.filtered = state.list.filter(({ price }) => price < payload )
    },
    getRelatedProducts: (state, {payload}) => {
      const list = state.list.filter(({ category: {id} }) => id === payload )
      state.related = shuffle(list)
    }
  },
  extraReducers: (builder) => {
    builder.addCase(getProducts.pending, (state) => {
      state.isLoading =  true
      
    })
    builder.addCase(getProducts.fulfilled, (state, { payload }) => {
      state.list = payload
      state.isLoading =  false
    })
    builder.addCase(getProducts.rejected, (state) => {
      state.isLoading =  false
    })
  }
}, 

)
export const { filterByPrice, getRelatedProducts } = productsSlice.actions
export default productsSlice.reducer

