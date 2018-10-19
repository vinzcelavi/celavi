import React, { Component } from 'react';
import styled from 'styled-components';
import media from 'styled-media-query';
import { position, space, width, fontSize } from 'styled-system';
import { rgba } from 'polished';

import Grid, { GridCell } from '../components/Grid';
import FONTS from '../constants/fonts';
import COLORS from '../constants/colors';
import Header from '../components/Header';
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

  ::selection {
    background-color: ${rgba(COLORS.BLACK, 0.2)};
  }
`;

const Container = styled.div`
  padding: 10vh 0 0;
  margin: auto;
  max-width: 1440px;
  ${space};
  ${width};

  ${media.greaterThan('medium')`
    padding: 20vh 0 0;
  `}
`;

const Section = styled.section`
  margin-bottom: 200px;
  ${width};
`;

const Hero = styled.header`
  margin: 0;
  margin-bottom: 200px;
  font-family: ${FONTS.PRIMARY};
  font-size: 30px;
  line-height: 1.4;
  font-weight: 700;
  color: ${COLORS.WHITE};
  ${fontSize};

  p {
    margin: 0 0 40px;
  }

  u {
    text-decoration: none;
    padding-bottom: 3px;
    box-shadow: inset 0 -30px 0 ${rgba(COLORS.WHITE, 0.05)};
  }
`;

const Index = () => (
  <Wrapper>
    <Container width={['auto', '80%']} px={[30, 0]}>
      <Grid flexDirection={['column', 'column', 'row']}>
        <GridCell width={['auto', 'auto', '33%']}>
          <Header position={['relative', 'relative', 'fixed']} />
        </GridCell>

        <GridCell width={['auto', 'auto', '67%']}>
          <Hero fontSize={[30, 40, 50]}>
            Bonjour.
            <br />
            Je crée des interfaces web ergonomiques et soignées en React. Je
            fais ce métier avec passion depuis 10 ans. Je suis basé à
            Montpellier.
          </Hero>

          <Section width={['auto', 600]}>
            <Title fontSize={[40, 50]}>Expérience</Title>
            <Jobs ml={[0, 40]}>
              <Job>
                <h2>
                  <SwipeLink href="https://www.agilitation.fr">
                    Agilitation
                  </SwipeLink>
                </h2>
                <h3>2018 - Aujourd'hui</h3>
                <Paragraph>
                  Développement des interfaces utilisateurs et d'applications web
                  modernes avec React et styled-components.
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
                  <SwipeLink href="https://www.lunchr.co">Lunchr</SwipeLink>
                </h2>
                <h3>2016 - 2018</h3>
                <Paragraph>
                  Intégration des maquettes de l'application web avec ReactJS et
                  styled-components.
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
            </Jobs>
          </Section>

          <Section width={['auto', 600]}>
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

          <Section width={['auto', 600]}>
            <Title fontSize={50}>Me contacter</Title>
            <Paragraph mb={60}>
              Je travaille actuellement à temps plein pour{' '}
              <Link href="https://agilitation.fr/" title="Agilitation">
                Agilitation
              </Link>
              , donc <strong>je ne suis pas disponible pour une mission</strong>
              . Mais n'hésitez pas à me contacter sur{' '}
              <CopyText
                value="&#118;&#105;&#110;&#x63;&#101;&#x6e;&#116;&#64;&#99;&#x65;&#108;&#x61;&#x76;&#105;&#x2e;&#x66;&#x72;"
                message="copiée"
              />
              .
            </Paragraph>
            <Social>
              <SocialLink href="https://dribbble.com/vinzcelavi">
                Dribbble
              </SocialLink>
              <SocialLink href="https://github.com/vinzcelavi">
                Github
              </SocialLink>
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
