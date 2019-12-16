<template>
  <div
    class="vue-slidecards"
    :style="{ width: width + 'px', height: height + 'px' }"
  >
    <div
      class="vue-slidecards-item"
      :class="initFinished ? '' : 'init-position'"
      v-for="(cardContent,index) in cardContentArray.slice(0,3)"
      ref="cardItem"
    >
      <slot :cardData="cardContent"></slot>
    </div>
  </div>
</template>

<script>
export default {
  name: "SlideCard",
  props: {
    cardContentArray: {
      type: Array,
      default: () => []
    },
    keyField: {
      type: String,
      default: "key"
    },
    width: {
      type: Number,
      default: 300
    },
    height: {
      type: Number,
      default: 500
    }
  },
  
  data() {
    return {
      initFinished: false,
    };
  },

  watch: {
    cardContentArray: {
      handler: function(newVal, oldVal) {
        if (newVal.length == 0) {
          this.$emit("cardsEmptyHandler");
        }
      }
    }
  },
  mounted() {
    console.log(this.keyField);
    setTimeout(() => {
      this.initFinished = true;
    }, 0);
    if (document.querySelector(".vue-slidecards-item img")) {
      document.querySelector(".vue-slidecards-item img").draggable = false;
    }
    this.onMouseMove();
  },
  methods: {
    cl(p){
      console.log(p);
    },
    onMouseMove() {
      const el = this.$refs.cardItem[0];
      const _this = this;
      let prevClientX = 0;
      let prevClientY = 0;
      let position = { x: 0, y: 0 };

      const mouseMoveHandler = function(e) {
        position.x = e.clientX - prevClientX;
        position.y = e.clientY - prevClientY;
        el.style.transform = `translate3D(${position.x}px,${
          position.y
        }px,0) rotateZ(${position.x / 5}deg)`;
        console.log("mousmove", position);
      };
      const mouseUpHandler = function(e) {
        window.removeEventListener("mousemove", mouseMoveHandler);
        if (position.x > 100) {
          _this.removeHandler("right");
          el.style.transition = "0s";
          el.classList.add("cardsup");
        } else if (position.x < -100) {
          _this.removeHandler("left");
          el.style.transition = "0s";
          el.classList.add("cardsup");
        } else if (
          (-50 <= position.x && position.x <= 50) ||
          (-50 <= position.y && position.y <= 50)
        ) {
          el.style.transition = `.5s all ease`;
        }
        el.style.transform = ``;

        position = { x: 0, y: 0 };

        window.removeEventListener("mouseup", mouseUpHandler);
      };

      this.$refs.cardItem[0].addEventListener("mousedown", function(e) {
        this.classList.remove("cardsup");
        this.style.transition = `0s`;
        prevClientX = e.clientX;
        prevClientY = e.clientY;

        window.addEventListener("mousemove", mouseMoveHandler);

        window.addEventListener("mouseup", mouseUpHandler);
      });
    },

    removeHandler(direction) {
      this.$emit("removeCardHandler", {
        direction,
        ...this.cardContentArray.splice(0, 1)[0]
      });
    }
  }
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
.vue-slidecards-item:nth-child(1).init-position {
  transform: translateY(-1500px);
}

.vue-slidecards-item:nth-child(2) {
  top: 18px;
  z-index: 98;
  transform: scale(0.9, 0.9);
}
.vue-slidecards-item:nth-child(2).init-position {
  transform: translateY(-1000px);
}

.vue-slidecards-item:nth-child(3) {
  top: 36px;
  z-index: 97;
  transform: scale(0.8, 0.8);
}
.vue-slidecards-item:nth-child(3).init-position {
  transform: translateY(-500px);
}

.vue-slidecards-item:nth-child(4) {
  top: 54px;
  z-index: 96;
  transform: scale(0.7, 0.7);
}
.vue-slidecards-item:nth-child(4).init-position {
  transform: translateY(0px);
}

.vue-slidecards {
  position: relative;
}

.cardsup {
  animation: removeCard 0.3s ease 1;
}

@keyframes removeCard {
  from {
    transform: scale(0.9, 0.9);
  }
  to {
    top: 0px;
    transform: scale(1, 1);
  }
}
</style>
