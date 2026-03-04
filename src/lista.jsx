import { useState } from "react";

function Lista() {
    const [nombres, setNombres] = useState(["Ana", "Luis", "Carlos", "Daniel", "Gabriel"]);

    return(
        <div>
            <h3>Lista de Nombres:</h3>
            <ul>
                {nombres.map((nombre, index)=> (
                <li key ={index}>{nombre}</li>
                ))}
            </ul>
            <button onClick={() => setNombres(nombres.slice(0, -1))}>
                Eliminar ultimo
            </button>
        </div>
    );
}

export default Lista;