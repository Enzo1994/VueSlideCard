<template>
  <div @removeHandler="removeHandler" class="card-cardstack" :style="{width:width+'px',height:height+'px'}">
    <slot ></slot>
  </div>
</template>

<script>
// import { eventBus } from "../util/event-bus";
export default {
  props: {
    width:{
      type:Number,
      default: 200
    },
    height:{
      type:Number,
      default:500
    }
  },
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
        this.onShowCardsArr = val.slice(0, 3);
      } else {
        this.onShowCardsArr = val;
      }
    }
  },

  components: {
    // SingleCard: () => ({
    //   // 需要加载的组件 (应该是一个 `Promise` 对象)
    //   component: import(/* webpackChunkName:"singleCard" */ "./SingleCard.vue"),
    //   // 展示加载时组件的延时时间。默认值是 200 (毫秒)
    //   // delay: 500
    // })
  },
  created() {
    console.log(this.$slots);
    if (this.allCardsArr.length > 3) {
      this.onShowCardsArr = this.allCardsArr.slice(0, 3);
    } else {
      this.onShowCardsArr = this.allCardsArr;
    }
  },
  
  mounted() {

    // eventBus.$on("emit-status", status => {
    //   console.log(status);
    //   this.getStatus(status);
    // });
  },
  methods: {
    removeHandler(){
      console.log('isRemoved')
    },
    getStatus(status) {
      console.log(status);
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

}
</style>