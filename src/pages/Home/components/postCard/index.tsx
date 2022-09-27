import { useNavigate } from "react-router-dom";
import { IssuesProps } from "../..";
import { PostCardContainer, PostCardTitleContent } from "./style";


interface PostCardProps {
  issue: IssuesProps
}

export function PostCard({issue} : PostCardProps) {

  const navigate = useNavigate()

  function handleClickOnPostCard() {
    navigate('/post')
  }

  return (
    <PostCardContainer onClick={handleClickOnPostCard}>
      <PostCardTitleContent>
        <h3>{issue.title}</h3>
        <p>Há 1 dia</p>
      </PostCardTitleContent>
      <p>
        {issue.body}
      </p>
    </PostCardContainer>
  );
}
