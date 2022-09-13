import { GithubLogo, Buildings, Users, ArrowSquareOut } from "phosphor-react";
import {
  ProfileCardContainer,
  ProfileCardContent,
  ProfileCardInfo,
  ProfileCardInfoName,
  ProfileCardInfoIncons,
} from "./style";

export function ProfileCard() {
  return (
    <ProfileCardContainer>
      <ProfileCardContent>
        <img
          src="https://avatars.githubusercontent.com/u/94193637?v=4"
          alt=""
        />
        <ProfileCardInfo>
          <ProfileCardInfoName>
            <h1>Matheus Zacarias</h1>
            <a href="https://github.com/Norrels/" target='blank'>
              GITHUB
              <ArrowSquareOut />
            </a>
          </ProfileCardInfoName>

          <p>In the truman show</p>

          <ProfileCardInfoIncons>
            <span>
              <GithubLogo />
              <p>Norrels</p>
            </span>

            <span>
              <Users weight="fill" />
              <p>32 seguidores </p>
            </span>

            {/* <Buildings/> */}
          </ProfileCardInfoIncons>
        </ProfileCardInfo>
      </ProfileCardContent>
    </ProfileCardContainer>
  );
}
