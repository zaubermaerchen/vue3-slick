# Vue3 Slick

[slick-carousel](http://kenwheeler.github.io/slick) component for Vue3

## Example

See [example project](https://github.com/zaubermaerchen/vue3-slick-example)

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
