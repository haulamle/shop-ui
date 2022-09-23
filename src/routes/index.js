// Layout
import { AdminLayout } from '~/components/Layout';

import Home from '~/pages/Home';
import Login from '~/pages/Login';
import Search from '~/pages/Search';
import ProductPage from '~/pages/Product';
import ProductDetail from '~/pages/ProductDetail';
import Register from '~/pages/Register';
import { AdminDashBoard } from '~/pages/Admin';

const publicRoutes = [
    { path: '/', component: Home },
    { path: '/product/:id', component: ProductPage },
    { path: '/product-detail/:id', component: ProductDetail },
    { path: '/search/:type', component: Search },
    { path: '/login', component: Login },
    { path: '/register', component: Register },
    { path: '/admin', component: AdminDashBoard, layout: AdminLayout },
];

export { publicRoutes };
