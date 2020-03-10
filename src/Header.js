import { Image, StyleSheet, View } from '@react-pdf/renderer';
import React from 'react';
import Typography from './Typography';

const styles = StyleSheet.create({
  attribute: {
    alignItems: 'center',
    flexDirection: 'row',
    marginTop: 4,
    width: '35%'
  },
  attributeIcon: {
    height: 12,
    opacity: .6,
    width: 12
  },
  attributes: {
    alignItems: 'center',
    flexDirection: 'row',
    flexWrap: 'wrap',
    marginTop: 6
  },
  attributeText: {
    marginLeft: 8
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  headerLeft: {
    flexShrink: 1,
    position: 'relative'
  },
  name: {
    marginTop: -4
  },
  portrait: {
    borderRadius: 48,
    height: 96,
    objectFit: 'cover',
    objectPositionY: -10,
    width: 96
  }
});

const attributes = [
  {
    icon: 'phone',
    link: 'tel:+491749428037',
    text: '+491749428037'
  },
  {
    icon: 'email',
    link: 'mailto:info@simonmathewson.com',
    text: 'info@simonmathewson.com'
  },
  {
    icon: 'website',
    link: 'https://simonmathewson.com',
    text: 'simonmathewson.com'
  },
  {
    icon: 'location',
    text: 'WA, USA & Berlin, Germany'
  }
]

function Header() {
  return (
    <View style={styles.header}>
      <View style={styles.headerLeft}>
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
          {attributes.map((attribute, attibuteIndex) => (
            <View
              key={attibuteIndex}
              style={styles.attribute}
            >
              <Image
                src={`/${attribute.icon}-icon.png`}
                style={styles.attributeIcon}
              />
              <Typography
                src={attribute.link}
                style={styles.attributeText}
                variant={attribute.link ? 'link' : 'body'}
              >
                {attribute.text}
              </Typography>
            </View>
          ))}
        </View>
      </View>
      <Image
        src="/portrait.jpg"
        style={styles.portrait}
      />
    </View>
  );
}

export default Header;
