import {
  GithubLogo,
  ChatCircle,
  Calendar,
  ArrowSquareOut,
  CaretLeft,
} from "phosphor-react";
import { NavLink } from "react-router-dom";
import { PostInfoButtonsAreas, PostInfoContent, PostInfoIcons } from "./style";

export function PostInfo() {
  return (
    
      <PostInfoContent>
        <PostInfoButtonsAreas>
          <NavLink to={'/'}>
            <CaretLeft />
            <p>VOLTAR</p>
          </NavLink>
          <a>
            <p>VER NO GITHUB</p>
            <ArrowSquareOut />
          </a>
        </PostInfoButtonsAreas>

        <h1>JavaScript data types and data structures</h1>

        <PostInfoIcons>
          <span>
            <GithubLogo />
            <p>Norrels</p>
          </span>

          <span>
            <Calendar />
            <p>Há 1 dia</p>
          </span>

          <span>
            <ChatCircle />
            <p>5 comentários</p>
          </span>

          <span></span>
        </PostInfoIcons>
      </PostInfoContent>
  );
}
