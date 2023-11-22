<template>
  <div class="w-screen">
    <div class="w-screen bg-blue-500 h-[40vh]">123</div>
    <div class="w-[90%] bg-[#fff] p-10 pt-5 absolute left-[50%] top-[30vh] translate-x-[-50%] rounded-2xl shadow-2xl">
      <div class="w-[100%] m-auto mt-[5rem]">
        <input type="text" class="appearance-none border-0 p-2 focus:outline-none focus:border-0" placeholder="请输入手机号">
<hr class="mt-[2rem] b-2">
 <div class="flex justify-between mt-6">
  <input type="text" class="appearance-none border-0 p-2 focus:outline-none focus:border-0" placeholder="请输入验证码">
  <p v-if="!showTime" class="text-[#4095E5] mt-2" @click="change">获取验证码</p>
  <p v-else class="text-[#CECECE] mt-2">{{yanzma}}</p>
 </div>
<hr class="mt-[2rem] b-2">

<div class="flex">
   <el-icon><CircleCheck /></el-icon>
</div>
      </div>
    </div>
  </div>
</template>


<script setup>
import {ref} from 'vue'
let num=ref(60)
let timer=ref('')
let yanzma=ref('')
let showTime=ref(false)
const change=()=>{
timer=setInterval(()=>{
if(num.value<=0){
  clearInterval(timer)
showTime.value=false
}else{
  showTime.value=true
yanzma.value=`倒计时${num.value}秒`
num.value--
}
},1000)
}

</script>

<style>

</style>
