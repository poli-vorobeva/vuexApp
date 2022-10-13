<template>
    <div class="navWrapper">
        <h3>The Bank</h3>
        <ul class="navList">
            <li>
                <router-link to="/">Заявки</router-link>
            </li>
            <li>
                <router-link to="/help">Помощь</router-link>
            </li>
            <li>
                <router-link to="/messages">Сообщения</router-link>
            </li>
            <li>
                <router-link to="/exit" @click.prevent="logout">Выход</router-link>
            </li>
        </ul>
    </div>
</template>

<script>
	import {useRouter} from "vue-router";
	import {useStore} from "vuex";

	export default {
		setup() {
			const router = useRouter()
			const store = useStore()
			return {
				logout() {
					store.commit('auth/logout')
					router.push('/auth')
				}
			}
		},

	}
</script>

<style scoped>

    .navWrapper {
        width: 100vw;
        height: 50px;
        background-color: darkgoldenrod;
        display: flex;
        flex-flow: row nowrap;
        justify-content: space-between;
    }

    .navList {
        width: 40vw;
        justify-content: space-around;
        display: flex;
        flex-flow: row nowrap;
    }

    .navList li {
        list-style: none;
    }

    .navList li a {
        text-decoration: none;
    }
    .navList li > .active{
        text-decoration: underline #2c5f4d;
    }
</style>