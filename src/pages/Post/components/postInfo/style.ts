import styled from "styled-components";

export const PostInfoContainer = styled.section`
  width: 100%;
  margin-top: -6rem;
  display: flex;
  justify-content: center;
`;

export const PostInfoContent = styled.div`
  max-width: 864px;
  width: 100%;
  padding: 2rem 2rem;
  border-radius: 10px;

  box-shadow: 0px 2px 28px rgba(0, 0, 0, 0.2);
  background: ${(props) => props.theme["base-profile"]};

  display: flex;
  flex-direction: column;
  gap: 2rem;
`;

export const PostInfoButtonsAreas = styled.header`
  display: flex;
  flex-direction: row;

  justify-content: space-between;
  align-items: center;

  a {
    font-size: 0.75rem;
    text-decoration: none;
    color: ${(props) => props.theme['blue']};
    display: flex;
    flex-direction: row;
    gap: 8px;
    transition: all 0.2s;
    cursor: pointer;

    &:hover {
      border-bottom: 1px solid ${(props) => props.theme['blue']};
    }
  }
`

export const PostInfoIcons = styled.footer`
  display: flex;
  flex-direction: row;
  gap: 32px;

  span {
    display: flex;
    flex-direction: row;
    align-items: center;
    gap: 8px;
  }
`