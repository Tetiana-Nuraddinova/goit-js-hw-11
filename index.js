import{a as f,S as d,i as n}from"./assets/vendor-BK_rxH-O.js";(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))a(t);new MutationObserver(t=>{for(const r of t)if(r.type==="childList")for(const i of r.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&a(i)}).observe(document,{childList:!0,subtree:!0});function e(t){const r={};return t.integrity&&(r.integrity=t.integrity),t.referrerPolicy&&(r.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?r.credentials="include":t.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function a(t){if(t.ep)return;t.ep=!0;const r=e(t);fetch(t.href,r)}})();const p="51454391-664c00f7a8e881ab1c8a3c773",m="https://pixabay.com/api/";async function y(s){const o={key:p,q:s,image_type:"photo",orientation:"horizontal",safesearch:!0};return f.get(m,{params:o}).then(function(e){return e.data}).catch(function(e){console.log("Error:",e)})}const c=document.querySelector(".gallery"),l=document.querySelector(".loader"),h=new d(".gallery a",{captionsData:"alt",captoionDelay:250});function g(s){const o=s.map(e=>` <li class="gallery-item">
        <a href="${e.largeImageURL}">
        <img class="gallery-img" src="${e.webformatURL}" alt="${e.tags}" width="360" height="200"/>
        </a>
        <div class="info">
        <p><b>Likes:</b> ${e.likes}</p>
        <p><b>Views:</b> ${e.views}</p>
        <p><b>Comments:</b> ${e.comments}</p>
        <p><b>Downloads:</b> ${e.downloads}</p>
        </div>
        </li>`).join("");c.insertAdjacentHTML("beforeend",o),h.refresh()}function b(){c.innerHTML=""}function L(){l.classList.add("is-visible")}function v(){l.classList.remove("is-visible")}const u=document.querySelector(".form"),w=u.elements["search-text"];u.addEventListener("submit",async s=>{s.preventDefault();const o=w.value.trim();if(!o){n.warning({message:"Please enter a search query!",position:"topRight"});return}L(),b();try{const e=await y(o);if(e.hits.length===0){n.info({message:"Sorry, there are no images matching your search query. Please try again!",position:"topRight"});return}g(e.hits)}catch{n.error({message:"An error occurred. Please try again later.",position:"topRight"})}finally{v()}});
//# sourceMappingURL=index.js.map
