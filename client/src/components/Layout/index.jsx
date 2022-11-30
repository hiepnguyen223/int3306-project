import { useLocation } from 'react-router-dom';
import Header from './Header';
import Navbar from './Navbar';
import './styles.scss';

export default function Layout({ children }) {
    const location = useLocation();

    return (
        <>
            {!['/signin', '/signup', '/admin'].includes(location.pathname) && (
                <>
                    <Header />
                    <Navbar />
                </>
            )}
            {children}
        </>
    );
}
