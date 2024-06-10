import './index.css';
import './App.css';
import MainContent from './components/shared-components/mainContent';
import Footer from './components/shared-components/footer';
import Header from './components/shared-components/header';
import List from './components/list/List.jsx';
import Details from './components/createNew/objectiveDetail.jsx';

function App() {
  return (
    <div className='App'>
      <Header></Header>
      <MainContent>
      {/* <List/> */}
      <Details/>
      </MainContent>
      <Footer></Footer>
    </div>
  );
}

export default App;
