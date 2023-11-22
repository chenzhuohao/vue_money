<template>
  <div class="w-screen">
    <div class="w-screen bg-blue-500 h-[40vh]"></div>
    <div class="w-[90%] bg-[#fff] p-10 pt-5 absolute left-[50%] top-[30vh] translate-x-[-50%] rounded-2xl shadow-2xl">
      <div class="w-[100%] m-auto mt-4">
        <input type="text" class="appearance-none border-0 p-1 focus:outline-none focus:border-0 text-sm" placeholder="请输入手机号">
<hr class="mt-[2rem] b-2">
 <div class="flex justify-between mt-6">
  <input type="text" class="appearance-none border-0 p-2 focus:outline-none focus:border-0 text-sm w-[50%]" placeholder="请输入验证码">
  <p v-if="!showTime" class="text-[#4095E5] mt-2 text-sm" @click="change">获取验证码</p>
  <p v-else class="text-[#CECECE] mt-2">{{yanzma}}</p>
 </div>
<hr class="mt-[2rem] b-2">

<div class="flex items-center mt-10">
   <CircleCheck style="width: 1em; height: 1em; margin-right: 8px; color:#4095E5" />
  <p>我已同意 <span class="text-[#4095E5]"> 《xxx用户协议》</span></p>
</div>
<button class="rounded-[30px] w-[80%] h-[3rem] bg-[#0581FE] m-auto block mt-10 text-[#fff] text-sm" @click="login">登录</button>
      </div>
    </div>
  </div>
</template>


<script setup>
import {ref} from 'vue'
import { useRouter } from 'vue-router';
  const router = useRouter();
let num=ref(60)
let timer=ref(null)
let yanzma=ref('')
let showTime=ref(false)
const change = () => {
  timer = setInterval(() => {
    if (num.value <= 0) {
      clearInterval(timer.value);
      showTime.value = false;
    } else {
      showTime.value = true;
      yanzma.value = `倒计时${num.value}秒`;
      num.value--;
    }
  }, 1000);
};

const login=()=>{
    
  router.push('/loading');
}

</script>

<style lang="sass">

</style>
