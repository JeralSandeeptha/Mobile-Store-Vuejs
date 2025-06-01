import { createRouter, createWebHistory } from "vue-router";
import HomePage from "../views/home-page/HomePage.vue";
import ContactPage from "../views/contact-page/ContactPage.vue";
import AboutPage from "../views/about-page/AboutPage.vue";
import BlogPage from "../views/blog-page/BlogPage.vue";
import CartPage from "../views/cart-page/CartPage.vue";
import WishlistPage from "../views/wishlist-page/WishlistPage.vue";
import ProfilePage from "../views/profile-page/ProfilePage.vue";
import ProductsPage from "../views/products-page/ProductsPage.vue";
import ProductDetailsPage from "../views/product-details-page/ProductDetailsPage.vue";

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [
        {
            name: 'home',
            path: '/',
            component: HomePage
        },
        {
            name: 'about',
            path: '/about',
            component: AboutPage
        },
        {
            name: 'contact',
            path: '/contact',
            component: ContactPage
        },
        {
            name: 'blog',
            path: '/blog',
            component: BlogPage
        },
        {
            name: 'cart',
            path: '/cart',
            component: CartPage
        },
        {
            name: 'wishlist',
            path: '/wishlist',
            component: WishlistPage
        },
        {
            name: 'profile',
            path: '/profile',
            component: ProfilePage
        },
        {
            name: 'products',
            path: '/products',
            component: ProductsPage
        },
        {
            name: 'product-details',
            path: '/product/:productId',
            component: ProductDetailsPage
        },
    ]
});

export default router;
