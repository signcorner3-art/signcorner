// swiper.d.ts or custom.d.ts

declare module '*.css' {
  const content: { [className: string]: string };
  export default content;
}