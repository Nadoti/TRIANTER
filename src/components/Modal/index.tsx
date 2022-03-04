import { useState } from 'react'
import Modal from 'react-modal'
import entradaSvg from '../../assets/entrada.svg'
import saidaSvg from '../../assets/saida.svg'
import { Container, Content, TransactionsType, TransactionButton, RadioBox } from './styles'


interface ModalTransiction {
  isOpen: boolean;
  onRequestClose: () => void
}

Modal.setAppElement("#root")

export function TransictionModal({isOpen, onRequestClose}: ModalTransiction) {
  const [type, setType] = useState('')

  return (
    <Modal 
      isOpen={isOpen} 
      onRequestClose={onRequestClose}
      overlayClassName="react-modal-overlay"
      className="react-modal-content"
    >
      <Container>
        <Content>
          
          <h2>Registrar Nova Transação</h2>

          <input type="text" placeholder='Título'/>
          <input type="text" placeholder='Valor'/>
          <input type="text" placeholder='Categoria'/>
          <label>Data</label>
          <input type="date" placeholder='Data'/>
        </Content>
        <TransactionsType>
          <RadioBox 
            type='button'
            onClick={() => {setType('deposit')}}
            isActive={type === 'deposit'}
            activeColor='green'
          >
            <img src={entradaSvg} alt="" />
            <strong>Entrada</strong>
          </RadioBox>

          <RadioBox 
            type='button'
            onClick={() => {setType('withdraw')}}
            isActive={type === 'withdraw'}
            activeColor='red'
          >
            <img src={saidaSvg} alt="" />
            <strong>Saída</strong>
          </RadioBox>
        </TransactionsType>
        <TransactionButton>
          <button type='button' onClick={onRequestClose}>Cancelar</button>
          <button type='submit'>Registrar</button>
        </TransactionButton>
        
      </Container>
      
    </Modal>
  )
}
