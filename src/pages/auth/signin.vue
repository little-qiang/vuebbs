<template>
  <div class="container">
    <div class="container">
      <div class="row">
        <div class="col-md-8 col-md-offset-2">
          <div class="panel panel-default">
            <div class="panel-heading">Login</div>
            <div class="panel-body">
              <form class="form-horizontal">
                <div class="form-group">
                  <label for="email" class="col-md-4 control-label">E-Mail Address</label>
                  <div class="col-md-6">
                    <input v-model="email" type="email" id="email" class="form-control" style="background-color: rgb(250, 255, 189) !important; box-shadow: none; color: rgb(0, 0, 0);">
                  </div>
                </div>
                <div class="form-group">
                  <label for="password" class="col-md-4 control-label">Password</label>
                  <div class="col-md-6">
                    <input v-model="password" type="password" id="password" class="form-control" style="background-color: rgb(250, 255, 189) !important; box-shadow: none; color: rgb(0, 0, 0);">
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
                    <button v-on:click.prevent="signin" class="btn btn-primary">
                      Login
                    </button>
                    <a href="http://larabbs.test/password/reset" class="btn btn-link">
                      Forgot Your Password?
                    </a>
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
import axios from 'axios'
export default {
  data(){
    return {
      email: '',
      password: ''
    }
  },
  methods: {
    test(t){
      this.$store.commit('setToken', t)
    },
    signin(){
      axios.post('/api/authorizations', { username: this.email, password: this.password}).then((res) => {
        window.localStorage.setItem('token', res.data.access_token)
        this.$store.dispatch('setToken', res)
        // this.$router.push('/')
      }).catch((error) => {
        console.log(error)
      })
    }
  }
}

</script>
