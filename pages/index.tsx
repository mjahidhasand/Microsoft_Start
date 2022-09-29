import type { NextPage } from "next";
import Feed from "../components/Feed";
import { SummaryProps } from "../components/Summary";

const Home: NextPage<HomeProps> = ({ summaries }) => {
  return <Feed summaries={summaries} />;
};

export default Home;

export const getStaticProps = async () => {
  const response = await fetch(`http://localhost:4000/summary`);
  const summaries = await response.json();

  return {
    props: { summaries },
  };
};

interface HomeProps {
  summaries: SummaryProps[];
}
