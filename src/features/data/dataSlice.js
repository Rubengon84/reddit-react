
import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import {fetchData} from "../../app/api";

export const loadData = createAsyncThunk('data/loadData', 
  async (term) => {
  const response = await fetchData(term);
  return response;
  }
);

export const dataSlice = createSlice({
  
  name: "data",
  initialState: {
    articles: [],
    categories: ["gadgets","funny"],
    category: '',
    isLarge: false,
    isLoadingArticle: false,
    hasError: false
  },
  reducers: {
    setCategory: (state,action) => {state.category = action.payload},
    setIsLarge: (state,action) => {state.isLarge = action.payload},
  },
  extraReducers: {
    [loadData.pending]: (state, action) => {
      state.isLoadingArticle = true;
      state.hasError= false;
    },
    [loadData.fulfilled]: (state, action) =>{
      state.isLoadingArticle = false;
      state.hasError = false;
      state.articles = action.payload;
      state.categories = action.payload.map((cat) => cat.subreddit);
      ;  
    },
    [loadData.rejected]: (state, action) => {
      state.isLoadingArticle = false;
      state.hasError = true;
    }
  } 

});

export const {setCategory, setIsLarge} = dataSlice.actions;

export const selectIsLarge = (state) => state.data.isLarge;

export const selectArticles = (state) => state.data.articles;

export const selectCategory = (state) => state.data.category;

export const selectCategories = (state) => state.data.categories;

export const selectIsLoadingArticle = (state) => state.data.isLoadingArticle;

export const selectHasError = (state) => state.data.hasError;

export default dataSlice.reducer;