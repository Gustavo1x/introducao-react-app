import Card from './components/card'
import Tabela from './components/tabela'
import db from './components/db.json'

const App = () => {
  return (
  <div className="app">
 <Card />
<Tabela dados={db}/>

  </div>
  
  )
  
}


export default App;
