import { IFAQ, IFAQFile } from 'models/IFAQ'
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router'
import "react-quill/dist/quill.snow.css";

import api from 'services/api'
import { Link } from 'react-router-dom';
import { Button, IconButton } from '@mui/material';
import FileLinkList from 'component/ui/file-link-list';
const FAQdetails = () => {
    const {id} = useParams()
    const [FAQ, setFAQ] = useState<IFAQ>()
    const [files, setFiles] = useState([])
    const getFAQbyId = async () => {
        const faq:IFAQ = await api.faq.getFAQbyId(Number(id))
        const faqfiles:IFAQFile[] = await api.faq.getFAQfilesByFAQId(Number(id))
        faq.files=faqfiles
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
        <h3>Прикрепленные файлы:</h3>
        {FAQ?.files && <FileLinkList files={FAQ?.files}/>}
    </div>
  )
}

export default FAQdetails