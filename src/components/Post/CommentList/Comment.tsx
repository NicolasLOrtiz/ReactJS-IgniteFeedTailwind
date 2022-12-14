/* eslint-disable no-octal-escape */
import React from "react";
import { ThumbsUp, Trash } from "phosphor-react";
import { Avatar } from "../../Avatar";

type CommentProps = {
  content: string;
  onDeleteComment: (commentToDelete: string) => void;
};

export const Comment: React.FC<CommentProps> = ({
  content,
  onDeleteComment,
}) => {
  const [likeCount, setLikeCount] = React.useState(0);

  function handleDeleteComment() {
    onDeleteComment(content);
  }

  function handleLikeComment() {
    setLikeCount((state) => state + 1);
  }

  return (
    <div className="mt-6 flex gap-4">
      <Avatar src="https://github.com/NicolasLOrtiz.png" borderless />

      <div className="flex-1">
        <div className="bg-gray-700 rounded-lg p-4">
          <header className="flex items-start justify-between">
            <div className="flex flex-col ">
              <strong className="leading-relaxed">Nícolas Lopes Ortiz</strong>
              {/* <PostDate /> */}
            </div>

            <button
              title="Deletar comentário"
              type="button"
              className="bg-transparent rounded-sm hover:text-red-500 transition-colors duration-200 ease-in-out"
              onClick={handleDeleteComment}
            >
              <Trash size={24} />
            </button>
          </header>

          <p className="mt-4 text-gray-300">{content}</p>
        </div>

        <footer className="mt-4">
          <button
            type="button"
            className="bg-transparent text-gray-400 rounded-sm flex items-center hover:text-brand-300 transition-colors duration-200 ease-in-out"
            onClick={handleLikeComment}
          >
            <ThumbsUp size={20} className="mr-3" /> Aplaudir{" "}
            <span className="before:px-2 before:content-['\2022']">
              {likeCount}
            </span>
          </button>
        </footer>
      </div>
    </div>
  );
};
