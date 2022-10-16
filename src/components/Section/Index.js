import React from 'react';
import Card from '../Card/Index';
import { Highlight, Info } from '../Card/styles';
import Skill from '../Skill/Index';
import SocialMedia from '../SocialMedia/Index';
import SubTitle from '../SubTitle/Index';
import Title from '../Title/Index';
import { SectionHeading } from '../Title/styles';
import { Email, Sections } from './styles';
import Repo from '../Repos/Index';

const Section = ({ profile }) => (
  <>
    <Sections id="about">
      <SectionHeading>
        {profile.nome} <Highlight>{profile.sobrenome}</Highlight>
      </SectionHeading>
      <Info>
        {profile.cidade} - {profile.estado} - {profile.contato} -{' '}
        <Email target="_blank" href={`mailto:${profile.email}`}>
          {profile.email}
        </Email>
      </Info>
      <p>{profile.biografia}</p>
    </Sections>
    <Sections id="contacts">
      <Title texto="Contatos" />
      {profile.redesocial ? (
        <SocialMedia links={profile.redesocial} />
      ) : (
        <SubTitle texto="Nenhum registro encontrado!" />
      )}
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
      <SubTitle texto="Conheça meus repositórios do GitHub" />
      <Repo url={profile.githubRepos} />
    </Sections>
  </>
);

export default Section;
