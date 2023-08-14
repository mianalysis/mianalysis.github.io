interface Props {
  id: string;
}

export default function YouTubeVideo({ id }: Props) {
  return (
    <div className="aspect-video shadow-lg">
      <iframe
        src={`https://www.youtube-nocookie.com/embed/${id}`}
        title="YouTube video player"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
        className="h-full w-full"
      />
    </div>
  );
}
