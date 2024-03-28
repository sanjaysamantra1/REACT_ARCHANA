import React from 'react';
import './Categories.css';

export default function Category(props) {
    return <div className='col category text-center'>
        <img src={props.categoryObj.img} alt='not' />
        <div>{props.categoryObj.name}</div>
    </div>
}
