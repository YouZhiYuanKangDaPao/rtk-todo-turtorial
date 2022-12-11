import {FC, useState} from 'react';
import { useDispatch } from 'react-redux';
import { addTodo } from './todoSlice';

export defalut AddTodo:FC = () => {
    const dispatch = useDispatch();
    const [text,setText] = useState('');

    function handleChange(e:{target:HTMLInputElement;}) {
        setText(e.target.value);
    }

    function handleSubmit(e:any) {
        e.preventDefault();
        if(!text.trim()) {
            return
        }
        dispatch(addTodo(text))
        setText('')
    }
    return<></>
}
