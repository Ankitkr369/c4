// Ude Import export (MANDATORY)
// Onclicking store the news in local storage with key "news" so that you can access that on news.html page
import navbar from "../components/navbar.js"

document.getElementById("navbar").innerHTML=navbar();

import{news,append} from "./search.js"

let search =(e) =>
{
    if(e.key==='shift')
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