import { IFAQ } from "models/IFAQ";
import axios from "../axios";

const endpoints = {
    getFAQ: () => axios.get<IFAQ[]>('faq/').then(response=>response.data)
}
export default endpoints