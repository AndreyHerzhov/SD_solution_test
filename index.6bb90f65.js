const e={addBtn:document.querySelector(".add_button"),input:document.querySelector("input"),list:document.querySelector(".pairs_list"),clearBtn:document.querySelector("#clear_button"),sortByValueBtn:document.querySelector(".sort_value"),sortByNameBtn:document.querySelector(".sort_name")};let t=[],n=[];e.addBtn.addEventListener("click",(function(i){i.preventDefault();if(!e.input.value)return;if(!e.input.value.match(/^[a-zA-Z0-9\s]*=(?=[\sa-zA-Z0-9]+[a-zA-Z0-9]$)/))return alert("Write 'Name=Value' pair. Names and Values can contain only alpha-numeric characters."),!1;{const i=e.input.value.trim();n.push(i);const l=n.map((e=>e.split(" ").join("").split("  ")));let c=l.flatMap((e=>e))[0];const o=r(c);t.push(c),a(o),e.input.value="",n=[]}})),e.clearBtn.addEventListener("click",(function(n){e.list.innerHTML="",t=[],console.log(t)})),e.sortByValueBtn.addEventListener("click",(function(n){if(e.list.innerHTML="",t){const e=t.map((e=>e.split("=").reverse().join("=")));e.sort(((e,t)=>e.localeCompare(t)));const n=e.map((e=>e.split("=").reverse().join("="))).reduce(((e,t)=>e+r(t)),"");a(n)}})),e.sortByNameBtn.addEventListener("click",(function(){if(e.list.innerHTML="",t){const e=t.sort(((e,t)=>e.localeCompare(t))).reduce(((e,t)=>e+r(t)),"");a(e)}}));const r=e=>`<li class="pairs-list_item">${e}</li>`,a=t=>{e.list.insertAdjacentHTML("beforeend",t)};
//# sourceMappingURL=index.6bb90f65.js.map