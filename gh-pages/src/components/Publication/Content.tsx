import React, { useContext, useState, useEffect, useRef } from 'react';
import {
  ContentBox,
  PublicationBox,
  DescritionInput,
  GroupButton,
  FileImage,
} from './styles';
import { BuildBoxContext } from '../../context/buildBoxContext';

const Content: React.FC = () => {

  const { createNewPublication } = useContext(BuildBoxContext);

  const [name, setName] = useState<string>();
  const [description, setDescription] = useState<string>();
  const [preview, setPreviewImage] = useState<string>();
  const [isTrue, setIsTrue] = useState<boolean>();
  const [image, setImage] = useState<File>();

  const getImage = useRef<HTMLInputElement>(null);
  useEffect(() => {
    if (!image) {
      setIsTrue(false);
      setPreviewImage(undefined);
      return;
    } 
      setIsTrue(true);
      const reader = new FileReader();
      reader.onloadend = () => {
        return setPreviewImage(reader.result as string);
      };
      reader.readAsDataURL(image);
  }, [image, preview]);

  return (
    <>
      <ContentBox>
        <PublicationBox>
          {isTrue ? (
            <img src={preview} alt='img' />
          ) : (
            <>
              <FileImage
                type='file'
                placeholder='insert image'
                ref={getImage}
                accept='image/*'
                value={preview}
                onChange={(e: any) => {
                  const file = e.target.files;
                  if (file) {
                    setImage(file[0]);
                    setIsTrue(true);
                  
                  } else {
                    setIsTrue(false);
                    setImage(undefined);
                  }
                }}
              />
            </>
          )}  
          <input
            type='text'
            placeholder='name'
            value={name}
            onChange={(e) => setName(e.target.value)}
            
          />

          <DescritionInput
            type='text'
            placeholder='type your comment'
            value={description}
            onChange={(e: any) => setDescription(e.target.value)}
          />
          <GroupButton>
            <button
              onClick={() => {
                setName('');
                setDescription('');
                setPreviewImage('');
                setImage(undefined)
                setIsTrue(false);
              }}
            >
              Descartar
            </button>
            <button
              onClick={() =>
                createNewPublication(0, name, description, preview)
              }
            >
              <p>Publicar</p>
            </button>
          </GroupButton>
        </PublicationBox>
      </ContentBox>
    </>
  );
};

export default Content;
