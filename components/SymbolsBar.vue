<template>
  <div
    ref="bar"
    :class="{
      'symbols-bar': true,
      'symbols-bar--heavy': slice.primary.style.toLowerCase().includes('heavy'),
      'symbols-bar--five': slice.primary.style.toLowerCase().includes('five'),
    }"
    :style="`--background: ${slice.primary.background};`"
  >
    <div class="symbols-bar__inner">
      <template v-if="slice.primary.style.toLowerCase() === 'small symbols'">
        <svg
          fill="currentColor"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 30 9"
          class="symbols-bar__icon symbols-bar__icon--dots"
        >
          <path
            d="M25.3901 8.83c2.2312 0 4.04-1.80877 4.04-4.04S27.6213.75 25.3901.75c-2.2312 0-4.04 1.80877-4.04 4.04s1.8088 4.04 4.04 4.04zM4.04 8.83c2.23123 0 4.04-1.80877 4.04-4.04S6.27123.75 4.04.75 0 2.55877 0 4.79s1.80877 4.04 4.04 4.04z"
          />
        </svg>
        <svg
          fill="currentColor"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 41 41"
          class="symbols-bar__icon symbols-bar__icon--microstar"
        >
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M.46795 39.1838c-.00066.0006-.00131.0013-.00197.0019-.00005.0001-.0001.0002-.00016.0002l1.18799 1.1883c4.67366-4.6711 8.26215-8.1133 11.31339-10.3873 3.0496-2.2727 5.4551-3.2948 7.7659-3.283 2.3118.0117 4.7054 1.059 7.7294 3.3392 3.0256 2.2814 6.5734 5.711 11.1933 10.331l1.1882-1.1882c-4.6164-4.6164-8.0126-8.1951-10.2519-11.2566-2.2371-3.0584-3.2439-5.5011-3.2271-7.8508.0169-2.351 1.0597-4.7775 3.3076-7.8013 2.2307-3.00078 5.5708-6.49 10.0556-10.97737.0386-.03856.0772-.07721.1159-.11593L39.6558-.00409c0 .00005-.0001.0001-.0001.00016-.0012.00117-.0024.00233-.0035.0035-.0355.03544-.0708.0708-.1061.1061-4.5298 4.52979-8.0456 7.88795-11.0609 10.12123-3.0369 2.2492-5.4645 3.2789-7.8088 3.2817-2.3442.0028-4.775-1.0209-7.819-3.2684C9.81069 7.99068 6.25142 4.59336 1.65397-.00409L.46582 1.18406C5.04504 5.76328 8.4494 9.29648 10.7166 12.3207c2.2656 3.0221 3.3131 5.4307 3.3294 7.7614.0163 2.3294-.9964 4.7536-3.2516 7.8091C8.53777 30.9488 5.11683 34.5348.46795 39.1838zM12.6996 12.193c1.9467 2.7804 3.0086 5.2895 3.0267 7.8774.0183 2.6185-1.033 5.1727-3.0108 8.024 2.8568-2.0094 5.4072-3.0841 8.0262-3.0708 2.5955.0132 5.1115 1.0944 7.9137 3.0789-1.954-2.85-2.9895-5.412-2.9706-8.036.0187-2.6048 1.0754-5.1319 3.0156-7.9249-2.8386 1.9777-5.3938 3.0441-8.022 3.0473-2.6119.0031-5.155-1.044-7.9788-2.9959z"
          />
        </svg>
        <svg
          fill="currentColor"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 36 43"
          class="symbols-bar__icon symbols-bar__icon--n"
        >
          <path
            d="M35.7599 42.7h-18.25V11.27h-6.54v26.28c0 2.84-2.30997 5.15-5.14997 5.15s-5.15-2.31-5.15-5.15V.97H19.9399V32.4h5.51V6.12c0-2.84 2.31-5.15 5.15-5.15 2.84 0 5.15 2.31 5.15 5.15V42.7h.01z"
          />
        </svg>
        <svg
          fill="currentColor"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 41 41"
          class="symbols-bar__icon symbols-bar__icon--microstar"
        >
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M.46795 39.1838c-.00066.0006-.00131.0013-.00197.0019-.00005.0001-.0001.0002-.00016.0002l1.18799 1.1883c4.67366-4.6711 8.26215-8.1133 11.31339-10.3873 3.0496-2.2727 5.4551-3.2948 7.7659-3.283 2.3118.0117 4.7054 1.059 7.7294 3.3392 3.0256 2.2814 6.5734 5.711 11.1933 10.331l1.1882-1.1882c-4.6164-4.6164-8.0126-8.1951-10.2519-11.2566-2.2371-3.0584-3.2439-5.5011-3.2271-7.8508.0169-2.351 1.0597-4.7775 3.3076-7.8013 2.2307-3.00078 5.5708-6.49 10.0556-10.97737.0386-.03856.0772-.07721.1159-.11593L39.6558-.00409c0 .00005-.0001.0001-.0001.00016-.0012.00117-.0024.00233-.0035.0035-.0355.03544-.0708.0708-.1061.1061-4.5298 4.52979-8.0456 7.88795-11.0609 10.12123-3.0369 2.2492-5.4645 3.2789-7.8088 3.2817-2.3442.0028-4.775-1.0209-7.819-3.2684C9.81069 7.99068 6.25142 4.59336 1.65397-.00409L.46582 1.18406C5.04504 5.76328 8.4494 9.29648 10.7166 12.3207c2.2656 3.0221 3.3131 5.4307 3.3294 7.7614.0163 2.3294-.9964 4.7536-3.2516 7.8091C8.53777 30.9488 5.11683 34.5348.46795 39.1838zM12.6996 12.193c1.9467 2.7804 3.0086 5.2895 3.0267 7.8774.0183 2.6185-1.033 5.1727-3.0108 8.024 2.8568-2.0094 5.4072-3.0841 8.0262-3.0708 2.5955.0132 5.1115 1.0944 7.9137 3.0789-1.954-2.85-2.9895-5.412-2.9706-8.036.0187-2.6048 1.0754-5.1319 3.0156-7.9249-2.8386 1.9777-5.3938 3.0441-8.022 3.0473-2.6119.0031-5.155-1.044-7.9788-2.9959z"
          />
        </svg>
      </template>
      <template v-if="slice.primary.style.toLowerCase().includes('filled')">
        <svg
          fill="currentColor"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 94 94"
          class="symbols-bar__icon symbols-bar__icon--enneagram"
        >
          <path
            d="M46.61 16.32L62.79 0l2.07 23.07 22.73-1.94-13.02 19.02L93.21 53.5 71.2 59.57l5.83 22.4-20.71-9.72-9.71 20.96-9.72-20.96-20.7 9.72 5.83-22.4L0 53.5l18.64-13.35L5.62 21.13l22.73 1.94L30.42 0l16.19 16.32z"
          />
        </svg>
        <svg
          fill="currentColor"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 94 94"
          class="symbols-bar__icon symbols-bar__icon--hemisphere"
        >
          <path d="M94 47a47 47 0 00-94 0h94z" />
          <path d="M94 94a47 47 0 00-94 0h94z" />
        </svg>
        <svg
          fill="currentColor"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 93 94"
          class="symbols-bar__icon symbols-bar__icon--asterisk"
        >
          <path
            d="M92.6299 37.3l-3.32-10.19-28.63 9.3 17.69-24.36-8.67-6.3-17.7 24.36V0h-10.72v30.11l-17.69-24.36-8.68 6.3 17.7 24.36-28.63-9.3L.65991 37.3l28.63999 9.31-28.63999 9.3 3.31999 10.2 28.63-9.31-17.7 24.36 8.68 6.3 17.69-24.36v30.11h10.72V63.1l17.7 24.36 8.67-6.3-17.69-24.36 28.63 9.31 3.32-10.2-28.64-9.3 28.64-9.31z"
          />
        </svg>
        <svg
          fill="currentColor"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 102 94"
          class="symbols-bar__icon symbols-bar__icon--blackstar"
        >
          <path
            d="M0 46.61C23.84 39.29 42.68 21.95 50.62 0c7.95 21.95 26.79 39.29 50.62 46.61-23.84 7.32-42.68 24.66-50.62 46.61C42.68 71.27 23.84 53.92 0 46.61z"
          />
        </svg>
      </template>
      <template v-if="slice.primary.style.toLowerCase().includes('outlined')">
        <svg
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 -1 93 95"
          stroke="currentColor"
          stroke-width="1"
          class="
            symbols-bar__icon
            symbols-bar__icon--outlined
            symbols-bar__icon--asterisk
          "
        >
          <path
            d="M92.6299 37.3l-3.32-10.19-28.63 9.3 17.69-24.36-8.67-6.3-17.7 24.36V0h-10.72v30.11l-17.69-24.36-8.68 6.3 17.7 24.36-28.63-9.3L.65991 37.3l28.63999 9.31-28.63999 9.3 3.31999 10.2 28.63-9.31-17.7 24.36 8.68 6.3 17.69-24.36v30.11h10.72V63.1l17.7 24.36 8.67-6.3-17.69-24.36 28.63 9.31 3.32-10.2-28.64-9.3 28.64-9.31z"
          />
        </svg>
        <svg
          fill="none"
          stroke="currentColor"
          stroke-width="1"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 60 60"
          class="
            symbols-bar__icon
            symbols-bar__icon--outlined
            symbols-bar__icon--dodecagon
          "
        >
          <path
            d="M37.9.7H22.2L8.5 8.6.7 22.2v15.7l7.8 13.7 13.7 7.8h15.7l13.6-7.8 7.9-13.7V22.2L51.5 8.6 37.9.7z"
          />
        </svg>

        <svg
          fill="currentColor"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 91 94"
          class="
            symbols-bar__icon symbols-bar__icon--outlined symbols-bar__icon--ex
          "
        >
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M27.6 1c-1 .7-2.4 2.3-3.2 4-.9 1.6-1.7 4.4-2 7.1-.5 3.3-.5 6 0 10 .3 3 1 7.4 1.7 9.8.7 2.4 2.2 7 3.4 10 2 5.2 2.1 5.7 1.4 7.1A87.3 87.3 0 0022 74.6a28.3 28.3 0 002.2 14.8c.8 1.5 2 3.1 3 3.6 1 .6 2.6 1 3.7 1 1 0 3-.5 4.1-1 1.2-.7 3.3-2.4 4.7-4 1.4-1.5 3.4-4.1 4.4-5.7l2.1-3c.2 0 1 1.1 1.8 2.4l3.7 5.3c1.3 1.5 3.5 3.5 4.9 4.4a9 9 0 004.7 1.6c1.2 0 2.9-.4 3.7-1 .9-.4 2.2-2 3-3.4 1-1.6 1.7-4.3 2.1-7.1.5-3.5.5-5.9 0-10.3-.4-3.2-1.3-8.1-2-11-.9-2.8-2.4-7.2-3.4-9.6l-2-4.5 1.4-3a99.4 99.4 0 005-15.4c.5-2.1 1-6 1.2-8.5.2-2.8.1-6.3-.3-8.7-.3-2.3-1.2-5.2-1.8-6.6-.7-1.3-2.1-3-3.1-3.7-1-.6-2.6-1.2-3.5-1.2-1 0-2.6.5-3.7 1-1.1.6-3.2 2.2-4.5 3.6a41.2 41.2 0 00-4.8 6c-1.2 2-2.3 3.6-2.4 3.6-.2 0-1.3-1.6-2.5-3.6a42 42 0 00-4.8-6A20 20 0 0034.3 1c-1.2-.5-2.8-1-3.6-1-.7 0-2.2.5-3.1 1zm6.2 1.5c1.1.5 3.3 2.3 4.9 4.1 1.6 1.7 3.9 4.9 5 7 1.3 2.1 2.4 3.9 2.6 3.9a41 41 0 003.3-5c1.7-2.8 4.3-6.1 6-7.6 1.9-1.7 3.6-2.8 5-3a5 5 0 013.3.3c.8.5 1.9 1.6 2.4 2.5A26 26 0 0168.8 19a66.6 66.6 0 01-5.5 22.6L61.1 47l2 4.8a84.4 84.4 0 015.1 17 38.4 38.4 0 01.2 15c-.4 1.5-1.1 3.7-1.6 4.7a12 12 0 01-2.1 3 5 5 0 01-2.7 1c-1 0-2.4-.4-3.4-.9a19 19 0 01-3.8-3 49.7 49.7 0 01-8.4-12c-.3 0-1.5 2-3 4.4a41.7 41.7 0 01-5.5 7.6 18 18 0 01-5.1 3.7c-1.6.5-2.4.5-3.6 0-.8-.4-2-1.6-2.8-2.6a18 18 0 01-1.9-4.1c-.4-1.3-.7-5.1-.6-8.8 0-5.2.3-7.8 1.5-12.5A106 106 0 0129 52.7l2.3-5.6-2-4.8c-1-2.7-2.6-7-3.4-9.8-.8-2.7-1.7-7.4-2-10.5-.5-4-.5-6.7-.1-9.6.3-2.3 1.1-5.2 1.8-6.6a8.7 8.7 0 012.7-3.3 7 7 0 012.5-.8 9 9 0 013 .8z"
          />
        </svg>
        <svg
          fill="none"
          stroke="currentColor"
          stroke-width="1.3"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 102 94"
          class="
            symbols-bar__icon
            symbols-bar__icon--outlined
            symbols-bar__icon--blackstar
          "
        >
          <path
            d="M0 46.61C23.84 39.29 42.68 21.95 50.62 0c7.95 21.95 26.79 39.29 50.62 46.61-23.84 7.32-42.68 24.66-50.62 46.61C42.68 71.27 23.84 53.92 0 46.61z"
          />
        </svg>
      </template>
      <template v-if="slice.primary.style.toLowerCase().includes('five')">
        <svg
          fill="currentColor"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 39 44"
          class="symbols-bar__icon symbols-bar__icon--hammer"
        >
          <path d="M38.6 0H0v16.7h9.2a15.5 15.5 0 1020.2 0h9.2V0z" />
        </svg>
        <svg
          fill="currentColor"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 49 44"
          class="symbols-bar__icon symbols-bar__icon--boxtop"
        >
          <path d="M17 0 4 11l9 11 13-11-9-11z" />
          <path d="M39 0 26 11l9 11 13-11-9-11z" />
          <path d="M35 22 22 33l9 11 13-11-9-11z" />
          <path d="M13 22 0 33l9 11 13-11-9-11z" />
        </svg>
        <svg
          fill="currentColor"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 36 43"
          class="symbols-bar__icon symbols-bar__icon--n"
        >
          <path
            d="M35.7599 42.7h-18.25V11.27h-6.54v26.28c0 2.84-2.30997 5.15-5.14997 5.15s-5.15-2.31-5.15-5.15V.97H19.9399V32.4h5.51V6.12c0-2.84 2.31-5.15 5.15-5.15 2.84 0 5.15 2.31 5.15 5.15V42.7h.01z"
          />
        </svg>
        <svg
          fill="currentColor"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 100 44"
          class="symbols-bar__icon symbols-bar__icon--bandolier"
        >
          <path
            d="M7.2 44c3.3 0 6.8-3.8 9.3-9.5.9 5.8 3.3 9.5 6.6 9.5s6.8-3.8 9.3-9.5c.9 5.8 3.3 9.5 6.6 9.5s6.8-3.8 9.3-9.5c.9 5.8 3.3 9.5 6.6 9.5s6.8-3.8 9.3-9.5c.9 5.8 3.3 9.5 6.6 9.5s6.8-3.8 9.3-9.5c.9 5.8 3.3 9.5 6.6 9.5 5.3 0 11.1-9.8 12.8-22 1.7-12.1-1.2-22-6.6-22-3.3 0-6.8 3.8-9.3 9.5C82.7 3.7 80.3 0 77 0s-6.8 3.8-9.3 9.5C66.8 3.7 64.4 0 61.1 0s-6.8 3.8-9.3 9.5C51 3.8 48.6 0 45.3 0S38.5 3.8 36 9.5C35 3.8 32.6 0 29.3 0 26 0 22.5 3.8 20 9.5 19.1 3.7 16.7 0 13.4 0 8.1 0 2.3 9.8.6 22c-1.7 12.1 1.2 22 6.6 22z"
          />
        </svg>
        <svg
          fill="currentColor"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 44 44"
          class="symbols-bar__icon symbols-bar__icon--flora"
        >
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M.7.5c-.5.4-.7.9-.7 2 0 .9.4 2.1 1 3.4a27.6 27.6 0 007.4 8.8 84.2 84.2 0 009.9 7.3 76.4 76.4 0 00-6.3 4.4 66 66 0 00-6.2 5.5c-2.6 2.6-3.7 4-4.6 5.8C.4 39.2 0 40.6 0 41.4c0 .9.2 1.5.7 2 .6.6 1 .7 2.2.5.8-.1 2.4-.7 3.5-1.3 1.2-.6 3.4-2.3 5-3.9a61.9 61.9 0 008.9-10.8l1.6-2.5 2.2 3.2A49.3 49.3 0 0033.6 40c1.4 1.2 3.3 2.5 4.3 3s2.4 1 3.1 1c1.1.2 1.5 0 2.2-.7.8-.8 1-1 .7-2.3-.1-.7-.7-2.2-1.2-3.2a29.6 29.6 0 00-7.8-8.9 90.3 90.3 0 00-6.3-4.7L25.4 22l2.6-1.7 5.2-3.8c1.5-1.1 4-3.4 5.5-5 1.7-1.8 3.3-4 4-5.2a7.8 7.8 0 001.2-3.7c0-1.3-.2-1.8-.7-2.1C43 .2 42 0 41.4 0c-.8 0-2.2.5-3.7 1.2-1.9 1-3.2 2-5.8 4.6a66 66 0 00-10 12.5l-2.6-3.7A44.4 44.4 0 0010 3.8C8.8 2.8 7 1.6 6 1 4.7.4 3.4 0 2.7 0a4 4 0 00-2 .5z"
          />
        </svg>
      </template>
    </div>
  </div>
</template>

<script>
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger'

export default {
  name: 'SymbolsBar',
  props: {
    slice: Object,
  },
  data() {
    return {
      simple: this.slice.primary.style === 'Small symbols',
    }
  },
  mounted() {
    gsap.registerPlugin(ScrollTrigger)
    const scrollTrigger = {
      trigger: this.$refs.bar,
      start: 'top bottom',
      end: 'bottom middle',
      scrub: 2,
    }
    const tl = gsap.timeline({
      scrollTrigger,
    })
    const { bar } = this.$refs
    const { style } = this.slice.primary
    const styleName = style.toLowerCase()
    if (styleName.includes('small')) {
      tl.to(bar.querySelector('.symbols-bar__icon--dots'), {
        rotateZ: '180deg',
      })
        .to(
          bar.querySelector('.symbols-bar__icon--microstar:nth-child(2)'),
          { rotate: '450deg' },
          '<+=.1'
        )
        .from(
          bar.querySelector('.symbols-bar__icon--n'),
          { rotateX: '180deg' },
          '<+=.1'
        )
        .to(
          bar.querySelector('.symbols-bar__icon--microstar'),
          { rotate: '270deg' },
          '<+=.1'
        )
    } else if (styleName.includes('filled')) {
      tl.to(bar.querySelector('.symbols-bar__icon--enneagram'), {
        rotate: '80deg',
      })
        .from(
          bar.querySelector('.symbols-bar__icon--hemisphere'),
          {
            rotate: '180deg',
            transformOrigin: '50% 50%',
          },
          '<+=.1'
        )
        .from(
          bar.querySelector(
            '.symbols-bar__icon--hemisphere path:nth-of-type(1)'
          ),
          {
            y: '50%',
          }
        )
        .from(
          bar.querySelector(
            '.symbols-bar__icon--hemisphere path:nth-of-type(2)'
          ),
          {
            y: '-50%',
          },
          '<'
        )
        .to(
          bar.querySelector('.symbols-bar__icon--asterisk'),
          { rotate: '180deg' },
          '<'
        )
        .from(
          bar.querySelector('.symbols-bar__icon--blackstar'),
          {
            rotate: '270deg',
          },
          '<+=.1'
        )
    } else if (styleName.includes('outlined')) {
      tl.to(
        bar.querySelector('.symbols-bar__icon--asterisk'),
        { rotate: '180deg' },
        '<'
      )
      // symbols-bar__icon--asterisk
      // symbols-bar__icon--dodecagon
      // symbols-bar__icon--ex
      // symbols-bar__icon--blackstar
    } else if (styleName.includes('five')) {
      tl.from(bar.querySelector('.symbols-bar__icon--hammer'), {
        rotate: '-90deg',
      })
        .from(
          bar.querySelector('.symbols-bar__icon--boxtop path:nth-child(1)'),
          {
            x: 11,
            y: 11,
          },
          '<+=.2'
        )
        .from(
          bar.querySelector('.symbols-bar__icon--boxtop path:nth-child(3)'),
          {
            x: -11,
            y: -11,
          },
          '<'
        )
        .from(
          bar.querySelector('.symbols-bar__icon--boxtop path:nth-child(2)'),
          {
            x: -11,
            y: 11,
          }
        )
        .from(
          bar.querySelector('.symbols-bar__icon--boxtop path:nth-child(4)'),
          {
            x: 11,
            y: -11,
          },
          '<'
        )
        .from(
          bar.querySelector('.symbols-bar__icon--n'),
          { rotateX: '180deg' },
          '<+=.1'
        )
        .from(
          bar.querySelector('.symbols-bar__icon--bandolier'),
          { rotateY: '90deg' },
          '<+=.1'
        )
        .from(bar.querySelector('.symbols-bar__icon--flora'), {
          rotate: '-135deg',
        })
    }
  },
}
</script>
