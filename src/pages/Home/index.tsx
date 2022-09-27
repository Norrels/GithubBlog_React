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
  id: number;
  title: string;
  body: string;
  updated_at: Date;
}[]

export function Home() {
  const [issues, setIssues] = useState<IssuesProps[]>([]);

  async function fetchIssues() {
    const response = await api.get(
      "https://api.github.com/search/issues?q=repo:Norrels/GithubBlog_React"
    );
    console.log(response.data.items);
    setIssues(response.data.items);
  }

  useEffect(() => {
    fetchIssues();
  }, []);

  return (
    <HomeContainer>
      <ProfileCard />
      <SearchInput PostAmount={issues.length}  />
      <HomePostsContainer>
        <HomePostsContent>
          {issues.map((issue) => {
            return <PostCard key={issue.id} issue={issue} />;
          })}
        </HomePostsContent>
      </HomePostsContainer>
    </HomeContainer>
  );
}
