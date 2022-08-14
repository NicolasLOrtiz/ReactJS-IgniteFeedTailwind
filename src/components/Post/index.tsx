import React from "react";
import { ContentText } from "./ContentText";
import { ContentLink } from "./ContentLink";
import { Avatar } from "../Avatar";
import { PostDate } from "./PostDate";
import { CommentList } from "./CommentList";

export const Index: React.FC = () => (
  <article className="bg-gray-800 rounded-md p-10 mt-8 first:mt-0">
    <header className="flex items-center justify-between">
      <div className="flex items-center gap-4">
        <Avatar size="md" src="https://github.com/NicolasLOrtiz.png" />

        <div className="flex flex-col">
          <strong className="text-gray-100 leading-6">
            Nícolas Lopes Ortiz
          </strong>
          <span className="text-sm text-gray-400 leading-6">Web Developer</span>
        </div>
      </div>

      <PostDate />
    </header>

    <div className="leading-6 text-gray-300 mt-6">
      <ContentText>Fala galeraa 👋</ContentText>
      <ContentText>
        Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no
        NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀
      </ContentText>
      <ContentText>
        👉
        <ContentLink href="src/components/Post/Post#index.tsx">
          jane.design/doctorcare
        </ContentLink>
      </ContentText>
      <ContentText>
        <ContentLink href="src/components/Post/Post#index.tsx">
          #novoprojeto
        </ContentLink>{" "}
        <ContentLink href="src/components/Post/Post#index.tsx">
          #nlw
        </ContentLink>{" "}
        <ContentLink href="src/components/Post/Post#index.tsx">
          #rocketseat
        </ContentLink>
      </ContentText>
    </div>

    <form className="w-full mt-6 pt-6 border-t border-gray-600">
      <strong className="leading-6 text-gray-100">Comentários</strong>
      <textarea
        placeholder="Deixe seu feedback"
        className="w-full bg-gray-900 border-2 border-gray-800 ring-1 ring-brand-500 resize-none h-24 p-4 rounded-md text-gray-100 leading-5 mt-4 peer"
      />
      <footer className="invisible max-h-0 peer-focus:visible peer-focus:max-h-full">
        <button
          type="submit"
          className="bg-brand-500 text-white font-bold py-4 px-6 mt-4 rounded-md border-0 hover:bg-brand-300 transition-colors duration-200 ease-in-out"
        >
          Publicar
        </button>
      </footer>
    </form>

    <div className="mt-8">
      <CommentList />
    </div>
  </article>
);
