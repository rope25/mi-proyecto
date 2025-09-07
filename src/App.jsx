import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>

      <h1>ROBERTO</h1>
      <h2>PELAYO  REVENTUN </h2>
      <p className='aficiones'>Mis aficiones:</p>

      <ul>
        <li>Programar</li>
        <li>Jugar tenis</li>
        <li>Aprender algo nuevo</li>
        <li>Pasear </li>
        <li>pasar tiempo con amigos</li>
      </ul>
 
      <img className="imagenes"src="https://images.pexels.com/photos/1108099/pexels-photo-1108099.jpeg?auto=compress&cs=tinysrgb&w=600" alt="Paisaje" width="300" />

      <footer>
        <h2><a href="https://www.google.com">Visita la página de Google</a></h2>
        <p>© 2025 Mi Proyecto</p>

      </footer>
    </>
  )
}

export default App
