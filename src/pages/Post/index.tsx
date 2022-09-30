import { useEffect, useState } from "react";
import ReactMarkdown from "react-markdown";
import { useParams } from "react-router-dom";
import { api } from "../../lib/axios";
import { PostInfo } from "./components/postInfo";
import { PostContainer, PostContent } from "./style";

export interface IssueProps {
  title: string;
  body: string;
  updated_at: Date;
  html_url: string;
  comments: number
  user: {
    login: string;
  }
}

export function Post() {

  const { issueNumber } = useParams()

  const [issue, setIssue] = useState<IssueProps>({
    body: "",
    title: "",
    updated_at: new Date,
    html_url: "",
    comments: 0,
    user: {
      login: ""
    }
  })

  async function fetchIssue() {
    const response = await api.get(
      `/repos/Norrels/GithubBlog_React/issues/${issueNumber}`
    );
    setIssue(response.data)
  }

  useEffect(() => {
    fetchIssue();
  }, []);


  return ( 
    <PostContainer>
      <PostInfo Issue={issue} />
      <PostContent>
        <ReactMarkdown>{issue.body}</ReactMarkdown>
      </PostContent>
    </PostContainer>
  );
}
