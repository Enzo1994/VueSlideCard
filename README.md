# SlideCard
一个vue的翻动卡片小组件

# 使用
```js
import SlideCard from '../components/src/index';

Vue.use(SlideCard)
```

# 示例：
```html
<slide-card
      :width="250"
      :height="400"
       :cardContentArray="arr"
       :keyfield=" 'id' "
      @cardsEmptyHandler="cardsEmptyHandler"
      @removeCardHandler="removeCardHandler"
    >
      <template slot-scope="data">
            <!-- 把卡片您想在卡片里展示的内容在这里写,使用作用域插槽 -->
      </template>
</slide-card>
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


