import React from 'react';
import Header from '../header/Header';
import Todos from '../Todos/Todos';


let Main = ({popUp,singleUp,SingleData,openDelete,deleteCheck,confirmDelete})=>{

    return(
        <>
            <Header />
            <Todos  Popup={popUp} SingleUp={singleUp} Singledata={SingleData} OpenDelete={openDelete} DeleteCheck={deleteCheck} ConfirmDelete={confirmDelete} />
        </>
    )

};



export default Main;