<template>
  <div>
    <card :width="250" :height="350">
      <card-item >
          fsadfsa

      </card-item>
      <card-item>
          fsadfsa

      </card-item>
    </card>
  </div>
</template>
<script>
import Card from "./src/components/card";
import CardItem from "./src/components/card-item";
export default {
  data(){
    return {
      cardData:[
        {title:'This is my first card'},{
          title:'This is my second card'
        }
      ]
    }
  },
  components: {
    CardItem,
    Card
  }
};
</script>