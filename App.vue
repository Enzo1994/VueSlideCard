<template>
  <div class="card-cardstack">
    <SingleCard
      v-for="(item,index) in shownCards"
      :card="[item,index]"
      :key="index"
      @emitStatus="getStatus(arguments,index)"
      :style="{'top':'30'*index+30+'px','transform':'scale('+(1-(index*0.1))+','+(1-(index*0.1))+')','z-index':-1000-index*10}"
    ></SingleCard>
  </div>
</template>
<script>
import SingleCard from "./SingleCard";
export default {
  data() {
    return {
      allCardsArr: [
        { id: "'width':(1-0.1*index)*100+'%'" },
        { id: "card1" },
        { id: "card1" },
        { id: "card1" }
      ],
      shownCards: [],
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
  methods: {
    getStatus(status, index) {
      console.log(status, index);
      switch (status[0]) {
        case "like":
          this.pickedCardsArr.push(this.allCardsArr.splice(0, 1)[0]);
          break;
        case "dislike":
          console.log("dl");
          this.passedCardsArr.push(this.allCardsArr.splice(0, 1)[0]);
      }
      console.log(1, status);
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