import { StyleSheet, View } from '@react-pdf/renderer';
import React from 'react';
import Chips from './Chips';
import Typography from './Typography';

const styles = StyleSheet.create({
  gitHubHint: {
    marginTop: 8
  },
  gitHubLink: {
    fontSize: 8
  },
  languagesHeading: {
    marginBottom: 4,
    marginTop: 4
  },
  root: {
    paddingLeft: 24,
    width: '34%'
  },
  sectionHeading: {
    marginTop: 4
  }
});

function RightSide() {
  return (
    <View style={styles.root}>
      <Typography variant="h2">
        Technologies
      </Typography>
      <Typography
        bold
        color="primary"
        style={styles.sectionHeading}
        variant="h4"
      >
        Frontend
      </Typography>
      <Chips items={[
        'JavaScript',
        'TypeScript',
        'React',
        'Angular',
        'SCSS',
        'Webpack',
        'Redux',
        'NPM',
        'Jasmine/Karma'
      ]} />
      <Typography
        bold
        color="primary"
        style={styles.sectionHeading}
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
        style={styles.sectionHeading}
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
