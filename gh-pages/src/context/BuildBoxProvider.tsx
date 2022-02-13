import { useState } from "react";
// context
import { BuildBoxContext } from "./buildBoxContext";
// initial values
import { DEFAULT_LIST, INITIAL_STATE } from "./defaultValue";
// identifier for all types
import { Publication, Props } from "../interfaces/Interfaces";

export function BuildBoxContextProvider({ children }: Props) {
  const [publication, setPublication] = useState<Publication>(INITIAL_STATE);
  const [currentPublication, setCurrentPublication] =
    useState<Publication[]>(DEFAULT_LIST);

  // cria uma nova Publicação com os dados : nome da pessoa, a descrição , e a imagem selecionada
  const createNewPublication = (
    id: number,
    name: string,
    description: string,
    photo: string
  ) => {
    // apos receber os dados seta esses dados em uma nova publicação para ser enviado
    // validado e enviado para uma lista de publicações
    if (name.length >= 10) {
      alert("name must have a maximum of 10 digits");
      return;
    }
    if (name && description && photo) {
      setPublication((prevState: Publication) => ({
        id: prevState.id + 1,
        name: (prevState.name = name),
        description: (prevState.description = description),
        photo: (prevState.photo = photo),
      }));
      // insere a nova publicação junto as outras que ja existem
      currentPublication.push({ ...publication });
     
    } else {
      alert("insert your name and description & select image");
    }
  };

  const revemovePost = (id: number) => {
    var result = currentPublication.filter(function (el) {
      return el.id !== id;
    });
    setCurrentPublication(result);
  };

  return (
    <BuildBoxContext.Provider
      value={{
        publication,
        createNewPublication,
        currentPublication,
        revemovePost,
      }}
    >
      {children}
    </BuildBoxContext.Provider>
  );
}
