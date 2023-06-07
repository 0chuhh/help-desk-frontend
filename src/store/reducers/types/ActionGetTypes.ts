import { AppDispatch } from "store";
import { IUser } from "models/IUser";
import api from 'services/api'
import Cookies from "js-cookie";
import { typesSlice } from "./TypesSlice";
import { IType } from "models/IType";
import { useAppSelector } from "hooks/redux";

export const fetchTypes = () => async (dispatch:AppDispatch) => {
    try {
        dispatch(typesSlice.actions.typesFetching())
        const types:IType[] = await api.types.getTypes()
        dispatch(typesSlice.actions.typesFetchingSuccess(types))
    } catch (error) {
        dispatch(typesSlice.actions.typesFetchingError((error as Error).message))
    }
}

export const postType = (type:IType) => async (dispatch:AppDispatch) => {
    try {
        
    } catch (error) {

    }
}

