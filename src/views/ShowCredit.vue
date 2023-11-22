<template>
  <div class="show-credit">
    <!-- <NavBar title="授信展示页" /> -->
    <div class="background"></div>
    <div class="box box-one">
      <div class="top">
        <span>您的预计放款额度</span>
        <span>有效期至：2024-02-30</span>
      </div>
      <div class="center">￥2000000</div>
      <div class="bottom">仅表示预计授信额度，具体放款以实际情况为准</div>
    </div>
    <div class="box box-two">
      <div class="form">
        <div class="from-item">
          <div class="label">账期(天):</div>
          <div class="value">19</div>
        </div>
        <div class="from-item">
          <div class="label">分佣比例(%):</div>
          <div class="value">25.00</div>
        </div>
        <div class="from-item">
          <div class="label">退款率(%):</div>
          <div class="value">11.73</div>
        </div>
        <div class="from-item">
          <div class="label">店铺:</div>
          <div class="value">百兰根(淘宝)</div>
        </div>
      </div>
    </div>
    <a href="#" class="jump">重新运算</a>
    <div class="btn-box">
      <el-button type="primary" class="btn">返回</el-button>
    </div>
    <a href="#" class="jump">额度太低？立即联系我们</a>
  </div>
</template>

<script setup>
// import NavBar from '@/components/NavBar/NavBar.vue'
</script>

<style lang="scss" scoped>
.show-credit {
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
    background-color: #ffffff;
    border-radius: 0.62rem;
    box-shadow: 0 0.3rem 0.5rem 0 rgba(0, 0, 0, 0.3);
    padding: 0 1.875rem 1.875rem 1.875rem;
  }

  .box-one {
    margin-top: -13.12rem;
    padding: 0.75rem;

    .top {
      font-size: 0.875rem;
      color: #101010;
      display: flex;
      justify-content: space-between;
    }

    .center {
      color: #4095e5;
      font-size: 2.5rem;
      text-align: center;
    }

    .bottom {
      font-size: 0.687rem;
      color: #6c6c6c;
      text-align: center;
      margin-top: 0.75rem;
    }
  }

  .box-two {
    padding: 2rem 2.625rem;
    margin-top: 1.43rem;

    .from-item {
      display: flex;
      line-height: 3.31rem;
      font-size: 0.88rem;
      justify-content: space-between;
      align-items: center;

      .label {
        color: #4f4f4f;
        font-family: PingFangSC-regular;
      }

      .input:focus {
        outline: none;
      }

      .select {
        width: 10.31rem;
        font-family: PingFangSC-regular;
        border: none;
      }
    }
  }

  .jump {
    color: #4095e5;
    font-size: 1rem;
    font-family: PingFangSC-regular;
    margin-top: 3rem;
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
</style>
