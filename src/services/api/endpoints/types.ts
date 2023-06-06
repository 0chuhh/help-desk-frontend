import { IType } from "models/IType"
import axios from "../axios"

const endpoints = {
    getTypes: () => axios.get<IType[]>('types/').then(response=>response.data)
}
export default endpoints