import React from "react";
import PropTypes from "prop-types";
import { PropTypes as MobxPropTypes } from "mobx-react";

import "./TokenItem.css";

const TokenItem = ({ token, onClick }) => {
  return (
    <div className="TokenItem" onClick={onClick}>
      <div className="TokenItem-label">{`${token[0]} – ${token[1]}`}</div>
    </div>
  );
};

TokenItem.propTypes = {
  token: MobxPropTypes.arrayOrObservableArray,
  onClick: PropTypes.func
};

export default TokenItem;
