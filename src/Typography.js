import React from 'react';
import { Text, StyleSheet, Font, Link } from '@react-pdf/renderer';
import PropTypes from 'prop-types';

Font.register({
  family: 'Lexend Deca',
  src: 'http://localhost:3000/lexend-deca-regular.ttf'
});

Font.register({
  family: 'Roboto',
  fonts: [
    {src: 'http://localhost:3000/roboto-regular.ttf'},
    {
      src: 'http://localhost:3000/roboto-medium.ttf',
      fontWeight: 500
    }
  ]
});

const styles = StyleSheet.create({
  h1: {
    fontFamily: 'Lexend Deca',
    fontSize: 32,
    letterSpacing: -1,
    marginLeft: -1
  },
  h2: {
    fontFamily: 'Lexend Deca',
    fontSize: 20,
    letterSpacing: -1,
    marginLeft: -1
  },
  h3: {
    fontFamily: 'Roboto',
    fontSize: 15
  },
  h4: {
    fontFamily: 'Roboto',
    fontSize: 13
  },
  link: {
    fontSize: 10,
    textDecoration: 'underline',
    textDecorationColor: '#666',
    textDecorationStyle: 'dotted'
  },
  body: {
    fontSize: 10
  },
  small: {
    fontSize: 8
  }
});

const colors = {
  default: '#444',
  primary: '#2196f3',
  reduced: '#888'
};

function Typography(props) {
  const {bold, children, color, debug, src, style, variant} = props;
  const rootProps = {
    debug,
    style: {
      ...styles[variant],
      ...style,
      color: colors[color],
      fontWeight: bold ? 500 : 400
    }
  };

  if (variant === 'link') {
    return (
      <Link src={src}>
        <Text {...rootProps}>
          {children}
        </Text>
      </Link>
    );
  }
  return (
    <Text {...rootProps}>
      {children}
    </Text>
  );
}

Typography.defaultProps = {
  color: 'default'
};

Typography.propTypes = {
  children: PropTypes.node,
  bold: PropTypes.bool,
  color: PropTypes.oneOf(['default', 'primary', 'reduced']),
  debug: PropTypes.bool,
  src: PropTypes.string,
  style: PropTypes.object,
  variant: PropTypes
      .oneOf(['h1', 'h2', 'h3', 'h4', 'link', 'body', 'small'])
      .isRequired
};

export default Typography;
