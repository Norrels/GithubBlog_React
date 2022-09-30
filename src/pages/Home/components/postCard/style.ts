import styled from "styled-components";

export const PostCardContainer = styled.article`
  border-radius: 10px;
  padding: 2.313rem 2rem;

  transition: box-shadow 0.2s ease-in-out;
  background: ${(props) => props.theme["base-post"]};

  display: flex;
  flex-direction: column;
  gap: 1rem;

  cursor: pointer;

  &:hover {
    box-shadow: 0px 0px 0px 2px ${(props) => props.theme["base-label"]} inset;
  }

  p {
    line-height: 1.6rem;	
    overflow: hidden; // Removendo barra de rolagem
    text-overflow: ellipsis; // Adicionando "..." ao final
    display: -webkit-box;
    -webkit-line-clamp: 4; // Quantidade de linhas
    -webkit-box-orient: vertical;
  }
`;

export const PostCardTitleContent = styled.div`
  display: grid;
  grid-template-columns: 80% 20%;
  justify-content: space-between;
  width: 100%;

  h3 {
    font-size: 1.25rem;
    font-weight: bold;
    color: ${(props) => props.theme["base-title"]};
  }

  p {
    text-transform: capitalize;
    width: auto;
    font-size: 0.875rem;
    text-align: center;
    color: ${(props) => props.theme["base-span"]};
  }
`;
