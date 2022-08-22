<script setup lang="ts">
import { ref, computed, onMounted, onUnmounted } from 'vue';
import $ from 'jquery';
import 'slick-carousel';

interface Props {
    options?: JQuerySlickOptions
}
interface Emits {
    (e: 'afterChange', event: JQuery.Event, slick: JQuerySlick, currentSlide: number): void;
    (e: 'beforeChange', event: JQuery.Event, slick: JQuerySlick, currentSlide: number, nextSlide: number): void;
    (e: 'breakpoint', event: JQuery.Event, slick: JQuerySlick, breakpoint: number | null): void;
    (e: 'destroy', event: JQuery.Event, slick: JQuerySlick): void;
    (e: 'edge', event: JQuery.Event, slick: JQuerySlick, direction: string): void;
    (e: 'init', event: JQuery.Event, slick: JQuerySlick): void;
    (e: 'reInit', event: JQuery.Event, slick: JQuerySlick): void;
    (e: 'setPosition', event: JQuery.Event, slick: JQuerySlick): void;
    (e: 'swipe', event: JQuery.Event, slick: JQuerySlick, direction: string): void;
    (e: 'lazyLoaded', event: JQuery.Event, slick: JQuerySlick, image: object, imageSource: string): void;
    (e: 'lazyLoadError', event: JQuery.Event, slick: JQuerySlick, image: object, imageSource: string): void;
}

const props = defineProps<Props>();
const emit = defineEmits<Emits>();

const root = ref<HTMLElement | null>(null);
const $root = computed(() => root.value ? $(root.value) : undefined);

/**
 * Returns the current slide index
 */
const currentSlide = () => {
    return $root.value?.slick('slickCurrentSlide');
};

/**
 * Navigates to a slide by index
 */
const goTo = (slide: number, dontAnimate?: boolean) => {
    $root.value?.slick('slickGoTo', slide, dontAnimate);
};

/**
 * Navigates to the next slide
 */
const next = () => {
    $root.value?.slick('slickNext');
};

/**
 * Navigates to the previous slide
 */
const prev = () => {
    $root.value?.slick('slickPrev');
};

/**
 * Pauses autoplay
 */
const pause = () => {
    $root.value?.slick('slickPause');
};

/**
 * Starts autoplay
 */
const play = () => {
    $root.value?.slick('slickPlay');
};

/**
 * Add a slide. If an index is provided, will add at that index, or before if addBefore is set. If no index is provided,
 * add to the end or to the beginning if addBefore is set. Accepts HTML String || Object
 */
const add = (html: string | Object, index?: number, addBefore?: number) => {
    $root.value?.slick('slickAdd', html, index, addBefore);
};

/**
 * Remove slide by index. If removeBefore is set true, remove slide preceding index, or the first slide if no index is specified.
 * If removeBefore is set to false, remove the slide following index, or the last slide if no index is set.
 */
const remove = (index: number, removeBefore?: number) => {
    $root.value?.slick('slickRemove', index, removeBefore);
};

/**
 * Filters slides using jQuery .filter()
 */
const filter = (filter: string | ((index: number, element: Element) => any)) => {
    if (typeof filter === 'string') {
        $root.value?.slick('slickFilter', filter);
    } else {
        $root.value?.slick('slickFilter', filter);
    }
};

/**
 * Removes applied filtering
 */
const unfilter = (index: number) => {
    $root.value?.slick('slickUnfilter', index);
};

/**
 * Sets an individual value live. Set refresh to true if it's a UI update.
 */
const getOption = (option: any) => {
    return $root.value?.slick('slickGetOption', option);
};

/**
 * Sets an individual value live. Set refresh to true if it's a UI update.
 */
const setOption = (option: string, value: JQuerySlickOptions, refresh?: boolean) => {
    $root.value?.slick('slickSetOption', option, value, refresh);
};

/**
 * After slide change callback
 */
const onAfterChange = (event: JQuery.Event, slick: JQuerySlick, currentSlide: number) => {
    emit('afterChange', event, slick, currentSlide);
};

/**
 * Before slide change callback
 */
const onBeforeChange = (event: JQuery.Event, slick: JQuerySlick, currentSlide: number, nextSlide: number) => {
    emit('beforeChange', event, slick, currentSlide, nextSlide);
};

/**
 * Fires after a breakpoint is hit
 */
const onBreakpoint = (event: JQuery.Event, slick: JQuerySlick, breakpoint: number | null) => {
    emit('breakpoint', event, slick, breakpoint);
};

/**
 * When slider is destroyed, or unslicked.
 */
const onDestroy = (event: JQuery.Event, slick: JQuerySlick) => {
    emit('destroy', event, slick);
};

/**
 * Fires when an edge is overscrolled in non-infinite mode.
 */
const onEdge = (event: JQuery.Event, slick: JQuerySlick, direction: string) => {
    emit('edge', event, slick, direction);
};

/**
 * When Slick initializes for the first time callback. Note that this event should be defined before initializing the slider.
 */
const onInit = (event: JQuery.Event, slick: JQuerySlick) => {
    emit('init', event, slick);
};

/**
 * Every time Slick (re-)initializes callback
 */
const onReInit = (event: JQuery.Event, slick: JQuerySlick) => {
    emit('reInit', event, slick);
};

/**
 * Every time Slick recalculates position
 */
const onSetPosition = (event: JQuery.Event, slick: JQuerySlick) => {
    emit('setPosition', event, slick);
};

/**
 * Fires after swipe/drag
 */
const onSwipe = (event: JQuery.Event, slick: JQuerySlick, direction: string) => {
    emit('swipe', event, slick, direction);
};

/**
 * Fires after image loads lazily
 */
const onLazyLoaded = (event: JQuery.Event, slick: JQuerySlick, image: object, imageSource: string) => {
    emit('lazyLoaded', event, slick, image, imageSource);
};

/**
 * Fires after image fails to load
 */
const onLazyLoadError = (event: JQuery.Event, slick: JQuerySlick, image: object, imageSource: string) => {
    emit('lazyLoadError', event, slick, image, imageSource);
};


const init = () => {
    $root.value?.on('afterChange', onAfterChange)
            .on('beforeChange', onBeforeChange)
            .on('breakpoint', onBreakpoint)
            .on('destroy', onDestroy)
            .on('edge', onEdge)
            .on('init', onInit)
            .on('reInit', onReInit)
            .on('setPosition', onSetPosition)
            .on('swipe', onSwipe)
            .on('lazyLoaded', onLazyLoaded)
            .on('lazyLoadError', onLazyLoadError)
            .slick(props.options ?? {})
    ;
};

const destroy = () => {
    $root.value?.off('afterChange', onAfterChange)
            .off('beforeChange', onBeforeChange)
            .off('breakpoint', onBreakpoint)
            .off('destroy', onDestroy)
            .off('edge', onEdge)
            .off('init', onInit)
            .off('reInit', onReInit)
            .off('setPosition', onSetPosition)
            .off('swipe', onSwipe)
            .off('lazyLoaded', onLazyLoaded)
            .off('lazyLoadError', onLazyLoadError)
            .slick('unslick')
    ;
};

const reInit = () => {
    destroy();
    init();
}

onMounted(() => {
    init();
});
onUnmounted(() => {
    destroy();
});

defineExpose({
    currentSlide,
    goTo,
    next,
    prev,
    pause,
    play,
    add,
    remove,
    filter,
    unfilter,
    getOption,
    setOption,
    reInit,
});
</script>

<template>
  <div ref="root">
    <slot></slot>
  </div>
</template>
