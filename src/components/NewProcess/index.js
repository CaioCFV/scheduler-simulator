import React  from 'react';
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
        formData.wait = parseInt(formData.wait);
        formData.round_robin_time = parseInt(formData.round_robin_time);
        formData.id = Math.ceil(Math.random() * 1000);
        formData.color = '#'+Math.floor(Math.random()*16777215).toString(16)
        clone.process.push(formData);
        submit(clone);
    }   

    return ( 
        <FormContainer onSubmit={handleSubmit} className="max-container">
            <h2>Novo Processo</h2>
            <InputField type="hidden" name="status" value="false" hidden/>
            <InputField type="hidden" name="wait" value="0" hidden/>
            <InputField type="hidden" name="round_robin_time" value="0" hidden/>
            <InputField type="text" id="process-name" name="name" label="Nome do processo:" required/>
            <InputField type="number" id="process-arrived" name="arrived"  min="0" label="Tempo de chegada" required/>
            <InputField type="number" id="process-execution" name="execution" min="1" label="Tempo de execução" required />
            <InputField type="number" id="process-priority" name="priority" label="Prioridade" required />  
            <button type="submit" id="addprocesso" className="btn-default">Adicionar processo</button>
        </FormContainer>
    );
   
}

export default NewProcess;