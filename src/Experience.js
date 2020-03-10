import React, { Fragment } from 'react';
import { StyleSheet, View } from '@react-pdf/renderer';
import Typography from './Typography';
import PropTypes from 'prop-types';

const styles = StyleSheet.create({
  dateAndLocation: {
    marginTop: 2
  },
  description: {
    marginTop: 4
  },
  employer: {
    marginTop: 4
  }
});

function Experience(props) {
  const {employer, role, from, to, location, description} = props;

  return (
    <Fragment>
      <Typography
        bold
        color="primary"
        style={styles.employer}
        variant="h4"
      >
        {employer} ({role})
      </Typography>
      <View style={styles.dateAndLocation}>
        <Typography
          color="reduced"
          variant="body"
        >
          {from}{to && `–${to}`} in {location}
        </Typography>
      </View>
      <View style={styles.description}>
        {description}
      </View>
    </Fragment>
  );
}

Experience.propTypes = {
  employer: PropTypes.string.isRequired,
  role: PropTypes.string,
  from: PropTypes.string.isRequired,
  to: PropTypes.string,
  location: PropTypes.string.isRequired,
  description: PropTypes.node.isRequired
}

export default Experience;
