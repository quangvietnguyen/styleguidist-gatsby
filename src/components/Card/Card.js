import React from "react";
import PropTypes from "prop-types";

import "./Card.css";

/**
 * The only true button.
 */
export default function Card({ color, size, children }) {
  const styles = {
    color,
    width: Card.sizes[size],
    height: Card.sizes[size],
  };

  return (
    <div className="card" style={styles}>
      {children}
    </div>
  );
}

Card.propTypes = {
  /** card content */
  children: PropTypes.node.isRequired,
  /** The color for the card */
  color: PropTypes.string,
  /** The size of the card */
  size: PropTypes.oneOf(["small", "normal", "large"]),
};

Card.defaultProps = {
  color: "#333",
  size: "normal",
};

Card.sizes = {
  small: "100px",
  normal: "200px",
  large: "300px",
};
