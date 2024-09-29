<template lang="pug">
._check(:class="[(Filled == true) ? '_is-active' : '' ]")
  input#date-out.date-in(
    type='hidden' 
    name='date-out'
    v-model= 'date' 
    )

  #check-in-header.Picker(ref='some')
    p(:class="[(fildFocus == true) ? '_is-active' : '',(Filled == true) ? '_unvisible' : '' ]") Check-out*
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
    div(:class="fildFocus ? 'form-field__area-svg _is-active'   : 'form-field__area-svg'")
      svg
        use(xlink:href='#chevron-down') 
</template>

<script setup>
import { ref, onMounted, reactive, watch } from 'vue';
const date = ref('');
var fildFocus = ref(false);
const some = ref(null)
let Filled = ref(false);
let pointer = reactive()


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



const Fn = () => {
  const pointerElement = some.value?.querySelector('.dp__pointer');
  if (pointerElement) {
    pointer = pointerElement.value;
    date.value = pointer
  }
};

onMounted(() => {
  Fn();
});


watch(date, (count, prevCount) => {
  Filled.value = true;
  if (count == null) {
    Filled.value = false;
  }
})

</script>