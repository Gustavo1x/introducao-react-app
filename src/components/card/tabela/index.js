import './tabela.css'
const Tabela = () =>{
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
            <tr>
                <td>fulana da silva dutra</td>
                <td>fulano@gmail.com</td>
                <td>123abc</td>
                <td><button className="editar" id='botao'>editar</button>
                    <button className="delete" id='botao'>delete</button>
                </td>
            </tr>
        </tbody>
    </table>
</div>
);
}

export default Tabela;