import React from 'react';
import { BsFacebook, BsGithub, BsLinkedin, BsWhatsapp } from 'react-icons/bs';
import { Image } from './styles';

const SocialMedia = ({ links }) => (
  <div>
    {links.linkedin ? (
      <Image target="_blank" href={links.linkedin}>
        <BsLinkedin color="#0077B7" />
      </Image>
    ) : (
      ''
    )}
    {links.github ? (
      <Image target="_blank" href={links.github}>
        <BsGithub color="black" />
      </Image>
    ) : (
      ''
    )}
    {links.facebook ? (
      <Image target="_blank" href={links.facebook}>
        <BsFacebook color="#1977F3" />
      </Image>
    ) : (
      ''
    )}
    {links.whatsapp ? (
      <Image target="_blank" href={links.whatsapp}>
        <BsWhatsapp color="#45c554" />
      </Image>
    ) : (
      ''
    )}
  </div>
);

export default SocialMedia;
