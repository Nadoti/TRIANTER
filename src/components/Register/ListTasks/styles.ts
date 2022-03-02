import styled from "styled-components";

export const Container = styled.div`
  margin-top: 3.2rem;

  table {
    width: 100%;
    border-spacing: 0 1rem;

    th {
      color: var(--text-link);
      font-weight: 400;
      padding: 1rem 2rem;
      text-align: left;
      line-height: 1.5rem
    }

    td {
      padding: 1rem 2rem;
      border: 0;
      background: #0D0C0C;
      color: var(--text-link);
      border-radius: 0.25rem;

      button {
        background: none;
        border: none;
        color: var(--color-terciario);
      }
    }
  }


`