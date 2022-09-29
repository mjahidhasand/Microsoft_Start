import Reaction from "./Reaction";

const Summary = ({
  href,
  title,
  img,
  category,
  reaction,
  styles,
}: SummaryProps) => {
  const { name, url, image } = category;
  const { color, gradient } = styles;

  let style = {};
  if (gradient) {
    style = {
      "--color": color,
      "--gradientColor": gradient,
      "--gradientMidColor": `${gradient}cc`,
    };
  }

  return (
    <article title={title} style={style}>
      <img {...img} />

      <div>
        <div>
          <div></div>

          <div title={name}>
            <img {...image} />
            <a href={url}>{name}</a>
          </div>

          <a href={href} tabIndex={-1}>
            {title}
          </a>
        </div>
      </div>

      <span title={img.alt}>
        <svg width="14" height="14" viewBox="0 0 14 14">
          <path d="M8.5 4.5a1 1 0 1 0 0-2 1 1 0 0 0 0 2ZM0 3a3 3 0 0 1 3-3h6a3 3 0 0 1 3 3v6a3 3 0 0 1-3 3H3a3 3 0 0 1-3-3V3Zm3-2a2 2 0 0 0-2 2v6c0 .37.1.72.28 1.02l3.3-3.31a2 2 0 0 1 2.83 0l3.31 3.3A2 2 0 0 0 11 9V3a2 2 0 0 0-2-2H3Zm3.7 6.41a1 1 0 0 0-1.4 0l-3.32 3.31A2 2 0 0 0 3 11h6a2 2 0 0 0 1.02-.28L6.7 7.42ZM5 14a3 3 0 0 1-2.24-1H9.5A3.5 3.5 0 0 0 13 9.5V2.76A3 3 0 0 1 14 5v4.5A4.5 4.5 0 0 1 9.5 14H5Z"></path>
        </svg>
      </span>

      <button title="Hide this story">
        <svg width="16" height="16" viewBox="0 0 16 16">
          <path d="M11.4587 4.39737L11.5355 4.46449C11.804 4.73297 11.8264 5.15437 11.6027 5.44835L11.5355 5.52515L9.06066 8.00002L11.5355 10.4749C11.804 10.7434 11.8264 11.1648 11.6027 11.4588L11.5355 11.5356C11.267 11.804 10.8456 11.8264 10.5517 11.6027L10.4749 11.5356L8 9.06068L5.52513 11.5356C5.25664 11.804 4.83524 11.8264 4.54127 11.6027L4.46447 11.5356C4.19598 11.2671 4.17361 10.8457 4.39734 10.5517L4.46447 10.4749L6.93934 8.00002L4.46447 5.52515C4.19598 5.25666 4.17361 4.83526 4.39734 4.54129L4.46447 4.46449C4.73295 4.196 5.15435 4.17363 5.44832 4.39737L5.52513 4.46449L8 6.93936L10.4749 4.46449C10.7434 4.196 11.1648 4.17363 11.4587 4.39737Z"></path>
        </svg>
      </button>

      <dialog>
        <div></div>
      </dialog>

      <Reaction reaction={reaction} />
    </article>
  );
};

export default Summary;

export interface SummaryProps {
  href: string;
  title: string;
  img: { src: string; alt: string };
  category: { name: string; url: string; image: { src: string; alt: string } };
  reaction: {
    like: number;
    love: number;
    surprised: number;
    thinking: number;
    sad: number;
    angry: number;
  };
  styles: { color: string; gradient: string };
}
