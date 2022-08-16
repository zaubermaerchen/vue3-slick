# Vue3 Slick

[slick-carousel](http://kenwheeler.github.io/slick) component for Vue3

## Example

``` Vue3
<script setup lang="ts">
import { ref } from 'vue';
import Slick from '@zaubermaerchen/vue3-slick';
import 'slick-carousel/slick/slick.css';

const slickRef = ref<InstanceType<typeof Slick> | null>(null);

const slickOptions: JQuerySlickOptions = {
    autoplay: false,
    arrows: false,
    infinite: false,
    lazyLoad: 'progressive',
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
const onLazyLoaded = (event: JQuery.Event, slick: JQuerySlick, image: object, imageSource: string) => {
    console.log(`lazy loaded event called. path:${imageSource}`);
};

</script>

<template>
<Slick
  ref="slickRef"
  :options="slickOptions"
  @afterChange="onAfterChange"
  @beforeChange="onBeforeChange"
  @lazyLoaded="onLazyLoaded">
  <img data-lazy="https://example.com/assets/image01.png">
  <img data-lazy="https://example.com/assets/image02.png">
  <img data-lazy="https://example.com/assets/image03.png">
  <img data-lazy="https://example.com/assets/image04.png">
  <img data-lazy="https://example.com/assets/image05.png">
</Slick>
<button type="button" @click="prev">prev</button>
<button type="button" @click="next">next</button>
</template>
```

## Parameters

|name|type|required|
|----|----|----|
|options|[JQuerySlickOptions](https://github.com/DefinitelyTyped/DefinitelyTyped/blob/master/types/slick-carousel/index.d.ts#L122)|no|

## Methods

### currentSlide

Returns the current slide index

#### Returns

number or undefined

### goTo

Navigates to a slide by index

#### Parameters

|name|type|required|
|----|----|----|
|slide|number|yes|
|dontAnimate|boolean|no|

### next

Navigates to the next slide

### prev

Navigates to the previous slide

### pause

Pauses autoplay

### play

Starts autoplay

### add

Add a slide. If an index is provided, will add at that index, or before if addBefore is set. If no index is provided,
add to the end or to the beginning if addBefore is set. Accepts HTML String || Object

#### Parameters

|name|type|required|
|----|----|----|
|html|striong, Object|yes|
|index|number|no|
|addBefore|number|no|

### remove

Remove slide by index. If removeBefore is set true, remove slide preceding index, or the first slide if no index is specified.
If removeBefore is set to false, remove the slide following index, or the last slide if no index is set.

#### Parameters

|name|type|required|
|----|----|----|
|index|number|yes|
|removeBefore|boolean|no|

### filter

Filters slides using jQuery .filter()

#### Parameters

|name|type|required|
|----|----|----|
|filter|string or (index: number, element: Element) => any|yes|

### unfilter

Removes applied filtering

#### Parameters

|name|type|
|----|----|
|index|number|

### getOption

Sets an individual value live. Set refresh to true if it's a UI update.

#### Parameters

|name|type|
|----|----|
|option|any|

#### Returns

JQuerySlickOptions or undefined

### setOption

Sets an individual value live. Set refresh to true if it's a UI update.

#### Parameters

|name|type|
|----|----|
|option|string|
|value|JQuerySlickOptions|
|refresh|boolean|

## Events

### afterChange

After slide change callback

#### Parameters

|name|type|
|----|----|
|event|JQuery.Event|
|slick|JQuerySlick|
|currentSlide|number|

### beforeChange

Before slide change callback

#### Parameters

|name|type|
|----|----|
|event|JQuery.Event|
|slick|JQuerySlick|
|currentSlide|number|
|nextSlide|number|

### breakpoint

Fires after a breakpoint is hit

#### Parameters

|name|type|
|----|----|
|event|JQuery.Event|
|slick|JQuerySlick|
|breakpoint|number or null|

### destroy

When slider is destroyed, or unslicked.

#### Parameters

|name|type|
|----|----|
|event|JQuery.Event|
|slick|JQuerySlick|

### edge

Fires when an edge is overscrolled in non-infinite mode.

#### Parameters

|name|type|
|----|----|
|event|JQuery.Event|
|slick|JQuerySlick|
|direction|string|

### init

When Slick initializes for the first time callback. Note that this event should be defined before initializing the slider.

#### Parameters

|name|type|
|----|----|
|event|JQuery.Event|
|slick|JQuerySlick|

### reInit

Every time Slick (re-)initializes callback

#### Parameters

|name|type|
|----|----|
|event|JQuery.Event|
|slick|JQuerySlick|

### setPosition

Every time Slick recalculates position

#### Parameters

|name|type|
|----|----|
|event|JQuery.Event|
|slick|JQuerySlick|

### swipe

Fires after swipe/drag

#### Parameters

|name|type|
|----|----|
|event|JQuery.Event|
|slick|JQuerySlick|
|direction|string|

### lazyLoaded

Fires after image loads lazily

#### Parameters

|name|type|
|----|----|
|event|JQuery.Event|
|slick|JQuerySlick|
|image|object|
|imageSource|string|

### lazyLoadError

Fires after image fails to load

#### Parameters

|name|type|
|----|----|
|event|JQuery.Event|
|slick|JQuerySlick|
|image|object|
|imageSource|string|
