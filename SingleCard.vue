<template>
  <div class="card-singlecard">
    <h1>{{card.id}}</h1>
  </div>
</template>

<script>
import interactjs from "interactjs";
export default {
  props: {
    card: {
      type: Object,
      required: true
    }
  },
  mounted() {}
};
</script>
<style scoped>
.card-singlecard {
  position: absolute;
  width: 80%;
  height: 80%;
  left: 50%;
  transform: translateX(-50%);
  background-color: #4158d0;
  background-image: linear-gradient(
    43deg,
    #4158d0 0%,
    #c850c0 46%,
    #ffcc70 100%
  );
  background-image: -webkit-linear-gradient(
    43deg,
    #4158d0 0%,
    #c850c0 46%,
    #ffcc70 100%
  );
  background-image: -moz-linear-gradient(
    43deg,
    #4158d0 0%,
    #c850c0 46%,
    #ffcc70 100%
  );
  background-image: -o-linear-gradient(
    43deg,
    #4158d0 0%,
    #c850c0 46%,
    #ffcc70 100%
  );
  border-radius: 8px;
  box-shadow: 5px 5px 20px #333;
}
.card-singlecard:nth-child(2) {
  background: #5049b4;
}
.card-singlecard:nth-child(3) {
  background: #37387c;
}
</style>