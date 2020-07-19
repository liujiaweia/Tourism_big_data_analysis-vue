<template>
  <div class="login-wrap" :style="setBackground">
    <div class="tm-container">
      <div>
        <div class="tm-row pt-4">
          <div class="tm-col-left">
            <div class="tm-site-header media">
              <i class="fas fa-umbrella-beach fa-3x mt-1 tm-logo" />
              <div class="media-body">
                <h1 class="tm-sitename text-uppercase">play byte</h1>
                <p class="tm-slogon">Tourism big data analysis</p>
              </div>
            </div>
          </div>
          <div class="tm-col-right">
            <nav id="tm-main-nav" class="navbar navbar-expand-lg">
              <button
                class="navbar-toggler toggler-example mr-0 ml-auto"
                type="button"
                data-toggle="collapse"
                data-target="#navbar-nav"
                aria-controls="navbar-nav"
                aria-expanded="false"
                aria-label="Toggle navigation"
              >
                <span><i class="fas fa-bars"/></span>
              </button>
              <div id="navbar-nav" class="collapse navbar-collapse tm-nav">
                <ul class="navbar-nav text-uppercase">
                  <li class="nav-item">
                    <a class="mb-4 tm-content-title">Login</a>
                  </li>
                  <li class="nav-item">
                    <a class="mb-4 tm-content-title">efficiency</a>
                  </li>
                  <li class="nav-item">
                    <a class="mb-4 tm-content-title">artistic</a>
                  </li>
                </ul>
              </div>
            </nav>
          </div>
        </div>

        <div class="tm-row">
          <div class="tm-col-left" />
          <main class="tm-col-right">
            <el-form
              ref="loginForm"
              :model="loginForm"
              :rules="loginRules"
              class="login-form"
              auto-complete="on"
              label-position="left"
            >
              <section class="tm-content tm-contact">
                <h2 class="mb-4 tm-content-title">Login form</h2>
                <!-- <p class="mb-85">
                  Login form
                </p> -->
                <el-form-item prop="username">
                  <span class="svg-container">
                    <svg-icon icon-class="user" />
                  </span>
                  <el-input
                    ref="username"
                    v-model="loginForm.username"
                    placeholder="Username"
                    name="username"
                    type="text"
                    tabindex="1"
                    auto-complete="on"
                  />
                </el-form-item>

                <el-form-item prop="password">
                  <span class="svg-container">
                    <svg-icon icon-class="password" />
                  </span>
                  <el-input
                    :key="passwordType"
                    ref="password"
                    v-model="loginForm.password"
                    :type="passwordType"
                    placeholder="Password"
                    name="password"
                    tabindex="2"
                    auto-complete="on"
                    @keyup.enter.native="handleLogin"
                  />
                  <span class="show-pwd" @click="showPwd">
                    <svg-icon
                      :icon-class="
                        passwordType === 'password' ? 'eye' : 'eye-open'
                      "
                    />
                  </span>
                </el-form-item>

                <el-button
                  :loading="loading"
                  type="primary"
                  style="width:100%;margin-bottom:30px;"
                  @click.native.prevent="handleLogin"
                  >Login</el-button
                >
              </section>
            </el-form>
          </main>
        </div>
      </div>

      <!-- <div class="tm-row">
        <div class="tm-col-left text-center">
          <ul class="tm-bg-controls-wrapper"></ul>
        </div>
      </div> -->

      <!-- Diagonal background design -->
      <div class="tm-bg">
        <div class="tm-bg-left" />
        <div class="tm-bg-right" />
      </div>
    </div>
  </div>
</template>

<script>
import { validUsername } from "@/utils/validate";
export default {
  name: "Login",
  data() {
    const validateUsername = (rule, value, callback) => {
      if (!validUsername(value)) {
        callback(new Error("Please enter the correct user name"));
      } else {
        callback();
      }
    };
    const validatePassword = (rule, value, callback) => {
      if (value.length < 6) {
        callback(new Error("The password can not be less than 6 digits"));
      } else {
        callback();
      }
    };
    return {
      loginForm: {
        username: "admin",
        password: "111111"
      },
      setBackground: {
        backgroundImage:
          "url(" +
          require("../../../public/static/home/img/diagoona-bg-2.jpg") +
          ")",

        backgroundRepeat: "repeat"
      },
      loginRules: {
        username: [
          { required: true, trigger: "blur", validator: validateUsername }
        ],
        password: [
          { required: true, trigger: "blur", validator: validatePassword }
        ]
      },
      loading: false,
      passwordType: "password",
      redirect: undefined
    };
  },
  watch: {
    $route: {
      handler: function(route) {
        this.redirect = route.query && route.query.redirect;
      },
      immediate: true
    }
  },
  methods: {
    showPwd() {
      if (this.passwordType === "password") {
        this.passwordType = "";
      } else {
        this.passwordType = "password";
      }
      this.$nextTick(() => {
        this.$refs.password.focus();
      });
    },
    handleLogin() {
      this.$refs.loginForm.validate(valid => {
        if (valid) {
          this.loading = true;
          this.$store
            .dispatch("user/login", this.loginForm)
            .then(() => {
              this.$router.push({ path: this.redirect || "/" });
              this.loading = false;
            })
            .catch(() => {
              this.loading = false;
            });
        } else {
          console.log("error submit!!");
          return false;
        }
      });
    }
  }
};
</script>
<style scoped src="../../../public/static/home/css/bootstrap.min.css"></style>
<style>
/* @import url("../../../public/static/home/css/bootstrap.min.css"); */
@import url("../../../public/static/home/css/templatemo-diagoona.css");
@import url("../../../public/static/home/fontawesome/css/all.min.css");
.login-wrap {
  filter: alpha(Opacity=85);
  -moz-opacity: 0.85;
  opacity: 0.85;
}
</style>
