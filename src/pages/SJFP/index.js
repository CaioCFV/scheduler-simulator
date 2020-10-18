import React, { useState, useEffect } from 'react';
import { ProcessTable, NewProcess, SetTime, Graph1}  from '../../components';
import  _  from  "lodash";

function init(data,setData){
    let clone = _.cloneDeep(data);
    clone.totalExecutionTime = 0;
    clone.process.map((item)=>{
        clone.totalExecutionTime += item.execution
    });
    setData(clone)
}

function next(data,setData){
    let clone = _.cloneDeep(data);
    clone.time = clone.time + 1;

    let nextProcess = clone.process.filter((item)=>{
        return item.arrived == clone.time;
    });
    
    nextProcess.map(item=>clone.queue.push(_.cloneDeep(item)))
    
    preemptive(clone,setData);
}

function preemptive(data,setData){
    let clone = _.cloneDeep(data);

    clone.queue.sort((a,b)=>{
        if(a.execution < b.execution){
            return -1;
        }
        if(a.execution > b.execution){
            return 1;
        }
        return 0;
    });

    processQueue(clone,setData);
}
function enqueue(data,setData){
    let clone = _.cloneDeep(data);
    clone.totalExecutionTime = 0;
    clone.process.map((item)=>{
        clone.totalExecutionTime += item.execution
    });
   
}

function processQueue(data,setData){
    let clone = _.cloneDeep(data);
    if(!clone.queue.length){
        return setData(clone);
    }
    if(!clone.queue[0].execution - 1){
        clone.queue[0].execution = clone.queue[0].execution - 1;
        clone.steps.push({... clone.queue[0]});
    }else{
        const current = clone.queue.shift();
        clone.process = clone.process.map((item,i)=>{
            if(item.id === current.id){
                return {...item,status:'true'}
            }else{
                return item
            }
        })
        console.log('ACABOUO TEM PO DE EXECUCAO',current)
    }
    setData(clone);
}

function Sjf() {
    const [data,setData] = useState({
        process:[],
        queue:[],
        time:-1,
        steps:[],
        totalExecutionTime: 0
    });

    useEffect(()=>{
        console.log(data)
    },[data])

    const handleIniciar =  () =>{
        init(data,setData);
    }

    // const handleResult = () => {
    //     p.show()
    // }

    const handleNext = () => {
        next(data,setData)
    }

    return ( 
      <>
        <h1>STF - PREEMPTIVO</h1>
        <ProcessTable process={data.process} />
        <hr />
        <NewProcess submit={setData} data={data}/>
        <hr />
        <SetTime />
        <hr />
        <button onClick={handleIniciar}>Iniciar</button>
        {/* <button onClick={handleResult}>Mostra resultado</button> */}
        <button onClick={handleNext}>Proximo passo</button>
        <hr />
        <hr />  
        <Graph1 data={data}/>

      </>
    );
}

export default Sjf;