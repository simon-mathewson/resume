import { StyleSheet, View } from '@react-pdf/renderer';
import React from 'react';
import Experience from './Experience';
import Typography from './Typography';
import Header from './Header';

const styles = StyleSheet.create({
  root: {
    width: '66%'
  },
  sectionTitle: {
    marginTop: 8
  }
});

function LeftSide() {
  return (
    <View style={styles.root}>
      <Header />
      <Typography
        style={styles.sectionTitle}
        variant="h2"
      >
        Experience
      </Typography>
      <Experience
        employer="Cosuno"
        employerDescription="Startup offering cloud-based tendering for construction companies"
        role="Full Stack Developer"
        from="2020"
        location="Berlin, Germany"
        listItems={[
          'Designed, implemented, reviewed and tested code in a Node.js backend and React.js frontend',
          'Cutting-edge stack including TypeScript, TypeORM, GraphQL, Sentry, AWS and Mailjet'
        ]}
      />
      <Experience
        employer="LE Commsulting"
        employerDescription="Software agency building web apps in art and education."
        role="Full Stack Developer"
        from="2018"
        to="2020"
        location="Berlin, Germany"
        listItems={[
          'Designed, implemented, tested and deployed the web version of a mobile quiz game for students as well as a corresponding CMS for teachers',
          'Helped to design, implement, test and deploy an archival software and public exhibition site for a major art research institute',
          'Built an open source library which allows converting between complex date strings and JavaScript objects',
          'Implemented AWS lambda functions'
        ]}
      />
      <Experience
        employer="Mathewson Metals"
        employerDescription="Family business which manufactures energy efficient gas forges for hobby and professional blacksmiths."
        role="Full Stack Developer"
        from="2017"
        to="now"
        location="WA, USA"
        listItems={[
          'Designed, implemented and deployed a web store and admin backend from scratch',
          'Created ads with Google AdWords, set up analytics via Google Analytics'
        ]}
      />
      <Experience
        employer="AVM"
        employerDescription="Largest router manufacturer in Germany."
        role="Full Stack Developer"
        from="2016"
        to="2017"
        location="Berlin, Germany"
        listItems={[
          'Maintained and implemented backend and frontend features for the UI\'s of routers, WiFi repeaters and smart home devices',
          'Designed and implemented custom add-ons for web-based customer service software Zendesk, optimized workflows for customer service agents'
        ]}
      />
      <Typography
        style={styles.sectionTitle}
        variant="h2"
      >
        Education
      </Typography>
      <Experience
        employer="Beuth University of Applied Sciences"
        employerDescription="Planned to aquire a B.Sc. in Computer Science, discontinued in favor of more valuable experiences."
        from="2016"
        to="2018"
        location="Berlin, Germany"
        listItems={[
          'Completed three semesters including computer science fundamentals, mathematics, algorithms, computer graphics and software engineering with top grades'
        ]}
      />
    </View>
  );
}

export default LeftSide;
