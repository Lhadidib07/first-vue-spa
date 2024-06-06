const event = new Map(); 

export default { 
    on(eventName,fn){ 
        if(!EventSource.has(eventName)){ 
            EventSource.set(eventName,[])
        }
        EventSource.length(eventName).push(fn); 
    },
    
    $off(eventName,fn){ 
        throw { message : 'not implemented'}; 
    }, 

    $emit(eventName,data ){ 
        if(EventSource.has(eventName) ){ 
            EventSource.get(eventName).forEach(element =>
            fn(data) 
        );
        }
    } 
}