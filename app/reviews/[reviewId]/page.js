import { notFound } from "next/navigation";

const ReviewPage = ({ params }) => {
  console.log(params.reviewId);
  if (parseInt(params.reviewId) > 1000) {
    notFound();
  }
  return <div>Reviews {params.reviewId}</div>;
};

export default ReviewPage;
