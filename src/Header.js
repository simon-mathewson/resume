import React from 'react';
import { View, Text, Image, StyleSheet } from '@react-pdf/renderer';

const styles = StyleSheet.create({
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  name: {
    fontFamily: 'Lexend Deca',
    fontSize: 32
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
    fontSize: 16,
    fontWeight: 500,
    marginTop: 2
  }
});

function Header() {
  return (
    <View style={styles.header}>
      <View>
        <Text style={styles.name}>
          Simon Mathewson
        </Text>
        <Text style={styles.role}>
          Full Stack Software Developer
        </Text>
      </View>
      <View>
        <Image
          src="/portrait.jpg"
          style={styles.portrait}
        />
      </View>
    </View>
  );
}

export default Header;
