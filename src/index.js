import SlideCard from './component/slide-card.vue'

SlideCard.install =function (Vue) {
    Vue.component(SlideCard.name,SlideCard)
}

export default SlideCard;