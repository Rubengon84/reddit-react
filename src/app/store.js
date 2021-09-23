import { configureStore } from "@reduxjs/toolkit"
import  searchReducer  from "../features/searchBar/searchSlice"
import  dataReducer  from "../features/data/dataSlice"

export default configureStore({
  reducer: {
    search: searchReducer,
    data: dataReducer
  },
});