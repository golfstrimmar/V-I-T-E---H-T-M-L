<template lang="pug">
._check(:class="[(Filled == true) ? '_is-active' : '' ]")
  input#date-in.date-in(
    type='hidden' 
    name='date-in'
    v-model= 'date' 
    )
  #check-in-header.Picker(ref='some')
    p(:class="[(fildFocus == true) ? '_is-active' : '',(Filled == true) ? '_unvisible' : '' ]") Check-in*
    VueDatePicker(
      v-model='date' 
      :format='format' 
      :enable-time-picker='false'    
      locale='en' position='left'
      :offset='10' 
      auto-apply='' 
      @closed='closedFn'   
      @open='openFn'
      @click='clickFn'
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
let pointer = reactive()
let departure = ref(false);

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
  localStorage.setItem("DateIn", count);
  const DateOut = localStorage.getItem("DateOut");
  const date1 = new Date(DateOut);
  if (count) {
    departure.value = false;
    const date2 = new Date(count);
    if (date2 > date1) {
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






let intervalId = null;
const checkLocalStorage = () => {
  const resetFlag = localStorage.getItem("resetDatepickerIn");
  if (resetFlag === "true") {
    Filled.value = false;
    date.value = '';
    localStorage.setItem("resetDatepickerIn", "false");
  }
};

onMounted(() => {
  localStorage.setItem("DateIn", null);
  intervalId = setInterval(() => {
    checkLocalStorage();
  }, 500);
});

onUnmounted(() => {
  clearInterval(intervalId);

});

</script>

<style lang="scss">
._check {
  p {
    opacity: 0.5;
  }

  &._is-active {
    .Picker {
      background: #00eb76;
      border-color: #00eb76;

      &:hover {
        border-color: #4c8e3b;
      }
    }

    .dp__main input {
      padding: 30px 5px 5px 5px;
      color: white;
    }
  }
}

.dp--clear-btn {
  border-radius: 100%;
  padding: 0 0 0 0;
}

.dp__input_icons {
  padding: 6px 6px;
}

.Picker {
  position: relative;
  border: 1px solid #959595;
  border-radius: 5px;
  transition: all 0.2s;



  &:hover {
    border: solid 1px #00eb76;

    p {
      color: #00eb76;
    }

    .form-field__area-svg svg {
      stroke: #00eb76;
    }

  }

  p {
    font-family: "PT Serif", serif;
    position: absolute;
    top: 50%;
    transform: translate(0%, -50%);
    left: 10px;
    transition: all 0.2s;


    &._unvisible {
      color: #008000;
      top: 0%;
      transform: translate(0%, 16%);
    }
  }

  input~div {
    display: none;
  }

}

.dp__main input {
  border: 1px solid transparent;
  padding: 10px;
  border-radius: 10px;
  transition: all 0.2s;
  color: #008000;

  &:hover {
    border: 1px solid transparent;
  }
}


.dp__main input,
.dp__main .dp__input_wrap {
  background: transparent;
}

.dp--clear-btn {
  position: absolute;
  top: 50%;
  right: 6px;
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

.form-field {
  max-width: 209px;
}

.form-field__area-svg {
  transition: all 0.2s;

  svg {
    stroke: black;
    opacity: .5;
    width: 20px;
    height: 30px;
    transition: all 0.2s;
  }

  &._is-active {
    transform: translate(0%, -50%) rotate(180deg);

  }
}

._check._check_invalid {
  border: 1px solid red;
  border-radius: 5px;

  .Picker {
    border: 1px solid red;
  }

  p {
    opacity: 1;
    color: red;
  }

  svg {
    stroke: red;
  }

  &:hover {
    svg {
      stroke: red;
    }
  }
}
</style>