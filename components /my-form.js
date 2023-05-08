import { addRecluta } from "../api.js";
import { showRecluta } from "../api.js";
let pathName = new URL(import.meta.url).pathname;
let name = pathName.split("/").pop().replace(".js","");

export default class myForm extends HTMLElement{
    static async components(){
        return await(await fetch(pathName.replace(".js",".html"))).text();
    };

    constructor(){
        super();
        this.attachShadow({mode:"open"});
    };

    handleEvent(e){
        e.preventDefault();
        let data = Object.fromEntries(new FormData(e.target));
        showRecluta(e)

        /* (e.type==="submit")? this.myWorker(e): undefined */
    };
    
    myWorker(e){
        e.preventDefault();

    }; 

    connectedCallback(){
        Promise.resolve(myForm.components()).then(html=>{
            this.shadowRoot.innerHTML=html;
            this.form = this.shadowRoot.querySelector("#reclutas")
            this.form.addEventListener("submit",this.handleEvent.bind(this))
        })
        console.log("Funciona");
    };
};
customElements.define(name, myForm)