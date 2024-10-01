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
  span.departure(:class="[(departure == true) ? '_is-active' : '' ]") The departure date must be later than the arrival date.
</template>

<script setup>
import { ref, onMounted, reactive, watch, onUnmounted } from 'vue';
const date = ref('');
var fildFocus = ref(false);
const some = ref(null)
let Filled = ref(false);
let departure = ref(false);
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
  localStorage.setItem("DateOut", count);
  const DateIn = localStorage.getItem("DateIn");
  const date1 = new Date(DateIn);

  if (count) {
    departure.value = false;
    const date2 = new Date(count);
    if (date2 < date1) {
      // alert("The departure date must be later than the arrival date.");
      Filled.value = false;
      date.value = '';
      departure.value = true;
    }

  }
  if (count == '' || count == null) {
    Filled.value = false;
  } else {
    Filled.value = true;
  }
})


// -----------------------------------------
let intervalId = null;
const checkLocalStorage = () => {
  const resetFlag = localStorage.getItem("resetDatepickerOut");
  if (resetFlag === "true") {
    date.value = '';
    localStorage.setItem("resetDatepickerOut", "false");
  }
};

onMounted(() => {
  localStorage.setItem("DateOut", null);
  intervalId = setInterval(() => {
    checkLocalStorage();
  }, 500);
});

onUnmounted(() => {
  clearInterval(intervalId);

});
</script>


<style lang="scss">
.departure {
  display: none;
  opacity: 0;
  transition: all 0.2s;

  &._is-active {
    display: block;
    opacity: 1;
    color: red;
  }
}
</style>