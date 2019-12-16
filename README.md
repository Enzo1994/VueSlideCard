# SlideCard
一个vue的翻动卡片小组件

# 使用
```js
import SlideCard from './src/index';

Vue.use(SlideCard)
```

# 示例：
```vue
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
        <!-- 这里是您的卡片内容,通过作用域插槽data.cardData获取当前卡片数据 -->
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

```
![test.gif](https://i.loli.net/2019/12/16/bPlCLyrpjnV8KWg.gif)
# 传递属性:
|属性名称|属性作用|属性类型|举例|
|--|--|--|--|
|width|指定卡片集的宽度|Number|
|height|指定卡片集的高度|Number|
|cardContentArray|卡片显示的内容|Object[ ]|`[{id:233,album:'Viva La Vida',artest:'Coldplay'}]`|

# 回调事件：
|事件名称|触发时间|回调参数|
|--|--|--|
|cardEmtyHandler|卡片槽被划空后触发||
|removeCardHandler|每次滑动出栈触发|removedCard|


