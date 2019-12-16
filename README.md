# VueCard
一个vue的翻动卡片小组件

# 使用：

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
<!--             把卡片您想在卡片里展示的内容在这里写,使用作用域插槽 -->
        <div class="card-wrapper" style="width:100%;height:100%">
          <div class="cover">
            <img
              :src="`http://localhost:8081/html/images` + data.cardData.url"
              alt=""
            />
          </div>
          <h2>{{ data.cardData.album }}</h2>
          <h4>{{ data.cardData.artist }}</h4>
        </div>
      </template>
    </cards>
```
```javascript
...
methods:{
      cardsEmptyHandler() {
            console.log("卡槽空了");
      },
      removeCardHandler(removedCard) {
            console.log(removedCard);
      }
}

```
# 传递属性:
|属性名称|属性作用|属性类型|
|--|--|--|
|width|指定卡片集的宽度|Number|
|height|指定卡片集的高度|Number|

# 回调事件：
|事件名称|触发时间|回调参数|
|--|--|--|
|cardEmtyHandler|卡片槽被划空后触发||
|removeCardHandler|每次滑动出栈触发|removedCard|


