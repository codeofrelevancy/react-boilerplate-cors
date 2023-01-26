/**
 * CryptoListItem
 *
 * Lists the symbol and the last price of a crypto
 */

import React from 'react';
import PropTypes from 'prop-types';
import { FormattedNumber } from 'react-intl';

import ListItem from 'components/ListItem';
import Wrapper from './Wrapper';

export function CryptoListItem(props) {
  const { item } = props;

  // Put together the content of the crypto
  const content = (
    <Wrapper>
      <span>{item.symbol}</span>
      <span>
        $<FormattedNumber value={item.lastPrice} />
      </span>
    </Wrapper>
  );

  // Render the content into a list item
  return <ListItem key={`crypto-list-item-${item.symbol}`} item={content} />;
}

CryptoListItem.propTypes = {
  item: PropTypes.object,
};

export default CryptoListItem;
