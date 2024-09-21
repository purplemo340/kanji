import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './components/App.jsx'
import Add from './components/Add.jsx'
import './App.css'
import kanjis from './kanjis.js'
function createCard(kanji){
    return <App
    id={kanji.id}
    key={kanji.id}
    name={kanji.name}
    kanji={kanji.kanji}
    mean={kanji.meaning}
    
    />;
}
createRoot(document.getElementById('root')).render(
    <div>
      <h1 className='heading'>
        <span>Kanji Encyclopedia</span>
      </h1>
      {kanjis.map(createCard)}
      <Add />
    </div>
  )