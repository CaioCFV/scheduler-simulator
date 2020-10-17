import React, { useState, useEffect } from 'react';
import { ProcessTable, NewProcess, SetTime, Graph1}  from '../../components';
import  _  from  "lodash";


function enqueue(data,setData){
    let clone = _.cloneDeep(data);
    clone.queue = _.cloneDeep(clone.process);
    clone.process.map((item)=>{
        clone.totalExecutionTime += item.execution
    });
    clone.queue.sort((a,b)=>{
        if(a.arrived < b.arrived){
            return -1;
        }
        if(a.priority > b.arrived){
            return 1;
        }
        return 0;
    });
    setData(clone);
}

function processQueue(data,setData){    
    let clone = _.cloneDeep(data);
    if(!clone.queue.length){
        return console.log('Todos os procesos foram escalonados');
    }

    if(!clone.queue[0].execution - 1){
      
        if(!clone.queue[0].roundRobinTime -1 < 0){
            clone.queue[0].execution = clone.queue[0].execution -1;
            clone.queue[0].roundRobinTime = clone.queue[0].roundRobinTime -1;
            clone.steps.push({... clone.queue[0]});
        }else{
            clone.queue[0].roundRobinTime = 4
            clone.queue.push(clone.queue.shift());
        }
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

function RoundRobin() {
    const [data,setData] = useState({
        process:[
            {id: 1,status: "false", name: "1", arrived: 2, execution: 3, priority: 4,status:'FALSE',color:'rgb(155, 220, 4)',roundRobinTime:4},
            {id: 2,status: "false", name: "5", arrived: 6, execution: 7, priority: 8,status:'FALSE',color:'rgb(4, 51, 220)',roundRobinTime:4},
            {id: 3,status: "false", name: "9", arrived: 10, execution: 11, priority: 12,status:'FALSE',color:'rgb(220, 4, 195)',roundRobinTime:4},
            {id: 4,status: "false", name: "9", arrived: 0, execution: 11, priority: 0,status:'FALSE',color:'rgb(220, 58, 4)',roundRobinTime:4}
        ],
        queue:[],
        time:1,
        steps:[],
        totalExecutionTime: 0,
        roundRobinTime:4
    });

    useEffect(()=>{
        console.log(data)
    },[data])

    const handleIniciar =  () =>{
        enqueue(data,setData);
        //setTotalExecutionTime(data,setData)
    }

    // const handleResult = () => {
    //     p.show()
    // }

    const handleNext = () => {
        processQueue(data,setData);
    }

    return ( 
      <>
        <h1>RoundRobin</h1>
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

export default RoundRobin;