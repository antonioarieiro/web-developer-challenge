import React from "react";
import { FeedContainer, FeedBox } from './styles';
import Logo from '../../images/logo.png'

const Feed: React.FC = () => {
 
  return (
      <FeedContainer>
          <p>Feed</p>
          <FeedBox>
            <img src={Logo} alt="2"/>
            <h4>Lorem-ipsum-dolor-sit-amet-consectetur-adipiscing-elit-Nulla-mattis-ligula-vel-velit-scelerisque-iaculis-Nam-mattis-justo-id-orci-commodo-eu-tempus-purus-cursus</h4>
            <p>enviado por:</p>
          </FeedBox>
      </FeedContainer>
  )
};

export default Feed;
