import { Button } from '@mui/material'
import React from 'react'
import { Link } from 'react-router-dom'

const FAQ = () => {
  return (
    <div className='container'>
        <Link to={'/create-frequently-asked-questions'}>
            <Button>Создать</Button>
        </Link>
    </div>
  )
}

export default FAQ