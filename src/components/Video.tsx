interface Props {
  id: string;
}

export default function Video({ id }: Props) {
  return (
    <iframe
      className="w-full"
      src={`https://www.youtube-nocookie.com/embed/${id}`}
      title="YouTube video player"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
      allowFullScreen
    />
  );
}
