import './card.css'

const Card = ({ titulo, texto }) => {
    return (
        <div className="card">
              <form className="formulario">
      <fieldset>
        <legend>FORMULARIO DE CADASTRO</legend>
        <input className='inputPadrao' type='text' required placeholder="Nome:"></input>
        <input className='inputPadrao' type='email' required placeholder="Email:"></input>
        <input className='inputPadrao' type='password' required placeholder="Password:"></input>
        <button className="enviar" id='botao'>Enviar</button>
      </fieldset>

    </form>
            
        </div>
    );
}

export default Card;
