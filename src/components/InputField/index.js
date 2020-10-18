import React from 'react';
import { useState } from 'react';
import { Input, Label, Fieldset } from './style.js';

function InputField ({...params}){
    const [empty,setEmpty] = useState('')

    const { id, label,...inputParams} = params;

    const handleEmpty = (e)=> {
        if(e.target.value.length){
            setEmpty('false')
        }
    }

    return (
        <>
            <Fieldset aria-disabled={empty}>
                <Input  id={id} {...inputParams} onChange={handleEmpty}/>
                <Label htmlFor={id}>{label}</Label> 
            </Fieldset>
        </>
    );                 
}

export default InputField;