import styled from "styled-components";
import { darken, transparentize } from 'polished'

export const Container = styled.form`
  h2 {
    color: #DFDFDF;
    margin-bottom: 2rem;
    font-size: 1.125rem;
  }
  label {
    font-size: 14px;
    color: #908e97;
  }

  input {
    border: none;
    background: none;
    border-bottom: 4px solid #45444A;
    width: 100%;
    padding: 10px 10px 5px 0;
    outline: none;
    color: #DEDFE3;
    transition: .3s;
    margin-bottom: 40px;

    &:focus {
      border-color: #6B6E7A;
    }

    &:nth-child(6) {
      background: #312F33;
      border-radius: 7px;
      border: none;
      padding: 10px;
      height: 50px;
      margin-bottom: auto;
    }
  }
  
`

export const TransactionButton = styled.div`
  background: #2F2E32;
  padding: 20px;
  border-bottom-left-radius: 15px;
  border-bottom-right-radius: 15px;
  text-align: right;

  button {
    padding: 10px 20px;
    font-size: 14px;
    font-weight: bold;
    border-radius: 5px;
    border: none;

    &:nth-child(1){
      background: #3A383C;
      color: #7C7C7C;
    }

    &:nth-child(2){
      background: var(--color-principal);
      color: #F0E9E9;
      margin-left: 25px;
    }

    &:hover {
      filter: brightness(0.9);
    }
  }

`

export const Content = styled.section`
  padding: 2rem;

`

export const TransactionsType = styled.div`
  display: grid;
  padding: 0 2rem 2rem 2rem;
  grid-template-columns: 1fr 1fr;
  gap: 0.5rem;
`

interface RadioBoxProps {
  isActive: boolean;
  activeColor: 'green' | 'red';
}

const colors = {
  green: '#04d361',
  red: '#ec314c'
}

export const RadioBox = styled.button<RadioBoxProps>`
  background: ${(props) => props.isActive 
    ? transparentize(0.9, colors[props.activeColor])
    : '#312F33'
  };
  border: none;
  padding: 1rem;
  height: 3rem;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  border-radius: 7px;

  img {
    width: 25px;
    height: 25px;
  }

  strong {
    color: #908E97;
    font-size: 14px;
  }
`