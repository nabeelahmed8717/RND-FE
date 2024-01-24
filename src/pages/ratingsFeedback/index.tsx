import type { NextPage } from "next";

// Components
import RatingFeedback from "../../modules/ratingsFeedback/RatingsFeedback";
import Layout from "../../modules/layout/layout/Layout";

// Component function starts here
const RatingsFeedback: NextPage = () => {
  return (
    <Layout>
      <RatingFeedback />
    </Layout>
  );
};

export default RatingsFeedback;