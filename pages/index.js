import React, { Component } from 'react';
import styled from 'styled-components';
import { space, width } from 'styled-system';
import { rgba } from 'polished';

import Grid, { GridCell } from '../components/Grid';
import FONTS from '../constants/fonts';
import COLORS from '../constants/colors';
import Logo, { SayMyMame } from '../components/Logo';
import Title from '../components/Title';
import Paragraph from '../components/Paragraph';
import Link from '../components/Link';
import Job, { Jobs } from '../components/Job';
import SwipeLink from '../components/SwipeLink';
import CopyText from '../components/CopyText';
import List, { ListItem } from '../components/List';
import Social, { SocialLink } from '../components/Social';

const Wrapper = styled.div`
  position: relative;
  background-color: ${COLORS.ANTHRACITE};
`;

const Container = styled.div`
  padding: 10vh 0 0;
  margin: auto;
  max-width: 1440px;
  ${space};
  ${width};
`;

const Home = styled.div`
  color: ${COLORS.WHITE};
`;

const Content = styled.div`
  margin: auto;
  ${space};
  ${width};
`;

const Section = styled.section`
  margin-bottom: 200px;
`;

const Index = () => (
  <Wrapper>
    <Container width={['auto', '80%']} px={[30, 0]}>
      <Grid>
        <GridCell width="25%">
          <Home>Vincent Bianciotto</Home>
        </GridCell>

        <GridCell width="75%">
          <Title fontSize={[40, 60, 70]} mb={200}>
            <strong>Bonjour,</strong>
            <br />
            Je suis <u>UI/UX Designer</u> et <u>Front-End Developer</u> Freelance
            à Montpellier, depuis 8 ans.<br />
          </Title>

          <Section>
            <Title fontSize={[40, 50]}>Expérience</Title>
            <Jobs ml={[0, 40]}>
              <Job>
                <h2>
                  <SwipeLink href="https://www.lunchr.co">Lunchr</SwipeLink>
                </h2>
                <h3>2016 - Aujourd'hui</h3>
                <Paragraph>
                  Intégration des maquettes de l'application web avec ReactJS et
                  styled-components.
                </Paragraph>
              </Job>
              <Job>
                <h2>
                  <SwipeLink href="https://www.elium.tv">Elium</SwipeLink>
                </h2>
                <h3>2017</h3>
                <Paragraph>
                  Développement de web components AngularJS et Sass.
                </Paragraph>
              </Job>
              <Job>
                <h2>
                  <SwipeLink href="https://teads.tv">Teads</SwipeLink>
                </h2>
                <h3>2014 - 2016</h3>
                <Paragraph>
                  UI/UX Design et intégration des designs sur le Dashboard de
                  gestion des campagnes.
                  <br />
                  Développement de web components AngularJS et Sass.
                </Paragraph>
              </Job>
              <Job>
                <h2>
                  <SwipeLink href="https://stormz.me">Stormz</SwipeLink>
                </h2>
                <h3>2013 - 2014</h3>
                <Paragraph>
                  UI/UX Design et développement Front-End de web services en HAML
                  et CSS3.
                </Paragraph>
              </Job>
            </Jobs>
          </Section>

          <Section>
            <Title fontSize={50}>Technologies</Title>
            <List ml={[0, 40]}>
              <ListItem>Sketch</ListItem>
              <ListItem>git</ListItem>
              <ListItem>HTML/Haml/ERB</ListItem>
              <ListItem>MJML</ListItem>
              <ListItem>CSS/Sass</ListItem>
              <ListItem>JavaScript</ListItem>
              <ListItem>jQuery</ListItem>
              <ListItem>ReactJS</ListItem>
              <ListItem>styled-components</ListItem>
            </List>
          </Section>

          <Section>
            <Title fontSize={50}>Me contacter</Title>
            <Paragraph mb={60}>
              Je travaille actuellement à temps plein pour{' '}
              <Link href="https://www.lunchr.co">Lunchr</Link>, donc{' '}
              <strong>je ne suis pas disponible pour une mission</strong>. Mais
              n'hésitez pas à me contacter sur{' '}
              <CopyText
                value="&#118;&#105;&#110;&#x63;&#101;&#x6e;&#116;&#64;&#99;&#x65;&#108;&#x61;&#x76;&#105;&#x2e;&#x66;&#x72;"
                message="copiée"
              />.
            </Paragraph>
            <Social>
              <SocialLink href="https://dribbble.com/vinzcelavi">
                Dribbble
              </SocialLink>
              <SocialLink href="https://github.com/vinzcelavi">Github</SocialLink>
              <SocialLink href="https://www.twitter.com/vinzcelavi">
                Twitter
              </SocialLink>
            </Social>
          </Section>
        </GridCell>
      </Grid>
    </Container>
  </Wrapper>
);

export default Index;
