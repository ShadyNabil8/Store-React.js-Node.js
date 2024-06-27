import React, { useState, useEffect } from 'react'
import { MdPlayArrow } from "react-icons/md";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './AddCategory.css'
import axios from 'axios'
import { ImCross } from "react-icons/im";


const AddCategory = () => {
    const [currentSubCategory, setCurSubCategory] = useState('')
    const [category, setCategory] = useState({
        name: '',
        subCategory: []
    })

    const onCategoryChange = (e) => {
        const { name, value } = e.target
        setCategory((prevData) => ({
            [name]: value,
            subCategory: [...prevData.subCategory]
        }));
    }
    const onSubCategoryChange = (index, newVal) => {
        setCategory((prevData) => {
            const newSubCategory = [...prevData.subCategory];
            newSubCategory[index] = newVal;
            return {
                name: prevData.name,
                subCategory: newSubCategory
            };
        });
    }
    const onSubCategoryAdd = (e) => {
        if (currentSubCategory !== '') {
            setCategory((prevData) => ({
                name: prevData.name,
                subCategory: [...prevData.subCategory, currentSubCategory]
            }));
            setCurSubCategory('')
        }
    }
    const handleDeleteSubCategory = (index) => {
        console.log(index);
        setCategory((prevData) => ({
            name: prevData.name,
            subCategory: prevData.subCategory.filter((_, i) => i !== index)
        }));
    }
    const onSubmit = async (e) => {
        if (category.name !== '') {
            const formData = {
                name: category.name,
                subCategory: category.subCategory
            }
            try {
                const respone = await axios.post('http://localhost:5000/category/add', formData);
                console.log(respone);
                toast.success(respone.data.message);
                setCategory({
                    name: '',
                    subCategory: []
                })
                setCurSubCategory('')
            } catch (error) {
                console.error('Error submitting form:', error);
                if (error.response) {
                    // The request was made, and the server responded with a status code outside of the range of 2xx
                    console.error('Server responded with:', error.response.data);
                    toast.error(error.response.data.message);
                } else if (error.request) {
                    // The request was made, but no response was received
                    console.error('No response received:', error.request);
                } else {
                    console.error('Error setting up request:', error.message);
                }
            }
        }
        else {
            toast.error('Category name cannot be empty');
        }

    }
    useEffect(() => {
        console.log(category)
    }, [category])
    return (
        <>
            <ToastContainer />
            <div className='new-category'>
                <div className="category flex-column">
                    <p>Category name</p>
                    <input className='field' required placeholder='Enter Category' name='name' onChange={onCategoryChange} value={category.name}></input>
                </div>
                <div className="sub-categories flex-column">
                    {
                        category.subCategory.map((subCategory, index) => {
                            return (
                                <div className="sub-category" key={index}>
                                    <MdPlayArrow className='icon' />
                                    <input className="field" name='subCategory' onChange={(e) => { onSubCategoryChange(index, e.target.value) }} value={subCategory}></input>
                                    <ImCross className='cross-icon' onClick={() => handleDeleteSubCategory(index)} />
                                </div>
                            )
                        })
                    }
                    <div className="current-category">
                        <MdPlayArrow className='icon' />
                        <input className="field"
                            name='currentCategory'
                            placeholder='Enter Sub Category'
                            value={currentSubCategory}
                            onChange={(e) => setCurSubCategory(e.target.value)}>
                        </input>
                        <button className='add-button button'
                            onClick={onSubCategoryAdd}>
                            Add
                        </button>
                    </div>

                </div>
                <button className='add-button button' onClick={onSubmit}>Save</button>
            </div>
        </>
    )
}

export default AddCategory
