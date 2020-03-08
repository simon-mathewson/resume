import { Image, StyleSheet, Text, View, Link } from '@react-pdf/renderer';
import React from 'react';

const styles = StyleSheet.create({
  attribute: {
    alignItems: 'center',
    flexDirection: 'row',
    marginTop: 4,
    width: '50%'
  },
  attributeIcon: {
    height: 12,
    opacity: .6,
    width: 12
  },
  attributeLink: {
    textDecorationColor: '#666',
    textDecorationStyle: 'dotted'
  },
  attributes: {
    alignItems: 'center',
    flexDirection: 'row',
    flexWrap: 'wrap',
    marginTop: 6
  },
  attributeText: {
    fontSize: 11,
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
    fontFamily: 'Lexend Deca',
    fontSize: 32,
    marginTop: -4
  },
  portrait: {
    borderRadius: 48,
    height: 96,
    objectFit: 'cover',
    objectPositionY: -10,
    width: 96
  },
  role: {
    color: '#2196f3',
    fontSize: 15,
    fontWeight: 500,
    marginTop: 0
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
    icon: 'location',
    text: 'WA, USA & Berlin, Germany'
  },
  {
    icon: 'website',
    link: 'https://simonmathewson.com',
    text: 'simonmathewson.com'
  }
]

function Header() {
  return (
    <View style={styles.header}>
      <View style={styles.headerLeft}>
        <Text style={styles.name}>
          Simon Mathewson
        </Text>
        <Text style={styles.role}>
          Full Stack Software Developer
        </Text>
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
              <Text style={styles.attributeText}>
                {attribute.link &&
                  <Link
                    src={attribute.link}
                    style={styles.attributeLink}
                  >
                    {attribute.text}
                  </Link>
                }
                {!attribute.link && attribute.text}
              </Text>
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
