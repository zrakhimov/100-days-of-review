[Go to ToC](../README.md)

# Project 1

1. Kompyuteringizda `cats` degan **papka** hosil qiling  

2. Bu papkani ichida `index.html` **faylini** yarating

3. **Terminal** orqali `cats` papkasini oching

6. `cats` papkasini Visual Studio Code orqali (yoki o'zinizga yoqqan Editor) oching

7. `index.html` faylida HTML oddiy strukturasini yarating, ya'ni `<body>`, `<head>` va hk. Birinchi o'zingiz xotiradan, hech qayerga qaramasdan yozishga harakat qiling, keyin nimani qoldirib ketganingizni google dan qarasangiz bo'ladi. 

8. `index.html` faylini saqlang, va uni browser da ochib ko'ring. 

9. VS Code orqali `<body>` ni ichiga mana bu -> [cats.txt](cats.txt) matnni HTML da web uchun yozing. 

10. Sahifanizga mushukning rasmini joylashtiring. Rasmni bu linkdan (https://upload.wikimedia.org/wikipedia/commons/c/c1/Six_weeks_old_cat_%28aka%29.jpg.) olishingiz mumkin

11. Rasmni `width` va `height` ini ya'ni balandlik va kengligini sahifaga mos tushadigan qilib to'g'irlang. (Attribute dan foydalaning)

12. `cats` papkangizda yana bitta fayl hosil qiling. Nomi `script.js` bo'lsin va ichiga `console.log('mushuklar!')` deb yozing.

13. `<body>` elementini oxiriga `<script>` elementini hosil qilib, bu javascript faylini ulang:
```javascript
...
  <script src="script.js"></script>
 </body>
```

14. Browserni yangilan, `Dev Tools (F12)` orqali `mushuklar!` degan tekst chiqqanini ko'rishingiz kerak

15. `script.js` faylida `mushuklar!` degan tekstni boshqa tekstga o'zgartiring, va browserda console da tekst o'zgarganini kuzating.

16. `index.html` fayliga o'zgartirish kiriting: `<img>` teg ga `id="cat-picture"` attribute ini qo'shing va `src="..."` attributini olib tashlang:

```javascript
<!-- NOTE: src attribute olib tashlandi, javascript orqali qo'shamiz uni endi-->
 <img id="cat-picture">
```

17. `script.js` faylingizga quyidagi kodni yozing:

```javascript
 window.onload = function() {
     var img = document.getElementById('cat-picture');
     img.src = 'https://upload.wikimedia.org/wikipedia/commons/c/c1/Six_weeks_old_cat_%28aka%29.jpg';
 };

```

18. `script.js` faylni saqlab, browseringizda refresh qiling. Mushuk rasmi chiqdimi? demak kodingiz ishladi. Agar chiqmagan bo'lsa, console ni tekshiring xatolar chiqadishi mumkin.

19. `script.js` faylini o'zgartiring: javascript faylidagi `img.src` linkini endi bu [https://cataas.com/cat](https://cataas.com/cat) link ga o'zgartiring. Bu sayt SaaS (Software as a Service) sayt bo'lib bizga mushuk rasmlarini URL parametrlari orqali olishimizga yordam beradi. Faylni saqlab, browserni refresh qiling. Rasm o'zgardimi? Demak kod ishladi.

20. `script.js` fayliga o'zgartirish kiriting: funksiyaga nom berib alohida chiqarib oling. Fayli saqlang and browserda o'zgarish bo'lmasligi kerak.

```javascript
 function loadCatPicture() {
     var img = document.getElementById('cat-picture');
     img.src = 'https://cataas.com/cat';
 }

 window.onload = loadCatPicture;
```

21. Endi bu sahifangiz ochilganidan keyin rasm 5 sekunddan keyin refresh bo'lib o'zgarsin.  Birinchi o'zingiz qilib ko'ring, agar eslolmasangiz bu kodga qarang:

```javascript
function loadCatPicture() {
     var img = document.getElementById('cat-picture');
     
     // har safar boshqa rasm olish uchun `?nocache=date` qilishimiz kerak
     img.src = 'https://cataas.com/cat' + '?nocache=' + Date.now();
 }

 window.onload = function() {
     loadCatPicture();
    
     // Bu yerda setTimeout ishlatamiz
     setTimeout(loadCatPicture, 5 * 1000 /* 5s = 5000ms */);
 };
 ```

22. `script.js` ni o'zgartiring: har 15 sekundda rasm o'zgarsin. Birinchi o'zingiz qilib ko'ring.

```javascript

function loadCatPicture() {
     var img = document.getElementById('cat-picture');
    img.src = 'https://cataas.com/cat' + '?nocache=' + Date.now();
 }

 window.onload = function() {
     loadCatPicture();

    // Bu yerda setInterval ishlatamiz
     setInterval(loadCatPicture, 15 * 1000 /* 15s = 15000ms */);
 };
 
 ```

23. `script.js`ni o'zgartiring: endi foydalanuvchi qachonki web sahifaning hohlagan joyiga mishka bilan bosganda rasm o'zgaradigan qiling.

```javascript

function loadCatPicture() {
     var img = document.getElementById('cat-picture');
     img.src = 'https://cataas.com/cat' + '?nocache=' + Date.now();
}
 window.onload = function() {
     loadCatPicture();

     // Call the loadCatPicture function when the user clicks in the window
     window.onclick = loadCatPicture;
 };
 ```

24. `index.html` faylida, paragraflani atrofida `div` hosil qilib unga `id="text"` bering.

25. `script.js` ni o'zgartiring: endi foydalanuvchi faqatgina paragraphga bosganida, rasm o'zgaradigan qiling

```javascript
function loadCatPicture() {
     var img = document.getElementById('cat-picture');
     img.src = 'https://cataas.com/cat' + '?nocache=' + Date.now();
 }

 var text = document.getElementById('text');
 text.onclick = loadCatPicture;
```


26. `script.js` ni o'zgartiring: paragrafdan tashqari, yana foydalanuvchi klaviaturada qaysidir knopkani bosganida ham rasm o'zgarsin:

```javascript
function loadCatPicture() {
     var img = document.getElementById('cat-picture');
     img.src = 'https://cataas.com/cat' + '?nocache=' + Date.now();
 }

 var text = document.getElementById('text');
 text.onclick = loadCatPicture;
 
 window.onkeypress = function(e) {
     var keyName = e.key;
     console.log('Key Press event', keyName);
     loadCatPicture();
 };
```

27. `script.js` ni o'zgartiring: paragrafdan tashqari, yana foydalanuvchi klaviaturada faqat `b`, `m`, `s`, `n`, `p`, `x`  knopkalarini bosganida rasm o'zgarsin:

```javascript
function loadCatPicture() {
     var img = document.getElementById('cat-picture');
     img.src = 'https://cataas.com/cat' + '?nocache=' + Date.now();
 }

 var text = document.getElementById('text');
 text.onclick = loadCatPicture;
 
 window.onkeypress = function(e) {
     var keyName = e.key;
     console.log('Bosilgan Knopka: ', keyName);

     switch(keyName) { 
         case 'b':
         case 'm':
         case 's':
         case 'n':
         case 'p':
         case 'x':
             loadCatPicture();
             break;
         default:
             console.log('Biz hohlagan knopka bosilmadi');
     }
}
```

28. Bu sahifani CSS dan foydalanib, o'zgartirishlar kiritishingiz mumkin. URL parameterlar orqali qo'shimcha imkoniyatlarni [https://cataas.com/](https://cataas.com) saytidan olishingiz mumkin



