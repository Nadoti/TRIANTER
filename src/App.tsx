import { Header } from "./components/Header";
import { Container } from "./styles";
import { GlobalStyle } from "./styles/global";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Register } from "./components/Register";
import { Dashboard } from "./components/Dashboard";
import { Analytics } from "./components/Analytics";

export function App() {
  return (
    <BrowserRouter>
      <Container>
        <Header />
        <Routes>
          <Route path="/" element={<Register/>}/>
          <Route path="dashboard" element={<Dashboard/>}/>
          <Route path="analytics" element={<Analytics/>}/>
        </Routes>
      </Container>
      <GlobalStyle />
    </BrowserRouter>
    
  );
}


