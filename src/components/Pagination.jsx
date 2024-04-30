import {useState} from 'react'
import MaterialPagination from '@mui/material/Pagination'


function Pagination() {
  const {page, setpage} = useState(1)

  const handleChange = (p) => {
    setpage(p)
  }
  return (
    <div className='flex items-center justify-center mt-10 mb-5'>
       <MaterialPagination count={10} onChange={handleChange} color="primary"/>
    </div>
  )
}

export default Pagination