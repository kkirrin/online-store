import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import axios from "axios"
import { BASE_URL } from "../../utils/constans"


const initialState = {
  list:[],
}

export const getCategories = createAsyncThunk('categories/getCategories', async(_, thunkAPI)  => {
  try {
    const result = await axios(`${BASE_URL}/categories`)
    console.log(result)
    return result.data
  } catch(err){
    console.log(err)
    return thunkAPI.rejectWithValue(err)}

})
// Тот же reducer, но в другой обёртке
const categoriesSlice = createSlice({
  name: 'categories',
  initialState,
  isLoading: false,

  extraReducers: (builder) => {
    builder.addCase(getCategories.pending, (state) => {
      state.isLoading =  true
      
    })
    builder.addCase(getCategories.fulfilled, (state, { payload }) => {
      state.list = payload
      state.isLoading =  false
    })
    builder.addCase(getCategories.rejected, (state) => {
      state.isLoading =  false
    })
  }
}, 

)

export default categoriesSlice.reducer

