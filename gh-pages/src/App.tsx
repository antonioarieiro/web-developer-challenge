import { BuildBoxContextProvider } from './context/BuildBoxProvider';
import Header from './components/Header/Header';
import Content from './components/Publication/Content';
import Feed from './components/Feed/Feed';
import GlobalStyle from './styles/Global';

const App:React.FC = () => {
  return (
    <BuildBoxContextProvider>
      <GlobalStyle />
      <Header />
      <Content />
      <Feed />
    </BuildBoxContextProvider>
  );
};

export default App;
