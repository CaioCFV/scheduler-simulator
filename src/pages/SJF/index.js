import React, { useState } from 'react';
import { ProcessTable, NewProcess, Graph1, Header}  from '../../components';
import { ContainerProcess, ContainerButtons, ContainerGraph, Title } from '../../style-frame';
import { schedulerSJF } from '../../scheduler';

function Main() {
    const [data,setData] = useState(schedulerSJF.getInitial());

    const handleIniciar =  () =>{
        schedulerSJF.init(data,setData);
    }

    const handleNext = () => {
        schedulerSJF.next(data,setData);
    }

    const handleRestart = () =>{
        schedulerSJF.restart(data,setData);
    }

    return ( 
      <>
        <Header />
        <Title>Shortest Job First - SJF</Title>
        <ContainerProcess  className="max-container" data-controls={data.init}>
            <ProcessTable process={data.process} />
            <NewProcess submit={setData} data={data}/>
        </ContainerProcess>

        <ContainerButtons data-controls={data.init}>
            <button onClick={handleIniciar} className="btn-default">Iniciar</button>
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