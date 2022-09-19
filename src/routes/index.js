// Layout
// import { AdminLayout } from '~/components/Layout';

import Home from '~/pages/Home';
import Login from '~/pages/Login';
import Search from '~/pages/Search';
import ProductPage from '~/pages/Product';
import ProductDetail from '~/pages/ProductDetail';

const publicRoutes = [
    { path: '/', component: Home },
    { path: '/product/:id', component: ProductPage },
    { path: '/product-detail/:id', component: ProductDetail },
    { path: '/search/:type', component: Search },
    { path: '/login', component: Login, layout: null },
    // { path: '/login', component: Login, layout: AdminLayout },
];

export { publicRoutes };
