import { Container } from "./styles";

interface HeaderProps {
  onBtnOpenNewTransictionModal: () => void
}

export function BtnNewTransiction({onBtnOpenNewTransictionModal}: HeaderProps) {
  return (
    <Container>
      <button onClick={onBtnOpenNewTransictionModal}>Novo Registro </button>
    </Container>
  );
}


