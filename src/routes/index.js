// Layout
import { AdminLayout, StaffLayout, LoginLayout } from '~/components/Layout';

import Home from '~/pages/Home';
import Login from '~/pages/Login';
import Search from '~/pages/Search';
import ProductPage from '~/pages/Product';
import ProductDetail from '~/pages/ProductDetail';
import Register from '~/pages/Register';
import Cart from '~/pages/Cart';
import Pay from '~/pages/Pay';
import Myoder from '~/pages/Myoder';

// Admin
import { AdminDashBoard, UserAdmin, CategoryAdmin, InvoiceAdmin, ProductAdmin, StatisticAdmin } from '~/pages/Admin';
import EditUser from '~/pages/Admin/UserAdmin/EditUser';
import EditCategory from '~/pages/Admin/CategoryAdmin/EditCategory';
import AddCategory from '~/pages/Admin/CategoryAdmin/AddCategory';
import EditProduct from '~/pages/Admin/ProductAdmin/EditProduct';
import Addproduct from '~/pages/Admin/ProductAdmin/AddProduct';
const publicRoutes = [
    //Client
    { path: '/', component: Home },
    { path: '/product/:id', component: ProductPage },
    { path: '/product-detail/:id', component: ProductDetail },
    { path: '/search/:type', component: Search },
    { path: '/login', component: Login, layout: LoginLayout },
    { path: '/register', component: Register, layout: LoginLayout },
    { path: '/cart', component: Cart },
    { path: '/pay', component: Pay, layout: null },
    { path: '/myoder', component: Myoder },
    //Admin
    { path: '/admin', component: AdminDashBoard, layout: AdminLayout },
    { path: '/admin-user', component: UserAdmin, layout: AdminLayout },
    { path: '/admin-user/edit/:id', component: EditUser, layout: AdminLayout },
    //Admin-category
    { path: '/admin-category', component: CategoryAdmin, layout: AdminLayout },
    { path: '/admin-category/edit/:id', component: EditCategory, layout: AdminLayout },
    { path: '/admin-category/add', component: AddCategory, layout: AdminLayout },
    //Admin-product
    { path: '/admin-product', component: ProductAdmin, layout: AdminLayout },
    { path: '/admin-product/edit/:id', component: EditProduct, layout: AdminLayout },
    { path: '/admin-product/add', component: Addproduct, layout: AdminLayout },

    //
    { path: '/admin-invoice', component: InvoiceAdmin, layout: AdminLayout },
    { path: '/admin-statistical', component: StatisticAdmin, layout: AdminLayout },

    //Staff
    { path: '/staff', component: AdminDashBoard, layout: StaffLayout },
    { path: '/staff-user', component: UserAdmin, layout: StaffLayout },
    { path: '/staff-user/edit/:id', component: EditUser, layout: StaffLayout },
    //Staff-category
    { path: '/staff-category', component: CategoryAdmin, layout: StaffLayout },
    { path: '/staff-category/edit/:id', component: EditCategory, layout: StaffLayout },
    { path: '/staff-category/add', component: AddCategory, layout: StaffLayout },
    //staff-product
    { path: '/staff-product', component: ProductAdmin, layout: StaffLayout },
    { path: '/staff-product/edit/:id', component: EditProduct, layout: StaffLayout },
    { path: '/staff-product/add', component: Addproduct, layout: StaffLayout },

    //
    { path: '/staff-invoice', component: InvoiceAdmin, layout: StaffLayout },
    { path: '/staff-statistical', component: StatisticAdmin, layout: StaffLayout },
];

export { publicRoutes };
