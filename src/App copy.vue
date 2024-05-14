<script setup>
import 'wc-waterfall'

import { ref } from 'vue'
const  list = ref([])
const cols = ref(Math.floor(window.innerWidth / 236))
const colsArr = ref(new Array(cols.value).fill(0))

fetch('https://mock.presstime.cn/mock/663dc355d59f9a21eb4d690b/example/photos')
.then((res)=>{
  res.json().then(ress=>{
    list.value = ress.data.data
    colsArr.value.f
    console.log(ress)
  })
})
.catch((err)=>console.log(err))
console.log(colsArr.value)
window.addEventListener("resize", function () {
  console.log(window.innerWidth)
  cols.value = Math.floor(window.innerWidth / 236)
  colsArr.value = new Array(cols.value).fill(0)
console.log(colsArr.value)

});
</script>

<!-- App.vue -->
<template>
  <div>
    <wc-waterfall gap="10" :cols="cols" v-if="list[0]" style="background-color: aqua;">
      <img class="change" :style="{ 'padding-bottom': `${ (img.height / img.width) * 1 }`, 'background': 'pink'  }" style="" v-for="img in list" :src="img.urls.raw" />
    </wc-waterfall>
    <div>asd</div>
  </div>
</template>

<style scoped>
.change{
  transition: all 0.3s;
}
</style>
