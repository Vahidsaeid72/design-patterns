import React, { useState } from 'react';
import './modalStyle.css';



const Modal = ({children}) => {
    const [show,setShow]= useState(false);
    return (<>
    <button onClick={()=>setShow(true)}>show Modal</button>
        {show && 
            <div className='ModalBackGround'>
                <div className='modalContent'>
                <div className='modalHeader'>
                     <button className='closeBtn' onClick={()=>setShow(false)}>closel</button>   
                </div>
                <div className='modalBody'>
                     {children}
                </div>
                   
                </div>
            </div>
        }
       </>
    );
}

export default Modal;
