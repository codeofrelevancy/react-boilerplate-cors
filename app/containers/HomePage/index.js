/*
 * HomePage
 *
 * This is the first thing users see of our App, at the '/' route
 */

import React, { memo, useEffect } from 'react';
import PropTypes from 'prop-types';
import { Helmet } from 'react-helmet';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { createStructuredSelector } from 'reselect';

import { useInjectReducer } from 'utils/injectReducer';
import { useInjectSaga } from 'utils/injectSaga';

import H1 from 'components/H1';
import CryptoList from 'components/CryptoList';

import {
  makeSelectCryptos,
  makeSelectLoading,
  makeSelectError,
} from './selectors';
import { loadCryptosAction } from './actions';
import reducer from './reducer';
import saga from './saga';

const key = 'home';

export function HomePage({ loading, error, cryptos, onLoadCryptos }) {
  useInjectReducer({ key, reducer });
  useInjectSaga({ key, saga });

  useEffect(() => {
    onLoadCryptos();
  }, []);

  const cryptoListProps = {
    loading,
    error,
    cryptos,
  };

  return (
    <article>
      <Helmet>
        <title>Home Page</title>
        <meta
          name="description"
          content="A React.js Boilerplate application homepage"
        />
      </Helmet>
      <H1>Cryptocurrencies</H1>
      <CryptoList {...cryptoListProps} />
    </article>
  );
}

HomePage.propTypes = {
  loading: PropTypes.bool,
  error: PropTypes.oneOfType([PropTypes.object, PropTypes.bool]),
  cryptos: PropTypes.oneOfType([PropTypes.array, PropTypes.bool]),
  onLoadCryptos: PropTypes.func,
};

const mapStateToProps = createStructuredSelector({
  cryptos: makeSelectCryptos(),
  loading: makeSelectLoading(),
  error: makeSelectError(),
});

export function mapDispatchToProps(dispatch) {
  return {
    onLoadCryptos: () => dispatch(loadCryptosAction()),
  };
}

const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps,
);

export default compose(
  withConnect,
  memo,
)(HomePage);
