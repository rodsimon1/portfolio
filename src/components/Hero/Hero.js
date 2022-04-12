import React from 'react';

import { Section, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import Button from '../../styles/GlobalComponents/Button';
import { LeftSection, ProfilePicture, ProfilePictureContainer } from './HeroStyles';

const Hero = () => (
  <Section row nopadding>
    <LeftSection>
      <SectionTitle main center>
        Rodrigo Simon's <br />
        Personal Portfolio
      </SectionTitle>
      <ProfilePictureContainer>
        <ProfilePicture src="/images/profile_picture.jpg" alt="Profile Picture" />
      </ProfilePictureContainer>

      <SectionText>
        Former video editor turned developer, I'm always eager to learn and thrive in challeging scenarios that allows for
        constant growth.
      </SectionText>
      <Button
        onClick={() =>
          window.open('https://www.linkedin.com/in/rodrigo-simon/', '_blank') ||
          window.location.replace('https://www.linkedin.com/in/rodrigo-simon/')
        }
      >
        Learn More
      </Button>
    </LeftSection>
  </Section>
);

export default Hero;
