import React, { Fragment } from "react";
import PropTypes from "prop-types";
import { PropTypes as MobxPropTypes } from "mobx-react";
import { inject, observer } from "mobx-react";

import TokenItem from "./TokenItem";
import TokenView from "./TokenView";
import "./TokensList.css";

const TokensList = ({
  gradientTokenStore: { tokens },
  modalStore: { showModal }
}) => {
  return (
    <Fragment>
      {tokens.length ? (
        <div className="TokensList">
          {tokens.map(token => (
            <TokenItem
              key={token.index}
              token={token.gradient}
              onClick={() => showModal(<TokenView token={token.gradient} />)}
            />
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
  }),
  modalStore: PropTypes.shape({
    showModal: PropTypes.func
  })
};

export default inject("gradientTokenStore", "modalStore")(observer(TokensList));
