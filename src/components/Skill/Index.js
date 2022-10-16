import React from 'react';
import { FaRocket } from 'react-icons/fa';
import SubTitle from '../SubTitle/Index';
import { List } from './styles';

const Skill = ({ skills }) => (
  <div>
    {skills ? (
      <>
        {skills.map((name) => (
          <List>
            <FaRocket size={22} /> {name}
          </List>
        ))}
      </>
    ) : (
      <SubTitle texto="Nenhum registro encontrado!" />
    )}
  </div>
);

export default Skill;
