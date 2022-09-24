// Layout
import { AdminLayout } from '~/components/Layout';

import Home from '~/pages/Home';
import Login from '~/pages/Login';
import Search from '~/pages/Search';
import ProductPage from '~/pages/Product';
import ProductDetail from '~/pages/ProductDetail';
import Register from '~/pages/Register';
import { AdminDashBoard, UserAdmin, CategoryAdmin, InvoiceAdmin, ProductAdmin, StatisticAdmin } from '~/pages/Admin';
import EditUser from '~/pages/Admin/UserAdmin/EditUser';

const publicRoutes = [
    //Client
    { path: '/', component: Home },
    { path: '/product/:id', component: ProductPage },
    { path: '/product-detail/:id', component: ProductDetail },
    { path: '/search/:type', component: Search },
    { path: '/login', component: Login },
    { path: '/register', component: Register },
    //Admin
    { path: '/admin', component: AdminDashBoard, layout: AdminLayout },
    { path: '/admin-user', component: UserAdmin, layout: AdminLayout },
    { path: '/admin-user/edit/:id', component: EditUser, layout: AdminLayout },
    { path: '/admin-category', component: CategoryAdmin, layout: AdminLayout },
    { path: '/admin-invoice', component: InvoiceAdmin, layout: AdminLayout },
    { path: '/admin-product', component: ProductAdmin, layout: AdminLayout },
    { path: '/admin-statistical', component: StatisticAdmin, layout: AdminLayout },
];

export { publicRoutes };
