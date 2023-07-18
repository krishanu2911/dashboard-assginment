import './App.css'
import { Sidebar , Dashboard } from "./components"

function App() {

  return (
    <div className='flex    min-h-screen'>
      <Sidebar />
      <Dashboard />
    </div>
  )
}

export default App
