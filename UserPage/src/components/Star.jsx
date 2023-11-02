import { Rating } from "@mui/material";

import PropTypes from "prop-types";
const Star = ({ rating }) => {
  const numStars = Math.floor(rating);

  if (rating % 1 === 0) {
    return <Rating name="read-only" value={numStars} readOnly />;
  }
  return (
    <Rating name="half-rating" defaultValue={2.5} precision={0.5} readOnly />
  );
};

Star.propTypes = {
  rating: PropTypes.number.isRequired,
};

export default Star;
