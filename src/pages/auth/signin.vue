<template>
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
                  <button v-on:click.prevent="signIn" class="btn btn-primary">
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
</template>
<script>
import store from '../../store/'
import { mapGetters } from 'vuex'
export default {
  data() {
    return {
      email: '',
      password: ''
    }
  },
  computed: {
    ...mapGetters(['isSignIn']),
  },
  watch: {
    isSignIn: function(val, oldVal) {
      if (val) {
        this.$router.push('/')
      }
    }
  },
  beforeRouteEnter(to, from, next) {
    next(vm => {
      if (vm.$store.getters.isSignIn) {
        vm.$router.push('/')
      }
    })
  },
  methods: {
    signIn() {
      this.$store.dispatch('signIn', { username: this.email, password: this.password })
    }
  }
}

</script>
