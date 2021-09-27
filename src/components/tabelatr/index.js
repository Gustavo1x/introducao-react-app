import './tabelatr.css'

const Tabelatr = ({id,nome,email,senha})=>{

    const alerta1 = (elemento)=>{
        alert (`Elemento adicionado ${elemento.target.value}`)
    }
    const alerta2 = (elemento)=>{

        alert (`Elemento removido ${elemento.target.value}`)

    }
    return (
        <tr>
            <td>{nome}</td>
            <td>{email}</td>
            <td>{senha}</td>
            <td><button onClick={alerta1} value={id} className="editar">Editar</button></td>
            <td><button onClick={alerta2} value={id} className="delete">Delete</button></td>
        </tr>
    )

}

export default Tabelatr;