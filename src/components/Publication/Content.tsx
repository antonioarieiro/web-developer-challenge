import React, { useState } from "react";
import { ContentBox, PublicationBox, DescritionInput, GroupButton } from "./styles";


const Content: React.FC = () => {
  const [publications, setPublications] = useState([]);
  console.log(publications);
  return (
    <>
      <ContentBox>
        <PublicationBox>
          <img alt="img"/>
          <input type="text" placeholder="name"/>
          <DescritionInput/>
          <GroupButton>
          <button>Descartar</button>
          <button><p>Publicar</p></button>
          </GroupButton>
        </PublicationBox>
        
      </ContentBox>
    </>
  );
};

export default Content;
