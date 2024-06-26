import React, { useEffect, useState } from 'react'
import './List.css'
import axios from 'axios'
import { CiTrash } from "react-icons/ci";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const List = () => {
  const [data, setData] = useState([]);
  const uri = 'http://localhost:5000'
  const featchData = async () => {
    try {
      const response = await axios.get(`${uri}/component/list`)
      setData(response.data.data)
    } catch (error) {
      console.error('Error submitting form:', error);
      if (error.response) {
        // The request was made, and the server responded with a status code outside of the range of 2xx
        console.error('Server responded with:', error.response.data);
      } else if (error.request) {
        // The request was made, but no response was received
        console.error('No response received:', error.request);
      } else {
        console.error('Error setting up request:', error.message);
      }
    }

  }
  useEffect(() => {
    featchData()
  }, [])

  const handleDeleteItem = async (id) => {
    try {
      const response = await axios.post(`${uri}/component/delete`, { id: id })
      toast.success('Item deleted successfully');
      await featchData()
    } catch (error) {
      toast.error('Error deleting item');
      console.error('Error submitting form:', error);
      if (error.response) {
        // The request was made, and the server responded with a status code outside of the range of 2xx
        console.error('Server responded with:', error.response.data);
      } else if (error.request) {
        // The request was made, but no response was received
        console.error('No response received:', error.request);
      } else {
        console.error('Error setting up request:', error.message);
      }
    }
  }

  return (
    <div className='list flex-column'>
      <ToastContainer />
      <p className='main-title'>All items</p>
      <div className="list-table">
        <div className="header grid-format">
          <p>Image</p>
          <p>Name</p>
          <p className='category'>Category</p>
          <p>Price</p>
          <p></p>
        </div>
        {
          data.map((item, index) => {
            return (
              <div className="list-item grid-format" key={index}>
                <img src={`${uri}/images/${item.image}`}></img>
                <p>{item.name}</p>
                <p className='category'>{item.category.name}</p>
                <p>{item.price}</p>
                <CiTrash className='trash-icon' onClick={() => { handleDeleteItem(item._id) }} />
              </div>
            )
          })
        }
      </div>
    </div>
  )
}
export default List
