import styled from "styled-components";

export const ProfileCardContainer = styled.section`
  width: 100%;
  margin-top: -6rem;

  display: flex;
  justify-content: center;
`;

export const ProfileCardContent = styled.article`
  max-width: 864px;
  width: 100%;
  padding: 2rem 2rem;
  border-radius: 10px;

  box-shadow: 0px 2px 28px rgba(0, 0, 0, 0.2);
  background: ${(props) => props.theme["base-profile"]};

  display: flex;
  flex-direction: row;
  gap: 2rem;

  img {
    border-radius: 8px;
    width: 9.25rem;
  }
`;

export const ProfileCardInfo = styled.article`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 2rem;
`;

export const ProfileCardInfoName = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;

  h1 {
    font-weight: bold;
    font-size: 1.5rem;
    color: ${(props) => props.theme["base-title"]};
  }

  a {
    color: ${(props) => props.theme["blue"]};
    font-size: 0.75rem;
    display: flex;
    gap: 0.2rem;
    font-weight: bold;
  }
`;

export const ProfileCardInfoIncons = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    gap: 1rem;

    span {
        display: flex;
        gap: 0.3rem;
        align-items: center;
    }
`
