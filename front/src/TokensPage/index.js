import React from "react";
import Button from "components/Button";
import PropTypes from "prop-types";
import { inject, observer } from "mobx-react";
import "./TokensPage.css";

const TokensPage = ({ gradientTokenStore: { mintToken }, children }) => {
  return (
    <div className="TokensPage">
      <h1>Gradient Tokens</h1>
      <Button onClick={mintToken} label="Mint token" />
      <div className="TokensPage-tokens" />
    </div>
  );
};

TokensPage.propTypes = {
  gradientTokenStore: PropTypes.shape({
    mintToken: PropTypes.func
  }).isRequired
};

export default inject("gradientTokenStore")(observer(TokensPage));
