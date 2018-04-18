<template>
  <div class="container">
    <div class="container">
      <div class="row">
        <div class="col-md-8 col-md-offset-2">
          <div class="panel panel-default">
            <div class="panel-heading">用户注册</div>
            <div class="panel-body">
              <form method="POST" action="http://larabbs.test/register" class="form-horizontal">
                <input type="hidden" name="_token" value="7Br0j7v3cm7e5JBZs8XgEmIpKKAc2MQmZ5k1TPO4">
                <div class="form-group">
                  <label for="name" class="col-md-4 control-label">用户名</label>
                  <div class="col-md-6">
                    <input id="name" type="text" name="name" value="" required="required" autofocus="autofocus" class="form-control">
                  </div>
                </div>
                <div class="form-group">
                  <label for="email" class="col-md-4 control-label">E-Mail 地址</label>
                  <div class="col-md-6">
                    <input id="email" type="email" name="email" value="" required="required" class="form-control">
                  </div>
                </div>
                <div class="form-group">
                  <label for="password" class="col-md-4 control-label">密 码</label>
                  <div class="col-md-6">
                    <input id="password" type="password" name="password" required="required" class="form-control">
                  </div>
                </div>
                <div class="form-group">
                  <label for="password-confirm" class="col-md-4 control-label">重复密码</label>
                  <div class="col-md-6">
                    <input id="password-confirm" type="password" name="password_confirmation" required="required" class="form-control">
                  </div>
                </div>
                <div class="form-group ">
                  <label for="captcha" class="col-md-4 control-label">验证码</label>
                  <div class="col-md-6">
                    <input id="captcha" name="captcha" class="form-control"> <img src="http://larabbs.test/captcha/flat?3PABNF3B" onclick="this.src='/captcha/flat?'+Math.random()" title="点击图片重新获取验证码" class="thumbnail captcha"></div>
                </div>
                <div class="form-group">
                  <div class="col-md-6 col-md-offset-4">
                    <button type="submit" class="btn btn-primary">
                      注册 <i class="glyphicon glyphicon-arrow-right"></i></button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {}

</script>
<style lang="scss" scoped>


</style>
