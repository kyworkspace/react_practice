import React from "react";
import PropTypes from "prop-types";
import Button from "../04/Button";
import { Consumer } from "./LoadingProviderWithNewContext";

function ButtonWithConsumer({ children }) {
  return (
    <React.Fragment>
      <Consumer>
        {(contextValue) => (
          <Button>{contextValue.loading ? "로딩중" : children}</Button>
        )}
      </Consumer>

      <Consumer
        children={({ loading2 = false, setLoading }) => (
          <Button onPress={() => setLoading("loading2", !loading)}>
            {loading2 ? "로딩2중" : children}
          </Button>
        )}
      />
      <Consumer
        children={({ loading = false, loading2 = false }) => (
          <Button>{loading && loading2 ? "둘다 로딩중" : children}</Button>
        )}
      />
    </React.Fragment>
  );
}
