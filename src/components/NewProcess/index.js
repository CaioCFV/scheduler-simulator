import React from 'react';
import  _  from  "lodash"

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
        <form onSubmit={handleSubmit}>
            <input type="hidden" name="status" value="false"/>
            <fieldset>
                <label htmlFor="process-name">Nome do processo:</label>
                <input type="text" id="process-name" name="name" placeholder="Escreva o ID do processo" required/>
            </fieldset>
            <fieldset>
                <label htmlFor="process-arrived">Tempo de chegada</label>
                <input type="number" id="process-arrived" name="arrived" placeholder="Escreva o tempo de chegada" min="0" required />
            </fieldset>
            <fieldset>
                <label htmlFor="process-execution">Tempo de execução</label>
                <input type="number" id="process-execution" name="execution" placeholder="Escreva o tempo de execução" min="1" required />
            </fieldset>
            <fieldset>
                <label htmlFor="process-priority">Nível de prioridade:</label>
                <input type="number" id="process-priority" name="priority" placeholder="Escreva o nivel de prioridade" required/>
            </fieldset>
            <fieldset>
                <label htmlFor="process-color">Escolha uma cor de referencia:</label>
                <input type="color" id="process-color" name="color" placeholder="Escolha uma cor" required/>
            </fieldset>
            
            <button type="submit">Adicionar processo</button>
        </form>
    );
}

export default NewProcess;