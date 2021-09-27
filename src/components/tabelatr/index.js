import './tabelatr.css'

const Tabelatr = ({id,nome,email,senha})=>{

    const alerta = (elemento)=>{

        alert (`elemento adicionado ${elemento.target.value}`)

    }
    return (
        <tr>
            <td>{nome}</td>
            <td>{email}</td>
            <td>{senha}</td>
            <td><button onClick={alerta} value={id} className="editar">Editar</button></td>
            <td><button onClick={alerta} value={id} className="delete">Delete</button></td>
        </tr>
    )

}

export default Tabelatr;