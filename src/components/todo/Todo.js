/* eslint-disable no-unused-vars */
/* eslint-disable no-restricted-globals */
/* eslint-disable react-hooks/rules-of-hooks */
import React,{useState} from 'react';
import bin from '../../static/asserts/bin.png';
import edit from '../../static/asserts/edit.png';
import '../../static/css/todo.css';
import axios from 'axios';
import Tippy from '@tippy.js/react';
import 'tippy.js/dist/tippy.css';
import {ToastContainer,toast} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

let Todo = ({Title,singleUp,SingleData,openDelete,deleteCheck,confirmDelete})=>{

    let [done,useDone] = useState(Title.done);

    let Checked = (e)=>{
        let isChecked = e.target.checked;
        if(isChecked){
            axios.patch(`http://127.0.0.1:8000/api/update/${Title.id}/`,{
                title:Title.title,
                description: Title.description,
                done:true
            })
            .then(res=>{
                useDone(res.data.done)
                console.log(res)
            })
            .catch(err=>console.log(err))
        }else{
            axios.patch(`http://127.0.0.1:8000/api/update/${Title.id}/`,{
                title:Title.title,
                description: Title.description,
                done:false
            })
            .then(res=>{
                useDone(res.data.done)
                console.log(res)
            })
            .catch(err=>console.log(err))
        }
    }

    let fetchSingle = ()=>{
        SingleData({
        title:Title.title,
        description : Title.description,
        id: Title.id
    })

    }


    let Delete = (id)=>{
            axios.delete(`http://127.0.0.1:8000/api/delete/${id}/`)
            .then(res=>{
                notifyDelete()
                confirmDelete(false)
            })
            .catch(err=>console.log(err))
        
    }
    let notifyDelete = ()=>{
        toast.dark('Deleted Successfully', {
            position: toast.POSITION.TOP_CENTER,
            autoClose: 8000
          })
    }

    return(
        <>
            <article className="todo">
            <ToastContainer />
                <div className="todo-check">
                    {done?
                        <Tippy content="Mark as undone">
                        <input type="checkbox" onChange={Checked} checked={done? 'checked':''} className='myinput' />
                        </Tippy>:
                        <Tippy content="Mark as done">
                        <input type="checkbox" onChange={Checked} checked={done? 'checked':''} className='myinput' />
                        </Tippy>
                    }
                </div>
                <div className="todo-title">
                    <h1  style={{textDecoration: done? 'line-through':'', color:done?'#842029':''}}>{Title.title}</h1>
                </div>
                <div className="todo-images">
                    <div className="todo-images-edit">
                        <Tippy content="Open">
                        <img src={edit} alt="edit" onClick={()=>{
                            singleUp()
                            fetchSingle()
                        }} />
                        </Tippy>
                    </div>
                    <div className="todo-images-bin">
                        <Tippy content='Delete'>
                        <img src={bin} alt="delete" onClick={()=>{
                            if(confirm('Are sure you want to delete this? ')){
                                Delete(Title.id)
                            }
                            }} />
                        </Tippy>
                    </div>
                </div>
            </article>
        </>
    )

};




export default Todo;