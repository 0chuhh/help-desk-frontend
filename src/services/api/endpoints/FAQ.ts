import { IFAQ } from "models/IFAQ";
import axios from "../axios";

const endpoints = {
    getFAQ: () => axios.get<IFAQ[]>('faq/').then(response=>response.data),
    getFAQbyId: (id:number) => axios.get<IFAQ>(`faq/${id}/`).then(response=>response.data)
}
export default endpoints