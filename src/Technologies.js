import React from 'react';
import { View, StyleSheet } from '@react-pdf/renderer';
import Typography from './Typography';
import Chips from './Chips';

const styles = StyleSheet.create({
  root: {
    paddingLeft: 16,
    width: '34%'
  },
  sectionHeading: {
    marginTop: 4
  }
});

function Technologies() {
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
    </View>
  );
}

export default Technologies;
