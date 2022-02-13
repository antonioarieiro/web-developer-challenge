import React, { useContext } from 'react';
import { BuildBoxContext } from '../../context/buildBoxContext';
import Remove from '../../images/remove.svg';
import { FeedContainer, FeedBox } from './styles';

const Feed: React.FC = () => {
 
  const { currentPublication, revemovePost } = useContext(BuildBoxContext);

  return (
    <FeedContainer>
      <p>Feed</p>
      {currentPublication?.slice(0).reverse().map((a) => (
        <FeedBox key={a.id+1}>
          <button onClick={() => {revemovePost(a.id)}}><img src={Remove}/></button>
          <img src={a?.photo} alt='image'/>  
          <h4>
            {a.description}
          </h4>
          <p>enviado por: {a.name}</p>
        </FeedBox>
      ))}
    </FeedContainer>
  );
};

export default Feed;
