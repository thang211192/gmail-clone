import React from 'react';
import './SendMail.css';
import CloseIcon from '@material-ui/icons/Close';
import { Button } from '@material-ui/core';
import { useForm } from "react-hook-form";
import { useDispatch } from 'react-redux';
import { closeSendMessage } from './features/mailSlice';
import { db } from './firebase';
import firebasee from 'firebase';
function SendMail() {
    const { register, handleSubmit, errors } = useForm();
    const dispatch = useDispatch();
    const onSubmit = (formData) => {
        try {
            db.collection('mails').add(
                {
                    to: formData.to,
                    subject: formData.subject,
                    messaage: formData.message,
                    timestamp: firebasee.firestore.FieldValue.serverTimestamp(),
                }
            );
        } catch (error) {
            alert(error.message);
        }
        
        dispatch(closeSendMessage());
    };
    return <div className='sendMail'>
            <div className='sendMail__header'>
                <h3>New message</h3>
                <CloseIcon 
                onClick={() => dispatch(closeSendMessage())}
                className='sendMail__close'/>
            </div>

            <form onSubmit={handleSubmit(onSubmit)}>
                <input 
                name='to' 
                placeholder='To' 
                type='email'
                ref={register({required: true})} 
                />
                {errors.to && <p className='sendMail__error'>To is Requied</p>}
                
                <input 
                name='subject' 
                placeholder='Subject' 
                type='text'
                ref={register({required: true})}  
                />
                {errors.subject && <p className='sendMail__error'>Subject is Requied</p>}
                <input  
                name='message' 
                className='sendMail__message' 
                type='text'
                placeholder='Message...' 
                ref={register({required: true})} 
                />
                {errors.message && <p className='sendMail__error'>Message is Requied</p>}
                <div className='sendMail__options'>
                    <Button
                    type='submit' 
                    color='primary'
                    variant='contained'
                    className='sendMail__send'
                    >Send</Button>
                </div>
            </form>
           </div>
}

export default SendMail
