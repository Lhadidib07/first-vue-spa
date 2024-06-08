<template>
    <!-- 
        <p>{{ data.counter  }} </p>
        <button @click.prevent="inc" >+</button>
    -->
    <div class="container my-12 mx-auto ">
        <router-link
            to="/create"
            class="btn btn-primary btn-sm"
        > create page </router-link>        
    </div>
    <table class="container text-center mx-auto table table-striped table-hover">
        <thead>
            <tr>
                <th>title</th>
                <th>link text</th>
                <th>is published</th>
            </tr>
        </thead>

        <tbody>
            <tr
            v-for="(page,index) in $pages.getAllPages()" :key="index"
            @click="goToPage(index)"
            >
                <td>{{ page.pageTitle }}</td>
                <td>{{ page.link.text }}</td>
                <td>{{ page.published ? 'yes' : 'no '}}</td>
            </tr>
        </tbody>
    </table>

</template>


<script setup >
import {ref , reactive , inject } from 'vue'; 
import { useRouter } from 'vue-router';

// const  data = ref(0) ; /* 1 */
//const data =  reactive ({counter:0});

 // on recupré le provide du main avec la clé 
const $pages = inject('$pages',[]); // empty array as default value

const router = useRouter(); 

// function inc(){ 
//    // data.value++// 1 methode with ref a acceder avec .value 
//     data.counter++;  // avec reactive 
// }

function goToPage(index){ 
    router.push({ path: `/pages/${index}/edit` }); 
}


</script>

<style scoped>
.table .table-hover tr:hover { 
    cursor: pointer;
}
</style>