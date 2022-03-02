import styled from "styled-components";

export const Container = styled.header`
  margin: 3rem;
`

export const Content = styled.nav`
  margin-top: 2rem;
  display: flex;
  align-items: center;
  cursor: pointer;

  svg {
    margin-left: 1rem;
    fill: var(--text-link);
  }

  a {
    font-size: 1.125rem;
    padding: 1rem;
    color: var(--text-link);
  }

  &.ativo {
    width: 270px;
    background: #0D0C0C;
    position: relative;
    transition: .3s;
    a {
      color: var(--color-secundario);
    }
    svg {
      fill: var(--color-secundario);
    }

    &::before {
      content: '';
      width: 5px;
      height: 57px;
      background: var(--color-principal);
      position: absolute;
    }
    
  }

`