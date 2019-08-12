<template>
  <div class="card-singlecard draggable" :class="card[1]==0?'card-singlecard__first-card':''">
    <h1>{{card[0].id}}</h1>
  </div>
</template>

<script>
import interactjs from "interactjs";
import { eventBus } from "../util/event-bus";
export default {
  props: {
    card: {
      type: Array,
      required: true
    }
  },
  data() {
    return {
      topCardPosition: {
        x: 0,
        y: 0
      }
    };
  },
  mounted() {
    // target elements with the "draggable" class
    const _this = this;
    const _doc = document;
    let position = { x: 0, y: 0 };
    interactjs(".draggable").draggable({
      listeners: {
        start(event) {
          console.log(event.type, event.target);
          event.target.style.transition = ``;
          event.target.classList.remove("cardsup");
        },
        move(event) {
          position.x += event.dx;
          position.y += event.dy;

          event.target.style.transform = `translate3D(${position.x}px,${
            position.y
          }px,0) rotateZ(${position.x / 10}deg)`;
        },
        end(event) {
          console.log(event, position.x, position.y);
          if (
            (-50 <= position.x && position.x <= 50) ||
            (-50 <= position.y && position.y <= 50)
          ) {
            position = { x: 0, y: 0 };
            event.target.style.transition = `.5s all ease`;
            event.target.style.transform = ``;
          } else if (position.x > 100) {
            _this.emitStatus("like");
            position = _this.resetPosition();
          } else if (position.x < -100) {
            _this.emitStatus("dislike");
            position = _this.resetPosition();
          }
        }
      }
    });
  },
  methods: {
    move(event) {
      position.x += event.dx;
      position.y += event.dy;
      if (position.y % 1 == 0) {
        event.target.style.transform = `translate3D(${position.x}px,${
          position.y
        }px,0) rotateZ(${position.x / 10}deg)`;
      }
    },
    resetPosition() {
      event.target.style.transform = ``;
      event.target.classList.add("cardsup");
      return { x: 0, y: 0 };
    },
    emitStatus(status) {
      this.resetPosition();
      eventBus.$emit("emit-status", status);
    }
  }
};
</script>
<style scoped>
.card-singlecard {
  position: absolute;
  width: 80%;
  height: 80%;
  border-radius: 8px;
  box-shadow: 5px 5px 20px #333;
}
.card-singlecard__first-card {
  top: 30px;
  background-color: #4158d0;
  background-image: linear-gradient(
    43deg,
    #4158d0 0%,
    #c850c0 46%,
    #ffcc70 100%
  );
}
.card-singlecard:nth-child(2) {
  top: 60px;
  background: #5049b4;
}
.card-singlecard:nth-child(3) {
  top: 90px;
  background: #37387c;
}
.draggable {
  touch-action: none;
  user-select: none;
}
.cardsup {
  animation: removeCard 0.5s ease 1;
}

@keyframes removeCard {
  from {
    top: 60px;
    transform: scale(0.9, 0.9);
  }
  to {
    top: 30px;
    transform: scale(1, 1);
  }
}
</style>