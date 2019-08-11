<template>
  <div class="card-cardstack">
    <SingleCard
      v-for="(item,index) in allCardsArr"
      :card="item"
      :key="index"
      :style="{'top':'10'*index+30+'px','width':(1-0.1*index)*100+'%','z-index':-1000-index*10}"
    ></SingleCard>
  </div>
</template>
<script>
import SingleCard from "./SingleCard";
export default {
  data() {
    return {
      allCardsArr: [{ id: "card1" }, { id: "card1" }, { id: "card1" }]
    };
  },
  components: {
    SingleCard
  }
};
</script>
<style scoped>
.card-cardstack {
  position: relative;
  margin: 0 auto;
  width: 300px;
  height: 400px;
  transform: translateY(30%);
}
</style>