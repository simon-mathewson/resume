import { StyleSheet, View, Image } from '@react-pdf/renderer';
import PropTypes from 'prop-types';
import Typography from './Typography';
import React from 'react';

const styles = StyleSheet.create({
  icon: {
    height: 12,
    opacity: .6,
    width: 12
  },
  root: {
    alignItems: 'center',
    flexDirection: 'row',
    marginTop: 4,
    width: '40%'
  },
  text: {
    marginLeft: 8
  }
});

function Attribute(props) {
  const {icon, link, text} = props;

  return (
    <View style={styles.root}>
      <Image
        src={`/${icon}-icon.png`}
        style={styles.icon}
      />
      <Typography
        src={link}
        style={styles.text}
        variant={link ? 'link' : 'body'}
      >
        {text}
      </Typography>
    </View>
  );
}

Attribute.propTypes = {
  icon: PropTypes.string.isRequired,
  link: PropTypes.string,
  text: PropTypes.string.isRequired
}

export default Attribute;
