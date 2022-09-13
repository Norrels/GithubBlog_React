import styled from "styled-components";

export const SeachInputContainer = styled.section`
  width: 100%;
  margin-top: 3rem;

  display: flex;
  justify-content: center;
`;

export const SeachInputContent = styled.div`
  max-width: 864px;
  width: 100%;

  span {
    display: flex;
    justify-content: space-between;
    align-items: center;

    h2 {
        font-size: 1.125rem;
        font-weight: bold;
        color: ${(props) => props.theme['base-subtitle']};
    }

    p{
        font-size: 0.875rem;
        color: ${(props) => props.theme['base-span']};
    }
  }

  input {
    margin-top: 1rem;
    width: 100%;
    height: 3.125rem;
    border: 1px solid ${(props) => props.theme['base-border']};
    color: ${(props) => props.theme['base-text']};
    border-radius: 6px;
    padding-left: 1.7rem;

    background: ${(props) => props.theme['base-input']};

    &::placeholder {
        color: ${(props) => props.theme['base-label']};
    }
  }
`;
