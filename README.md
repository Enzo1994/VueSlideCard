# VueCard
一个vue的翻动卡片小组件

# 使用：
`npm install` 接 `npx vue serve App.vue` 启服务 

# 示例：
```html
<cards
      :width="250"
      :height="400"
      @cardsEmptyHandler="cardsEmptyHandler"
      @removeCardHandler="removeCardHandler"
      :arr="arr"
    >
      <template slot-scope="data">
        <div class="card-wrapper" style="width:100%;height:100%">
          <div class="cover">
            <img
              :src="`http://localhost:8081/html/images` + data.cardData.url"
              alt=""
            />
          </div>
          <h2>{{ data.cardData.album }}</h2>
          <h4>{{ data.cardData.artist }}</h4>
          <!-- <span>{{data.cardData}}</span> -->
        </div>
      </template>
    </cards>
```

# 回调事件：
|事件名称|触发时间|回调参数|
|--|--|--|
|cardEmtyHandler|卡片槽被划空后触发||
|removeCardHandler|每次滑动出栈触发|cardContent|


