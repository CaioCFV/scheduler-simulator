import React from 'react';
import  _  from  "lodash"

function Graph1({data}) {
    const percent = data.totalExecutionTime / 100;

    return ( 
      <>
        <div style={{width:'100%',display:'flex'}}>
            {data.steps.map((item,i)=>{
              return <div key={i} style={{flex:1,height:'40px',background:item.color,position:'relative'}}>
                <span className="a" style={{position: 'absolute',right: 0,top: '0'}}>{i+1}</span>
              </div>
            })}
        </div>
      </>
    );
}

export default Graph1;