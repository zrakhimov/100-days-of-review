[Go to ToC](../README.md)

# Project 1

1. Kompyuteringizda `cats` degan **papka** hosil qiling
2. Bu papkani ichida `index.html` **faylini** yarating
3. **Terminal** orqali `cats` papkasini oching
4. **Terminalda**, `npx http-server` komandasini ishga tushiring 
:warning: `Kompyuteringizda NodeJS va NPM` o'rnatilgan bo'lishi kerak
5. `cats` papkasini Visual Studio Code orqali (yoki o'zinizga yoqqan Editor) oching
6. `index.html` faylida HTML oddiy strukturasini yarating, ya'ni `<body>`, `<head>` va hk. Birinchi o'zingiz xotiradan, hech qayerga qaramasdan yozishga harakat qiling, keyin nimani qoldirib ketganingizni google dan qarasangiz bo'ladi. 

7. `index.html` faylini saqlang, va uni browser da ochib ko'ring. Buning uchun, browserda `localhost:8080` adresini oching, chunki bu proyektingiz web serverda ishlamoqda.

8. VS Code orqali `<body>` ni ichiga mana bu -> [cats.txt](cats.txt) matnni HTML da web uchun yozing. 

9. Sahifanizga mushukning rasmini joylashtiring. Rasmni bu linkdan (https://upload.wikimedia.org/wikipedia/commons/c/c1/Six_weeks_old_cat_%28aka%29.jpg.) olishingiz mumkin

10. Rasmni `width` va `height` ini ya'ni balandlik va kengligini sahifaga mos tushadigan qilib to'g'irlang. (Attribute dan foydalaning)

11. `cats` papkangizda yana bitta fayl hosil qiling. Nomi `script.js` bo'lsin va ichiga `console.log('mushuklar!')` deb yozing.

12. `<body>` elementini oxiriga `<script>` elementini hosil qilib, bu javascript faylini ulang:
```javascript
...
  <script src="script.js"></script>
 </body>
```

13. Browserni yangilan, `Dev Tools (F12)` orqali `mushuklar!` degan tekst chiqqanini ko'rishingiz kerak

14. `script.js` faylida `mushuklar!` degan tekstni boshqa tekstga o'zgartiring, va browserda console da tekst o'zgarganini kuzating.

15. `index.html` fayliga o'zgartirish kiriting: `<img>` teg ga `id="cat-picture"` attribute ini qo'shing va `src="..."` attributini olib tashlang:

```javascript
<!-- NOTE: src attribute olib tashlandi, javascript orqali qo'shamiz uni endi-->
 <img id="cat-picture">
```

16. `script.js` faylingizga quyidagi kodni yozing:

```javascript
 window.onload = function() {
     var img = document.getElementById('cat-picture');
     img.src = 'https://upload.wikimedia.org/wikipedia/commons/c/c1/Six_weeks_old_cat_%28aka%29.jpg';
 };

```
