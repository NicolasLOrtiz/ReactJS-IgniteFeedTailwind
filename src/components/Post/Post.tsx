import React from "react";
import { ContentText } from "./ContentText";
import { ContentLink } from "./ContentLink";
import { Avatar } from "../Avatar";
import { CommentList } from "./CommentList";
import { PostDate } from "./PostDate";

export type PostProps = {
  post: {
    id: number;
    author: { avatarUrl: string; name: string; role: string };
    content: { type: string; content: string }[];
    publishedAt: Date;
  };
};

export const Post: React.FC<PostProps> = ({
  post: { id, author, content, publishedAt },
}) => {
  const [comments, setComments] = React.useState(["Post muito bacana, hein?!"]);
  const [newCommentText, setNewCommentText] = React.useState("");
  const isNewCommentEmpty = newCommentText.length === 0;

  const handleCrateNewComment = (event: React.FormEvent) => {
    event.preventDefault();

    setComments([...comments, newCommentText]);
    setNewCommentText("");
  };

  const handleNewCommentChange = (
    event: React.ChangeEvent<HTMLTextAreaElement>
  ) => {
    event.target.setCustomValidity("");
    setNewCommentText(event.target.value);
  };

  const handleNewCommentInvalid = (
    event: React.InvalidEvent<HTMLTextAreaElement>
  ) => {
    event.target.setCustomValidity("Esse campo é obrigatório!");
  };

  const deleteComment = (commentToDelete: string) => {
    const commentsWithoutDeletedOne = comments.filter(
      (comment) => comment !== commentToDelete
    );

    setComments(commentsWithoutDeletedOne);
  };

  return (
    <article className="bg-gray-800 rounded-md p-10 mt-8 first:mt-0">
      <header className="flex items-center justify-between">
        <div className="flex items-center gap-4">
          <Avatar size="md" src={author.avatarUrl} />

          <div className="flex flex-col">
            <strong className="text-gray-100 leading-6">{author.name}</strong>
            <span className="text-sm text-gray-400 leading-6">
              {author.role}
            </span>
          </div>
        </div>

        <PostDate date={publishedAt} />
      </header>

      <div className="leading-6 text-gray-300 mt-6">
        {content.map((line) => {
          if (line.type === "paragraph") {
            return <ContentText key={line.content}>{line.content}</ContentText>;
          }
          if (line.type === "link") {
            return (
              <ContentLink key={line.content} href="#">
                {line.content}
              </ContentLink>
            );
          }

          return null;
        })}
      </div>

      <form
        className="w-full mt-6 pt-6 border-t border-gray-600"
        onSubmit={handleCrateNewComment}
      >
        <strong className="leading-6 text-gray-100">Comentários</strong>
        <textarea
          placeholder="Deixe seu feedback"
          className="w-full bg-gray-900 border-2 border-gray-800 ring-1 ring-brand-500 resize-none h-24 p-4 rounded-md text-gray-100 leading-5 mt-4 peer"
          value={newCommentText}
          onChange={handleNewCommentChange}
          onInvalid={handleNewCommentInvalid}
        />
        <footer
          className={`${
            isNewCommentEmpty ? "invisible max-h-0" : "max-h-full"
          }`}
        >
          <button
            type="submit"
            className="bg-brand-500 text-white font-bold py-4 px-6 mt-4 rounded-md border-0 hover:bg-brand-300 transition-colors duration-200 ease-in-out"
            disabled={isNewCommentEmpty}
          >
            Publicar
          </button>
        </footer>
      </form>

      <div className="mt-8">
        <CommentList comments={comments} deleteComment={deleteComment} />
      </div>
    </article>
  );
};
