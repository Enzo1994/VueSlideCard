<template>
  <div class="card-cardstack">
    <SingleCard
      v-for="(item,index) in shownCards"
      :card="[item,index]"
      :key="index"
      :style="{'transform':'scale('+(1-(index*0.1))+','+(1-(index*0.1))+')','z-index':-1000-index*10}"
    ></SingleCard>
  </div>
</template>
<script>
import SingleCard from "./SingleCard";
import { eventBus } from "../util/event-bus";

export default {
  data() {
    return {
      allCardsArr: [
        { id: "card1" },
        { id: "card2" },
        { id: "card3" },
        { id: "card4" }
      ],
      onShowCardsArr: [],
      passedCardsArr: [],
      pickedCardsArr: []
    };
  },
  watch: {
    allCardsArr(val) {
      console.log(val);
      if (val.length >= 3) {
        this.shownCards = val.slice(0, 3);
      } else {
        this.shownCards = val;
      }
    }
  },
  components: {
    SingleCard
  },
  created() {
    if (this.allCardsArr.length > 3) {
      this.shownCards = this.allCardsArr.slice(0, 3);
    } else {
      this.shownCards = this.allCardsArr;
    }
  },
  mounted() {
    eventBus.$on("emit-status", status => {
      console.log(status);
      this.getStatus(status);
    });
  },
  methods: {
    getStatus(status, index) {
      switch (status) {
        case "like":
          this.pickedCardsArr.push(this.allCardsArr.splice(0, 1)[0]);
          break;
        case "dislike":
          this.passedCardsArr.push(this.allCardsArr.splice(0, 1)[0]);
          break;
      }
    }
  }
};
</script>
<style scoped>
.card-cardstack {
  position: relative;
  margin: 0 auto;
  display: flex;
  justify-content: center;
  width: 300px;
  height: 400px;
  transform: translateY(30%);
}
</style>