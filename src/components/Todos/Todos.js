/* eslint-disable react-hooks/rules-of-hooks */
/* eslint-disable no-unused-vars */
import React,{useState,useEffect} from 'react';
import plus from '../../static/asserts/plus.png';
import '../../static/css/todos.css'
import Todo from '../todo/Todo';
import axios from  'axios';


let Todos = ({Popup,SingleUp,Singledata,OpenDelete,DeleteCheck,ConfirmDelete})=>{

    let [todos, useTodos] = useState([]);

    useEffect(()=>{
        axios.get('http://127.0.0.1:8000/api/all/')
        .then(res=>{
            useTodos(res.data)
        })
        .catch(err=>console.log(err))
    },[todos])

    let title = todos.map(name=><Todo key={name.id} Title={name} singleUp={SingleUp} SingleData={Singledata} openDelete={OpenDelete} deleteCheck={DeleteCheck} confirmDelete={ConfirmDelete} ></Todo>)

    return(
        <>
            <article className="todos">
                <div className="todos-container">
                    {todos.length === 0 ? <div className='todos-container-no'><p className='todos-container-no-p'>No tasks</p></div> : title}
                </div>
                <div className="todos-create">
                    <button onClick={Popup} className='todos-create-button'><img src={plus} alt="" />Add Task</button>
                </div>
            </article>
        </>
    )

};


export default Todos;