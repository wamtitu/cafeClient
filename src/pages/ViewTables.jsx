import {useState, useEffect} from 'react'
import axios from 'axios'
import { DataGrid, GridToolbar } from '@mui/x-data-grid';
import {CiEdit} from 'react-icons/ci'
import { useContext } from "react";
import  { Context } from '../context/Context'
import {RiDeleteBin5Line} from 'react-icons/ri'
import {Link, useNavigate} from 'react-router-dom'
import { ApiDomain } from '../utils/utils';
import './views.css'



function ViewTables() {
  const {user} = useContext(Context)
    const navigate = useNavigate();
    const [tables, setTables] = useState([])


    const fetchTables = async () => {
      
      const response = await axios.get(`${ApiDomain}/available-tables`, {
        method: "GET",
        headers: {
           "Authorization": `${user.token}`

        }
      });
      setTables(response.data.data);
      console.log(response.data.data)
   }
   useEffect(()=>{
    fetchTables()
   }, [])  


  return (
    <>
    <h3>Our Tables</h3>
    <div className='tableCardsContainer'>
    {tables.map((table1) => (
        <div className='tableCards' key={table1.id}>
        <div className="card">
            <img src={table1.images} alt="" />
            <p>name: {table1.name}</p>
            <p>Description: {table1.description}</p>
            <p>table Number:{table1.tableNumber}</p>
        </div>
        </div>
    ))}
    </div>

    </>
  )
}

export default ViewTables
