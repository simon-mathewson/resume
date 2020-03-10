import { StyleSheet, View, Image } from '@react-pdf/renderer';
import React from 'react';
import Chips from './Chips';
import Typography from './Typography';

const styles = StyleSheet.create({
  chipsHeading: {
    marginTop: 4
  },
  gitHubHint: {
    marginTop: 8
  },
  gitHubLink: {
    fontSize: 8
  },
  languagesHeading: {
    marginBottom: 4,
    marginTop: 8
  },
  portrait: {
    borderRadius: 45,
    height: 90,
    marginLeft: -2,
    marginTop: -2,
    objectFit: 'cover',
    objectPositionY: -10,
    width: 90
  },
  root: {
    paddingLeft: 24,
    width: '34%'
  },
  technologiesHeading: {
    marginTop: 8
  }
});

function RightSide() {
  return (
    <View style={styles.root}>
      <Image
        src="/portrait.jpg"
        style={styles.portrait}
      />
      <Typography
        style={styles.technologiesHeading}
        variant="h2"
      >
        Technologies
      </Typography>
      <Typography
        bold
        color="primary"
        style={styles.chipsHeading}
        variant="h4"
      >
        Frontend
      </Typography>
      <Chips items={[
        'JavaScript',
        'TypeScript',
        'React',
        'Angular',
        'NPM',
        'SCSS',
        'Webpack',
        'Redux',
        'Jasmine/Karma'
      ]} />
      <Typography
        bold
        color="primary"
        style={styles.chipsHeading}
        variant="h4"
      >
        Backend
      </Typography>
      <Chips items={[
        'Node.js',
        'Express.js',
        'TypeORM',
        'MySQL',
        'DynamoDB',
        'Lua',
        'Swagger/OpenAPI',
        'AWS',
        'Google Cloud',
        'Firebase'
      ]} />
      <Typography
        bold
        color="primary"
        style={styles.chipsHeading}
        variant="h4"
      >
        Also
      </Typography>
      <Chips items={[
        'Git',
        'GitLab CI',
        'Bitbucket Pipelines',
        'Linux',
        'Bash',
        'Python'
      ]} />
      <Typography
        style={styles.languagesHeading}
        variant="h2"
      >
        Languages
      </Typography>
      <Chips items={[
        'English (fluent)',
        'German (native)'
      ]} />
      <Typography
        color="reduced"
        style={styles.gitHubHint}
        variant="small"
      >
        {'I made this resume using React.\nYou can view the full source code at'}
      </Typography>
      <Typography
        color="reduced"
        src="https://github.com/simon-mathewson/resume"
        style={styles.gitHubLink}
        variant="link"
      >
        github.com/simon-mathewson/resume
      </Typography>
    </View>
  );
}

export default RightSide;
