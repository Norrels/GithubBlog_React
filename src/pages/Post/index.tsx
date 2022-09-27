import { PostInfo } from "./components/postInfo";
import { PostCode, PostContainer, PostContent } from "./style";

export function Post() {
  return (
    <PostContainer>
      <PostInfo />
      <PostContent>
        <div>
          <p>
            Programming languages all have built-in data structures, but these
            often differ from one language to another. This article attempts to
            list the built-in data structures available in JavaScript and what
            properties they have. These can be used to build other data
            structures. Wherever possible, comparisons with other languages are
            drawn.
          </p>

          <h3>Dynamic typing</h3>
          <p>
            JavaScript is a loosely typed and dynamic language. Variables in
            JavaScript are not directly associated with any particular value
            type, and any variable can be assigned (and re-assigned) values of
            all types:
          </p>
        </div>

        <PostCode>
          <p><var>let foo = 42;</var> <samp>//foo is now a number</samp></p>
          <p><var>foo = 'bar';</var> <samp>// foo is now a string</samp></p>
          <p><var>foo = true;</var> <samp>// foo is a boolean</samp> </p>
        </PostCode>
      </PostContent>
    </PostContainer>
  );
}
