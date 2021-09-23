import Card from './components/card'

const App = () => {
  return (<div className="app">
    <form className="formulario">
      <fieldset>
        <legend>FORMULARIO DE CADASTRO</legend>
        <input className='inputPadrao' type='text' required placeholder="Nome:"></input>
        <input className='inputPadrao' type='email' required placeholder="Email:"></input>
        <input className='inputPadrao' type='password' required placeholder="Password:"></input>
        <button className="enviar" id='botao'>Enviar</button>
      </fieldset>

    </form>

    <table className="tabela">
    <thead>
    <tr>
      <th>NOME</th>
      <th>EMAIL</th>
      <th>SENHA</th>
      <th colSpan="2">AÇÕES</th>

    </tr>
    </thead>
    <tbody>
      <tr>
        <td>Fulana da Silva</td>
        <td>Fulana da Silva</td>
        <td>Fulana da Silva</td>
        <td>Fulana da Silva</td>
      </tr>
    </tbody>
    </table>

  </div>
  
  )
  
}


export default App;
