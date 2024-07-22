import { useState } from 'react'
import './App.css';
import Header from './components/Header';
import Main from './components/Main';
import Modal from './components/Modal';

function App() {
  const [open, setOpen] = useState(false)

  return (
    <>
      {open ? <Modal /> : ""}
      <Header />
      <Main modal={{setOpen, open}} />
    </>
  )
}

export default App
