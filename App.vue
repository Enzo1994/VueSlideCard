<template>
  <div class="container">

    <slide-card
      :width="250"
      :height="400"
       :cardContentArray="arr"
      @cardsEmptyHandler="cardsEmptyHandler"
      @removeCardHandler="removeCardHandler"
      >
    
      <template slot-scope="data">
          <div class="card-wrapper" style="width:100%;height:100%">
            <h1>{{ data.cardData.text }}</h1>
        </div>
      </template>
    </slide-card>
  </div>
</template>
<script>
import Vue from 'Vue'
import SlideCard from './src/index'
Vue.use(SlideCard)

export default {
  data() {
    return {
      arr: [
        { id:1,text:'这是第二张卡片',backgroundImage:' linear-gradient(120deg, #d4fc79 0%, #96e6a1 100%);'},
        { id:2,text:'这是第二张卡片',backgroundImage:' linear-gradient(120deg, #d4fc79 0%, #96e6a1 100%);'},
        { id:3,text:'这是第二张卡片',backgroundImage:' linear-gradient(120deg, #d4fc79 0%, #96e6a1 100%);'},
        { id:4,text:'这是第二张卡片',backgroundImage:' linear-gradient(120deg, #d4fc79 0%, #96e6a1 100%);'},
      ]
    };
  },

  methods: {
    cardsEmptyHandler() {
      console.log("卡槽空了");
    },
    removeCardHandler(params) {
      console.log(params);
    }
  }
};
</script>
<style lang="scss">
html,
body {
  height: 100%;
}
.container {
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  .card-wrapper {
    .cover {
      display: flex;
      align-items: center;
      height: 65%;
      width: 100%;
      overflow: hidden;
      img {
        width: 100%;
      }
    }
    h4 {
      text-align: end;
    }
  }
}
</style>
