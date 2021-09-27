
import './tabela.css'
import Tabelatr from '../tabelatr'

const Tabela = ({dados}) =>{
return(

<div className="tabela">
    <table id="table">
        <thead>
            <tr>
                <th>NOME</th>
                <th>EMAIL</th>
                <th>SENHA</th>
                <th className="colSpan" colSpan="2">AÇÕES</th>

            </tr>
        </thead>
        <tbody>
          {
            dados.map(item=>(
                <Tabelatr key={item.id}
                id= {item.id}
                nome={item.nome}
                email={item.email}
                senha={item.senha}

                />
            ))
          }
        </tbody>
    </table>
</div>
);
}

export default Tabela;