/// <reference types="vite/client" />
declare module 'slick-carousel' {
  const slickFactory: undefined | ((root: Window, jquery: JQueryStatic) => JQueryStatic)
  export default slickFactory
}
