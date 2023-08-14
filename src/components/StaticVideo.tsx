interface Props {
  url: string;
}

export default function StaticVideo({ url }: Props) {
  return (
    <div className="aspect-video">
      <video controls autoPlay muted loop>
        <source src={url} type="video/mp4" />
        Your browser does not support this type of video.
        <br />
        This video can be downloaded from <a href={url}>here</a>
      </video>
    </div>
  );
}
