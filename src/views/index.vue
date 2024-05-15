<template>
    <div style="">
      <h1 class="text-blue-400">Masonry - Initialize in HTML</h1>
      <div ref="grid" class="grid" style="position: relative;">
  
        <MasonryItem v-for="(item, index) in list" :key="index" :item="item"/>
      </div>
  
    </div>
  </template>
  <script setup>
  import { nextTick, onMounted, ref } from 'vue';
  import positionComputedX from '../masonry.ts'
  import MasonryItem from '../components/MasonryItem.vue';
  
  const grid = ref(null)// grid
  const list = ref([])// 列表
  
    const themeMedia = window.matchMedia("(prefers-color-scheme: light)");
      themeMedia.addEventListener('change', e => {
          if (e.matches) {
              console.log('light')
              document.documentElement.classList.remove("dark-mode");
          } else {
              console.log('dark')
              document.documentElement.classList.add("dark-mode");
          }
      });
  
  //     const prefersDarkScheme = window.matchMedia("(prefers-color-scheme: dark)");
  
  // if (prefersDarkScheme.matches) {
  //   document.body.classList.add("dark-theme");
  // } else {
  //   document.body.classList.remove("dark-theme");
  // }
  
  onMounted(() => {
    // fetch('https://mock.presstime.cn/mock/663dc355d59f9a21eb4d690b/example/photos')
    fetch('https://mock.presstime.cn/mock/663dc355d59f9a21eb4d690b/example/meizuData')
      .then((res) => {
        console.log(res)
        res.json().then(ress => {
          let filterRes =ress.data.data.blocks.filter(item=> (item.type == 'content_1' || item.type == 'content_2'))
          console.log(filterRes)
          list.value = filterRes
          filterRes.forEach(item=>{
            console.log(JSON.parse(item.detail.content))
          })
          // console.log(list.value.length)
          nextTick(() => {
            positionComputedX(grid.value)
          })
        })
      })
  })
  
  </script>
  <style lang="scss" scoped>
  * {
    box-sizing: border-box;
    font-family: -apple-system, blinkmacsystemfont, "Helvetica Neue", helvetica, segoe ui, arial, roboto, "PingFang SC", "miui", "Hiragino Sans GB", "Microsoft Yahei", sans-serif;
  }
  
  body {
    font-family: sans-serif;
  }
  
  img, video {
      max-width: 100%;
      height: auto;
  }
  
  /* ---- grid ---- */
  
  .grid {
    // max-width: 1280px;
    max-width: 1920px;
    margin: 0 auto;
  }
  
  /* clearfix */
  .grid:after {
    content: '';
    display: block;
    clear: both;
  }
  
  .gutter-sizer {
    width: 10%;
  }
  
  /* ---- grid-item ---- */
  
  .grid-item {
    // width: 236px;
    // width: 50%;
    cursor: pointer;
    // height: 120px;
    // float: left;
    position: absolute;
    top: 0;
    left: 0;
    font-size: 15px;
    background: pink;
    // border: 2px solid #333;
    border-color: hsla(0, 0%, 0%, 0.5);
    border-radius: 8px
  }
  
  @media screen and (min-width: 1280px) {
    ._item_e0kl2_2 {
      width: calc((100% - 192px) / 3)
    }
  }
  
  @media screen and (min-width: 1280px) and (max-width: 1460px) {
    ._item_e0kl2_2 {
      width: calc((100% - 128px) / 3)
    }
  }
  
  @media screen and (min-width: 961px) and (max-width: 1279px) {
    ._item_e0kl2_2 {
      width: calc((100% - 112px)/2)
    }
  }
  
  @media screen and (min-width: 731px) and (max-width: 960px) {
    ._item_e0kl2_2 {
      width: calc((100% - 64px)/2);
    }
  }
  
  @media screen and (max-width: 730px) {
  
    ._item_e0kl2_2,
    ._waterfall_e0kl2_81 {
      width: 100vw
    }
  }
  
  ._no_follow_e0kl2_166 {
      background: #313131;
      color: #c5c5c5;
      // background: var(--fall-b2);
      // color: var(--fall-t3);
      font-size: 13px;
      transition: background .3s, color .3s;
      width: 68px;
      height: 32px;
      border-radius: 39px;
      flex-shrink: 0;
      text-align: center;
      line-height: 32px;
      cursor: pointer;
  }
  
  ._v_e0kl2_56 {
        bottom: 0;
        height: 18px;
        width: 18px;
        left: 34px;
        -o-object-fit: cover;
        object-fit: cover;
        position: absolute;
    }
  ._it_title_e0kl2_10 {
    // color: var(--fall-t5);
    color: #FFF;
    transition: color .3s;
    font-size: 16px;
    font-weight: 700;
    margin-top: 12px;
  }
  ._text_140t7_1 {
      font-weight: 400;
      color: #c5c5c5;
      // color: var(--fall-t6);
      transition: color .3s;
      text-overflow: ellipsis;
      overflow: hidden;
      display: -webkit-box;
      -webkit-line-clamp: 2;
      -webkit-box-orient: vertical;
      margin-top: 4px;
      word-break: break-all;
      line-height: 1.6;
  }
  ._blue_140t7_10 {
      color: #1890ff;
  }
  ._type1_fa_4kh1g_133, ._type2_fa_4kh1g_18, ._type3_fa_4kh1g_21 {
      margin-top: 8px;
  }
  .adm-image {
      max-width: 100%;
  }
  .adm-image-img {
      width: 100%;
      height: 100%;
  }
  ._topics-wrap_iy4i6_1 {
      display: flex;
      flex-wrap: wrap;
  }
  ._topics_iy4i6_1 {
      display: flex;
      align-items: center;
      background-color: #313131;
      color: #9f9fa6;
      // background-color: var(--fall-b3);
      // color: var(--fall-t7);
      transition: all .3s;
      margin-top: 10px;
      padding: 0 12px 0 8px;
      width: -moz-fit-content;
      width: fit-content;
      margin-right: 8px;
      height: 30px;
      line-height: 24px;
      border-radius: 16px;
      font-size: 13px;
      font-weight: 400;
      display: flex;
      align-items: center;
      cursor: pointer;
  }
  .mr-4{
    margin-right: 4px;
  }
  ._formalLikes_qidvz_6 {
      // color: var(--fall-t8);
      color: #818181;
      transition: color .3s;
      display: flex;
      justify-content: space-between;
      line-height: 24px;
      margin-top: 10px;
      ._leftTime_qidvz_1 {
        display: flex;
        color: #818181;
        transition: color .3s;
        font-size: 13px;
    }
  }
  ._formalLikes_e0kl2_256 {
      display: flex;
      justify-content: space-between;
      color: #9f9fa6;
      padding: 0 8px;
      ._rightLike_e0kl2_298 {
        font-weight: 400;
        width: 100%;
        display: flex;
        justify-content: space-between;
        align-items: center;
        img{
          width: 25px;
          height: 25px;
        }
        ._share_e0kl2_295 {
            display: flex;
            align-items: center;
            padding: 16px 16px 16px 0;
        }
        ._wrap_e0kl2_305 {
            cursor: pointer;
            display: flex;
            align-items: center;
            padding: 16px;
        }
        ._comment_e0kl2_314, ._likes_e0kl2_318 {
            margin-left: 5px;
            transition: color .3s;
        }
      }
  }
  
  .container_3 {  display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    grid-template-rows: 1fr 1fr 1fr;
    grid-auto-columns: 1fr;
    gap: 3px 3px;
    grid-auto-flow: row;
    grid-template-areas:
      "pic_1 pic_2 pic_3"
      "pic_4 pic_5 pic_6"
      "pic_7 pic_8 pic_9";
  }
  
  .container_2 {
    display: grid; 
    grid-auto-columns: 1fr; 
    grid-template-columns: 1fr 1fr 1fr; 
    grid-template-rows: 1fr 1fr; 
    gap: 3px 3px; 
    grid-template-areas: 
      "pic_1 pic_2 pic_3"
      "pic_4 pic_5 pic_6"; 
  }
  
  .container_1 {
    display: grid; 
    grid-auto-columns: 1fr; 
    grid-template-columns: 1fr 1fr 1fr; 
    grid-template-rows: 1fr; 
    gap: 3px 3px; 
    grid-template-areas: 
      "pic_1 pic_2 pic_3"; 
  }
  
  .pic_1 { grid-area: pic_1; }
  
  .pic_2 { grid-area: pic_2; }
  
  .pic_3 { grid-area: pic_3; }
  
  .pic_4 { grid-area: pic_4; }
  
  .pic_5 { grid-area: pic_5; }
  
  .pic_6 { grid-area: pic_6; }
  
  .pic_7 { grid-area: pic_7; }
  
  .pic_8 { grid-area: pic_8; }
  
  .pic_9 { grid-area: pic_9; }
  
  
  </style>
  