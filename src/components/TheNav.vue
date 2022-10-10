<template>
    <div class="navWrapper">
        <h3>The Bank</h3>
        <ul class="navList">
            <li>
                <router-link to="/">Заявки</router-link>
            </li>
            <li>
                <router-link to="/">Помощь</router-link>
            </li>
            <li>
                <router-link to="/">Сообщения</router-link>
            </li>
            <li>
                <router-link to="/">Выход</router-link>
            </li>
        </ul>
    </div>
</template>

<script>
	export default {}
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
    .navList{
        width: 40vw;
        justify-content: space-around;
        display: flex;
        flex-flow: row nowrap;
    }
    .navList li{
        list-style: none;
    }
    .navList li a{
        text-decoration: none;
    }
</style>