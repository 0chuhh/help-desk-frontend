import axios from "../axios";

const endpoints = {
    getFAQ: () => axios.get('faq/')
}
export default endpoints