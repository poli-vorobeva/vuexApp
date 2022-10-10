<template>
    <form @submit.prevent="onSubmit">
        <div :class="['formElement',{invalid:eError}]">
            <label for="email">Email</label>
            <input type="email" id="email" v-model="email" @blur="eBlur"/>
            <small v-if="eError">{{eError}}</small>
        </div>
      <div :class="['formElement',{invalid:pError}]">
          <label for="password">Password</label>
          <input type="password" id="password" v-model="password" @blur="pBlur"/>
          <small v-if="pError">{{pError}}</small>
      </div>
        <button :disabled="isTooManyAttempts||isSubmitting">Войти</button>
        <div v-if="isTooManyAttempts">Вы слишком часто пытаетесь войти в систему</div>
    </form>
</template>

<script>
	import {useLoginForm} from "@/use/login-form";

		export default {
		setup() {

			return {...useLoginForm()}
		}
	}
</script>

<style scoped>
    form {
        width: 80vw;
        margin: 20vh auto;
        display: flex;
        flex-flow: column;
        justify-content: space-evenly;
        height: 200px;
        background: #857a6d;
        color: white;
        letter-spacing: 1px;
        border-radius: 20px;
        padding: 20px;
        align-items: center;
        box-shadow: 0 0 20px 0 grey;
    }
.formElement{
    display: flex;
    flex-flow: column nowrap;
    width: 100%;
    align-items: center;
}
.invalid input{
    box-shadow: inset 0 0 5px 5px #c6626266;
}
    input {
        border-radius: 10px;
        width: 50%;
        outline: none;
        border: none;
        height: 30px;
        text-align: center;
        line-height: 30px;
    }

    button {
        width: 100px;
        border-radius: 10px;
        border: none;
        height: 25px;
        background: #4c9e82;
        color: white;
        letter-spacing: 2px;
        transition: all ease-in 500ms;
    }

    button:hover {

        background: #2c5f4d;
    }
</style>