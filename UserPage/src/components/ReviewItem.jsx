import Star from "./Star";
import { format } from "date-fns";
import PropTypes from "prop-types";

const ReviewItem = ({ review }) => {
  return (
    <div>
      <div className="review-item">
        <img
          className="img-review"
          src="https://img.freepik.com/premium-vector/avatar-profile-icon-vector-illustration_276184-165.jpg"
        />
        <div>
          <div>{review.user.lastName}</div>
          <Star rating={review.star} />
        </div>
      </div>
      <div className="review-date">
        {format(new Date(review.createdAt), "d-M-yyyy")}
      </div>
      <div className="review-content">{review.content}</div>
    </div>
  );
};
ReviewItem.propTypes = {
  review: PropTypes.object.isRequired,
};

export default ReviewItem;
