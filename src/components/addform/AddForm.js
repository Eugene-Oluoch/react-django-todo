/* eslint-disable no-unused-vars */
import React,{useRef,useEffect, useState} from 'react';
import add from '../../static/asserts/add.png';
import '../../static/css/addform.css';
import axios from 'axios';
import {useFormik} from 'formik';


let AddForm = ({popClose})=>{


    let formik = useFormik({
        initialValues:{
            title:'',
            description:''
        },
        validate:values=>{
            let errors = {}

            if(!values.title){
                errors.title = '`Title is required'
            }

            if(!values.description){
                errors.description = 'Description is required'
            }

            return errors
        },
        onSubmit:values=>{
            axios.post('https://crabs-todo.herokuapp.com/api/add/',values)
            .then(res=>popClose())
            .catch(err=>console.log(err))
        }
    })

    let titleRef = useRef()

    useEffect(()=>{
        titleRef.current.focus(); 
    },[])
    
    return(
        <>
            <article className="form" onSubmit={formik.handleSubmit}> 
                <form action="" className="form-form">
                    <div className="form-form-close">
                        <p className='form-form-close-button' onClick={popClose}>&times;</p>
                    </div>
                    <div className="form-form-main">
                        <h3>What are you planning to do</h3>
                    </div>
                    <div className="form-form-title">
                        <input type="text" placeholder='Title' name='title' ref={titleRef} maxLength='20' value={formik.values.title} onChange={formik.handleChange} onBlur={formik.handleBlur} />
                        {formik.touched.title && formik.errors.title ? <p className='error'>{formik.errors.title}</p>:''}
                    </div>
                    <div className="form-form-desc">
                        <textarea placeholder='Description' cols="30"  name='description' rows="10" value={formik.values.description} onChange={formik.handleChange} onBlur={formik.handleBlur} ></textarea>
                        {formik.touched.description && formik.errors.description ? <p className='error'>{formik.errors.description}</p>:''}
                    </div>
                    <div className="form-form-add">
                        <button type="submit" className='form-form-add-button'><img src={add} alt="add" />Add Task</button>
                    </div>
                </form>
            </article>
        </>
    )

};



export default AddForm;