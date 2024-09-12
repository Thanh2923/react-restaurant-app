import { configureStore } from '@reduxjs/toolkit'
import { combineSlices } from '@reduxjs/toolkit'
import { SliceCategories } from './SliceCategories'

const rootReducer =  combineSlices(SliceCategories)
export const store = configureStore({
  reducer: rootReducer,
})