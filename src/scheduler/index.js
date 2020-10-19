import  _  from  "lodash";

class Scheduler  {
    constructor(){
        this.INITIAL_STATE = {
            process:[
                {id: 1,status: "false", name: "P1", arrived: 0, execution: 4, priority: 1,color:'#000', round_robin_time:3,wait:0},
                {id: 2,status: "false", name: "P2", arrived: 1, execution: 7, priority: 3,color:'blue', round_robin_time:3,wait:0},
                {id: 3,status: "false", name: "P3", arrived: 2, execution: 5, priority: 0,color:'orange', round_robin_time:3,wait:0},
                {id: 4,status: "false", name: "P4", arrived: 3, execution: 5, priority: 1,color:'purple', round_robin_time:3,wait:0},
                {id: 5,status: "false", name: "P5", arrived: 5, execution: 2, priority: -1,color:'green', round_robin_time:3,wait:0}
            ],
            queue:[],
            time:-1,
            steps:[],
            totalExecutionTime: 0,
            init:false,
            graph:[],
            round_time:0
        }

        this.data = {}
    }

    static setWait(){
        let wait = this.data.process.filter(item=>item.id !== this.data.queue[0].id);
        this.data.process.map(item=>{
            return wait.map((item2)=>{
                if(item.id === item2.id && item.status !== 'true' ){
                    return item.wait = item.wait + 1;
                }
                return item;
            });
        });
    }

    static nextTime(){
        this.data.time = this.data.time + 1;
        let nextProcess = this.data.process.filter((item)=>item.arrived === this.data.time);
        nextProcess.map(item=>this.data.queue.push(_.cloneDeep(item)));
    }

    static setData(value){
        this.data = value;
    }

    static getData(){
        return this.data;
    }

    getInitial(){
        return this.INITIAL_STATE;
    }

    restart(data,setData){
        setData(_.cloneDeep({...this.INITIAL_STATE,process:[]}));
    }

    init(data,setData){
        let clone = _.cloneDeep(data);
        clone.totalExecutionTime = 0;
        clone.init = true;
        clone.process.map(item=>clone.totalExecutionTime += item.execution);
        return setData(clone);
    }

}

class FCFS extends Scheduler{

    static processQueue(setData){
        let clone = FCFS.getData();
        if(!clone.queue.length){
            return setData(clone);
        }
        if(!clone.queue[0].execution - 1){
            FCFS.setWait();
            clone.queue[0].execution = clone.queue[0].execution - 1;
            clone.steps.push({...clone.queue[0]});
        }else{
            const current = clone.queue.shift();
            clone.process = clone.process.map((item,i)=>{
                if(item.id === current.id){
                    return {...item,status:'true'}
                }else{
                    return item;
                }
            });
        }
        return setData(_.cloneDeep(FCFS.getData()));
    }
    
    next(data,setData){
        FCFS.setData(data);
        FCFS.nextTime();
        FCFS.processQueue(setData);
    }
}   

class PRIORITY extends Scheduler{

    static queue (setData){
        let clone = PRIORITY.getData();
        clone.queue.sort((a,b)=>{
            if(a.priority < b.priority){
                return -1;
            }
            if(a.priority > b.priority){
                return 1;
            }
            return 0;
        });
        return setData(_.cloneDeep(PRIORITY.getData()))
    }

    static processQueue(setData){
        let clone = PRIORITY.getData();
        if(!clone.queue.length){
            return setData(clone);
        }
        if(!clone.queue[0].execution - 1){
            PRIORITY.setWait();
            clone.queue[0].execution = clone.queue[0].execution - 1;
            clone.steps.push({...clone.queue[0]});
            return setData(_.cloneDeep(PRIORITY.getData()))
        }else{
            const current = clone.queue.shift();
            clone.process = clone.process.map((item,i)=>{
                if(item.id === current.id){
                    return {...item,status:'true'}
                }else{
                    return item;
                }
            });
            return PRIORITY.queue(setData);
        }

    }
    
    next(data,setData){
        PRIORITY.setData(data);
        PRIORITY.nextTime();
        PRIORITY.processQueue(setData);
    }
}

class SJF extends Scheduler{

    static queue (setData){
        let clone = SJF.getData();
        clone.queue.sort((a,b)=>{
            if(a.execution < b.execution){
                return -1;
            }
            if(a.execution > b.execution){
                return 1;
            }
            return 0;
        });
        return setData(_.cloneDeep(SJF.getData()))
    }

    static processQueue(setData){
        let clone = SJF.getData();
        if(!clone.queue.length){
            return setData(clone);
        }
        if(!clone.queue[0].execution - 1){
            SJF.setWait();
            clone.queue[0].execution = clone.queue[0].execution - 1;
            clone.steps.push({...clone.queue[0]});
            return setData(_.cloneDeep(SJF.getData()));
        }else{
            const current = clone.queue.shift();
            clone.process = clone.process.map((item,i)=>{
                if(item.id === current.id){
                    return {...item,status:'true'}
                }else{
                    return item;
                }
            });
        }
        return SJF.queue(setData);
    }
    
    next(data,setData){
        SJF.setData(data);
        SJF.nextTime();
        SJF.processQueue(setData);
    }
}

class PRIORITY_PREEMPTIVE extends Scheduler{

    static processQueue(setData){
        let clone = PRIORITY_PREEMPTIVE.getData();
        if(!clone.queue.length){
            return setData(clone);
        }
        if(!clone.queue[0].execution - 1){
            PRIORITY_PREEMPTIVE.setWait();
            clone.queue[0].execution = clone.queue[0].execution - 1;
            clone.steps.push({...clone.queue[0]});
        }else{
            const current = clone.queue.shift();
            clone.process = clone.process.map((item,i)=>{
                if(item.id === current.id){
                    return {...item,status:'true'}
                }else{
                    return item;
                }
            });
        }
        return setData(_.cloneDeep(PRIORITY_PREEMPTIVE.getData()));
    }

    static preemptive(){
        let clone = PRIORITY_PREEMPTIVE.getData();
        clone.queue.sort((a,b)=>{
            if(a.priority < b.priority){
                return -1;
            }
            if(a.priority > b.priority){
                return 1;
            }
            return 0;
        });
    }
    
    next(data,setData){
        PRIORITY_PREEMPTIVE.setData(data);
        PRIORITY_PREEMPTIVE.nextTime();
        PRIORITY_PREEMPTIVE.preemptive();
        PRIORITY_PREEMPTIVE.processQueue(setData);
    }
}

class SJF_PREEMPTIVE extends Scheduler{

    static processQueue(setData){
        let clone = SJF_PREEMPTIVE.getData();
        if(!clone.queue.length){
            return setData(clone);
        }
        if(!clone.queue[0].execution - 1){
            SJF_PREEMPTIVE.setWait();
            clone.queue[0].execution = clone.queue[0].execution - 1;
            clone.steps.push({...clone.queue[0]});
        }else{
            const current = clone.queue.shift();
            clone.process = clone.process.map((item,i)=>{
                if(item.id === current.id){
                    return {...item,status:'true'}
                }else{
                    return item;
                }
            });
        }
        return setData(_.cloneDeep(SJF_PREEMPTIVE.getData()));
    }

    static preemptive(){
        let clone = SJF_PREEMPTIVE.getData();
        clone.queue.sort((a,b)=>{
            if(a.execution < b.execution){
                return -1;
            }
            if(a.execution > b.execution){
                return 1;
            }
            return 0;
        });
    }
    
    next(data,setData){
        SJF_PREEMPTIVE.setData(data);
        SJF_PREEMPTIVE.nextTime();
        SJF_PREEMPTIVE.preemptive();
        SJF_PREEMPTIVE.processQueue(setData);
    }
}


class ROUND_ROBIN extends Scheduler{

    static processQueue(setData){    
        let clone = ROUND_ROBIN.getData();
        if(!clone.queue.length){
            return setData(clone);
        }
        if(!clone.queue[0].execution - 1){
            if(!clone.queue[0].round_robin_time-1 < 0){
                ROUND_ROBIN.setWait();
                clone.queue[0].execution = clone.queue[0].execution -1;
                clone.queue[0].round_robin_time = clone.queue[0].round_robin_time -1;
                clone.steps.push({...clone.queue[0]});
            }else{
                clone.queue[0].round_robin_time = clone.round_time
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
            });
        }
        return setData(_.cloneDeep(ROUND_ROBIN.getData()));
    }


    init(data,setData){
        let clone = _.cloneDeep(data);
        clone.totalExecutionTime = 0;
        clone.init = true;
        clone.process.map(item=>clone.totalExecutionTime += item.execution);
        clone.process.map(item=>item.round_robin_time = clone.round_time);
        return setData(clone);
    }
    

    next(data,setData){
        ROUND_ROBIN.setData(data);
        ROUND_ROBIN.nextTime();
        ROUND_ROBIN.processQueue(setData);
    }
}


export const schedulerFCFS = new FCFS();
export const schedulerPRIORITY = new PRIORITY();
export const schedulerPRIORITY_PREEMPTIVE = new PRIORITY_PREEMPTIVE();
export const schedulerSJF = new SJF();
export const schedulerSJF_PREEMPTIVE = new SJF_PREEMPTIVE();
export const schedulerROUND_ROBIN = new ROUND_ROBIN();




// function init(data,setData){
//     let clone = _.cloneDeep(data);
//     clone.totalExecutionTime = 0;
//     clone.init = true;
//     clone.process.map((item)=>{
//         return clone.totalExecutionTime += item.execution
//     });
//     setData(clone)
// }

// function restart(data,setData){
//     let clone = _.cloneDeep(INITIAL_STATE);
//     setData(clone);
// }


// function next(data,setData){
//     let clone = _.cloneDeep(data);
//     clone.time = clone.time + 1;

//     let nextProcess = clone.process.filter((item)=>{
//         return item.arrived === clone.time;
//     });
    
//     nextProcess.map(item=>clone.queue.push(_.cloneDeep(item)))
    
//     processQueue(clone,setData);
// }



