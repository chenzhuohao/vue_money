<template>
  <div class="store-info">
    <div class="background">店铺信息上传</div>
    <div class="box">
      <div class="form">
        <div class="from-item">
          <div class="label">店铺名称</div>
          <input type="text" class="input" placeholder="请输入店铺名称" />
        </div>
        <div class="from-item">
          <div class="label">店铺主体</div>
          <el-select v-model="value" class="select" placeholder="请选择" size="large">
            <el-option v-for="item in options" :key="item.value" :label="item.label" :value="item.value" />
          </el-select>
        </div>
        <div class="from-item from-item-order">
          <div class="label">订单上传</div>
          <el-upload class="avatar-uploader" :show-file-list="false" :on-success="handleAvatarSuccess" :before-upload="beforeAvatarUpload">
            <img v-if="imageUrl" :src="imageUrl" class="avatar" />
            <el-icon v-else class="avatar-uploader-icon"><Plus /></el-icon>
          </el-upload>
        </div>
        <div class="from-item from-item-order" style="margin-top: 2rem">
          <div class="label">结算单上传</div>
          <el-upload class="avatar-uploader" :show-file-list="false" :on-success="handleAvatarSuccess" :before-upload="beforeAvatarUpload">
            <img v-if="imageUrl" :src="imageUrl" class="avatar" />
            <el-icon v-else class="avatar-uploader-icon"><Plus /></el-icon>
          </el-upload>
        </div>
      </div>
      <a href="#" class="jump">我该如何获取订单和结算单？</a>
      <div class="btn-box">
        <el-button type="primary" class="btn">开始额度授信</el-button>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { Plus } from '@element-plus/icons-vue'

const value = ref('')
const options = ref([
  {
    value: '0',
    label: '快手'
  },
  {
    value: '1',
    label: '抖音'
  }
])

const imageUrl = ref('')

const handleAvatarSuccess = (res, file) => {
  console.log(res)
  imageUrl.value = URL.createObjectURL(file.raw)
}

const beforeAvatarUpload = (file) => {
  console.log(file)
  return true
}
</script>

<style lang="scss" scoped>
.store-info {
  display: flex;
  flex-direction: column;
  align-items: center;

  .background {
    width: 100%;
    height: 15.31rem;
    background-color: #4095e5;
    z-index: -1;
    position: sticky;
    top: 0;
    left: 0;
    font-size: 1.43rem;
    display: flex;
    justify-content: center;
    align-items: center;
    color: #ffffff;
    font-family: PingFangSC-regular;
  }

  .box {
    width: 22.13rem;
    // height: 29.81rem;
    background-color: #ffffff;
    border-radius: 0.62rem;
    box-shadow: 0 0.3rem 0.5rem 0 rgba(0, 0, 0, 0.3);
    margin-top: -3.94rem;
    padding: 0 1.875rem 1.875rem 1.875rem;
  }

  .from-item {
    display: flex;
    line-height: 3.31rem;
    font-size: 0.88rem;
    justify-content: space-between;
    align-items: center;
    border-bottom: 1px solid rgba(187, 187, 187, 1);

    .label {
      color: #4f4f4f;
      font-family: PingFangSC-regular;
    }

    .input {
      border: none;
      display: flex;
      font-family: PingFangSC-regular;
    }

    .input:focus {
      outline: none;
    }

    .select {
      width: 10.31rem;
      font-family: PingFangSC-regular;
      border: none;
      line-height: 3.31rem;
    }
  }

  .from-item-order {
    flex-direction: column;
    align-items: flex-start;
    border-bottom: none;

    .avatar-uploader {
      width: 3.5rem;
      height: 3.5rem;
      border: 1px solid rgba(0, 0, 0, 0.15);
      display: flex;
      justify-content: center;
      align-items: center;
      border-radius: 4px 4px 4px 4px;
    }
  }

  .jump {
    color: #4095e5;
    font-size: 0.875rem;
    font-family: PingFangSC-regular;
    margin-top: 1rem;
    display: block;
    text-align: center;
  }

  .btn-box {
    display: flex;
    justify-content: center;
    margin-top: 1.875rem;

    .btn {
      width: 14.56rem;
      height: 2.75rem;
      border-radius: 1rem;
      background-color: #0581fe;
      font-family: PingFangSC-regular;
    }
  }
}

.el-input__wrapper {
  box-shadow: none;
}
</style>
