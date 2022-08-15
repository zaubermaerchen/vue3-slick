import Vue from "vue";

declare class Slick extends Vue {
    currentSlide(): number | undefined;
    goTo(slide: number, dontAnimate?: boolean): void;
    next(): void;
    prev(): void;
    pause(): void;
    play(): void;
    add(html: string | Object, index?: number, addBefore?: number): void;
    remove(index: number, removeBefore?: number): void;
    filter(filter: string | ((index: number, element: Element) => any)): void;
    unfilter(index: number): void;
    getOption(option: any): JQuerySlickOptions | undefined;
    setOption(option: string, value: JQuerySlickOptions, refresh?: boolean): void;
    reSlick(): void;
}

export default Slick;
