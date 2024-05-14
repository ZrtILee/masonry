<template>
  <div style="background-color: black;">
    <h1>Masonry - Initialize in HTML</h1>
    <div ref="grid" class="grid" style="background-color: black;position: relative;">

      <div class="grid-item _item_e0kl2_2" v-for="(item, index) in list" :key="index"
        style="background-color: #1d1e21;transition: all 0.5s ease;padding: 24px 24px 8px;">
        <div style="display: flex;justify-content: space-between;align-items: center;">
          <div style="display: flex;align-items: center;position: relative;">
            <img :src="item.detail.member.avatar" style="width: 48px;height: 48px;border-radius: 50%;" alt="avatar">
            <img v-if="item.detail.member.memberIdentityName"
              src="https://ssm.res.meizu.com/admin/2022/09/26/1683285731/hsTR2OALjO.png" alt="" class="_v_e0kl2_56">
            <div style="display: flex;margin-left: 12px;flex-direction: column;justify-content: space-around;">
              <div style="display: flex;align-items: center;">
                <span style="font-size: 15px;color: #FFFFFF;">{{item.detail.member.nickname}}</span>
                <img style="margin-left: 6px;height: 12px;"
                  :src="item.detail.member.organizeName ? item.detail.member.organizeIcon : levelIcon[item.detail.member.level - 1]"
                  alt="">
              </div>
              <div style="font-size: 13px;color: #afb0b3;">{{ item.detail.member.memberIdentityName ?
                item.detail.member.memberIdentityName : item.detail.productName }}</div>
            </div>
          </div>
          <div class="_no_follow_e0kl2_166">关注</div>
        </div>
        <div class="_it_title_e0kl2_10">{{ item.detail.title }}</div>
        <div class="_text_140t7_1">
          <span v-for="(itemY, index) in JSON.parse(item.detail.content)" :key="index">
            <template v-if="itemY.t == 'p'">
              <span v-for="(itemZ, index) in itemY.c" :key="index">
                <template v-if="itemZ.x">
                  {{ itemZ.x }}
                </template>
                <template v-else>
                  <span class="_blue_140t7_10">
                    <template v-if="itemZ.t == 'm'">
                      {{ '@'+itemZ.n }}
                    </template>
                    <template v-else>
                      {{ '#'+itemZ.n }}
                    </template>
                  </span>
                </template>
              </span>
            </template>
            <!-- {{ itemY.t == 'p' ? index : '' }} -->
          </span>

          <!-- 护眼特种兵，魅族 21 Note 如然护眼，天生好屏。首发搭载「魅族如然护眼」，联合健康光专家 
            <span class="_cursor_140t7_13 _blue_140t7_10">@lipro智能家居</span> 
            制定全新「视觉健康光显融合标准」，打造如自然光一样，适合全年龄段的护眼方案。
            <span class="_cursor_140t7_13 _blue_140t7_10">#FlymeAIOS</span> 
            暨 
            <span class="_cursor_140t7_13 _blue_140t7_10">#魅族21Note手机特种兵</span> 
            发布会，5 月 16 日 14:30，全网直播见。 -->
        </div>
        <div v-if="item.detail.forumName !== '魅族手机'" style="color: #fff;width: 100%;position: relative;"
          :style="{ 'padding-bottom': item.detail.pics.slice(0, 9).length !== 1 ? `${ Math.ceil( item.detail.pics.slice(0, 9).length / 3 ) * 34}%` : '220px' }">
          <div v-if="item.detail.pics.slice(0, 9).length !== 1"
            :class="[ item.detail.pics.slice(0, 9).length > 6 ? 'container_3' : item.detail.pics.slice(0, 9).length > 3 ? 'container_2' : 'container_1', '_type1_fa_4kh1g_133']"
            style="position: absolute;width: 100%;">
            <div :class="`pic_${index + 1}`" style="padding-bottom: 100%;position: relative;background-color: #f5f5f5;"
              v-for="(itemX, index) in item.detail.pics.slice(0, 9)" :key="index">
              <!-- {{ index }} -->
              <svg style="position: absolute;z-index: 9;width: 24px;top: 50%;left: 50%;transform: translate(-50%, -50%);" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M19.233 6.233 17.42 9.08l-10.817.001a.665.665 0 0 0-.647.562l-.007.096V34.9l5.989-8.707a2.373 2.373 0 0 1 1.801-1.005 2.415 2.415 0 0 1 1.807.625l.126.127 4.182 4.525 2.267-3.292 5.461 7.841-4.065 7.375H6.604c-1.86 0-3.382-1.47-3.482-3.317l-.005-.192V9.744c0-1.872 1.461-3.405 3.296-3.505l.19-.005h12.63Zm22.163 0c1.86 0 3.382 1.472 3.482 3.314l.005.192v29.14a3.507 3.507 0 0 1-3.3 3.505l-.191.006H27.789l3.63-6.587.06-.119a1.87 1.87 0 0 0-.163-1.853l-6.928-9.949 3.047-4.422a2.374 2.374 0 0 1 1.96-1.01 2.4 2.4 0 0 1 1.86.87l.106.14L42.05 34.89V9.74a.664.664 0 0 0-.654-.658H21.855l1.812-2.848h17.73Zm-28.305 5.611c.794 0 1.52.298 2.07.788l-.843 1.325-.067.114a1.87 1.87 0 0 0 .11 1.959l.848 1.217c-.556.515-1.3.83-2.118.83a3.122 3.122 0 0 1-3.117-3.116 3.119 3.119 0 0 1 3.117-3.117Z"
                  fill="#DBDBDB" fill-rule="nonzero"></path>
              </svg>
              <img :src="itemX.path + '?x-oss-process=image/resize,w_402/format,webp'" alt=""
                style="position: absolute;height: 100%;width: 100%;object-fit: cover;z-index: 99;">
            </div>
          </div>
          <div v-else style="height: 220px;position: absolute;background-color: #f5f5f5;min-width: 90px;">
            <svg style="position: absolute;z-index: 1;top: 50%;left: 50%;transform: translate(-50%, -50%);" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg">
              <path
                d="M19.233 6.233 17.42 9.08l-10.817.001a.665.665 0 0 0-.647.562l-.007.096V34.9l5.989-8.707a2.373 2.373 0 0 1 1.801-1.005 2.415 2.415 0 0 1 1.807.625l.126.127 4.182 4.525 2.267-3.292 5.461 7.841-4.065 7.375H6.604c-1.86 0-3.382-1.47-3.482-3.317l-.005-.192V9.744c0-1.872 1.461-3.405 3.296-3.505l.19-.005h12.63Zm22.163 0c1.86 0 3.382 1.472 3.482 3.314l.005.192v29.14a3.507 3.507 0 0 1-3.3 3.505l-.191.006H27.789l3.63-6.587.06-.119a1.87 1.87 0 0 0-.163-1.853l-6.928-9.949 3.047-4.422a2.374 2.374 0 0 1 1.96-1.01 2.4 2.4 0 0 1 1.86.87l.106.14L42.05 34.89V9.74a.664.664 0 0 0-.654-.658H21.855l1.812-2.848h17.73Zm-28.305 5.611c.794 0 1.52.298 2.07.788l-.843 1.325-.067.114a1.87 1.87 0 0 0 .11 1.959l.848 1.217c-.556.515-1.3.83-2.118.83a3.122 3.122 0 0 1-3.117-3.116 3.119 3.119 0 0 1 3.117-3.117Z"
                fill="#DBDBDB" fill-rule="nonzero"></path>
            </svg>
            <img class="adm-image-img" alt="pic" draggable="false"
              style="object-fit: cover; display: block;height: 220px;min-width: 90px;z-index: 99;"
              :src="item.detail.pics[0].path + '?x-oss-process=image/resize,w_402/format,webp'">
          </div>
        </div>
        <!-- <div v-if="item.detail.forumName !== '魅族手机'" class="_type1_fa_4kh1g_133"
          style="height: 220px;overflow: hidden;">
          <div v-for="(itemX, index) in item.detail.pics" :key="index" class="adm-image"
            style="width: 390.789px; height: 220px;">
            <img class="adm-image-img" alt="" draggable="false"
              style="object-fit: cover; display: block;height: 220px;min-width: 90px;"
              :style="{ 'width': item.detail.pics.length == 1 ? 'auto' : 'auto', 'height':item.detail.pics.length == 1 ? '220px' : 'auto'}"
              :src="itemX.path">
          </div>
        </div> -->
        <div v-else class="_type1_fa_4kh1g_133" style="height: 220px;">
          <div class="adm-image" style="width: 390.789px; height: 220px;">
            <img class="adm-image-img" alt="" draggable="false" style="object-fit: cover; display: block;"
              src="https://ssm.res.meizu.com/content/2024/05/14/111423460/HXv4xVpUuk.jpg?x-oss-process=image/resize,w_1170/format,webp">
          </div>
        </div>
        <div class="_topics-wrap_iy4i6_1">
          <div class="_topics_iy4i6_1">
            <div class="mr-4 flex">
              <svg xmlns="http://www.w3.org/2000/svg" width="15.998" height="16.001" viewBox="0 0 15.998 16.001">
                <path id="路径_1215" data-name="路径 1215"
                  d="M5371-12089a8.01,8.01,0,0,1-8-8,8.008,8.008,0,0,1,8-8,8.007,8.007,0,0,1,8,8A8.009,8.009,0,0,1,5371-12089Zm0-12.75a4.755,4.755,0,0,0-4.749,4.751,4.754,4.754,0,0,0,4.749,4.748,4.755,4.755,0,0,0,4.751-4.748.751.751,0,0,0-.75-.75.752.752,0,0,0-.75.75,3.253,3.253,0,0,1-3.25,3.247,3.253,3.253,0,0,1-3.251-3.247,3.254,3.254,0,0,1,3.251-3.251.751.751,0,0,0,.75-.75A.751.751,0,0,0,5371-12101.749Zm3,.249a1.5,1.5,0,0,0-1.5,1.5,1.5,1.5,0,0,0,1.5,1.5,1.5,1.5,0,0,0,1.5-1.5A1.5,1.5,0,0,0,5374-12101.5Z"
                  transform="translate(-5363.001 12105)" fill="#fa8989"></path>
              </svg>
            </div>
            {{ item.detail.forumName || '摄影天堂' }}
          </div>
          <div class="_topics_iy4i6_1">
            <div class="mr-4 flex">
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16.001" viewBox="0 0 16 16.001">
                <path id="路径_1217" data-name="路径 1217"
                  d="M5632-11377a8.009,8.009,0,0,1-8-8,8.009,8.009,0,0,1,8-8,8.009,8.009,0,0,1,8,8A8.009,8.009,0,0,1,5632-11377Zm.249-7.251a.751.751,0,0,0-.75.752.75.75,0,0,0,.75.749H5633v2a.753.753,0,0,0,.752.752.751.751,0,0,0,.749-.752v-2h1.75a.751.751,0,0,0,.752-.749.753.753,0,0,0-.752-.752h-1.75v-5a.751.751,0,0,0-.749-.752.753.753,0,0,0-.752.752v1.5h-2v-1.5a.751.751,0,0,0-.75-.752.751.751,0,0,0-.749.752v1.5h-1.75a.751.751,0,0,0-.752.749.753.753,0,0,0,.752.752h1.75v2h-1.75a.753.753,0,0,0-.752.752.751.751,0,0,0,.752.749h1.75v2a.751.751,0,0,0,.749.752.751.751,0,0,0,.75-.752v-5.5h2v2Zm3.5-3.5a.75.75,0,0,0-.749.749.751.751,0,0,0,.749.752h.5a.753.753,0,0,0,.752-.752.751.751,0,0,0-.752-.749Z"
                  transform="translate(-5624 11393.001)" fill="#ff9c66"></path>
              </svg>
            </div>
            魅族智联无界服务
          </div>
          <div class="_topics_iy4i6_1">
            <div class="mr-4 flex">
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16.001" viewBox="0 0 16 16.001">
                <path id="路径_1217" data-name="路径 1217"
                  d="M5632-11377a8.009,8.009,0,0,1-8-8,8.009,8.009,0,0,1,8-8,8.009,8.009,0,0,1,8,8A8.009,8.009,0,0,1,5632-11377Zm.249-7.251a.751.751,0,0,0-.75.752.75.75,0,0,0,.75.749H5633v2a.753.753,0,0,0,.752.752.751.751,0,0,0,.749-.752v-2h1.75a.751.751,0,0,0,.752-.749.753.753,0,0,0-.752-.752h-1.75v-5a.751.751,0,0,0-.749-.752.753.753,0,0,0-.752.752v1.5h-2v-1.5a.751.751,0,0,0-.75-.752.751.751,0,0,0-.749.752v1.5h-1.75a.751.751,0,0,0-.752.749.753.753,0,0,0,.752.752h1.75v2h-1.75a.753.753,0,0,0-.752.752.751.751,0,0,0,.752.749h1.75v2a.751.751,0,0,0,.749.752.751.751,0,0,0,.75-.752v-5.5h2v2Zm3.5-3.5a.75.75,0,0,0-.749.749.751.751,0,0,0,.749.752h.5a.753.753,0,0,0,.752-.752.751.751,0,0,0-.752-.749Z"
                  transform="translate(-5624 11393.001)" fill="#ff9c66"></path>
              </svg>
            </div>
            魅族21Note手机特种兵
          </div>
        </div>
        <div class="_formalLikes_qidvz_6">
          <div class="_leftTime_qidvz_1">
            <div>{{ `1小时前 · 来自${ item.detail.city || '未知'} · 浏览${ item.detail.viewCount || '未知'}` }}</div>
          </div>
        </div>
        <div class="_formalLikes_e0kl2_256">
          <div class="_rightLike_e0kl2_298">
            <div class="_share_e0kl2_295">
              <img src="//myplus.res.meizu.com/svg/share-1f7c3ddb.svg" alt="" class="_img_e0kl2_260">
            </div>
            <div class="_wrap_e0kl2_305">
              <img src="//myplus.res.meizu.com/svg/like1-2772d574.svg" alt="" class="_img_e0kl2_260">
              <div class="_likes_e0kl2_318">6</div>
            </div>
            <div class="_wrap_e0kl2_305">
              <img src="//myplus.res.meizu.com/svg/collect1-43d6e0a5.svg" alt="" class="_img_e0kl2_260">
              <div class="_likes_e0kl2_318" style="color: rgb(159, 159, 166);">1</div>
            </div>
            <div class="_wrap_e0kl2_305">
              <img src="//myplus.res.meizu.com/svg/comment-f3aa8a9c.svg" class="_img_comment_e0kl2_264 _img_e0kl2_260"
                alt="">
              <div class="_comment_e0kl2_314">2</div>
            </div>
          </div>
        </div>
      </div>
    </div>

  </div>
</template>
<script setup>
import { nextTick, onMounted, ref } from 'vue';
import positionComputedX from './masonry.ts'

const grid = ref(null)// grid
const list = ref([])// 列表
const levelIcon = ref([
  'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAFAAAAAoCAYAAABpYH0BAAAAAXNSR0IArs4c6QAAAARzQklUCAgICHwIZIgAAAVFSURBVGhD7ZtNbBtFFIBnZus4cWwnpDgiofwcqFAb/g6FG0WASGkPSPwoElJiqQ1ReiEVDhySFqkSSnohRpRLo/yY2KGHoCIhJApUaqVyoWpUqaBSeoCSpEoU3DSK/5rY3nm8WWft9fo3oUjpruc482a879s3772ZfaYkT1v2+eotJP4IsUiNXKZOxmh1Pjmj91HC7wIlYeBk0c6qZ2l7e0ivM9V2zA8P2x6wS3tkzh42OpzN6Mc5zDlc0cv0QM+aOj8NMDg25rBWwauMsJrNLG6WORR4JEyWzz/k/igqdFYACsurs0mtoIMHBGQqw5JZ4OTVU2KNOduWk/D8SuTczp6eNQVg2D/+EqWkWSuYJIkbdctr1ygKmRkgfH/SGluytwAhT2o5MCB/2dyHLtGV0dEGycr2qYMMaLKmOv4TbeteMTM4ve6hiYntjMmt2v7aWOJbGp30PQ8AT6gDkIhfdRw6/HsFXi6ByFe+5wiHXWlWwH+j0cDYG0BoregUPm/6z7lvXj5+PFkBmEvgps9X7doGb2ZG6G0amxx/hwOxKABBXnS4u85X4BUmsDIxtl9itF5IYFqzSiOB8XdVcU7oLWfHwZ8rAAsTCH85updKmTw5C6CEAGs2AXD+qOdtjVkHmweGLm6ll7DQ974LmGXvvXjG/wlg72n14SjA9aZB7ydbBWDq5dLX8XkUPy/af3lG0wCcP9r7GJLqJkAf17/MCsAS5r1udRq3kj2hArAkwIxLwdwihuKY19I9htnCG3HqubIw0zzw2XQxhrh9FZ8sLI1A4hQhVRhEyDHDABSK4Db7HFV0qUoF1/7pevbTgHLDoW23+j1uRpUgoLZTpaI8rj2Ka/tVuYW+3t2GA1gumHJBa6Ff/bCjVvsyDAlQiZKEnMgoDtPNA16vFkQ5MiXcoTJsSIB5tnEUt1yXFshCf+9+vFLvyPRxbyn/lw+okQGKJFeTbmQDmj/mGczkcRBDC32vHIvTyxgWYCrCVmEwSbeLaIUYNcW2Kzy2UYiGBZjaxr3CDwp/iA3wHO09ogC8R9vX0D4wPyjSh1Y4g9HXk0l+M2A3an2GByhSDpe1cUQFwwF+WIoHz+j7dgx6/ZuBZ3iA69E4y9rQ8s5g/2ENMMUqKwALEEA/KO7qtMDEN5nder+onb4eZHZRHr/edOKLYDG491UQwQPo33jZHShqLSBhSpKxqNQ2domjnU0/jwIJNA0Onc2Gl300w98rmh/eXwDL2Gf5rpPQCoUFam6NUwuhhR3RW1h2gCl9QWoSgB/gdRNDX5jV8OZlqE//TnLP0bnHwGIWu+XuAxf6PR+XYXhpEZmQmXxRVb8OUDib7+gmtnxjlcsDlIpvtDNopd5iflCcqRGaW32AQr9fjg45V/ph/8hblErW1GT5tr2j61w5C5lVJjI51orHy+1C/9RnTf/4PiwxahAdoqzD5j74tVnhlNIbpqak6FqkLS3HSJBGJkaeIUxqUTs5gSvOjs4bpRYz43jYP/oUpexpVXeQk7/SO8PDdVU2y4F0J5Z32K3JHyvFRdkmEjo9/CCTLa9pe2Ohu98p5W2hgO9FRmCHdjDB+R/1Nc5rtK0tbkZrU3Wem/LWNKzWtWDA2qnlgIWTN+vau35JF1jascBSX50KwJOUkzumBbgNNYfcAkuOBZaL2gJLAWhp8qSzGmyv6KtUTQuvgOJYeB5aickXmru7xefSVImv2kSpr8PGXqBEaqqAyyXAZT7rsDkva91aFkB1ivI3B5Z8lBD8mwMBh1n/5sDxbw6YgIewqHJxVZZmXZ2dYT3WfwFKKc+Spp3bMgAAAABJRU5ErkJggg==',
  'data:image/png;base64,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',
  ''
])


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
  background: #EEE;
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
