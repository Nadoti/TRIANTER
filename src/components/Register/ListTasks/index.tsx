import { Container } from "./styles";

export function ListTasks() {
  return (
    <Container>
      <table>
        <thead>
          <tr>
            <th>Título</th>
            <th>Valor</th>
            <th>Categoria</th>
            <th>Data</th>
            <th>ação</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Testando</td>
            <td>R$1.200,00</td>
            <td>Casa</td>
            <td>15/01/2022</td>
            <td><button>Detalhes</button></td>
          </tr>

          <tr>
            <td>Testando</td>
            <td>R$1.200,00</td>
            <td>Casa</td>
            <td>15/01/2022</td>
            <td><button>Detalhes</button></td>
          </tr>
        </tbody>
      </table>
    </Container>
  );
}


