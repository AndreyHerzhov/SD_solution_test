!function(){var e={addBtn:document.querySelector(".add_button"),input:document.querySelector("input"),list:document.querySelector(".pairs_list")},n=[];e.addBtn.addEventListener("click",(function(o){o.preventDefault();if(!e.input.value)return;if(!e.input.value.match(/^[a-zA-Z]+[a-zA-Z]*=(?=[a-zA-Z])/))return alert("message"),!1;var u=e.input.value,i=t(u);n.push(u),console.log(n),r(i),e.input.value=""}));var t=function(e){return'<li class="pairs-list_item">'.concat(e,"</li>")},r=function(n){e.list.insertAdjacentHTML("beforeend",n)};var o=document.querySelector(".sort_value"),u=document.querySelector(".sort_name");o.addEventListener("click",(function(o){e.list.innerHTML="";var u=n.map((function(e){return e.split("=").reverse().join("=")}));u.sort((function(e,n){return e.localeCompare(n)}));var i=u.map((function(e){return e.split("=").reverse().join("=")})),c=i.reduce((function(e,n){return e+t(n)}),"");r(c),console.log(i)})),u.addEventListener("click",(function(o){e.list.innerHTML="",console.log(n);var u=n.sort((function(e,n){return e.localeCompare(n)})),i=u.reduce((function(e,n){return e+t(n)}),"");r(i),console.log(u)}))}();
//# sourceMappingURL=index.d62f9205.js.map
