import { formatDistanceToNow } from "date-fns";
import { ptBR } from "date-fns/locale";
import {
  GithubLogo,
  ChatCircle,
  Calendar,
  ArrowSquareOut,
  CaretLeft,
} from "phosphor-react";
import { NavLink } from "react-router-dom";
import { IssueProps } from "../..";
import { PostInfoButtonsAreas, PostInfoContent, PostInfoIcons } from "./style";

interface PostInfoProps {
  Issue: IssueProps;
}

export function PostInfo({ Issue }: PostInfoProps) {
  return (
    <PostInfoContent>
      <PostInfoButtonsAreas>
        <NavLink to={"/"}>
          <CaretLeft />
          <p>VOLTAR</p>
        </NavLink>
        <a href={Issue.html_url} target='blank'>
          VER NO GITHUB
          <ArrowSquareOut />
        </a>
      </PostInfoButtonsAreas>

      <h1>{Issue.title}</h1>

      <PostInfoIcons>
        <span>
          <GithubLogo />
          <p>{Issue.user.login}</p>
        </span>

        <span>
          <Calendar />
          <p>
            {formatDistanceToNow(new Date(Issue.updated_at), {
              addSuffix: true,
              locale: ptBR,
            })}
          </p>
        </span>

        <span>
          <ChatCircle />
          <p>{Issue.comments} comentários</p>
        </span>

        <span></span>
      </PostInfoIcons>
    </PostInfoContent>
  );
}
