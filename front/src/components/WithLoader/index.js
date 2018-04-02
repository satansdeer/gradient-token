import React from "react";
import PropTypes from "prop-types";

import Loader from "./Loader";

const WithLoader = ({ isLoading, children, ...rest }) =>
  isLoading ? <Loader {...rest} /> : children;

WithLoader.propTypes = {
  isLoading: PropTypes.bool
};

WithLoader.defaultProps = {
  isLoading: false
};

export default WithLoader;
