import { Slider, Typography } from "@material-ui/core";
import PropTypes from "prop-types";
const PriceRange = ({ value, setValue }) => {
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <div style={{ maxWidth: 300, margin: "auto" }}>
      <Typography gutterBottom style={{ fontSize: "16px" }}>
        Price Range:
      </Typography>
      <Slider
        value={value}
        onChange={handleChange}
        valueLabelDisplay="auto"
        min={0}
        max={1000}
        style={{ fontSize: "16px" }}
      />

      <Typography gutterBottom style={{ fontSize: "16px" }}>
        ${value[0]} - ${value[1]}
      </Typography>
    </div>
  );
};

PriceRange.propTypes = {
  value: PropTypes.arrayOf(PropTypes.number).isRequired,
  setValue: PropTypes.func.isRequired,
};

export default PriceRange;
