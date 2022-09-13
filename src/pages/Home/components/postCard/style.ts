import styled from "styled-components";

export const PostCardContainer = styled.article`
  border-radius: 10px;
  padding: 2.313rem 2rem;

  transition: box-shadow 0.25s ease-in-out;
  background: ${(props) => props.theme["base-post"]};

  display: flex;
  flex-direction: column;
  gap: 1rem;

  &:hover {
    box-shadow: 0px 0px 0px 2px ${(props) => props.theme["base-label"]} inset;
  }

  p {
    line-height: 170%;
  }
`;

export const PostCardTitleContent = styled.div`
  display: grid;
  grid-template-columns: 80% auto;
  justify-content: space-between;
  width: 100%;

  h3 {
    font-size: 1.25rem;
    font-weight: bold;
    color: ${(props) => props.theme["base-title"]};
  }

  p {
    width: auto;
    font-size: 0.875rem;
    color: ${(props) => props.theme["base-span"]};
  }
`;
