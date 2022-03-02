import { ListTasks } from "./ListTasks";
import { BtnNewTransiction } from "./NewTransiction";
import { Container } from "./styles";

export function Register() {
  return (
    <Container>
      <BtnNewTransiction />
      <ListTasks />
    </Container>
    
  );
}


