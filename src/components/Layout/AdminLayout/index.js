import Header from './Header';
import Sidebar from './Sidebar';

function DefaultLayout({ children }) {
    return (
        <div>
            <Header />
            <div>
                <Sidebar />
                <div className="container">{children}</div>
            </div>
        </div>
    );
}

export default DefaultLayout;
