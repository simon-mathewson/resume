import React, { Fragment } from 'react';
import { StyleSheet, View } from '@react-pdf/renderer';
import Typography from './Typography';
import PropTypes from 'prop-types';
import ListItem from './ListItem';

const styles = StyleSheet.create({
  dateAndLocation: {
    marginTop: 2
  },
  employer: {
    marginTop: 4
  },
  employerDescription: {
    marginTop: 2
  }
});

function Experience(props) {
  const {employer, employerDescription, role, from, to, location, listItems} = props;

  return (
    <Fragment>
      <Typography
        bold
        color="primary"
        style={styles.employer}
        variant="h4"
      >
        {employer}
      </Typography>
      <Typography
        color="reduced"
        style={styles.dateAndLocation}
        variant="body"
      >
        {role && `${role} • `}{from}{to && `–${to}`} • {location}
      </Typography>
      <Typography
        style={styles.employerDescription}
        variant="body"
      >
        {employerDescription}
      </Typography>
      <View style={styles.list}>
        {listItems.map((listItem, listItemIndex) => (
          <ListItem key={listItemIndex}>
            {listItem}
          </ListItem>
        ))}
      </View>
    </Fragment>
  );
}

Experience.propTypes = {
  employer: PropTypes.string.isRequired,
  employerDescription: PropTypes.string,
  role: PropTypes.string,
  from: PropTypes.string.isRequired,
  to: PropTypes.string,
  location: PropTypes.string.isRequired,
  listItems: PropTypes.arrayOf(PropTypes.string).isRequired
}

export default Experience;
