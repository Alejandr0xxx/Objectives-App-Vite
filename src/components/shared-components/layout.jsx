import MainContent from './mainContent';
import Footer from './footer';
import Header from './header';
import List from '../list/List.jsx';
function Layout() {
    return (
        <>
            <Header></Header>
            <MainContent/>
            <Footer></Footer>
        </>
    );
}

export default Layout;