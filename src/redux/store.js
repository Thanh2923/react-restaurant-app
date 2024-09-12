import { configureStore } from '@reduxjs/toolkit'
import { combineSlices } from '@reduxjs/toolkit'
import { SliceCategories } from './SliceCategories'
import { SliceCart } from './SliceCart'
import { SliceFood } from './SliceFood'

const rootReducer =  combineSlices(SliceCategories,SliceCart,SliceFood)
export const store = configureStore({
  reducer: rootReducer,
})