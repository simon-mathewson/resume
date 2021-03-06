import React from 'react';
import PropTypes from 'prop-types';
import { StyleSheet, View } from '@react-pdf/renderer';
import Typography from './Typography';

const styles = StyleSheet.create({
  bullet: {
    width: '2%'
  },
  root: {
    flexDirection: 'row',
    marginTop: 2,
    width: '100%'
  },
  text: {
    width: '98%'
  }
});

function ListItem(props) {
  return (
    <View style={styles.root}>
      <Typography
        style={styles.bullet}
        variant="body"
      >
        •
      </Typography>
      <Typography
        style={styles.text}
        variant="body"
      >
        {props.children}
      </Typography>
    </View>
  )
}

ListItem.propTypes = {
  children: PropTypes.node
}

export default ListItem;
