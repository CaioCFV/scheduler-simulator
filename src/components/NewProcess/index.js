import React from 'react';
import  _  from  "lodash"
import { InputField } from '../';
import { FormContainer } from './style';

function NewProcess({ submit, data}) {
    const formToJson = (form) => Object.assign(...Array.from(new FormData(form).entries(), ([x, y]) => ({[x]: y})));

    const handleSubmit = (e) => {
        e.preventDefault();
        let clone = _.cloneDeep(data);
        let formData = formToJson(e.target);
        formData.execution = parseInt(formData.execution);
        formData.arrived = parseInt(formData.arrived);
        formData.id = Math.ceil(Math.random() * 1000);
        clone.process.push(formData)
        submit(clone);
    }   

    return ( 
        <FormContainer onSubmit={handleSubmit} className="max-container">
            <InputField type="hidden" name="status" value="false" hidden/>
            <InputField type="text" id="process-name" name="name" label="Nome do processo:" required/>
            <InputField type="number" id="process-arrived" name="arrived"  min="0" label="Tempo de chegada" required/>
            <InputField type="number" id="process-execution" name="execution" min="1" label="Tempo de execução" required />
            <InputField type="number" id="process-priority" name="priority" label="Prioridade" required />
            <InputField type="color" id="process-color" name="color" label="Cor" required />
            <button type="submit" className="btn-default">Adicionar processo</button>
        </FormContainer>
    );
}

export default NewProcess;