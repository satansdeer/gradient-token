import React from "react";
import Button from "components/Button";
import PropTypes from "prop-types";
import WithLoader from "components/WithLoader";
import TokensList from "./TokensList";
import { inject, observer } from "mobx-react";
import "./TokensPage.css";

const TokensPage = ({ gradientTokenStore: { mintToken, isLoading } }) => {
  return (
    <div className="TokensPage">
      <h1>Gradient Tokens</h1>
      <Button onClick={mintToken} label="Mint token" />
      <div className="TokensPage-tokens">
        <WithLoader isLoading={isLoading}>
          <TokensList />
        </WithLoader>
      </div>
    </div>
  );
};

TokensPage.propTypes = {
  gradientTokenStore: PropTypes.shape({
    mintToken: PropTypes.func
  }).isRequired
};

export default inject("gradientTokenStore")(observer(TokensPage));
