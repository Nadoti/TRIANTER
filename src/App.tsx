import { Header } from "./components/Header";
import { Container } from "./styles";
import { GlobalStyle } from "./styles/global";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Register } from "./components/Register";
import { Dashboard } from "./components/Dashboard";
import { Analytics } from "./components/Analytics";
import { useEffect, useState } from "react";
import { api } from "./services/api";
import Modal from 'react-modal'

Modal.setAppElement("#root")
  

export function App() {
  const [isNewTransictionModalOpen, setIsNewTransictionModalOpen] = useState(false)

  useEffect(() => {
    api.get('transiction')
      .then(({data}) => console.log(data))
  }, [])

  function handleOpenModalTransiction() {
    setIsNewTransictionModalOpen(true)
  }

  function handleCloseModalTransiction() {
    setIsNewTransictionModalOpen(false)
  }


  return (
    <BrowserRouter>
      <Container>
        <Header />
        <Routes>
          <Route path="/" element={<Register onOpenNewTransictionModal={handleOpenModalTransiction}/>}/>
          <Route path="dashboard" element={<Dashboard/>}/>
          <Route path="analytics" element={<Analytics/>}/>
        </Routes>
        <Modal isOpen={isNewTransictionModalOpen} onRequestClose={handleCloseModalTransiction}>
          <h2>Cadastrar</h2>
        </Modal>
      </Container>
      <GlobalStyle />
      
    </BrowserRouter>
    
  );
}


