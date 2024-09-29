<template lang="pug">
._check
  input#date-out.date-in(
    type='hidden' 
    name='date-out'
    v-model= 'date' 
    )
  p(:class="[{ '_empty-data': date === '' }]") Departure *
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

const closedFn = () => {
  fildFocus.value = !fildFocus.value
}

</script>