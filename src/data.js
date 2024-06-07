const pagesKey = 'pages';

let pagesJson = localStorage.getItem(pagesKey);
// Initialize pagesStore as an empty array if pagesJson is null
let pagesStore = pagesJson ? JSON.parse(pagesJson) : [];

export default {
    getAllPages() {
        return pagesStore;
    },
    getSinglePage(index) {
       return pagesStore[index]; 
    }
}