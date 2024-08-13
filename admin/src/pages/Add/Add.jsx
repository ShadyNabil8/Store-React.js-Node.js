import React, { useState, useEffect } from 'react'
import { MdOutlineDriveFolderUpload } from "react-icons/md";
import './Add.css'
import axios from 'axios'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Add = () => {
  const [image, setImage] = useState(false);
  const [categoryList, setCategoryList] = useState([]);
  const [subCategoryList, setSubCategoryList] = useState([]);
  const [newCategory, setNewcategory] = useState(false);
  const [data, setData] = useState({
    name: '',
    description: '',
    category: '',
    subCategory: '',
    price: ''
  })
  const onDataChange = (e) => {
    console.log(e.target.name);
    console.log(e.target.value);
    
    const { name, value } = e.target
    setData((prevData) => {
      if (name == 'category') {
        getSubCategory(value)
        return {
          ...prevData,
          category: value,
          subCategory: ''
        }
      }
      else {
        return {
          ...prevData,
          [name]: value,
        }
      }
    });
  }

  const onSubmit = async (e) => {
    e.preventDefault();

    let formData = new FormData();
    formData.append('image', image);
    formData.append('name', data.name);
    formData.append('description', data.description);
    formData.append('category', data.category);
    formData.append('subCategory', data.subCategory);
    formData.append('price', data.price);
    console.log(formData);

    try {
      const respone = await axios.post('http://localhost:5000/component/add', formData);
      toast.success(respone.data.message);
      setData({
        name: '',
        description: '',
        category: ['Arduino & Development Boards'],
        price: ''
      });
      setImage(false);
    } catch (error) {
      toast.error('Error adding item');
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

  const featchCategoryList = async () => {
    try {
      const response = await axios.get('http://localhost:5000/category/list')
      setCategoryList(response.data.data)
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

  const getSubCategory = (id) => {
    const selectedCategory = categoryList.find(c => c._id === id);

    if (!selectedCategory) {
      console.error('Category not found');
      return [];
    }

    if (selectedCategory.sub.length > 0) {
      const subList = selectedCategory.sub.map(subId => {
        const subCategory = categoryList.find(c => c._id === subId);
        if (!subCategory) {
          console.error(`Subcategory with id ${subId} not found`);
        }
        return subCategory;
      }).filter(sub => sub !== undefined); // Filter out undefined subcategories

      setSubCategoryList(subList);
    } else {
      console.log('No subcategories found');
      setSubCategoryList([]);
    }
  }

  console.log(data);
  useEffect(() => {
    featchCategoryList()
  }, [])


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
            <div className="category-sub">
              <select name="category" id="category" className='field' onChange={onDataChange}>
                <option value={'Empty'} >Chose Category</option>
                {
                  categoryList.map((item, index) => {
                    return (
                      <option value={item._id} key={index}>{item.name}</option>
                    )
                  })
                }
              </select>
              {
                (subCategoryList.length > 0) && <select name="subCategory" id="subCategory" className='field' onChange={onDataChange}>
                  <option value={'Empty'} >Chose SubCategory</option>
                  {
                    subCategoryList.map((item, index) => {
                      return (
                        <option value={item._id} key={index}>{item.name}</option>
                      )
                    })
                  }
                </select>
              }
            </div>
          </div>
          <div className="add-price flex-column">
            <p>Price</p>
            <input type="number" min='0' name='price' required placeholder='EGP 100' className='field' onChange={onDataChange} value={data.price} />
          </div>
        </div>
        <button type='submit' className='add-button button'>Add</button>
      </form>
    </div>
  )
}

export default Add
