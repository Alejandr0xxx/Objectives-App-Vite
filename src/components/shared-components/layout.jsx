import Footer from './footer';
import Header from './header';
import Aside from './Aside.jsx';
import PropTypes from 'prop-types';
import MainStyle from './layout.module.css';
import { Outlet, useLocation } from 'react-router-dom';
import NoObjectives from './noObjectives.jsx';
function Layout({isPrivate}) {
    const locate = useLocation()
    const path = locate.pathname === '/profile'
    return (
        <>
            <Header></Header>
            <main className={MainStyle.container}>
                {isPrivate && <Aside/>}
                <main className={MainStyle.main}>
                    {!path && <NoObjectives />}
                    <Outlet />
                </main>
            </main>
            <Footer></Footer>
        </>
    );
}

Layout.propTypes = {
    isPrivate: PropTypes.bool
};

export default Layout;
