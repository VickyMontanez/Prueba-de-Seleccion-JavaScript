/* import data from "../api.js";

self.addEventListener("message", (e)=>{
    let res = data[`${e.data.type}`]((e.data.user) ? e.data.user : undefined);
    Promise.resolve(res).then(res=>postMessage(res));
    console.log(res);
}) */

/* import { addRecluta } from "../api.js";

self.addEventListener("message", (e)=>{
    let res = addRecluta[`${e.data.type}`]((e.data.user) ? e.data.user : undefined);
    Promise.resolve(res).then(res=>postMessage(res));
    console.log(res);
}) */