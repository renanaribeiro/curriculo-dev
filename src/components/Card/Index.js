import React from 'react';
import SubTitle from '../SubTitle/Index';
import SubTitleH3 from '../SubTitleH3/Index';
import { Highlight, Info, Activities } from './styles';

const Card = ({ subTitle, subTitleH3, date, info }) => (
  <div>
    <SubTitle texto={subTitle} />
    <SubTitleH3 subTitleH3={subTitleH3} />
    <Info>
      <Highlight> {date}</Highlight>
    </Info>
    <Activities>{info}</Activities>
  </div>
);

export default Card;
