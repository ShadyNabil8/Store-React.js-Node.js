import React, { useState } from 'react'
import { MdOutlineDriveFolderUpload } from "react-icons/md";
import './Add.css'
import axios from 'axios'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Add = () => {
  const [image, setImage] = useState(false)
  const [data, setData] = useState({
    name: '',
    description: '',
    category: 'electronics1',
    price: ''
  })
  const onDataChange = (e) => {
    const { name, value } = e.target
    setData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  }

  const onSubmit = async (e) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append('image', image);
    formData.append('name', data.name);
    formData.append('description', data.description);
    formData.append('category', data.category);
    formData.append('price', data.price);

    try {
      const respone = await axios.post('http://localhost:5000/component/add', formData);
      toast.success(respone.data.message);
      setData({
        name: '',
        description: '',
        category: 'electronics1',
        price: ''
      });
      setImage(false);
    } catch (error) {
      toast.error(respone.data.message);
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
  };


  return (
    <div className='add'>
      <ToastContainer />
      <form className='flex-column' onSubmit={onSubmit}>
        <div className="upload-image flex-column">
          <p>Upload image</p>
          <label htmlFor='image'>
            {
              (image)
                ? <img src={URL.createObjectURL(image)} className='upload-icon'></img>
                : <MdOutlineDriveFolderUpload className='upload-icon' />
            }
          </label>
          <input onChange={(e) => { setImage(e.target.files[0]) }} type="file" id='image' style={{ display: 'none' }} />
        </div>
        <div className="add-item-name flex-column">
          <p>Item name</p>
          <input type="text" name='name' required placeholder='Item name' className='field' onChange={onDataChange} value={data.name} />
        </div>
        <div className="add-item-description flex-column">
          <p>Description</p>
          <textarea name="description" id="description" rows="10" placeholder='Description' className='field' onChange={onDataChange} value={data.description}></textarea>
        </div>
        <div className="add-category-price">
          <div className="add-category flex-column">
            <p>Category</p>
            <select name="category" id="category" className='field' onChange={onDataChange}>
              <option value="electronics1">electronics1</option>
              <option value="electronics2">electronics2</option>
              <option value="electronics3">electronics3</option>
              <option value="electronics4">electronics4</option>
            </select>
          </div>
          <div className="add-price flex-column">
            <p>Price</p>
            <input type="number" min='0' name='price' required placeholder='EGP 100' className='field' onChange={onDataChange} value={data.price} />
          </div>
        </div>
        <button type='submit' className='add-button'>Add</button>
      </form>
    </div>
  )
}

export default Add
