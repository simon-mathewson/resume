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
        employer="LE Commsulting"
        employerDescription="Software agency building web apps in art and education."
        role="Full Stack Developer"
        from="2018"
        to="now"
        location="Berlin, Germany"
        listItems={[
          'Independently designed, implemented, tested and deployed the web version of a mobile quiz game for students as well as a corresponding CMS for teachers',
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
          'Independently designed, implemented and deployed a web store and admin backend from scratch',
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
          'Designed and implemented custom add-ons for web-based customer service software Zendesk, optimizing workflows and saving fellow employees hundreds of clicks every day since'
        ]}
      />
      <Experience
        employer="Zeichen & Taten"
        employerDescription="Office for graphic design and communication."
        role="Graphic Design Intern"
        from="2013"
        location="Berlin, Germany"
        listItems={[
          'Learned how to professionally use Adobe Illustrator'
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
