/* eslint-disable no-unused-vars */
/* eslint-disable react-hooks/rules-of-hooks */
import axios from 'axios';
import React,{useRef,useEffect,useState} from 'react';
import add from '../../static/asserts/add.png';
import '../../static/css/editform.css';
import {ToastContainer,toast} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

let AddForm = ({editClose,formData,popClose})=>{

    let [form,useForm] = useState({title:formData.title,description:formData.description})
    let notifyUpdate = ()=>{
        toast.dark('Updated Successfully', {
            position: toast.POSITION.TOP_CENTER,
            autoClose: 5000
          })
    }
    let handleSubmit = e =>{
        e.preventDefault();
        axios.patch(`https://crabs-todo.herokuapp.com/api/update/${formData.id}/`,{
            title:form.title,
            description:form.description
        })
        .then(res=>{
            popClose()
            editClose()
            notifyUpdate()
        })
        .catch(err=>console.log(err))
    }

    let titleChange = e=>{
        useForm({...form,title:e.target.value})
    }

    let descriptionChange = e=>{
        useForm({...form,description:e.target.value})
    }

    let titleRef = useRef()

    useEffect(()=>{
        titleRef.current.focus(); 
    },[])

    return(
        <>
            <article className="form"> 
                <ToastContainer />
                <form action="" className="form-form" onSubmit={handleSubmit}>
                    <div className="form-form-close">
                        <p className='form-form-close-button' onClick={editClose}>&times;</p>
                    </div>
                    <div className="form-form-main">
                        <h3>Typo ?</h3>
                    </div>
                    <div className="form-form-title">
                        <input type="text" placeholder='Title' ref={titleRef} value={form.title} onChange={titleChange} />
                    </div>
                    <div className="form-form-desc">
                        <textarea placeholder='Description' cols="30" rows="10" value={form.description} onChange={descriptionChange}></textarea>
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