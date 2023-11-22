<template>
 <div class="w-screen">
    <NavBar title="试算等待页" />
    <div class="w-screen bg-blue-500 h-[40vh]">
      <p class="w-full absolute top-[10vh] text-xl text-[#fff] text-center">额度审核中...</p>
    </div>
     <div class="border-2 border-[#BBBBBB]  w-[90%] bg-[#fff] p-10 pt-5 pb-5 absolute left-[50%] top-[30vh] translate-x-[-50%] rounded-2xl shadow-lg shadow-[rgba(0,0,0,.4)]">
      <img src="../assets/currency.png" alt="" class="m-auto mt-5 mb-5">
    <p class="w-full text-lg text-[#4F4F4F] text-center mb-5">授信金额审核中...</p>
    <p class="w-full text-sm text-[#4F4F4F] text-center mb-5">
      预计5分钟内完成，请耐心等待 <br>
      审核完毕后会进行短信通知。
    </p>

    </div>
    <p class="w-full text-base text-[#4095E5] text-center mb-5 absolute bottom-[22vh]">继续试算</p>
    <button class="rounded-[30px] w-[60vw] h-[3rem] bg-[#0581FE] block text-[#fff] text-sm absolute bottom-[13vh] left-[50%] translate-x-[-50%]" @click="login">返回</button>
 <p class="w-full text-base text-[#4095E5] text-center mb-5 absolute bottom-[3vh]">立即联系我们</p>
    </div>

</template>

<script setup>
import NavBar from '@/components/NavBar/NavBar.vue'

</script>

<style lang='sass'>

</style>
