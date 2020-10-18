import React from 'react';
import  _  from  "lodash"
import { Square, Title, Item, Time, } from './style';


function getPrimary(data,searched){
    return data.filter(item=>item.id == searched.id)[0]
} 
function getLast(){

}

function Graph1({data}) {
    console.log(getPrimary(data.steps,data.process[0]));
    return ( 
      <>
        <Title>Diagrama de Gantt</Title>
        <Square>
            {data.steps.map((item,i)=>{
              return <Item key={i} background={item.color}>
                <Time className="a">
                  <i>{i+1}</i>
                </Time>
              </Item>
            })}
        </Square>
        
      </>
    );
}

export default Graph1;