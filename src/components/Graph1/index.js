import React from 'react';
import { Square, Title, Item, Time, Table, ContainerTables,Info } from './style';


function Media ({data}){
    let medias = {
      wait:0,
      arround:0
    };    

    data.process.map(item=>medias.wait += item.wait - item.arrived)
    data.process.map(item=>medias.arround += item.wait - item.arrived + item.execution);

    if(data.process.length){
      return (
          <tr>
            <td>{medias.wait <= 0 ?  0 : (medias.wait / data.process.length)}</td>
            <td>{medias.arround <= 0 ?  0 : (medias.arround / data.process.length)}</td>
          </tr>
      );
    }else{
      return (
        <tr>
          <td>0</td>
          <td>0</td>
        </tr>
      );
    }
}

function Graph1({data}) {
    

    return (  
      <>
        <Title>Diagrama de Gantt</Title>                  
        <Square>
            {data.steps.map((item,i)=>{
              
              return <Item key={i} background={item.color}>
                <Time className="a">
                  <i>{i+1}</i>
                  
                </Time>
                <Info> 
                  <p>
                    nome do processo:{item.name}
                  </p>
                  <p>
                    tempo de execucao:{item.execution}
                  </p>
                  <p>
                    tempo de chegada:{item.arrived}
                  </p>
                  <p>
                    tempo round robin:{item.round_robin_time}
                  </p>
                </Info>
              </Item>
            })}
        </Square>
        <ContainerTables>
            <Table>
                  <thead>
                    <tr>
                        <th colSpan='4'>Fila de processos</th>
                        <th colSpan='2'>Tempo: {data.time}</th>
                    </tr>
                    <tr>
                      <th>ID</th>
                      <th>Nome do processo</th>
                      <th>T. de chegada</th>
                      <th>T. de execução</th>
                      <th>Prioridade</th>
                      <th>Cor</th>
                    </tr>
                  </thead>
                  <tbody>
                    {data.queue.map((item,i)=>{
                      return <tr key={i}>
                        <td>{item.id}</td>
                        <td>{item.name}</td>
                        <td>{item.arrived}</td>
                        <td>{item.execution}</td>
                        <td>{item.priority}</td>
                        <td style={{background:item.color}}></td>
                      </tr>
                    })}
                  </tbody>
              </Table>
              <Table>
                <thead>
                  <tr>
                    <th colSpan='4'>Tempo de espera | Turnarround</th>
                  </tr>
                  <tr>

                    <th>ID do processo</th>
                    <th>Nome do processo</th>
                    <th>Tempo de espera</th>
                    <th>Turn arround</th>
                  </tr>
                </thead>
                <tbody>
                  {data.process.map((item,i)=>{
                    console.log(item)
                    return <tr key={i}>
                      <td>{item.id}</td>
                      <td>{item.name}</td>
                      <td>{item.wait - item.arrived < 0 ? 0 : item.wait - item.arrived}</td>
                      <td>{item.status === 'false' ? 0 : (item.wait - item.arrived + item.execution)}</td>
                      
                    </tr>
                  })}
                </tbody>
              </Table>
              <Table>
                <thead>
                    <tr>
                        <th colSpan='2'>Média</th>
                    </tr>
                  <tr>
                    <th>Tempo de espera médio</th>
                    <th>Turn arround médio</th>
                  </tr>
                </thead>
                <tbody>
                    <Media data={data} />
                </tbody>
              </Table>
        </ContainerTables>

      </>
      
    );
}

export default Graph1;