import React from 'react';
import  { Table, Status  } from './style';

function ProcessTable({process = []}) {
    return ( 
      <>
        <Table>
            <thead>
                <tr>
                    <th>ID</th>
                    <th>Nome do processo</th>
                    <th>T. de chegada</th>
                    <th>T. de execução</th>
                    <th>Prioridade</th>
                    <th>Status</th>
                    <th>Cor</th>
                </tr>
            </thead>
            <tbody>
                {process.map((item,i) => {
                    return (
                        <tr key={i}>
                            <td>{item.id}</td>
                            <td>{item.name}</td>
                            <td>{item.arrived}</td>
                            <td>{item.execution}</td>
                            <td>{item.priority}</td>
                            <Status status={item.status}>{item.status}</Status>
                            <td><i style={{background:item.color}}></i></td>
                        </tr>
                    );
                })}
            </tbody>
        </Table>
      </>
    );
}

export default ProcessTable;