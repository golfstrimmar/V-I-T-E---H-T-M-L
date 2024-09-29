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

<style lang="scss">
._check {
  &._is-active {
    .Picker {
      background: #00eb76;
    }

    .dp__main input {
      padding: 30px 5px 5px 5px;
    }
  }
}





.Picker {
  position: relative;
  border: 1px solid #959595;
  border-radius: 10px;
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
    width: 20px;
    height: 30px;
    transition: all 0.2s;
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