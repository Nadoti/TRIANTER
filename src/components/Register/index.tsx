import { ListTasks } from "./ListTasks";
import { BtnNewTransiction } from "./NewTransiction";
import { Container } from "./styles";

interface HeaderProps {
  onOpenNewTransictionModal: () => void
}

export function Register({onOpenNewTransictionModal}: HeaderProps) {
  return (
    <Container>
      <BtnNewTransiction onBtnOpenNewTransictionModal={onOpenNewTransictionModal}/>
      <ListTasks />
    </Container>
    
  );
}


