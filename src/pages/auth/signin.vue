<template>
  <div class="container">
    <div class="container">
      <div class="row">
        <div class="col-md-8 col-md-offset-2">
          <div class="panel panel-default">
            <div class="panel-heading">Login</div>
            <div class="panel-body">
              <form method="POST" action="http://larabbs.test/login" class="form-horizontal">
                <input type="hidden" name="_token" value="7Br0j7v3cm7e5JBZs8XgEmIpKKAc2MQmZ5k1TPO4">
                <div class="form-group">
                  <label for="email" class="col-md-4 control-label">E-Mail Address</label>
                  <div class="col-md-6">
                    <input id="email" type="email" name="email" value="" required="required" autofocus="autofocus" class="form-control" style="background-color: rgb(250, 255, 189) !important; box-shadow: none; color: rgb(0, 0, 0);">
                  </div>
                </div>
                <div class="form-group">
                  <label for="password" class="col-md-4 control-label">Password</label>
                  <div class="col-md-6">
                    <input id="password" type="password" name="password" required="required" class="form-control" style="background-color: rgb(250, 255, 189) !important; box-shadow: none; color: rgb(0, 0, 0);">
                  </div>
                </div>
                <div class="form-group">
                  <div class="col-md-6 col-md-offset-4">
                    <div class="checkbox">
                      <label>
                        <input type="checkbox" name="remember"> Remember Me
                      </label>
                    </div>
                  </div>
                </div>
                <div class="form-group">
                  <div class="col-md-8 col-md-offset-4">
                    <button type="submit" class="btn btn-primary">
                      Login
                    </button> <a href="http://larabbs.test/password/reset" class="btn btn-link">
                                    Forgot Your Password?
                                </a></div>
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
