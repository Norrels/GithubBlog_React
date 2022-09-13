import styled from "styled-components";
import background from '../../assets/background.svg'

export const Header = styled.header`
  width: 100%;
  min-height: 45vh;
  background-image: url(${background});
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
`

export const HomeContainer = styled.main`
  width: 100%;
  margin-bottom: 4rem;

  display: flex;
  flex-direction: column;
`;

export const HomePostsContainer = styled.section`
  width: 100%;

  display: flex;
  justify-content: center;
`;

export const HomePostsContent = styled.section`
  max-width: 864px;
  width: 100%;
  margin-top: 3rem;

  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 2rem;
`;
