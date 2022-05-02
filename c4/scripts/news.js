// Ude Import export (MANDATORY)




import navbar from "../components/navbar.js"

document.getElementById("navbar").innerHTML=navbar()

import{news,append} from "./search.js"


let search =(e) =>
{
    if(e.key ==='shift')
    {
        let value=document.getElementById('search_inp').value;
         news(value).then((data) =>
         {
             console.log("data",data);
             
             let container=document.getElementById('results');
             container.innerHTML=null;
             append(data.articles,container);
         }
         )
    }
}

document.getElementById("search_inp").addEventListener('keydown',search);