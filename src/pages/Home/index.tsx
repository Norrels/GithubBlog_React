import { useEffect, useState } from "react";
import background from "../../assets/background.svg";
import { api } from "../../lib/axios";
import { PostCard } from "./components/postCard";
import { ProfileCard } from "./components/profileCard";
import { SearchInput } from "./components/searchInput";
import {
  Header,
  HomeContainer,
  HomePostsContainer,
  HomePostsContent,
} from "./style";

export interface IssuesProps {
  author_association: string;
  number: number;
  title: string;
  body: string;
  updated_at: Date;
}
[];

export function Home() {
  const [issues, setIssues] = useState<IssuesProps[]>([]);
  const [newSearch, setNewSearch] = useState("");

  function HandleSearchInput(data: string) {
    setNewSearch(data);
  }

  async function fetchIssues() {
    const response = await api.get("search/issues?", {
      params: {
        q: `${newSearch}repo:Norrels/GithubBlog_React/`,
      },
    });
    setIssues(response.data.items);
  }

  useEffect(() => {
    fetchIssues();
  }, [newSearch]);

  return (
    <HomeContainer>
      <ProfileCard />
      <SearchInput
        handleSearchInput={HandleSearchInput}
        PostAmount={issues.length}
      />
      <HomePostsContainer>
        <HomePostsContent>
          {issues.map((issue) => {
            return (
              issue.author_association == "OWNER" && (
                <PostCard key={issue.number} issue={issue} />
              )
            );
          })}
        </HomePostsContent>
      </HomePostsContainer>
    </HomeContainer>
  );
}
