import background from "../../assets/background.svg";
import { PostCard } from "./components/postCard";
import { ProfileCard } from "./components/profileCard";
import { SearchInput } from "./components/searchInput";
import {
  Header,
  HomeContainer,
  HomePostsContainer,
  HomePostsContent,
} from "./style";

export function Home() {
  return (
      <HomeContainer>
        <ProfileCard />
        <SearchInput />
        <HomePostsContainer>
          <HomePostsContent>
            <PostCard />
            <PostCard />
            <PostCard />
            <PostCard />
            <PostCard />
            <PostCard />
          </HomePostsContent>
        </HomePostsContainer>
      </HomeContainer>
  );
}
