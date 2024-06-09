import './index.css';
import './App.css';
import MainContent from './components/shared-components/mainContent';
import Footer from './components/shared-components/footer';
import Header from './components/shared-components/header';
import List from './components/list/List.jsx';

function App() {
  return (
    <div className='App'>
      <Header></Header>
      <MainContent>
      <List/>
      </MainContent>
      <Footer></Footer>
    </div>
  );
}

export default App;
