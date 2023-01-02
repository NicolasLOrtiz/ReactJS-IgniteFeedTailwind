import { format, formatDistanceToNow } from "date-fns";
import ptBR from "date-fns/locale/pt-BR";
import React from "react";

type PostDateProps = {
  date: Date;
};

export const PostDate: React.FC<PostDateProps> = ({ date }) => {
  const publishedDateFormatted = format(date, "d 'de' LLLL 'às' HH:mm'h'", {
    locale: ptBR,
  });

  const publishedDateRelativeToNow = formatDistanceToNow(date, {
    locale: ptBR,
    addSuffix: true,
  });

  return (
    <time
      title={publishedDateFormatted}
      dateTime={date.toISOString()}
      className="text-sm text-gray-400"
    >
      {publishedDateRelativeToNow}
    </time>
  );
};
