import React from 'react';
function ProcessTable({process = []}) {
    return ( 
      <>
        <table>
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
                            <td>{item.status}</td>
                            <td style={{background:item.color}}></td>
                        </tr>
                    );
                })}
            </tbody>
        </table>
      </>
    );
}

export default ProcessTable;