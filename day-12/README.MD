[Go to ToC](../README.md)

# Course Overview

Notice: Materials in these notes are taken and translated from www.eloquentjavascript.net. However not all the content might be word for word.

## ToC
* [Course Intro](#course-intro)
* [Values, Types, and Operators](#values-types-and-operators)

### Course Intro

* Hello everyone. My name is Zokir Rakhimov, and welcome to my course, JavaScript. I am a software developer in Canada. 

* JavaScript is one of the most popular programming languages. According to GitHub, JavaScript is the top programming language, and it's more than twice as popular as the runner‑up, Python. Learning the JavaScript language is valuable for any developer. 

* JavaScript is the language of the web supported by all major browsers, but tools exist to take JavaScript far beyond web pages. You can crdeate native smartphone and tablet apps, desktop apps for Windows and Mac, and even server‑side apps using JavaScript. 

In this course, I'll cover JavaScript programming for those who are completely new to programming. This is also valuable for programmers who are just new to the JavaScript language. We'll learn the JavaScript features needed to get you started. By the end of this course, you'll know the very basics of JavaScript and you'll be able to build simple programs for the web. 

* No prior knowledge of programming is required for this course. I hope you'll join me on this journey in learning how to program with JavaScript.

:uzbekistan:

* Hammaga salom. Mening ismim Zokir Rahimov va mening JavaScript kursimga xush kelibsiz. Men Kanada davlatida o'qishni dasturlash yo'nalishida tugatib, shu sohada ish ishlayman.

* JavaScript - eng mashhur dasturlash tillaridan biri. GitHub-ga ko'ra, JavaScript eng yuqori dasturlash tili bo'lib, u ikkinchi darajali Python-dan ikki baravar ko'proq mashhur. JavaScript tilini o'rganish har qanday dasturchi uchun juda muhimdir.

* JavaScript - bu barcha yirik brauzerlar tushunadigan web tili, lekin oxirgi yillarda shu til asosida turli xil kutubxona va framework lar chiqib ketdi. Hozirda bu til orqali siz smartfon va planshet dasturlarini, Windows va Mac uchun dasturlar va hatto server tomonidagi dasturlarni ham ishlab chiqishingiz mumkin.

* Ushbu kursda men dasturlash sohasiga yangi kirib kelganlar uchun mo'ljallangan. Lekin boshqa tildan kelib, JavaScript haqida o'rganmoqchi bo'lganlar uchun ham yaxshi resurs hisoblanadi. Ushbu kurs yakunida siz JavaScript-ni asoslarini bilib olasiz va veb uchun oddiy dasturlarni yaratishingiz mumkin bo'ladi.

* Ushbu kurs uchun HTML va CSS ni bilishingiz ast qotadi. Agar bular bo'yicha bilimingiz bo'lmasa, kanalimdagi HTML va CSS kurslarini birinchi ko'rib chiqishingizni maslahat beraman.


[🔝](#toc)  
 
 
### Values, Types, and Operators

Inside the computer’s world, there is only data. You can read data, modify data, create new data—but that which isn’t data cannot be mentioned. All this data is stored as long sequences of bits and is thus fundamentally alike.

Bits are any kind of two-valued things, usually described as zeros and ones. Inside the computer, they take forms such as a high or low electrical charge, a strong or weak signal, or a shiny or dull spot on the surface of a CD. Any piece of discrete information can be reduced to a sequence of zeros and ones and thus represented in bits.

For example, we can express the number 13 in bits. It works the same way as a decimal number, but instead of 10 different digits, you have only 2, and the weight of each increases by a factor of 2 from right to left. Here are the bits that make up the number 13, with the weights of the digits shown below them:

   0   0   0   0   1   1   0   1
 128  64  32  16   8   4   2   1
 
So that’s the binary number 00001101. Its non-zero digits stand for 8, 4, and 1, and add up to 13.
