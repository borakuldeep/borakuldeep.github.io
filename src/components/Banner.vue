<template>
  <section class="main">
    <div class="container margin0">
      <Hero />
    </div>
  </section>
</template>

<script>
import Hero from '../assets/hero.svg';

export default {
  name: 'Banner',
  components: {
    Hero
  },
};
</script>
<style lang="scss" scoped>

.margin0 {
  margin: 0;
}
.main {
  height: 50vh; //fallback option
  height: calc(var(--vh, 1vh) * 50);
  background-color: $white;
  // .row {
  //   flex-direction: column;
  //   justify-content: center;
  //   h2 {
  //     font-size: 3rem;
  //     line-height: 4.2rem;
  //     font-weight: 700;
  //     z-index: 10;
  //     color: $white;
  //     mix-blend-mode: difference;
  //     @include media('<=tablet') {
  //       font-size: 2.4rem;
  //       line-height: 3rem;
  //     }
  //     @include media('<=phone') {
  //       margin-top: 72px;
  //       font-size: 1.7rem;
  //       line-height: 2.2rem;
  //     }
  //     .line {
  //       margin-bottom: 8px;
  //       height: 56px;
  //       position: relative;
  //       overflow: hidden;
  //       // color: #4B53BC;
  //       @include media('<=tablet') {
  //         height: 48px;
  //       }
  //       @include media('<=phone') {
  //         height: 32px;
  //       }
  //       span {
  //         position: absolute;
  //       }
  //     }
  //   }
  //   .btn-row {
  //     width: 256px;
  //     position: relative;
  //     z-index: 2;
  //     a, p {
  //       font-size: 1.6rem;
  //       color: $black;
  //       text-decoration: none;
  //       display: flex;
  //       align-items: center;
  //       font-weight: 600;
  //       @include media('<=tablet') {
  //         font-size: 1.3rem;
  //       }
  //       @include media('<=phone') {
  //         font-size: 1.1rem;
  //       }
  //       svg {
  //         margin-left: 16px;
  //         border: 2px solid $black;
  //         padding: 12px;
  //         height: 24px;
  //         width: 24px;
  //         border-radius: 100px;
  //         transition: 0.4s ease-in-out;
  //         @include media('<=tablet') {
  //           padding: 6px;
  //           width: 20px;
  //           height: 20px;
  //         }
  //         @include media('<=phone') {
  //           padding: 4px;
  //           width: 16px;
  //           height: 16px;
  //         }
  //       }
  //       &:hover {
  //         svg {
  //           background: $black;
  //           color: $white;
  //         }
  //       }
  //     }
  //   }
  // }
}
</style>
