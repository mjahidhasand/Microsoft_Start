import Summary, { SummaryProps } from "./Summary";

const Feed = ({ summaries }: FeedProps) => {
  return (
    <main id="feed">
      {summaries.map(({ id, ...rest }) => (<Summary key={id} {...rest} />))}
    </main>
  );
};

export default Feed;

interface FeedProps {
  summaries: SummaryProps[];
}
