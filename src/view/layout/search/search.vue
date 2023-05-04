<template>
  <div class="search-component">
    <div
      class="user-box"
    >
      <audio
        ref="audio"
        src="../../../../static/jay.mp3"
        controls
        class="user-audio"
        @play="onPlay"
        @pause="onStop"
      />
      <canvas
        ref="canvas"
        class="user-canvas"
      />
    </div>
    <div
      class="user-box"
    >
      <div class="gvaIcon gvaIcon-refresh" :class="[reload ? 'reloading' : '']" @click="handleReload" />
    </div>
    <div
      class="user-box"
    >
      <Screenfull class="search-icon" :style="{cursor:'pointer'}" />
    </div>
    <div
      class="user-box"
    >
      <div class="service gvaIcon-customer-service" @click="toService" />
    </div>
  </div>
</template>

<script>
export default {
  name: 'BtnBox',
}
</script>

<script setup>
import Screenfull from '@/view/layout/screenfull/index.vue'
import { emitter } from '@/utils/bus.js'

import { ref, onMounted } from 'vue'
const audio = ref(null)
const canvas = ref(null)
const reload = ref(false)
const animationRef = ref(null)

let context
let dataArray
let analyser
onMounted(() => {
  const canvasRef = canvas.value
  context = canvasRef.getContext('2d')
})

// const audioEle = document.querySelector('audio')
const onPlay = () => {
  const audCtx = new AudioContext()
  const source = audCtx.createMediaElementSource(audio.value)
  analyser = audCtx.createAnalyser()
  analyser.fftSize = 512
  dataArray = new Uint8Array(analyser.frequencyBinCount)

  source.connect(analyser)
  analyser.connect(audCtx.destination)

  draw()
}
const onStop = () => {

  draw()
  cancelAnimationFrame(animationRef.value)
}
const draw = () => {
  animationRef.value = requestAnimationFrame(draw)
  // const { width, height } = cvs
  const width = canvas.value.width
  const height = canvas.value.height
  context.clearRect(0, 0, width, height)
  analyser.getByteFrequencyData(dataArray)
  console.log(dataArray)
  const len = dataArray.length / 2.5
  const barWidth = width / len / 2
  context.fillStyle = '#78C5F7'
  for (let i = 0; i < len; i++) {
    const data = dataArray[i]
    const barHeight = data / 255 * height
    const x1 = i * barWidth + width / 2

    const x2 = width / 2 - (i + 1) * barWidth
    const y = height - barHeight
    context.fillRect(x1, y, barWidth, barHeight)
    context.fillRect(x2, y, barWidth, barHeight)
  }
}
const handleReload = () => {
  reload.value = true
  emitter.emit('reload')
  setTimeout(() => {
    reload.value = false
  }, 500)
}
const toService = () => {
  window.open('https://support.qq.com/product/371961')
}

</script>
<style scoped lang="scss">
.reload {
  font-size: 18px;
}

.user-audio{
  width:220px;
  height:20px;
}
.user-canvas{
  position: absolute;
  top:0px;
}
.transition-box {
  overflow: hidden;
  width: 160px;
  margin-right: 32px;
  text-align: center;

  ::v-deep(.el-input__wrapper) {
    .el-input__inner {
      border-bottom: 1px solid var(--el-color-info-light-7);
    }

    box-shadow: none !important;
  }

  ::v-deep(.el-select .el-input .el-input__wrapper.is-focus) {
    box-shadow: none !important;
  }

  ::v-deep(.el-select .el-input.is-focus .el-input__wrapper) {
    box-shadow: none !important;
  }
}

.reloading{
  animation:turn 0.5s linear infinite;
}

@keyframes turn {
  0% {
    transform: rotate(0deg);
  }

  25% {
    transform: rotate(90deg);
  }

  50% {
    transform: rotate(180deg);
  }

  75% {
    transform: rotate(270deg);
  }

  100% {
    transform: rotate(360deg);
  }
}

.service {
  font-family: "gvaIcon", serif !important;
  font-size: 16px;
  font-style: normal;
  font-weight: 800;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

//小屏幕不显示
@media (max-width: 750px) {
  .service {
    display: none;
  }
}
</style>
