import"./modulepreload-polyfill-B5Qt9EMX.js";try{new Object(crypto.subtle)}catch{window.alert("当前环境不支持")}async function d(r){const e=new TextEncoder().encode(r),t=await crypto.subtle.digest("SHA-512",e);return[...new Uint8Array(t)].map(n=>n.toString(16).padStart(2,"0")).join("")}function m(r){var e=1664525,t=1013904223,a=Number.parseInt(r),n=a;return function(){return n=e*n+t&2147483647,n/2147483647}}function v(r,e=32){var t=["abcdefghijklmnopqrstuvwxyz","ABCDEFGHIJKLMNOPQRSTUVWXYZ","12345678901234567890",`!@#$%^&*()-_=+[{]}\\|;:'",<.>/?`],a=t.join(""),n=y(r),o=0;for(const l of n){var s=l?1:0;o=o<<1|s}for(var f=Math.abs(o%a.length),u=a.charAt(f),i=m(o.toString()),c=u;c.length<e;){var h=Math.floor(i()*a.length);c+=a.charAt(h)}return c}function y(r){for(var e=[],t=0;t<r.length;t+=2)for(var a=r.slice(t,t+2),n=Number.parseInt(a,16),o=7;o>=0;o--){var s=n>>o&1;e.push(s)}return e}document.getElementById("copy").addEventListener("click",()=>{const r=document.getElementById("username").value.trim(),e=document.getElementById("password").value.trim(),t=document.getElementById("length");if(!r||!e){alert("请输入");return}d(r+"@"+e).then(a=>{const n=v(a,Number(t.value));return window.navigator.clipboard.writeText(n)}).then(()=>{iqwerty.toast.toast("复制成功!",{settings:{duration:1500},style:{main:{background:"#68D391",color:"#ffffff"}}})}).catch(()=>{iqwerty.toast.toast("复制失败!",{settings:{duration:1500},style:{main:{background:"#E53E3E",color:"#ffffff"}}})})});