import React from 'react';
import '../../static/css/deleteprompt.css'



let DeletePrompt = ({Close,confirmDelete})=>{

    return(
        <>
            <article className="delete-container">
                <div className="delete">
                    <div className="delete-title">
                        <h1>Are you sure you wanna delete this?</h1>
                    </div>
                    <div className="delete-buttons">
                        <button className="delete-buttons-no" onClick={()=>Close(false)} >No</button>
                        <button className="delete-buttons-yes" onClick={()=>{
                            confirmDelete(true)
                            Close(false)
                        }} >Yes</button>
                    </div>
                </div>
            </article>
        </>
    )

};




export default DeletePrompt;