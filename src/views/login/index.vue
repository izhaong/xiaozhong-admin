<template>
  <div class="login">
    <div class="universe">
      <div class="sun"></div>
      <div class="moon"></div>
    </div>
    <div class="login-container">
      <el-form :model="loginForm" ref="loginForm" class="login-form">
        <div>
          <i class="el-icon-user"></i>
          <input required type="text" v-model="loginForm.username" />
          <label alt="请输入名称" placeholder="名称"></label>
        </div>

        <div>
          <i class="el-icon-key"></i>
          <input required :type="passwordType" v-model="loginForm.password" />
          <label alt="请输入密码" placeholder="密码"></label>
          <i class="el-icon-lock hidePwd" @click="showPwd" v-if="passwordType=='password'"></i>
          <i class="el-icon-unlock hidePwd" @click="showPwd" v-if="passwordType!='password'"></i>
        </div>
        <el-button class="subtn" native-type="submit" round @click="handleLogin">登录</el-button>
      </el-form>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      loginForm: {
        username: '',
        password: ''
      },
      loading: false,
      passwordType: 'password',
      redirect: undefined
    }
  },
  watch: {
    $route: {
      handler: function (route) {
        this.redirect = route.query && route.query.redirect
      },
      immediate: true
    }
  },
  methods: {
    showPwd () {
      if (this.passwordType === 'password') {
        this.passwordType = ''
      } else {
        this.passwordType = 'password'
      }
      this.$nextTick(() => {
        this.$refs.password.focus()
      })
    },
    handleLogin () {
      this.loading = true
      this.$store
        .dispatch('login', this.loginForm)
        .then(() => {
          this.$router.push({ path: this.redirect || '/' })
          this.loading = false
        })
        .catch(() => {
          this.loading = false
        })
    }
  }
}
</script>

<style lang="stylus" scoped>
@import url('./solar.css');

/* form CSS start */
.login-container {
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -35%);
  z-index: 999;

  .login-form {
    font-size: 16px;
    max-width: 100%;
    margin: 10px auto;
    div {
      white-space: nowrap;
    }

    i {
      font-size: 30px;
      margin-right: 15px;
      font-weight: bold;
      color: #888;
    }

    .hidePwd {
      font-size: 26px;
      position: absolute;
      right : 10px;
      top: 135px;
    }

    .hidePwd:hover {
      color: #0f0;
    }

    .subtn {
      position: relative;
      left: 40%;
      margin-top: 20px;
      // transform: translate(-50%, 0);
    }
  }

  .svg-container {
    padding: 6px 5px 6px 15px;
    color: $dark_gray;
    vertical-align: middle;
    width: 30px;
    display: inline-block;
  }

  .title-container {
    position: relative;

    .title {
      font-size: 26px;
      color: $light_gray;
      margin: 0px auto 40px auto;
      text-align: center;
      font-weight: bold;
    }
  }

  .show-pwd {
    position: absolute;
    right: 10px;
    top: 7px;
    font-size: 16px;
    color: $dark_gray;
    cursor: pointer;
    user-select: none;
  }
}

/* form CSS end */
.login {
  min-height: 100%;
  width: 100%;
  /* background-image: radial-gradient(#021027, #000000); */
}

input {
  font-size: 150%;
  -webkit-box-sizing: border-box;
  -moz-box-sizing: border-box;
  box-sizing: border-box;
  height: -webkit-calc(3em + 4px);
  height: calc(3em + 4px);
  margin: 0 0 1em;
  padding: 1em;
  border: 1px solid #cccccc;
  border-radius: 1.5em;
  background: #fff;
  resize: none;
  outline: none;
}

input:focus {
  border-color: #00bafa;
}

input:focus + label[placeholder]:before {
  color: #00bafa;
}

input:focus + label[placeholder]:before, input:valid + label[placeholder]:before {
  -webkit-transition-duration: 0.2s;
  transition-duration: 0.2s;
  -webkit-transform: translate(0, -1.5em) scale(0.9, 0.9);
  -ms-transform: translate(0, -1.5em) scale(0.9, 0.9);
  transform: translate(0, -1.5em) scale(0.9, 0.9);
}

input:invalid + label[placeholder][alt]:before {
  content: attr(alt);
}

input + label[placeholder] {
  font-size: 150%;
  display: block;
  pointer-events: none;
  line-height: 1em;
  margin-top: -webkit-calc(-3em - 2px);
  margin-top: calc(-3em - 2px);
  margin-bottom: -webkit-calc((3em - 1em) + 2px);
  margin-bottom: calc((3em - 1em) + 2px);
}

input + label[placeholder]:before {
  content: attr(placeholder);
  display: inline-block;
  margin: 0 -webkit-calc(3em + 4px);
  margin: 0 calc(3em + 4px);
  padding: 0 2px;
  color: #898989;
  white-space: nowrap;
  -webkit-transition: 0.3s ease-in-out;
  transition: 0.3s ease-in-out;
  background-image: -webkit-gradient(
    linear,
    left top,
    left bottom,
    from(#ffffff),
    to(#ffffff)
  );
  background-image: -webkit-linear-gradient(top, #ffffff, #ffffff);
  background-image: linear-gradient(to bottom, #ffffff, #ffffff);
  -webkit-background-size: 100% 10px;
  background-size: 100% 10px;
  background-repeat: no-repeat;
  background-position: center;
}
</style>
