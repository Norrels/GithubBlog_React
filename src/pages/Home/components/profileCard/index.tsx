import { GithubLogo, Buildings, Users, ArrowSquareOut } from "phosphor-react";
import { api } from "../../../../lib/axios";
import {
  ProfileCardContainer,
  ProfileCardContent,
  ProfileCardInfo,
  ProfileCardInfoName,
  ProfileCardInfoIncons,
} from "./style";
import { useEffect, useState } from "react";


interface UserProps {
  name: string;
  login: string;
  followers: number;
  html_url: string;
  bio: string;
  avatar_url: string;
}

export function ProfileCard() {
  const [user, setUser] = useState<UserProps>()

  async function fetchUser() {
    const response = await api.get('users/norrels')
    setUser(response.data)
  }

  useEffect(() => {
    fetchUser()
  }, [])


  return (
    <ProfileCardContainer>
      <ProfileCardContent>
        <img
          src={user?.avatar_url}
          alt=""
        />
        <ProfileCardInfo>
          <ProfileCardInfoName>
            <h1>{user?.name}</h1>
            <a href={user?.html_url} target='blank'>
              GITHUB
              <ArrowSquareOut />
            </a>
          </ProfileCardInfoName>

          <p>{user?.bio}</p>

          <ProfileCardInfoIncons>
            <span>
              <GithubLogo />
              <p>{user?.login}</p>
            </span>

            <span>
              <Users weight="fill" />
              <p>{user?.followers} seguidores </p>
            </span>

            {/* <Buildings/> */}
          </ProfileCardInfoIncons>
        </ProfileCardInfo>
      </ProfileCardContent>
    </ProfileCardContainer>
  );
}
