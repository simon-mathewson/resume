import React from 'react';
import PropTypes from 'prop-types';
import { View, StyleSheet } from '@react-pdf/renderer';
import Typography from './Typography';

const styles = StyleSheet.create({
  chip: {
    backgroundColor: '#eee',
    borderRadius: 10,
    marginBottom: 2,
    marginRight: 4,
    marginTop: 4,
    padding: '4px 6px'
  },
  root: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    marginTop: 0
  }
});

function Chips(props) {
  return (
    <View style={styles.root}>
      {props.items.map((item, itemIndex) => (
        <Typography
          key={itemIndex}
          style={styles.chip}
          variant="body"
        >
          {item}
        </Typography>
      ))}
    </View>
  );
}

Chips.propTypes = {
  items: PropTypes.arrayOf(PropTypes.string).isRequired
}

export default Chips;
