import './card.css'

const Card = () => {

  const alerta = (alertando) => {
    alert(`Adicionado novo formulario ${alertando.target}`)
  }

  return (
    <div>
      <form className="formulario">
        <fieldset>
          <legend>FORMULARIO DE CADASTRO</legend>
          
            <input className='inputPadrao' type='text' required placeholder="Nome:"></input>
            <input className='inputPadrao' type='email' required placeholder="Email:"></input>
            <input className='inputPadrao' type='password' required placeholder="Password:"></input>
            <button className="enviar" type='submit' id='botao' onClick={alerta}>Enviar</button>
          
        </fieldset>

      </form>

    </div>
  );
}

export default Card;
