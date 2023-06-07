import { IFAQ } from 'models/IFAQ'
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router'
import "react-quill/dist/quill.snow.css";

import api from 'services/api'
const FAQdetails = () => {
    const {id} = useParams()
    const [FAQ, setFAQ] = useState<IFAQ>()
    const getFAQbyId = async () => {
        const faq:IFAQ = await api.faq.getFAQbyId(Number(id))
        setFAQ(faq)
    }

    useEffect(()=>{
        getFAQbyId()
    },[])
  return (
    <div className='container'>
        <h1 style={{
          textAlign:'center'
        }}>{FAQ?.name}</h1>
        <h3>Описание:</h3>
        <div>{FAQ?.description}</div>
        <h3>Решение:</h3>
        <div className="view ql-editor" dangerouslySetInnerHTML={{__html: FAQ?.html ? FAQ.html:''}}></div>
    </div>
  )
}

export default FAQdetails