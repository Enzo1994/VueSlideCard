<template>
  <div class="container">
    <slide-card
      :width="250"
      :height="400"
      :cardContentArray="arr"
      @onCardCleared="cardClearedHandler"
      @onCardRemoved="cardRemovedHandler"
    >
      <template #default="{ cardData }">
        <div
          v-if="cardData.type === 'image'"
          class="image-wrapper"
          :style="{ background: cardData.backgroundImage + ' no-repeat center/contain' }"
        ></div>
        <div
          v-else-if="cardData.type === 'text'"
          class="text-wrapper"
          :style="{ backgroundImage: cardData.backgroundImage }"
        >
          <h1>{{ cardData.text }}</h1>
          <span>{{ cardData.subText }}</span>
        </div>
      </template>
    </slide-card>
  </div>
</template>
<script>
import SlideCard from "./src/index";

export default {
  data() {
    return {
      arr: [
        {
          id: 1,
          type: "image",
          text: "这是第一张卡片",
          backgroundImage: `url(./images/wechat.jpg)`,
        },
        {
          id: 2,
          type: "text",
          text: "这是一张文字测试张卡片",
          subText: "您可以任意添加副标题文本",
          backgroundImage: "linear-gradient(120deg, #d4fc79 0%, #96e6a1 100%)",
        },
        {
          id: 3,
          type: "image",
          text: "这是第三张卡片",
          backgroundImage: `#0078d8 url(./images/mail.jpg)`,
        },
        {
          id: 4,
          type: "text",
          text: "这是第四张卡片",
          backgroundImage: "linear-gradient(120deg, #d4fc79 0%, #96e6a1 100%)",
        },
      ],
    };
  },
  components: {
    SlideCard,
  },
  methods: {
    cardClearedHandler() {
      console.log("卡槽空了");
    },
    cardRemovedHandler(params) {
      console.log("移走一张卡牌", params);
    },
  },
};
</script>
<style>
html,
body {
  height: 100%;
}
.container {
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
}
.cover {
  display: flex;
  align-items: center;
  height: 65%;
  width: 100%;
  overflow: hidden;
}
.cover img {
  width: 100%;
}
h1 {
  margin: 0;
  text-align: center;
}
.image-wrapper {
  width: 100%;
  height: 100%;
  background-position: center;
  background-size: contain;
  background-repeat: no-repeat;
}
.text-wrapper {
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 20px;
  color: #666;
}
</style>
