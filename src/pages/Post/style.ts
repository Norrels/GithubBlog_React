import styled from "styled-components";

export const PostContainer = styled.main`
  width: 100%;
  margin-bottom: 4rem;

  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const PostContent = styled.section`
  max-width: 864px;
  width: 100%;
  margin-top: 3rem;
  display: flex;
  gap: 1.5rem;
  flex-direction: column;

  h3 {
    color: ${(props) => props.theme["blue"]};
  }

  p {
    font-size: 1rem;
  }

  div {
    display: flex;
    flex-direction: column;
    gap: 1.6rem;
  }

  pre {
    width: 100%;
    background: ${(props) => props.theme["base-post"]};
    padding: 2rem;

    p {
      line-height: 160%;
    }
  }
`;


