import { Outlet, Link } from 'react-router-dom';
import Titulo from '../componentes/Titulo';
import Rodape from '../componentes/Rodape';
import Menu from '../componentes/Menu';
import Banner from '../componentes/Banner';

function Layout() {
    return (
        <>
            <div className='container'>
                <Titulo />
                <Menu />
                <Banner />
                <Outlet />
            </div>
            <Rodape />
        </>
    );
}

export default Layout;