<template>
    <div>
        <div class="flex items-center w-[100vw] h-[60px] defaultPx fixed top-0 z-[999]" :style="{ 
                    'backdrop-filter': y > 60 ? 'blur(24px)' : 'blur(0)',
                    'background-color': y > 60 ? `${ isDark ? 'rgba(0, 0, 0, 0.733)' : 'rgba(255, 255, 255, 0.733)' }` : `${ isDark ? `rgba(0, 0, 0, ${   0.733 * (y / 60) })` : `rgba(255, 255, 255, ${   0.733 * (y / 60) })` }` 
                }">
            <a href="/" class="flex items-center logo">
                <svg class="logo" viewBox="0 0 128 128" width="24" height="24" data-v-cae02ec9="">
                    <path fill="#42b883" d="M78.8,10L64,35.4L49.2,10H0l64,110l64-110C128,10,78.8,10,78.8,10z"
                        data-v-cae02ec9=""></path>
                    <path fill="#35495e" d="M78.8,10L64,35.4L49.2,10H25.6L64,76l38.4-66H78.8z" data-v-cae02ec9="">
                    </path>
                </svg>
                <span class="pl-[8px] text">Haha</span>
            </a>
            <div class="flex flex-1 justify-end items-center">
                <label class="swap swap-rotate">
                    
                    <!-- this hidden checkbox controls the state -->
                    <input type="checkbox" class="theme-controller" :checked="isDark" value="synthwaveX" @click="e => themeChange(e)"/>
                    
                    <!-- sun icon -->
                    <svg class="swap-off w-10 h-10 fill" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M5.64,17l-.71.71a1,1,0,0,0,0,1.41,1,1,0,0,0,1.41,0l.71-.71A1,1,0,0,0,5.64,17ZM5,12a1,1,0,0,0-1-1H3a1,1,0,0,0,0,2H4A1,1,0,0,0,5,12Zm7-7a1,1,0,0,0,1-1V3a1,1,0,0,0-2,0V4A1,1,0,0,0,12,5ZM5.64,7.05a1,1,0,0,0,.7.29,1,1,0,0,0,.71-.29,1,1,0,0,0,0-1.41l-.71-.71A1,1,0,0,0,4.93,6.34Zm12,.29a1,1,0,0,0,.7-.29l.71-.71a1,1,0,1,0-1.41-1.41L17,5.64a1,1,0,0,0,0,1.41A1,1,0,0,0,17.66,7.34ZM21,11H20a1,1,0,0,0,0,2h1a1,1,0,0,0,0-2Zm-9,8a1,1,0,0,0-1,1v1a1,1,0,0,0,2,0V20A1,1,0,0,0,12,19ZM18.36,17A1,1,0,0,0,17,18.36l.71.71a1,1,0,0,0,1.41,0,1,1,0,0,0,0-1.41ZM12,6.5A5.5,5.5,0,1,0,17.5,12,5.51,5.51,0,0,0,12,6.5Zm0,9A3.5,3.5,0,1,1,15.5,12,3.5,3.5,0,0,1,12,15.5Z"/></svg>
                    
                    <!-- moon icon -->
                    <svg class="swap-on w-10 h-10 fill" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M21.64,13a1,1,0,0,0-1.05-.14,8.05,8.05,0,0,1-3.37.73A8.15,8.15,0,0,1,9.08,5.49a8.59,8.59,0,0,1,.25-2A1,1,0,0,0,8,2.36,10.14,10.14,0,1,0,22,14.05,1,1,0,0,0,21.64,13Zm-9.5,6.69A8.14,8.14,0,0,1,7.08,5.22v.27A10.15,10.15,0,0,0,17.22,15.63a9.79,9.79,0,0,0,2.1-.22A8.11,8.11,0,0,1,12.14,19.73Z"/></svg>
                    
                </label>
            </div>
        </div>
        <div class="h-[60px] mb-[32px]"></div>
    </div>
</template>
<script setup lang="ts">
import { useWindowScroll } from '@vueuse/core'
import { ref } from 'vue';

const { y } = useWindowScroll()
const isDark = ref<boolean>(window.localStorage.getItem('theme') === 'dark' ? true : false)

const themeChange = (e: any) => {
    const dark = e.target.checked //是否黑夜
    isDark.value = e.target.checked
    dark ? document.documentElement.classList.add("dark-mode") : document.documentElement.classList.remove("dark-mode")
    dark ? window.localStorage.setItem('theme','dark') : window.localStorage.setItem('theme','light')
}
</script>
<style scoped lang="scss">
*{
    transition: color 0.5s, background-color 0.5s;
    user-select: none;
}
.text {
    font-size: 16px;
    font-weight: 500;
    color: var(--color-t1);
}
.logo{
    opacity: 1;
    transition: opacity 0.5s ease;
}
.logo:hover{
    opacity: 0.7;
}

svg{
    transition: all 0.5s ease;
}

.fill{
    fill: var(--color-t1)
}

@media screen and (min-width: 1280px) {
    .defaultPx{
        padding: 0 72px;
    }
  }
  
  @media screen and (min-width: 1280px) and (max-width: 1460px) {
    .defaultPx{
        padding: 0 48px;
    }
  }
  
  @media screen and (min-width: 961px) and (max-width: 1279px) {
    .defaultPx{
        padding: 0 42px;
    }
  }
  
  @media screen and (min-width: 731px) and (max-width: 960px) {
    .defaultPx{
        padding: 0 24px;
    }
  }
  
  @media screen and (max-width: 730px) {
    .defaultPx{
        padding: 0 24px;
    }
  }

</style>