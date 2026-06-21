let images = ['s1.svg','s2.svg','s3.svg','s4.svg','s5.svg','s6.svg']; // Add image paths here
let currentIndex = Math.floor(Math.random() * images.length); // Start with a random index
let imageContainer = document.getElementById('spreuk-container');

// Preload and display all images in the container
images.forEach((src, index) => {
    let img = document.createElement('img');
    img.src = "images/"+src;
    img.classList.add('spreuk');
    if (index === currentIndex) img.classList.add('active'); // Set the first image as visible
    imageContainer.appendChild(img);
});

function slideImage() {
    let currentImage = document.querySelector('.spreuk.active');
    currentImage.classList.remove('active');
    currentIndex = (currentIndex + 1) % images.length;
    let nextImage = imageContainer.children[currentIndex];
    nextImage.classList.add('active');
}

setInterval(slideImage, 10000);
(function (C, A, L) { let p = function (a, ar) { a.q.push(ar); }; let d = C.document; C.Cal = C.Cal || function () { let cal = C.Cal; let ar = arguments; if (!cal.loaded) { cal.ns = {}; cal.q = cal.q || []; d.head.appendChild(d.createElement("script")).src = A; cal.loaded = true; } if (ar[0] === L) { const api = function () { p(api, arguments); }; const namespace = ar[1]; api.q = api.q || []; if(typeof namespace === "string"){cal.ns[namespace] = cal.ns[namespace] || api;p(cal.ns[namespace], ar);p(cal, ["initNamespace", namespace]);} else p(cal, ar); return;} p(cal, ar); }; })(window, "https://app.cal.com/embed/embed.js", "init");
Cal("init", "manuele-lichaamstherapie", {origin:"https://cal.com"});
Cal("init", "kennismakingsgesprek", {origin:"https://cal.com"});
Cal("init", "intakegesprek-slaap", {origin:"https://cal.com"});
Cal("init", "slaap-hygiene", {origin:"https://cal.com"});
Cal("init", "slaap-vervolgsessie", {origin:"https://cal.com"});
Cal("init", "intakegesprek-slaap-kinderen", {origin:"https://cal.com"});
Cal("init", "slaap-vervolgsessie-kinderen", {origin:"https://cal.com"});
Cal("init", "intakegesprek-hartcoherentie", {origin:"https://cal.com"});
Cal("init", "hartcoherentie-sessie-2", {origin:"https://cal.com"});
Cal("init", "hartcoherentie-sessie-3", {origin:"https://cal.com"});
Cal("init", "hartcoherentie-sessie-4", {origin:"https://cal.com"});
Cal("init", "evolutiegesprek-hartcoherentie", {origin:"https://cal.com"});
