import { View, StyleSheet } from '@react-pdf/renderer';
import React, { Fragment } from 'react';
import Typography from './Typography';
import ListItem from './ListItem';

const experiences = [
  {
    role: 'Full Stack',
    employer: 'LE Commsulting',
    from: '2018',
    to: 'now',
    location: 'Berlin, Germany',
    description: (
      <Fragment>
        <Typography variant="body">
          Software agency building web apps in art and education.
        </Typography>
        <ListItem>
          Independently designed, implemented, tested and deployed a complex content management system for a quiz app
        </ListItem>
        <ListItem>
          Independently designed, implemented, tested and deployed web version of a mobile quiz app
        </ListItem>
        <ListItem>
          Helped to design, implement, test and deploy an archival software for the art research institute WPI
        </ListItem>
        <ListItem>
          Built an open source library which allows converting between complex date strings and JavaScript objects
        </ListItem>
        <ListItem>
          Implemented AWS lambda functions
        </ListItem>
      </Fragment>
    )
  }
];

const styles = StyleSheet.create({
  dateAndLocation: {
    marginTop: 2
  },
  description: {
    marginTop: 4
  },
  employer: {
    marginTop: 4
  },
  root: {
    width: '66%'
  }
});

function Experience() {
  return (
    <View style={styles.root}>
      <Typography variant="h2">
        Experience
      </Typography>
      {experiences.map((experience, experienceIndex) => (
        <Fragment key={experienceIndex}>
          <Typography
            bold
            color="primary"
            style={styles.employer}
            variant="h4"
          >
            {experience.employer} ({experience.role})
          </Typography>
          <View style={styles.dateAndLocation}>
            <Typography
              color="reduced"
              variant="body"
            >
              {experience.from}{experience.to && `–${experience.to}`} in {experience.location}
            </Typography>
          </View>
          <View style={styles.description}>
            {experience.description}
          </View>
        </Fragment>
      ))}
    </View>
  );
}

export default Experience;
