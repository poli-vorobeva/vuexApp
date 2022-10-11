import {createRouter, createWebHistory} from 'vue-router'
import Home from '../views/Home.vue'
import store from '../store'

const router = createRouter({
	history: createWebHistory(import.meta.env.BASE_URL),
	routes: [
		{
			path: '/',
			name: 'Home',
			component: Home,
			meta: {
				layout: 'main',
				auth: true
			}
		},
		{
			path: '/help',
			name: 'Help',
			component: () => import('../views/Help.vue'),
			meta: {
				layout: 'main',
				auth: true
			}
		},
		{
			path: '/auth',
			name: 'Auth',
			component: () => import('../views/Auth.vue'),
			meta: {
				layout: 'auth'
			}
		}
	]
})
router.beforeEach(
	(to, from, next) => {
		const requireAuth = to.meta.auth

		if (requireAuth && store.getters['auth/isAuthenticated']) {
			next()
		}else if(requireAuth && !store.getters['auth/isAuthenticated']){
			next('/auth?message=auth')
		}else{
			next()
		}
	})
export default router
