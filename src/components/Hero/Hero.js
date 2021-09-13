import React from 'react';

import { Section, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import Button from '../../styles/GlobalComponents/Button';
import { LeftSection } from './HeroStyles';

const Hero = (props) => (
  <Section row nopadding>
    <LeftSection>
      <SectionTitle main center>
        Welcome to <br />
        My Personal Portfolio
      </SectionTitle>
      <SectionText>
        The purpose of Cutlerwater IT Blog is to assist new or experienced web developers take their own skills to higher level and master their own applications and web projects.
      </SectionText>
      <Button onClick={() => window.location = 'https://youtube.com'}>Learn More</Button>
    </LeftSection>
  </Section>
);

export default Hero;