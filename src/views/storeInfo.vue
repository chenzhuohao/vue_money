<template>
  <div class="store-info">
    <NavBar title="电商融" />
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
          <el-upload class="avatar-uploader" action="http://sph-api.atguigu.cn/api/admin/product/fileUpload" :show-file-list="false" :on-success="onOrderSuccess" :before-upload="beforeUpload" accept="image/png, image/jpeg, image/gif, image/jpg">
            <a  v-if="orderImg" :href="orderImg" target="_blank"><img :src="orderImg" class="avatar" /></a>
            <div v-else class="avatar-uploader-icon">
              <el-icon><Plus /></el-icon>
            </div>
          </el-upload>
        </div>
        <div class="from-item from-item-order" style="margin-top: 1rem">
          <div class="label">结算单上传</div>
          <div class="content">
            <div v-if="billImg && billImg.length" class="img-list">
              <div v-for="(img, index) in billImg" :key="index" class="imgs">
                <a :href="img" target="_blank"><img :src="img" class="avatar" /></a>
                <img  src="../assets/riLine-close-line Copy.svg" @click="deleteBillImg(index)" class="delete-icon">
              </div>
            </div>
            <el-upload class="avatar-uploader" action="http://sph-api.atguigu.cn/api/admin/product/fileUpload" :show-file-list="false" :on-success="onBillSuccess" :before-upload="beforeUpload" accept="image/png, image/jpeg, image/gif, image/jpg">
              <div class="avatar-uploader-icon">
                <el-icon><Plus /></el-icon>
              </div>
            </el-upload>
          </div>
        </div>
      </div>
      <a href="#" class="jump">我该如何获取订单和结算单？</a>
      <div class="btn-box">
        <el-button type="primary" class="btn" @click="summmit">开始额度授信</el-button>
      </div>
    </div>
  </div>
</template>

<script setup>
import NavBar from '@/components/NavBar/NavBar.vue'
import { ref } from 'vue'
import { useRouter } from 'vue-router'
import { ElMessage } from 'element-plus'

const router = useRouter()

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

let orderImg = ref('')
let billImg = ref([
  // 'https://lh3.googleusercontent.com/ogw/AKPQZvyzOeOESuO8k8SWmwh9dz39rW5pCqm3-6ZcYS_P=s32-c-mo',
  // 'https://lh3.googleusercontent.com/ogw/AKPQZvyzOeOESuO8k8SWmwh9dz39rW5pCqm3-6ZcYS_P=s32-c-mo',
  // 'https://lh3.googleusercontent.com/ogw/AKPQZvyzOeOESuO8k8SWmwh9dz39rW5pCqm3-6ZcYS_P=s32-c-mo'
])

// 图片上传前的钩子
const beforeUpload = (rawFile) => {
  // 图片类型
  const isImage = ['image/jpeg', 'image/png', 'image/gif', 'image/jpg']
  if (!isImage.includes(rawFile.type)) {
    ElMessage.error(`请上传jpeg、png、jpg、gif格式的图片!`)
    return false
  } else if (rawFile.size / 1024 / 1024 > 4) {
    ElMessage.error('图片大小不能超过4MB!')
    return false
  }
  return true
}

// 文件上传成功的钩子
const onOrderSuccess = (response) => {
  if (response.code === 200) {
    orderImg.value = response.data
  } else {
    ElMessage.error(response.message)
  }
}

// 文件上传成功的钩子
const onBillSuccess = (response) => {
  if (response.code === 200) {
    billImg.value = [...billImg.value, response.data]
  } else {
    ElMessage.error(response.message)
  }
}

const deleteBillImg = (index) => {
  billImg.value.splice(index, 1)
}

const summmit = () => {
  router.push('/Loading')
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

    .content {
      display: flex;
      justify-content: flex-start;
      align-items: center;
      flex-wrap: wrap;
    }

    .img-list {
      display: flex;
      justify-content: flex-start;
      align-items: center;
      flex-wrap: wrap;

      .imgs {
        position: relative;
      }

      .avatar {
        width: 3.5rem;
        height: 3.5rem;
        border-radius: 4px;
        object-fit: cover;
        margin-right: 0.85rem;
        margin-bottom: 0.85rem;
        padding: 0.31rem;
        border: 1px solid rgba(0, 0, 0, 0.15);
      }

      .delete-icon {
        width: 1rem;
        height: 1rem;
        position: absolute;
        right: 0.8rem;
        top: 0;
      }
    }

    .avatar-uploader {
      display: flex;
      justify-content: center;
      align-items: center;

      .avatar-uploader-icon {
        padding: 1.3rem;
        display: flex;
        justify-content: center;
        align-items: center;
        border-radius: 4px 4px 4px 4px;
        border: 1px solid rgba(0, 0, 0, 0.15);
        margin-bottom: 0.85rem;
      }
    }
  }

  .jump {
    color: #4095e5;
    font-size: 0.875rem;
    font-family: PingFangSC-regular;
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

  .avatar {
    width: 3.5rem;
    height: 3.5rem;
    border-radius: 4px;
    object-fit: cover;
    margin-right: 0.85rem;
    margin-bottom: 0.85rem;
    padding: 0.31rem;
    border: 1px solid rgba(0, 0, 0, 0.15);
  }
}

.el-input__wrapper {
  box-shadow: none;
}
</style>
