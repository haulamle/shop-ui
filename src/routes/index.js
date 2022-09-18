// Layout
// import { AdminLayout } from '~/components/Layout';

import Home from '~/pages/Home';
import Product from '~/pages/Product';
import Login from '~/pages/Login';

const publicRoutes = [
    { path: '/', component: Home },
    { path: '/product/:id', component: Product },
    { path: '/product-detail/:id', component: Product },
    { path: '/login', component: Login, layout: null },
    // { path: '/login', component: Login, layout: AdminLayout },
];

export { publicRoutes };
