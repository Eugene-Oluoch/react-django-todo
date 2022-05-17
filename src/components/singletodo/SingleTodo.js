/* eslint-disable no-restricted-globals */
import React from 'react';

import previous from '../../static/asserts/previous.png';
import todolist from '../../static/asserts/to-do-list.png';
import '../../static/css/singletodo.css'
import axios from 'axios';
import Tippy from '@tippy.js/react';
import 'tippy.js/dist/tippy.css';
import {ToastContainer,toast} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

let SingleTodo = ({popClose,editUp,Data})=>{

    let notifydelete = ()=>{
        toast.dark('Deleted Successfully', {
            position: toast.POSITION.TOP_CENTER,
            autoClose: 5000
          })
    }

    let Delete = ()=>{
        if(confirm("Do you want to delete? ")){
            axios.delete(`https://crabs-todo.herokuapp.com/api/delete/${Data.id}`)
            .then(res=>{
                popClose()
                notifydelete()
            })
            .catch(err=>console.log(err))
        }
    }

    return(
        <>
            <article className="single">
                <ToastContainer />
                <div className="single-container">
                    <div className="single-title">
                        <div className="single-title-image">
                            <Tippy content='Back' style={{backgroundColor:'red'}}>
                            <img src={previous} alt="" onClick={popClose} />
                            </Tippy>
                        </div>
                        <div className="single-title-heading">
                            <h1>{Data.title}</h1>
                        </div>
                        <div className="single-title-space">
                            <p> </p>
                        </div>
                    </div>
                    <div className="single-context">
                        <div className="single-context-image">
                            <img src={todolist} alt="" />
                        </div>
                        <div className="single-context-description">
                            <p>{Data.description}</p>
                        </div>
                    </div>
                    <div className="single-buttons">
                        <button className='single-buttons-update' onClick={editUp}>Update</button>
                        <button className='single-buttons-delete' onClick={Delete}>Delete</button>
                    </div>
                </div>
            </article>
        </>
    )

};


export default SingleTodo;