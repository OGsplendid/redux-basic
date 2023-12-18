import './App.css'
import { DeskCC } from './components/Desk/DeskCC'
import { DeskFC } from './components/Desk/DeskFC'
import { Filter } from './components/Filter/Filter'
import { InputForm } from './components/InputForm/InputForm'

function App() {

  return (
    <div className='common-wrapper'>
      <InputForm />
      <Filter />
      <DeskCC />
      <hr />
      <DeskFC />
    </div>
  )
}

export default App
