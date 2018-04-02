import React, { Fragment } from "react";
import PropTypes from "prop-types";
import { PropTypes as MobxPropTypes } from "mobx-react";
import { inject, observer } from "mobx-react";

import TokenItem from "./TokenItem";
import "./TokensList.css";

const TokensList = ({ gradientTokenStore: { tokens } }) => {
  return (
    <Fragment>
      {tokens.length ? (
        <div className="TokensList">
          {tokens.map(token => (
            <TokenItem key={token.index} token={token.gradient} />
          ))}
        </div>
      ) : (
        <div className="TokensList-label_empty">You don't have tokens yet.</div>
      )}
    </Fragment>
  );
};

TokensList.propTypes = {
  gradientTokenStore: PropTypes.shape({
    tokens: MobxPropTypes.arrayOrObservableArrayOf(PropTypes.object)
  })
};

export default inject("gradientTokenStore")(observer(TokensList));
