import { useNavigate } from "react-router-dom";
import { IssuesProps } from "../..";
import { PostCardContainer, PostCardTitleContent } from "./style";
import ptBR from "date-fns/locale/pt-BR";
import { formatDistanceToNow } from "date-fns";

interface PostCardProps {
  issue: IssuesProps;
}

export function PostCard({ issue }: PostCardProps) {
  const navigate = useNavigate();

  function handleClickOnPostCard() {
    navigate(`/post/${issue.number}`);
  }

  return (
    <PostCardContainer onClick={handleClickOnPostCard}>
      <PostCardTitleContent>
        <h3>{issue.title}</h3>
        <p>
          {formatDistanceToNow(new Date(issue.updated_at), {
            addSuffix: true,
            locale: ptBR,
          })}
        </p>
      </PostCardTitleContent>
      <p>{issue.body}</p>
    </PostCardContainer>
  );
}
