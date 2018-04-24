<template>
  <div class="row">
    <div class="col-md-8 col-md-offset-2">
      <div class="panel panel-default">
        <div class="panel-heading">用户注册</div>
        <div class="panel-body">
          <form class="form-horizontal">
            <div class="form-group">
              <label for="name" class="col-md-4 control-label">手机号</label>
              <div class="col-md-6">
                <input type="text" class="form-control" v-model="phone">
              </div>
            </div>
            <div v-show="step == 1" class="form-group ">
              <label for="captcha" class="col-md-4 control-label">图片验证码</label>
              <div class="col-md-6">
                <input class="form-control" v-model="captchaCode">
                <img :src="captchaImg" v-on:click="getCaptcha()" title="点击图片重新获取验证码" class="thumbnail captcha">
              </div>
            </div>
            <div v-show="step == 2" class="form-group">
              <label for="email" class="col-md-4 control-label">短信验证码</label>
              <div class="col-md-6">
                <input type="text" class="form-control" v-model="smsCode">
              </div>
            </div>
            <div v-show="step == 2" class="form-group">
              <label for="name" class="col-md-4 control-label">名称</label>
              <div class="col-md-6">
                <input type="text" class="form-control" v-model="name">
              </div>
            </div>
            <div v-show="step == 2" class="form-group">
              <label for="password" class="col-md-4 control-label">密 码</label>
              <div class="col-md-6">
                <input type="password" class="form-control" v-model="password">
              </div>
            </div>
            <div class="form-group">
              <div class="col-md-6 col-md-offset-4">
                <button class="btn btn-info" v-on:click.prevent="verifyCaptchaCode">
                  发送 <i class="glyphicon glyphicon-arrow-right"></i>
                </button>
                <button class="btn btn-primary" v-on:click.prevent="post">
                  注册 <i class="glyphicon glyphicon-arrow-right"></i>
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      step: 1,
      phone: '',
      name: '',
      password: '',
      captchaImg: '',
      captchaKey: '',
      captchaCode: '',
      smsKey: '',
      smsCode: '',
    }
  },
  methods: {
    getCaptcha() {
      this.$http.post('/api/captchas', { phone: this.phone }).then(res => {
        this.captchaImg = res.captcha_image_content
        this.captchaKey = res.captcha_key
      }).catch((err) => {
        console.log(err);
      })
    },
    verifyCaptchaCode() {
      let params = { captcha_key: this.captchaKey, captcha_code: this.captchaCode }
      this.$http.post('/api/verificationCodes', params).then(res => {
        this.step = 2
        this.smsKey = res.key
      }).catch((err) => {
        console.log(err);
      })
    },
    post() {
      let params = {
        verification_key: this.smsKey,
        verification_code: this.smsCode,
        password: this.password,
        name: this.name,
      }
      this.$http.post('/api/users', params).then((res) => {
        this.captchaImg = res.captcha_image_content
      }).catch((err) => {
        console.log(err);
      })
    }
  }
}
</script>
