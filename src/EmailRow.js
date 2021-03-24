import React from 'react';
import './EmailRow.css';
import StarBorderOutlinedIcon from '@material-ui/icons/StarBorderOutlined';
import LabelImportantOutlinedIcon from '@material-ui/icons/LabelImportantOutlined';
import { Checkbox, IconButton } from '@material-ui/core';
import { useHistory } from 'react-router';
import { selectMail } from './features/mailSlice';
import { useDispatch } from 'react-redux';
function EmailRow({id,title,subject,description,time}) {
    const history = useHistory();
    const dispatch = useDispatch();
    const ttime = new Date(time?.seconds * 1000).toUTCString();

    const openMail = () => {
        dispatch(selectMail({
            id,
            title,
            subject,
            description,
            ttime,
        }));
        history.push("/mail")
    }

    return <div onClick={openMail} className='emailRow'>
            <div className='emailRow__options'>
                <Checkbox/>
                <IconButton>
                    <StarBorderOutlinedIcon/>
                </IconButton>
                <IconButton>
                    <LabelImportantOutlinedIcon/>
                </IconButton>
            </div>
            <h3 className='emailRow__title'>
                {title}
            </h3>
            <div className='emailRow__message'>
                <h4>{
                subject}
                    <span className='emailRow__description'>
                        {description}
                    </span>
                </h4>
            </div>
            <div className='emailRow__time'>
                {ttime}
            </div>
           </div>
}

export default EmailRow
