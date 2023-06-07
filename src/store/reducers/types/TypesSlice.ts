import {createSlice, PayloadAction} from '@reduxjs/toolkit'
import { IType } from 'models/IType';


interface TypesState {
    types: IType[];
    isLoading: boolean;
    error:string;
}

const initialState: TypesState = {
    types:[],
    isLoading: false,
    error:''
}

export const typesSlice = createSlice({
    name:'types',
    initialState,
    reducers:{
        typesFetching(state){
            state.isLoading = true;
        },
        typesFetchingSuccess(state, action: PayloadAction<IType[]>){
            state.isLoading = false;
            state.error = ''
            state.types = action.payload
        },
        typesFetchingError(state, action: PayloadAction<string>){
            state.isLoading = false;
            state.error = action.payload
        },
        
    }
})

export default typesSlice.reducer