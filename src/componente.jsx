import { useState } from "react";

function Componente() {
    const [Numero, setNumero] = useState(0); 
    return (
        <div>
            <h3>Contador: {Numero}</h3>
            <button onClick={() => setNumero(Numero + 1)}>Aumentar</button>
            <button oncClick={() =>setNumero(Numero + 1)}>Disminuir</button>
            <button onClick={() =>setNumero(0)}>Resetear</button>
        </div>
    )
}

export default Componente