<template>

</template>

<script>
export default {
  name: "index"
}
</script>

<style lang="less" scoped>

@btnW: 270px;
@btnH: 120px;
@paddingL: 16px;
@time: 0.8s;
@keyframes headAnimate {
  0% {transform: rotate(13deg);}
  10% {transform: rotate(13deg);}
  50% {transform: rotate(-15deg);}
  60% {transform: rotate(-15deg);}
  100% {transform: rotate(13deg);}
}
@keyframes humanAnimate {
  0% {transform: rotate(4deg);}
  40% {transform: rotate(-6deg);}
  50% {transform: rotate(-6deg);}
  90% {transform: rotate(4deg);}
  100% {transform: rotate(4deg);}
}
@keyframes flagAnimate {
  0% {transform: rotate(10deg);}
  50% {transform: rotate(-20deg);}
  100% {transform: rotate(10deg);}
}
.button {
  display: inline-block;
  line-height: 0;
  cursor: pointer;
}
.btnInner {
  transition: all @time ease-in-out;
  line-height: 0;
  display: inline-block;
  position: relative;
  height: @btnH;
  width: @btnW;
  border-radius: 100px;
  box-shadow: inset 0 2px 5px rgba(0,0,0,0.2), 0 0 9px rgba(0,0,0,0.3);
  overflow: hidden;
}
.bg {
  transition: all @time ease-in-out;
  display: inline-block;
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  background: -webkit-linear-gradient(left, #9db8f7 0%, #4f77ce 100%);
  background: linear-gradient(to right, #9db8f7 0%, #4f77ce 100%);
  opacity: 1;
&.bg2 {
   background: -webkit-linear-gradient(left, #043789 30%, #020914 100%);
   background: linear-gradient(to right, #043789 30%, #020914 100%);
   opacity: 0;
 }
}
.circle {
  transition: all @time ease-in-out;
  position: absolute;
  overflow: hidden;
  width: @btnH - @paddingL - @paddingL;
  height: @btnH - @paddingL - @paddingL;
  top: @paddingL; left: @paddingL;
  background: #f6cf5b;
  border-radius: 100px;
  box-shadow: 0px 0px 3px rgba(255,255,255,0.6), inset -0.5px -1px 3px rgba(0,0,0,0.3), inset 1px 1px 3px rgba(255,255,255,0.5);
.circleNight {
  transition: all @time ease-in-out;
  transform: rotate(60deg) scale(1.7);
  opacity: 0;
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  border-radius: 100px;
  background: #f1f1f1;
  box-shadow: 0px 0px 5px rgba(0,0,0,0.6), inset -0.5px -1px 12px rgba(0,0,0,0.5), inset 1px 1px 2px rgba(255,255,255,0.8);
}
.crater {
  position: absolute;
  width: 25%;
  height: 25%;
  top: 12%;
  left: 44%;
  border-radius: 100px;
  background: #f1f1f1;
  box-shadow: inset @btnH * 0.042 @btnH * 0.042 @btnH * 0.065 rgba(12, 8, 146, 0.19), 0px 0px @btnH * 0.026 rgba(113, 116, 122, 0.3);
&.crater2 {
   width: 34%;
   height: 34%;
   top: 42%;
   left: 16%;
 }
&.crater3 {
   width: 19%;
   height: 19%;
   top: 62%;
   left: 63%;
   box-shadow: inset @btnH * 0.022 @btnH * 0.022 @btnH * 0.052 rgba(12, 8, 146, 0.13), 0px 0px @btnH * 0.02 rgba(113, 116, 122, 0.3);
 }
}
}
.clouds {
  transition: all @time ease-in-out;
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  opacity: 0.3;
  transition-delay: 0s;
&.clouds2 {
   transition-delay: @time * 0.2;
   opacity: 1;
.cloud {
  transform: scale(0.82);
&.cloud2 {
   transform: scale(0.9);
   top: 60%;
   left: 62.5%;
 }
&.cloud4 {
   transform: scale(0.75);
   top: 60%;
   left: 10%;
 }
&.cloud5 {
   transform: scale(1);
   top: 74%;
   left: 62%;
 }
}
}
.cloud {
  position: absolute;
  background: #fff;
  border-radius: 100px;
  width: @btnH * 0.8;
  height: @btnH * 0.8;
  top: 12%;
  left: 77%;
&.cloud2 {
   width: @btnH * 0.55;
   height: @btnH * 0.55;
   top: 56%;
   left: 62%;
 }
&.cloud3 {
   width: @btnH * 0.85;
   height: @btnH * 0.85;
   top: 42%;
   left: 32%;
 }
&.cloud4 {
   width: @btnH * 0.9;
   height: @btnH * 0.9;
   top: 64%;
   left: 10%;
 }
&.cloud5 {
   width: @btnH * 0.9;
   height: @btnH * 0.9;
   top: 60%;
   left: 70%;
 }
}
}
.stars {
  transition: all @time * 0.5 ease-in-out;
  transition-delay: @time * 0.2;
  transform: scale(1.2);
  opacity: 0;
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
.star {
  display: inline-block;
  position: absolute;
  left: 28%;
  top: 13%;
  width: 4px;
  opacity: 0.8;
&.star2 {
   left: 10%;
   top: 35%;
   opacity: 1;
   width: 6px;
 }
&.star3 {
   left: 22%;
   top: 39%;
   width: 10px;
   opacity: 0.9;
 }
&.star4 {
   left: 13%;
   top: 75%;
 }
&.star5 {
   left: 30%;
   top: 56%;
 }
&.star6 {
   left: 43%;
   top: 31%;
   opacity: 0.8;
 }
&.star7 {
   left: 54%;
   top: 25%;
   width: 9px;
 }
&.star8 {
   left: 41%;
   top: 79%;
   width: 6px;
 }
&.star9 {
   left: 52%;
   top: 50%;
   width: 7px;
 }
}
}
.rocketBox {
  transition: all @time * 1.3 ease-in-out;
  transition-delay: @time * 0.1;
  display: inline-block;
  position: absolute;
  width: @btnH * 0.8;
  top: 24%;
  left: 61%;
  opacity: 1;
.rocketInner {
  display: inline-block;
  position: absolute;
  width: 100%;
  transition: all @time * 0.3 ease-in-out;
}
}
.flag {
  animation: flagAnimate 1s infinite;
  transform-origin: 59% 36%;
}
.humanBox {
  opacity: 0;
  transform: rotateY(90deg);
  transform-origin: 50%;
  transition: all @time * 0.3 ease-in-out;
}
.human2 {
  opacity: 1;
  transform-origin: 50%;
  transition: all @time * 0.3 ease-in-out;
}
.head2 {
  transform: translate(-11%, 10%) rotate(-5deg) scale(1.2);
  transform-origin: 57% 30%;
}
.night {
.bg {
  opacity: 0;
&.bg2 {
   opacity: 1;
 }
}
.circle {
  left: @btnW - @btnH + @paddingL;
.circleNight {
  transform: rotate(0deg) scale(1);
  opacity: 1;
}
}
.clouds {
  top: 100%;
  transition-delay: @time * 0.2;
&.clouds2 {
   transition-delay: 0s;
 }
}
.stars {
  transform: scale(1);
  opacity: 1;
  transition-delay: @time * 0.7;
}
.rocketBox {
  top: -24%;
  left: -32%;
  transform: scale(0.6);
}
}
.button {

&
:hover {

.head {
  animation: headAnimate 1s infinite;
  transform-origin: 57% 30%;
}

.humanBox {
  opacity: 1;
  transform: rotateY(0deg);
}

.human {
  animation: humanAnimate 1s infinite;
  transform-origin: 50% 56%;
}

.human2 {
  opacity: 0;
  transform: rotateY(90deg);
}

.rocketBox {

.rocketInner {
  transform: translate(-6px, -3px);
}

}
}
}
</style>