<template>
    <p>{{ data.counter  }} </p>
    <button @click.prevent="inc" >+</button>
</template>


<script setup >
import {ref , reactive } from 'vue'; 
// const  data = ref(0) ; /* 1 */
const data =  reactive ({counter:0})

function inc(){ 
   // data.value++// 1 methode with ref a acceder avec .value 
    data.counter++;  // avec reactive 
}


</script>
