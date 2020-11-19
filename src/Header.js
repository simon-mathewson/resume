import { StyleSheet, View } from '@react-pdf/renderer';
import React from 'react';
import Attribute from './Attribute';
import Typography from './Typography';

const styles = StyleSheet.create({
  attributes: {
    alignItems: 'center',
    flexDirection: 'row',
    flexWrap: 'wrap',
    marginTop: 6
  },
  name: {
    marginTop: -8
  }
});

function Header() {
  return (
    <View>
      <Typography
        style={styles.name}
        variant="h1"
      >
        Simon Mathewson
      </Typography>
      <Typography
        bold
        color="primary"
        variant="h3"
      >
        Full Stack Software Developer
      </Typography>
      <View style={styles.attributes}>
        <Attribute
          icon="phone"
          link="tel:+491749428037"
          text="+491749428037"
        />
        <Attribute
          icon="email"
          link="mailto:info@simonmathewson.com"
          text="info@simonmathewson.com"
        />
        <Attribute
          icon="website"
          link="https://simonmathewson.com"
          text="simonmathewson.com"
        />
        <Attribute
          icon="location"
          text="Berlin, Germany"
        />
      </View>
    </View>
  );
}

export default Header;
