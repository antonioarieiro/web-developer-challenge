import React from 'react';

import Content from './components/Publication/Content'
import Header from './components/Header/Header'
import Feed from './components/Feed/Feed';
import GlobalStyle from './styles/Global'

const App = () => {

 
  return (
   <>
   <GlobalStyle/>
   <Header/>
   <Content/>
   <Feed/>
   </>
  );
}

export default App;
