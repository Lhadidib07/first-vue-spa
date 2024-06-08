import {createApp,VueElement} from 'vue'; 
import App from './App.vue'; 
import '../node_modules/bootstrap/dist/css/bootstrap.css';

import router from './routes';
import $pages from './data'; 


const app = createApp(App); 

app.use(router); 

// app.config.globalProperties.$pages = $pages ; 

            // clé  , value 
app.provide('$pages',$pages); // provide pages to all childrens so all componnents 
// go to page viewer 

app.mount('#app');