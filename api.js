export const addRecluta = async function(user){
        let config ={
            method:"POST",
            header:{"Content-Type":"application/json"},
            body:JSON.stringify(user)
        };
        let data = await fetch("http://localhost:4005/reclutas",config);
        let results = await data.json();
        return results
};

export const showRecluta = async function(){
    let config ={
        method:"GET",
        header:{"Content-Type":"application/json"},
    };
    let data = await fetch("http://localhost:4005/reclutas",config);
    let results = await data.json();
    console.log(results);
    return results
};
