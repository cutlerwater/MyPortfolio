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
        I am only using it to further my web development skills and to just see what I can do.  This is not currently meant to be a side gig to make money.  It is a way to show off, but also to learn and to 
        put my skills into some kind of action.
      </SectionText>
      <SectionText>
        Some other ideas I have to try to implement are a music player, more 3d fun stuff, more CSS work, an E-commerce (tried this several times already) site, an updated news site,
         an Instagram type clone, a netflix clone, some youtube videos, an e-learning site, etc...
      </SectionText>
      <SectionText>
        If you have any ideas, suggestions, comments, questions, please let me know at cutlerwater2@live.com and please, if you would, go to my GitHub site at https://github.com/cutlerwater and star some of my 
        repositories.  It would help a lot.  
      </SectionText>
      <Button onClick={() => window.location = 'https://youtube.com'}>Learn More</Button>
    </LeftSection>
  </Section>
);

export default Hero;