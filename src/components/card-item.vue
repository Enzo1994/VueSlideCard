<template>
  <div ref="cardItem" class="card-item draggable">
    <!-- <div
    ref="cardItem"
    class="card-singlecard draggable"
    :class="card[1]==0?'card-singlecard__first-card':''"
  > -->
    <slot></slot>
  </div>
</template>

<script>
// import interactjs from "interactjs";
// import { eventBus } from "../util/event-bus";
export default {
  // props:{
  //   name:{
  //     type:Number,
  //     default:0
  //   }
  // },
  data() {
    return {
      position: {
        x: 0,
        y: 0
      }
    };
  },
  mounted() {
    this.$emit("removeHandler", 11);
		setTimeout(() => {
		const _this = this;
		const _doc = document;
		let position = { x: 0, y: 0 };
		//事件的回调不遵循层级作用域
		let prevClientX = 0;
		let prevClientY = 0;
			const mouseMoveHandler = function(e) {
					console.log(this);
					position.x = e.clientX - prevClientX;
					position.y = e.clientY - prevClientY;
					this.style.transform = `translate3D(${position.x}px,${
					position.y
					}px,0) rotateZ(${position.x / 5}deg)`;
			};
		this.$refs.cardItem.addEventListener("mousedown", function(e) {
			console.log(e);
			this.style.transition = ``;
			this.classList.remove("cardsup");
			prevClientX = e.clientX;
			prevClientY = e.clientY;

			this.addEventListener("mousemove", mouseMoveHandler);

			window.addEventListener("mouseup", e => {
			this.removeEventListener("mousemove", mouseMoveHandler);
			console.log(position);
				if (
						(-50 <= position.x && position.x <= 50) ||
						(-50 <= position.y && position.y <= 50)
					) {
						this.style.transition = `.5s all ease`;
						this.style.transform = ``;
					} else if (position.x > 100) {
						// this.style.transform = ``;
						el.classList.add("cardsup");
						_this.emitStatus("like");
					} else if (position.x < -100) {
						_this.emitStatus("dislike");
					}
				position = { x: 0, y: 0 };
			});
      });

      // interactjs(".draggable").draggable({
      //   listeners: {
      //     start(event) {
      //       console.log(event.type, event.target);
      //       event.target.style.transition = ``;
      //       event.target.classList.remove("cardsup");
      //     },
      //     move(event) {
      //       position.x += event.dx;
      //       position.y += event.dy;

      //       event.target.style.transform = `translate3D(${position.x}px,${
      //         position.y
      //       }px,0) rotateZ(${position.x / 10}deg)`;
      //     },
      //     end(event) {
      //       console.log(event, position.x, position.y);
      //       if (
      //         (-50 <= position.x && position.x <= 50) ||
      //         (-50 <= position.y && position.y <= 50)
      //       ) {
      //         position = { x: 0, y: 0 };
      //         event.target.style.transition = `.5s all ease`;
      //         event.target.style.transform = ``;
      //       } else if (position.x > 100) {
      //         _this.emitStatus("like");
      //         position = _this.resetPosition();
      //       } else if (position.x < -100) {
      //         _this.emitStatus("dislike");
      //         position = _this.resetPosition();
      //       }
      //     }
      //   }
      // });
    }, 200);
  }
  // methods: {
  //   move(event) {
  //     position.x += event.dx;
  //     position.y += event.dy;
  //     if (position.y % 1 == 0) {
  //       event.target.style.transform = `translate3D(${position.x}px,${
  //         position.y
  //       }px,0) rotateZ(${position.x / 10}deg)`;
  //     }
  //   },
  //   resetPosition() {
  //     event.target.style.transform = ``;
  //     event.target.classList.add("cardsup");
  //     return { x: 0, y: 0 };
  //   },
  //   emitStatus(status) {
  //     this.resetPosition();
  //     eventBus.$emit("emit-status", status);
  //   }
  // }
};
</script>
<style scoped>
.card-item {
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
    /* top: 60px; */
    transform: scale(0.9, 0.9);
  }
  to {
    /* top: 30px; */
    transform: scale(1, 1);
  }
}
</style>
