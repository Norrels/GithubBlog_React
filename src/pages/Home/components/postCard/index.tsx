import { PostCardContainer, PostCardTitleContent } from "./style";

export function PostCard() {
  return (
    <PostCardContainer>
      <PostCardTitleContent>
        <h3>JavaScript data types and data structures</h3>
        <p>Há 1 dia</p>
      </PostCardTitleContent>
      <p>
        Programming languages all have built-in data structures, but these often
        differ from one language to another. This article attempts to list the
        built-in data structures available in...
      </p>
    </PostCardContainer>
  );
}
