import './index.css';
import MainContent from './components/shared-components/mainContent';
import Footer from './components/shared-components/footer';
import Header from './components/shared-components/header';

function App() {
  return (
    <div className='App'>
      <Header></Header>
      <MainContent></MainContent>
      <Footer></Footer>
    </div>
  );
}

export default App;
