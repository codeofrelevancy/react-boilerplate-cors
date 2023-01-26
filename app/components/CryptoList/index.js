import React from 'react';
import PropTypes from 'prop-types';

import List from 'components/List';
import ListItem from 'components/ListItem';
import LoadingIndicator from 'components/LoadingIndicator';
import CryptoListItem from 'containers/CryptoListItem';

function CryptoList({ loading, error, cryptos }) {
  if (loading) {
    return <List component={LoadingIndicator} />;
  }

  if (error !== false && error !== null) {
    const ErrorComponent = () => (
      <ListItem item="Something went wrong, please try again!" />
    );
    return <List component={ErrorComponent} />;
  }

  if (cryptos !== false) {
    return <List items={cryptos} component={CryptoListItem} />;
  }

  return null;
}

CryptoList.propTypes = {
  loading: PropTypes.bool,
  error: PropTypes.any,
  cryptos: PropTypes.any,
};

export default CryptoList;
