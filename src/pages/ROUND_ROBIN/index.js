import React, { useState } from 'react';
import { ProcessTable, NewProcess, Graph1,InputField, Header}  from '../../components';
import { ContainerProcess, ContainerButtons, ContainerGraph, Title } from '../../style-frame';
import { schedulerROUND_ROBIN } from '../../scheduler';
import { useEffect } from 'react';

function Main() {
    const [data,setData] = useState(schedulerROUND_ROBIN.getInitial());

    
    const handleIniciar =  (e) =>{
        e.preventDefault();
        schedulerROUND_ROBIN.init({...data,round_time:parseInt(e.target.round_time.value)},setData);
    }

    useEffect(()=>{
        console.log(data)
    },[data]);

    const handleNext = () => {
        schedulerROUND_ROBIN.next(data,setData);
    }

    const handleRestart = () =>{
        schedulerROUND_ROBIN.restart(data,setData);
    }

    return ( 
      <>
        <Header />
        <Title>Round Robin</Title>
        <ContainerProcess  className="max-container" data-controls={data.init}>
            <ProcessTable process={data.process} />
            <NewProcess submit={setData} data={data}/>
        </ContainerProcess>

        <ContainerButtons data-controls={data.init}>
            <form onSubmit={handleIniciar}>
                <InputField type="number" min="1" name="round_time" id="round_time" label="Quantum" required/>
                <button type="submit" className="btn-default">Iniciar</button>
            </form>
            <button onClick={handleRestart} className="btn-default">Criar novo</button>
        </ContainerButtons>

        <ContainerGraph className="max-container" data-controls={data.init}>
            <Graph1 data={data}/>
            <button onClick={handleNext} data-controls={data.totalExecutionTime <= data.steps.length && !data.queue.length ? true : false} className="btn-default">Proximo passo</button>
            <button onClick={handleRestart} data-controls={data.totalExecutionTime <= data.steps.length && !data.queue.length  ? false : true} className="btn-default">Criar novo</button>
        </ContainerGraph>
      </>
    );
}

export default Main;