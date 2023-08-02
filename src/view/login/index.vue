<template>
  <div id="userLayout">
    <Three style="height: 100%; width: 100%" :is-rick2="isRick" />
    <div class="login_panel">
      <div class="login_panel_form">
        <div class="login_panel_form_title">
          <img
            class="login_panel_form_title_logo"
            :src="$GIN_VUE_ADMIN.appLogo"
            alt
          />
          <p class="login_panel_form_title_p">{{ $GIN_VUE_ADMIN.appName }}</p>
        </div>

        <el-form
          ref="loginForm"
          :model="loginFormData"
          :rules="rules"
          :validate-on-rule-change="false"
          @keyup.enter="submitForm"
        >
          <el-form-item prop="username">
            <el-input
              v-model="loginFormData.username"
              size="large"
              placeholder="请输入用户名"
              suffix-icon="user"
            />
          </el-form-item>
          <el-form-item prop="password">
            <el-input
              v-model="loginFormData.password"
              show-password
              size="large"
              type="password"
              placeholder="请输入密码"
            />
          </el-form-item>
          <el-form-item v-if="loginFormData.openCaptcha" prop="captcha">
            <div class="vPicBox">
              <el-input
                v-model="loginFormData.captcha"
                placeholder="请输入验证码"
                size="large"
                style="flex: 1; padding-right: 20px"
              />
              <div class="vPic">
                <img
                  v-if="picPath"
                  :src="picPath"
                  alt="请输入验证码"
                  @click="loginVerify()"
                />
              </div>
            </div>
          </el-form-item>
          <el-form-item>
            <!-- <el-button
              type="primary"
              style="width: 46%"
              size="large"
              @click="checkInit"
              >前往初始化</el-button
            > -->
            <button
              id="button"
              class="el-button el-button--primary el-button--large"
              style="width: 100%"
              @click="checkInit"
            >
              登 录
            </button>
            <!-- <el-button
              type="primary"
              size="large"
              style="width: 46%; margin-left: 8%"
              @click="submitForm"
              >登 录</el-button
            > -->
          </el-form-item>
        </el-form>
      </div>
      <div class="login_panel_right" />
      <div class="login_panel_foot">
        <div class="links">
          <a href="http://doc.henrongyi.top/" target="_blank">
            <img src="@/assets/docs.png" class="link-icon" alt="文档" />
          </a>
          <a href="https://support.qq.com/product/371961" target="_blank">
            <img src="@/assets/kefu.png" class="link-icon" alt="客服" />
          </a>
          <a
            href="https://github.com/flipped-aurora/gin-vue-admin"
            target="_blank"
          >
            <img src="@/assets/github.png" class="link-icon" alt="github" />
          </a>
          <a href="https://space.bilibili.com/322210472" target="_blank">
            <img src="@/assets/video.png" class="link-icon" alt="视频站" />
          </a>
        </div>
        <div class="copyright">
          <BottomInfo />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Login",
  components: {
    Three,
  },
};
</script>

<script setup>
import Three from "./indexBg.vue";
import { captcha } from "@/api/user";
import { checkDB } from "@/api/initdb";
import BottomInfo from "@/view/layout/bottomInfo/bottomInfo.vue";
import { reactive, ref, onMounted } from "vue";
import { ElMessage } from "element-plus";
import { useRouter } from "vue-router";
import { useUserStore } from "@/pinia/modules/user";
const loginBtn = ref(null);
onMounted(() => {
  // const button = loginBtn.value;
  // loginBtn.value.style.background = "red";
  // console.log(loginBtn._value);
  const button = document.getElementById("button");
  const distanceBetween = (p1x, p1y, p2x, p2y) => {
    const dx = p1x - p2x;
    const dy = p1y - p2y;
    return Math.sqrt(dx * dx + dy * dy);
  };
  document.addEventListener("mousemove", (event) => {
    if (loginFormData.username) {
      return;
    }
    const radius = Math.max(
      button.offsetWidth * 2,
      button.offsetHeight * 2,
      100
    );

    const bx =
      button.parentNode.offsetLeft + button.offsetLeft + button.offsetWidth / 2;

    const by =
      button.parentNode.offsetTop + button.offsetTop + button.offsetHeight / 2;
    const dist = distanceBetween(event.clientX, event.clientY, bx, by);
    const angle = Math.atan2(event.clientY - by, event.clientX - bx);
    console.log(dist);
    const ox = -1 * Math.cos(angle) * Math.max(radius - dist, 0);
    const oy = -1 * Math.sin(angle) * Math.max(radius - dist, 0);
    const rx = oy / 2;
    const ry = -ox / 2;
    button.style.transition = `all 0.1s ease`;
    button.style.transform = `translate(${ox}px,${oy}px) rotateX(${rx}deg) rotateY(${ry}deg)`;
    button.style.boxShadow = `0px ${Math.abs(oy)}px ${
      (Math.abs(oy) / radius) * 40
    }px rgba(0,0,0,0.15)`;
  });
});
const router = useRouter();
// 验证函数
const checkUsername = (rule, value, callback) => {
  if (value.length < 5) {
    return callback(new Error("请输入正确的用户名"));
  } else {
    callback();
  }
};
const checkPassword = (rule, value, callback) => {
  if (value.length < 6) {
    return callback(new Error("请输入正确的密码"));
  } else {
    callback();
  }
};

// 获取验证码
const loginVerify = () => {
  captcha({}).then(async (ele) => {
    rules.captcha.push({
      max: ele.data.captchaLength,
      min: ele.data.captchaLength,
      message: `请输入${ele.data.captchaLength}位验证码`,
      trigger: "blur",
    });
    picPath.value = ele.data.picPath;
    loginFormData.captchaId = ele.data.captchaId;
    loginFormData.openCaptcha = ele.data.openCaptcha;
  });
};
loginVerify();

// 登录相关操作
const loginForm = ref(null);
const picPath = ref("");
const isRick = ref(false);
const loginFormData = reactive({
  username: "admin",
  password: "123456",
  captcha: "",
  captchaId: "",
  openCaptcha: false,
});
const rules = reactive({
  username: [{ validator: checkUsername, trigger: "blur" }],
  password: [{ validator: checkPassword, trigger: "blur" }],
  captcha: [
    {
      message: "验证码格式不正确",
      trigger: "blur",
    },
  ],
});

const userStore = useUserStore();
const login = async () => {
  return await userStore.LoginIn(loginFormData);
};
const submitForm = () => {
  loginForm.value.validate(async (v) => {
    if (v) {
      const flag = await login();
      if (!flag) {
        loginVerify();
      }
    } else {
      ElMessage({
        type: "error",
        message: "请正确填写登录信息",
        showClose: true,
      });
      loginVerify();
      return false;
    }
  });
};

// 跳转初始化
const checkInit = async () => {
  // const res = await checkDB();
  // if (res.code === 0) {
  //   if (res.data?.needInit) {
  //     userStore.NeedInit();
  //     router.push({ name: "Init" });
  //   } else {
  //     ElMessage({
  //       type: "info",
  //       message: "已配置数据库信息，无法初始化",
  //     });
  //   }
  // }
  isRick.value = true;
};
</script>

<style lang="scss" scoped>
@import "@/style/newLogin.scss";
</style>
