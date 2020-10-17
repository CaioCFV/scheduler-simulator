import React from 'react';

function SetTime({ submit }) {
    return ( 
        <form>
            Você pode escolher mostrar o resultado do escalonamento aos poucos! Para isso defina o tempo de atualização, ou deixa em branco para mostrar o resultado completo no final.
            <fieldset>
                <label htmlFor="graph-time">Atualização de gráfico</label>
                <input type="text" id="graph-time" name="time" placeholder="Escreva o ID do processo" required/>
            </fieldset>
            <button type="submit">Adicionar tempo</button>
        </form>
    );
}

export default SetTime;