<template>
  <div
    class="vue-slidecards"
    :style="{ width: width + 'px', height: height + 'px' }"
  >
    <div
      class="vue-slidecards-item"
      v-for="cardData in cardContentArray.slice(0, 3)"
      :key="cardData.id"
      ref="cardItem"
    >
      <slot :cardData="cardData"></slot>
    </div>
  </div>
</template>

<script>
export default {
  name: "SlideCard",
  props: {
    cardContentArray: {
      type: Array,
      default: () => [],
    },
    keyField: {
      type: String,
      default: "key",
    },
    width: {
      type: Number,
      default: 300,
    },
    height: {
      type: Number,
      default: 500,
    },
  },
  mounted() {
    const img = document.querySelector(".vue-slidecards-item img");
    img && (img.draggable = false);

    this.mouseDownHandler();
  },
  methods: {
    mouseDownHandler() {
      const el = this.$refs.cardItem[0];
      if (!el) return;
      let prevClientX = 0;
      let prevClientY = 0;
      let position = { x: 0, y: 0 };
      const mouseMoveHandler = (e) => {
        position.x = e.clientX - prevClientX;
        position.y = e.clientY - prevClientY;
        el.style.transform = `translate3D(${position.x}px,${
          position.y
        }px,0) rotateZ(${position.x / 5}deg)`;
      };
      const mouseUpHandler = () => {
        window.removeEventListener("mousemove", mouseMoveHandler);
        if (position.x > 100) {
          this.removeHandler("right");
          el.style.transition = "0s";
        } else if (position.x < -100) {
          this.removeHandler("left");
          el.style.transition = "0s";
        } else if (
          (-50 <= position.x && position.x <= 50) ||
          (-50 <= position.y && position.y <= 50)
        ) {
          el.style.transition = `.5s all ease`;
        }
        el.style.transform = ``; // 关闭 style 属性样式，改为使用 css 样式
        position = { x: 0, y: 0 };
      };

      this.$refs.cardItem[0].addEventListener("mousedown", function (e) {
        [...this.parentNode.children].forEach((card) =>
          card.classList.remove("cardsup")
        );
        this.style.transition = `0s`;
        prevClientX = e.clientX;
        prevClientY = e.clientY;

        window.addEventListener("mousemove", mouseMoveHandler);
        window.addEventListener("mouseup", mouseUpHandler, { once: true });
      });
    },

    removeHandler(direction) {
      this.$emit("onCardRemoved", {
        direction,
        ...this.cardContentArray.splice(0, 1)[0], // 删除并且获取
      });
      !this.cardContentArray.length && this.$emit("onCardCleared");

      this.$nextTick(() => {
        this.$refs.cardItem[0]?.classList.add("cardsup");
        this.mouseDownHandler();
      });
    },
  },
};
</script>
<style scoped>
.vue-slidecards-item {
  position: absolute;
  width: 100%;
  height: 80%;
  border-radius: 10px;
  box-shadow: 2px 10px 10px rgba(0, 0, 0, 0.1);
  background-color: #fff;
  overflow: hidden;
  user-select: none;
  transform: translateY(0);
  transform-origin: 50% 100%;
}
.vue-slidecards-item:nth-child(1) {
  top: 0px;
  z-index: 99;
  transform: scale(1, 1);
}

.vue-slidecards-item:nth-child(2) {
  top: 18px;
  z-index: 98;
  transform: scale(0.9, 0.9);
}
.vue-slidecards-item:nth-child(3) {
  top: 36px;
  z-index: 97;
  transform: scale(0.8, 0.8);
}

.vue-slidecards-item:nth-child(4) {
  top: 54px;
  z-index: 96;
  transform: scale(0.7, 0.7);
}

.vue-slidecards {
  position: relative;
}

.cardsup {
  animation: removeCard .3s ease 1;
}

@keyframes removeCard {
  from {
    top: 18px;
    transform: scale(0.9, 0.9);
  }
  to {
    top: 0px;
    transform: scale(1, 1);
  }
}
</style>
