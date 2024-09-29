<template lang="pug">
._check
  input#date-in.date-in(
    type='hidden' 
    name='date-in'
    v-model= 'date' 
    )
  p(:class="[{ '_empty-data': date === '' }]") Check-in*
  VueDatePicker(
    v-model='date' 
    :format='format' 
    :enable-time-picker='false'    
    locale='en' position='left'
    :offset='10' 
    auto-apply='' 
    @closed='closedFn'   
    @focus='focusFn'
    @click='clickFn'
    @open='openFn'
    )
  div(:class="fildFocus ? 'form-field__area-svg _is-active' : 'form-field__area-svg'")
    svg
      use(xlink:href='#arrow-down')
</template>
<script setup>
import { ref, onMounted } from "vue";
const date = ref('');
var fildFocus = ref(false);
const format = (date) => {
  const day = date.getDate();
  const month = date.getMonth() + 1;
  const year = date.getFullYear();
  return `${day}.${month}.${year}`;
}
const openFn = () => {
  fildFocus.value = !fildFocus.value
}
const focusFn = () => {
  // document.querySelector('#check-in-header').querySelector('.form-field__area-svg').style.transform = "translateY(-50%) rotate(180deg)"
}
const closedFn = () => {
  fildFocus.value = !fildFocus.value
  // if (date.value !== '') {
  // document.querySelector('.date-in').value = date.value
  // }
  // document.querySelector('#check-in-header').querySelector('.form-field__area-svg').style.transform = "translateY(-50%) "
}
onMounted(() => {
})
</script>