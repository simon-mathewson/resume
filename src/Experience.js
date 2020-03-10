import { View, StyleSheet } from '@react-pdf/renderer';
import React, { Fragment } from 'react';
import Typography from './Typography';
import ListItem from './ListItem';

const experiences = [
  {
    employer: 'LE Commsulting',
    role: 'Full Stack',
    from: '2018',
    to: 'now',
    location: 'Berlin, Germany',
    description: (
      <Fragment>
        <Typography variant="body">
          Software agency building web apps in art and education.
        </Typography>
        <ListItem>
          Independently designed, implemented, tested and deployed the web version of a mobile quiz game for students as well as a corresponding CMS for teachers
        </ListItem>
        <ListItem>
          Helped to design, implement, test and deploy an archival software and public exhibition site for a major art research institute
        </ListItem>
        <ListItem>
          Built an open source library which allows converting between complex date strings and JavaScript objects
        </ListItem>
        <ListItem>
          Implemented AWS lambda functions
        </ListItem>
      </Fragment>
    )
  },
  {
    employer: 'Mathewson Metals',
    role: 'Full Stack',
    from: '2017',
    to: 'now',
    location: 'WA, USA',
    description: (
      <Fragment>
        <Typography variant="body">
          Family business which manufactures energy efficient gas forges for hobby and professional blacksmiths.
        </Typography>
        <ListItem>
          Independently designed, implemented and deployed a web store and admin backend from scratch
        </ListItem>
        <ListItem>
          Created ads with Google AdWords, set up analytics via Google Analytics
        </ListItem>
      </Fragment>
    )
  },
  {
    employer: 'AVM',
    role: 'Full Stack',
    from: '2016',
    to: '2017',
    location: 'Berlin, Germany',
    description: (
      <Fragment>
        <Typography variant="body">
          Largest router manufacturer in Germany.
        </Typography>
        <ListItem>
          Maintained and implemented backend and frontend features for the UI's of routers and other networking devices
        </ListItem>
        <ListItem>
          Designed and implemented custom add-ons for web-based customer service software Zendesk, optimizing workflows and saving fellow employees hundreds of clicks every day since
        </ListItem>
      </Fragment>
    )
  },
  {
    employer: 'Zeichen & Taten',
    role: 'Graphic Design Intern',
    from: '2013',
    location: 'Berlin, Germany',
    description: (
      <Fragment>
        <Typography variant="body">
          Office for graphic design and communication.
        </Typography>
        <ListItem>
          Learned how to professionally use Adobe Illustrator
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
  educationTitle: {
    marginTop: 8
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
      <Typography
        style={styles.educationTitle}
        variant="h2"
      >
        Education
      </Typography>
      <Typography
        bold
        color="primary"
        style={styles.employer}
        variant="h4"
      >
        Beuth University of Applied Sciences
      </Typography>
      <View style={styles.dateAndLocation}>
        <Typography
          color="reduced"
          variant="body"
        >
          2016–2018 in Berlin, Germany
        </Typography>
      </View>
      <View style={styles.description}>
        <Typography variant="body">
          Planned to aquire a B.Sc. in Computer Science, discontinued in favor of more valuable experiences.
        </Typography>
        <ListItem>
          Completed three semesters including computer science fundamentals, mathematics, algorithms, computer graphics and software engineering with top grades
        </ListItem>
      </View>
    </View>
  );
}

export default Experience;
