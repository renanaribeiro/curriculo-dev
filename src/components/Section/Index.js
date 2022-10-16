import React from 'react';
import Card from '../Card/Index';
import { Highlight, Info } from '../Card/styles';
import Skill from '../Skill/Index';
import SocialMedia from '../SocialMedia/Index';
import SubTitle from '../SubTitle/Index';
import Title from '../Title/Index';
import { SectionHeading } from '../Title/styles';
import { Sections } from './styles';

const Section = ({ profile }) => (
  <>
    <Sections id="about">
      <Title texto="Olá pessoal, sou o" />
      <SectionHeading>
        {profile.nome} <Highlight>{profile.sobrenome}</Highlight>
      </SectionHeading>
      <Info>
        {profile.cidade} - {profile.estado} - {profile.contato} -{' '}
        <Highlight> {profile.email}</Highlight>
      </Info>
      <p>{profile.biografia}</p>
      <div id="contacts">
        <Title texto="Contatos" />
        {profile.redesocial ? (
          <SocialMedia links={profile.redesocial} />
        ) : (
          <SubTitle texto="Nenhum registro encontrado!" />
        )}
      </div>
    </Sections>
    <Sections id="experience">
      <Title texto="Experiência" />
      {profile.experiencia.map((val) => (
        <Card
          key={val.id}
          subTitle={val.cargo}
          subTitleH3={val.empresa}
          date={val.periodo}
          info={val.atividades}
        />
      ))}
    </Sections>
    <Sections id="skills">
      <Title texto="Habilidades" />
      <Skill skills={profile.habilidades} />
    </Sections>
    <Sections id="projects">
      <Title texto="Projetos" />
      <SubTitle texto="Em desenvolvimento ACQA" />
    </Sections>
  </>
);

export default Section;
