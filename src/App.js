/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */
import React,{useState,useEffect} from 'react';
import './App.css';
import Main from './components/main/Main';
import AddForm from './components/addform/AddForm';
import EditForm from './components/editForm/EditForm';
import DeletePrompt from './components/deleteprompt/DeletePrompt';
import SingleTodo from './components/singletodo/SingleTodo';
import {Routes,Route} from 'react-router-dom';


function App() {
  let [deletepop,useDeletepop] = useState(false)
  let [confirmdelete,useConfirmdelete] = useState(false)
  let [pop,usePop] = useState(false)
  let [single,useSingle]=useState(false)
  let [popEdit,usePopedit] = useState(false)
  let [singleData,useSingleData] = useState({title:'',description:'',id:0})



  let Pop = ()=>{
    usePop(true)
  };

  let Close = ()=>{
    usePop(false)
  };

  let PopSingle = ()=>{
    useSingle(true)
  };

  let CloseSingle = ()=>{
    useSingle(false)
  };

  let PopEdit = ()=>{
    usePopedit(true)
  };

  let CloseEdit = ()=>{
    usePopedit(false)
  };
  useEffect(()=>{
    console.log('.')
  },[singleData])
  return (
    <>
    <section className="App">

      <article className="App-container">
        <Routes>
          <Route path='/' element={<Main  popUp={Pop} singleUp={PopSingle} SingleData={useSingleData} openDelete={useDeletepop} confirmDelete={useConfirmdelete} deleteCheck={confirmdelete} />}></Route>
        </Routes>

      </article>
      {
        pop?<AddForm popClose={Close} />:''
      }
      {
        single?<SingleTodo popClose={CloseSingle} editUp={PopEdit} Data={singleData} />:''
      }
      {
        popEdit?<EditForm editClose={CloseEdit} formData={singleData} popClose={CloseSingle} />:''
      }
      {
        deletepop?<DeletePrompt Close={useDeletepop} confirmDelete={useConfirmdelete} />:''
      }
    </section>
    </>
  );
}

export default App;
