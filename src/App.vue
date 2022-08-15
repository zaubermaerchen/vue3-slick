<script setup lang="ts">
import { ref } from 'vue';
import Slick from './components/Slick.vue';
import 'slick-carousel/slick/slick.css';

const slickRef = ref<InstanceType<typeof Slick> | null>(null);

const slickOptions: JQuerySlickOptions = {
    slidesToShow: 3,
    autoplay: false,
    arrows: false,
    infinite: false,
    lazyLoad: 'progressive',
    responsive: [
      {
        breakpoint: 800,
        settings: {
            slidesToShow: 1,
        },
      },
    ],
};

const play = () => {
    slickRef.value?.play();
};
const pause = () => {
    slickRef.value?.pause();
};
const next = () => {
    slickRef.value?.next();
};
const prev = () => {
    slickRef.value?.prev();
};

const onAfterChange = (event: JQuery.Event, slick: JQuerySlick, currentSlide: number) => {
    console.log(`after change event called. slide:${currentSlide}`);
};
const onBeforeChange = (event: JQuery.Event, slick: JQuerySlick, currentSlide: number, nextSlide: number) => {
    console.log(`before change event called. current:${currentSlide}, next:${nextSlide}`);
};
const onBreakpoint = (event: JQuery.Event, slick: JQuerySlick, breakpoint: number | null) => {
    console.log(`breakpoint event called. breakpoint:${breakpoint}`);
};
const onDestroy = (event: JQuery.Event, slick: JQuerySlick) => {
    console.log(`destroy event called.`);
};
const onEdge = (event: JQuery.Event, slick: JQuerySlick, direction: string) => {
    console.log(`edge event called. direction:${direction}`);
};
const onInit = (event: JQuery.Event, slick: JQuerySlick) => {
    console.log(`init event called.`);
};
const onReInit = (event: JQuery.Event, slick: JQuerySlick) => {
    console.log(`reinit event called.`);
};
const onSetPosition = (event: JQuery.Event, slick: JQuerySlick) => {
    console.log(`set position event called.`);
};
const onSwipe = (event: JQuery.Event, slick: JQuerySlick, direction: string) => {
    console.log(`swipe event called. direction:${direction}`);
};
const onLazyLoaded = (event: JQuery.Event, slick: JQuerySlick, image: object, imageSource: string) => {
    console.log(`lazy loaded event called. path:${imageSource}`);
};
const onLazyLoadError = (event: JQuery.Event, slick: JQuerySlick, image: object, imageSource: string) => {
    console.log(`lazy load error event called. path:${imageSource}`);
};
</script>

<template>
<Slick
  ref="slickRef"
  :options="slickOptions"
  @afterChange="onAfterChange"
  @beforeChange="onBeforeChange"
  @breakpoint="onBreakpoint"
  @destroy="onDestroy"
  @edge="onEdge"
  @init="onInit"
  @reInit="onReInit"
  @setPosition="onSetPosition"
  @swipe="onSwipe"
  @lazyLoaded="onLazyLoaded"
  @lazyLoadError="onLazyLoadError">
  <img data-lazy="images/image01.png">
  <img data-lazy="images/image02.png">
  <img data-lazy="images/image03.png">
  <img data-lazy="images/image04.png">
  <img data-lazy="images/image05.png">
</Slick>
<button type="button" @click="play">play</button>
<button type="button" @click="pause">pause</button>
<button type="button" @click="prev">prev</button>
<button type="button" @click="next">next</button>
</template>
