const STORE_KEY = 'CNode-accesstoken';

export default{
    fetch(){
        return JSON.parse(window.localStorage.getItem(STORE_KEY));
    },
    save(item){
        window.localStorage.setItem(STORE_KEY,JSON.stringify(item));    
    },
    clear(){
        window.localStorage.clear();
    }
}