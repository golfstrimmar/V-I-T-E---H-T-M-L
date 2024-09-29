<template>
  <Datepicker  v-model="year" year-picker :offset="10" :enable-time-picker="false" locale="ru" position="left" 
    auto-apply @closed="closedFn" @focus="focusFn"
   />
</template>

<script setup>
import Datepicker from "@vuepic/vue-datepicker";
import { ref, onMounted } from 'vue';
const year = ref(new Date().getFullYear());



const focusFn = () => {
 
  if (document.querySelector('#check-year').querySelector('input.dp__pointer').value == '') {
      document.querySelector('#check-year').querySelector('input.dp__pointer').style.position = "absolute";
      document.querySelector('#check-year').querySelector('input.dp__pointer').style.opacity = 0;
  }
  document.querySelector('#check-year').closest('.form-field').querySelector('.form-field__area-svg').style.transform = "translateY(-50%) rotate(180deg)"
}

const closedFn = () => {

  document.querySelector('#check-year').querySelector('input.dp__pointer').style.opacity = 1;
  document.querySelector('#check-year').querySelector('input.dp__pointer').style.position = "relative";
  document.querySelector('#check-year').querySelector('input.dp__pointer').style.minHeight = 0;
  document.querySelector('#check-year').closest('.form-field').querySelector('.form-field__span').style.position = "relative";
  document.querySelector('#check-year').closest('.form-field').querySelector('.form-field__span').style.transform = "translateY(0%)";
  document.querySelector('#check-year').closest('.form-field').style.minHeight = '75px'
  document.querySelector('#check-year').closest('.form-field').style.paddingTop = '10px'
  document.querySelector('#check-year').closest('.form-field').querySelector('.form-field__area-svg').style.transform = "translateY(-50%) "
}


onMounted(() => {
  
  document.querySelector('#check-year').querySelector('input.dp__pointer').style.opacity = 0;
  document.querySelector('#check-year').querySelector('input.dp__pointer').style.position = "relative";
  document.querySelector('#check-year').querySelector('input.dp__pointer').style.minHeight = "51px";
})

</script>
