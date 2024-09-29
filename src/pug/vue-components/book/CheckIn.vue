<template lang="pug">
._check
  input#date-in.date-in(
    type='hidden' 
    name='date-in'
    v-model= 'date' 
    )
  p(:class="[{ '_empty-data': date === '' }]") Check-in*
  #check-in-header.Picker
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
}
const closedFn = () => {
  fildFocus.value = !fildFocus.value
}

</script>
<style lang="scss">
.Picker {
  position: relative;

}

.dp__main input,
.dp__main .dp__input_wrap {
  background: transparent;
}

.dp--clear-btn {
  position: absolute;
  top: 50%;
  right: 3px;
  z-index: 2;
  transform: translate(0%, -50%);
}

.form-field__area-svg {
  display: inline-block;
  position: absolute;
  top: 50%;
  right: 15px;
  z-index: -1;
  transform: translate(0%, -50%);
}

.form-field__area-svg {
  transition: all 0.2s;

  svg {
    width: 15px;
    height: 15px;
  }

  &._is-active {
    transform: translate(0%, -50%) rotate(180deg);

  }
}

.form-field._check_invalid {
  p {
    color: red;
  }
}
</style>