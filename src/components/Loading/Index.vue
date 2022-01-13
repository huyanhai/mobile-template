<template>
  <transition name="fade" mode="in-out" tag="div" @touchstart.stop @touchmove.stop>
    <div
      class="loading-container"
      id="cus-loading"
      :class="{ mask: !$attrs.mask }"
      v-show="$attrs.show"
    >
      <div class="loading">
        <div class="loading-wrap">
          <img :src="$attrs.icon" v-if="$attrs.icon" />
          <div v-else>
            <div class="ball">
              <i class="bg shaozi"></i>
              <i class="bg chazi"></i>
            </div>
            <div class="shadow"></div>
          </div>
        </div>
        <p class="tips" v-if="!!$attrs.message">{{ $attrs.message }}</p>
      </div>
    </div>
  </transition>
</template>

<script lang="ts" setup></script>

<style lang="scss" scoped>
.loading-container {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.3);
  z-index: 9999;
  &.mask {
    background: transparent;
  }
}
.loading {
  position: fixed;
  top: 40%;
  left: 50%;
  border-radius: 8px;
  background-color: #ffffff;
  transform: translate(-50%, -50%);
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 10px;
}
.loading-wrap {
  height: 40px;
  width: 40px;
  margin-bottom: 15px;
  position: relative;
  img {
    max-width: 100%;
    max-height: 100%;
  }
}
.ball {
  position: relative;
  margin: auto;
  width: 40px;
  height: 40px;
  animation: jump 1s linear infinite;
  z-index: 10;
  background-color: #ffda00;
  border-radius: 50%;
  backface-visibility: hidden;
}
.shadow {
  position: absolute;
  margin-top: 4px;
  width: 34px;
  z-index: 5;
  backface-visibility: hidden;
  left: 50%;
  transform: translateX(-50%);
  bottom: -10px;
  &::before {
    display: block;
    content: '';
    margin: auto;
    width: 100%;
    height: 6px;
    animation: scale 1s linear infinite;
    transform-origin: top center;
    background: #e1e1e1;
    border-radius: 50%;
    backface-visibility: hidden;
  }
}
.bg {
  position: absolute;
  top: 8px;
  left: 8px;
  display: block;
  width: 24px;
  height: 24px;
  background-image: url('./loading.png');
  background-repeat: no-repeat;
  background-color: transparent;
  background-size: 68px 24px;
  z-index: 10;
  backface-visibility: hidden;
}
.shaozi {
  margin-top: 1px;
  margin-left: -3px;
  background-position: 0 0;
  animation: shaozi 1s linear infinite;
}
.chazi {
  margin-top: 1px;
  margin-left: 3px;
  background-position: -44px 0;
  animation: chazi 1s linear infinite;
}
.tips {
  font-size: 12px;
  color: #474747;
  text-align: center;
  text-overflow: ellipsis;
  overflow: hidden;
  max-width: 90px;
  min-width: 70px;
  box-sizing: border-box;
  margin: 0;
  white-space: normal;
  display: -webkit-box;
  -webkit-box-orient: vertical;
  overflow: hidden;
  -webkit-line-clamp: 2;
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.2s;
}
.fade-enter,
.fade-leave-to {
  opacity: 0;
}
@keyframes jump {
  0%,
  100% {
    transform: translate3d(0, 0, 0) scale(1);
    animation-timing-function: cubic-bezier(0.45, 0, 0.9, 0.55);
  }
  50% {
    transform: translate3d(0, 10px, 0) scale(0.8);
    animation-timing-function: cubic-bezier(0, 0.45, 0.55, 0.9);
  }
}

@keyframes scale {
  0%,
  100% {
    animation-timing-function: cubic-bezier(0.45, 0, 0.9, 0.55);
    opacity: 1;
  }
  50% {
    transform: scale(0.5);
    animation-timing-function: cubic-bezier(0, 0.45, 0.55, 0.9);
    opacity: 0.4;
  }
}

@keyframes chazi {
  0%,
  100% {
    transform: translateX(0) rotate(0);
  }
  50% {
    transform: translateX(-6px) rotate(-90deg);
  }
}

@keyframes shaozi {
  0%,
  100% {
    transform: translateX(0) rotate(0);
  }
  50% {
    transform: translateX(6px) rotate(90deg);
  }
}
</style>
