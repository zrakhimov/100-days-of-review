   
  
[Go to ToC](../README.md)

## Project 0 - Google Clone [from CS50W](https://cs50.harvard.edu/web/2020/projects/0/)

:canada: In this project we'll design a front-end clone for Google Search, Google Image Search and Google Advanced Search  
  
:uzbekistan: Bu loyihada Google saytining “Search” (Qidiruv), “Google Image Search” (Rasm qidiruvi),  va “Google Advanced Search” ( Ilg’or qidiruv) sahifalari front-end qismini HTML va CSS orqali yaratamiz.

## ToC
:canada:  
* [Background](#backgroun-izoh)
* [Getting Started](#)
* [Specification]
* [Hints]

:uzbekistan:
* [Izoh](#backgroun-izoh)
* [Boshlash uchun]
* [Talablar]
* [Ishora]

  
[🔝](#toc)  

## Background (Izoh)  

### :canada: 

Recall from lecture that we can create an HTML form using a <form> tag and can add <input> tags to create input fields for that form. For this project, we’ll write forms that send data to an existing web server: in this case, Google’s.  

When you perform a Google search, as by typing in a query into Google’s homepage and clicking the “Google Search” button, how does that query work? Let’s try to find out.

Navigate to https://www.google.com/, type in a query like “javascript” into the search field, and click the “Google Search” button.  

As you probably expected, you should see Google search results for “javascript.” But now, take a look at the URL. It should begin with https://www.google.com/search, the route on Google’s website that allows for searching. But following the route is a ?, followed by some additional information.  

Those additional pieces of information in the URL are known as a query string. The query string consists of a sequence of GET parameters, where each parameter has a name and a value. Query strings are generally formatted as:

```
field1=value1&field2=value2&field3=value3...

```  

where an `=` separates the name of the parameter from its value, and the & symbol separates parameters from one another. These parameters are a way for forms to submit information to a web server, by encoding the form data in the URL.  

Take a look at the URL for your Google search results page. It seems there are quite a few parameters that Google is using. Look through the URL (it may be helpful to copy/paste it into a text editor), and see if you can find any mention of “javascript,” our query.  

If you look through the URL, you should see that one of the GET parameters in the URL is `q=javascript`. This suggests that the name for the parameter corresponding to a Google search is `q` (likely short for “query”).  

It turns out that, while the other parameters provide useful data to Google, only the q parameter is required to perform a search. You can test this for yourself by visiting https://www.google.com/search?q=javascript, deleting all the other parameters. You should see the same Google results!  

Using this information, we can actually re-implement a front end for Google’s homepage. Paste the below into an HTML file called `index.html`, and open it in a browser.  

```html
<!DOCTYPE html>
<html lang="en">
    <head>
        <title>Search</title>
    </head>
    <body>
        <form action="https://google.com/search">
            <input type="text" name="q">
            <input type="submit" value="Google Search">
        </form>
    </body>
</html>
```  

When you open this page in a browser, you should see a (very simple) HTML form. Type in a search query like “javascript” and click “Google Search”, and you should be taken to Google’s search results page!  

How did that work? In this case, the action attribute on the form told the browser that when the form is submitted, the data should be sent to https://google.com/search. And by adding an input field to the form whose name attribute was q, whatever the user types into that input field is included as a GET parameter in the URL.  

Your task in this project is to expand on this site, creating your own front end for Google Search, as by exploring Google’s interface to identify what GET parameters it expects and adding the necessary HTML and CSS to your website.  

   
### :uzbekistan: 

Oldingi video-darslarimizda HTML orqali <input> va <form> elementlarini yaratishni ko’rib chiqdik. Lekin forma orqali olingan informatsiyani qanday qilib web server da qabul qilib olishni o’tkanimiz yo’q. Shuning uchun, bu loyihada faqat front-end ni yaratib, informatsiya oldi berdisini google ni o’zining serveridan foydalanib turamiz.  

Google-da qidiruvni amalga oshirayotganda, masalan, Google-ning bosh sahifasida so'rovni yozib, "Google Search" tugmachasini bosganingizda, bu so'rov qanday ishlaydi? Keling, buni bilib olishga harakat qilaylik.  

https://www.google.com/ saytiga o'ting, qidiruvga "javascript" kabi so'rovni kiriting va "Google Search" tugmasini bosing.  

Ehtimol siz kutganingizdek, Google-da "javascript" uchun qidiruv natijalarini ko'rishingiz kerak. Ammo endi URL manzilini ko'rib chiqing. U https://www.google.com/search bilan boshlanishi kerak, bu Google veb-saytidagi qidiruvga imkon beruvchi **route/marshrut/yo’nalish**. Undan keyin `?` belgisi va qo’shimcha informatsiya beriladi. Shu so’roq belgisidan keyingi qo’shimcha informatsiya `query string` (so’rovlar qatori) deyiladi. So'rovlar qatori GET parametrlari ketma-ketligidan iborat bo'lib, bu yerda har bir parametrning nomi va qiymati mavjud. So'rov satrlari odatda quyidagicha formatlanadi:

```
   parametr1=qiymat1&parametr2=qiymat2&parametr3=qiymat3...
```  
`=` parameter va qiymatni ajratib turadi  
`&` simvoli esa har bir parametrni ajratib turadi  

Ushbu parametrlar form ma'lumotlarini URL-da ma’lum shaklda ifodalash orqali veb-serverga ma'lumot yuborish usuli hisoblanadi.  

Google qidiruv natijalari chiqqanda sahifangiz URL manzilini ko'rib chiqing. URL Googlega foydali bo'lgan bir nechta parametrlardan tashkil topgan. URL manzilini sinchiklab ko'rib chiqing (uni matn muharririga ko'chirish / joylashtirish foydali bo'lishi mumkin) va bizning so'rovimiz "javascript" so'zini shu URL da topdingizmi?  

Agar siz URLni ko'rib chiqsangiz, URLdagi GET parametrlaridan biri `q=javascript` ekanligini ko'rishingiz kerak. Bu shuni ko'rsatadiki, Google qidiruviga mos keladigan parametr nomi q ("query" uchun qisqa ).  

Ma'lum bo'lishicha, boshqa parametrlar Google-ga foydali ma'lumotlarni taqdim qiladi, qidirishni amalga oshirish uchun faqatgina `q` parametri talab qilinadi. Buni https://www.google.com/search?q=javascript deb yozib, boshqa barcha parametrlarni o'chirib tashlashingiz mumkin. `javascript` haqidagi Google natijalarini ko'rishingiz kerak!  

Ushbu ma'lumotdan foydalanib, biz aslida Google-ning bosh sahifasi uchun front-end qismni klon qilishimiz mumkin. `index.html` deb nomlangan HTML-faylga quyida keltirilgan kodni joylashtiring va brauzerda oching.

```html
<!DOCTYPE html>
<html lang="en">
    <head>
        <title>Search</title>
    </head>
    <body>
        <form action="https://google.com/search">
            <input type="text" name="q">
            <input type="submit" value="Google Search">
        </form>
    </body>
</html>
```
Ushbu sahifani brauzerda ochganda juda oddiy HTML forma ko'rishingiz mumkin. "javascript" kabi qidiruv so'rovini kiriting va "Google Search" tugmasini bosing, shunda siz Google qidiruv natijalari sahifasiga o'tishingiz kerak!  

Bu qanday ishladi? Formadagi `action` atributi brauzerga so'rov berganda ma'lumotlar https://google.com/search manziliga yuborilishi kerakligini aytdi. `input` element ga `name` atrubitini berganimizda, uning qiymati (`q`) URL da GET parametr sifatida so'rvga qabul qilinadi.  

Ushbu loyihadagi vazifangiz, Google Search uchun o'zingizning front-end ingizni yaratish, Google interfeysini o'rganish (yana qanday GET parametrlari ishlatiladi) va veb-saytingiz ko'rinishini kerakli HTML va CSS bilan foydalangan holda, google ni interfeysiga iloji boricha o'xshatish.  

## Getting Started (Boshlash Uchun)

* :canada: Download the distribution code from https://github.com/zrakhimov/google-clone
* :uzbekistan: https://github.com/zrakhimov/google-clone dan kodni boshlang'ich kodni yuklab oling.

## Specification (Talablar)

### :canada: 

Your website must meet the following requirements.  

* **Pages**. Your website should have at least three pages: one for Google Search, one for Google Image Search, and one for Google Advanced Search.  
   * On the Google Search page, there should be links in the upper-right of the page to go to Image Search or Advanced Search. On each of the other two pages, there should be a link in the upper-right to go back to Google Search.  
* **Query Text**. On the Google Search page, the user should be able to type in a query, click “Google Search”, and be taken to the Google search results for that page.  
   * Like Google’s own, your search bar should be centered with rounded corners. The search button should also be centered, and should be beneath the search bar.  
* **Query Images**. On the Google Image Search page, the user should be able to type in a query, click a search button, and be taken to the Google Image search results for that page.  
* **Query Advanced.** On the Google Advanced Search page, the user should be able to provide input for the following four fields (taken from Google’s own advanced search options)  
   * Find pages with… “all these words:”  
   * Find pages with… “this exact word or phrase:”  
   * Find pages with… “any of these words:”  
   * Find pages with… “none of these words:”  
* **Appearance.** Like Google’s own Advanced Search page, the four options should be stacked vertically, and all of the text fields should be left aligned.
Consistent with Google’s own CSS, the “Advanced Search” button should be blue with white text. When the “Advanced Search” button is clicked, the user should be taken to search results page for their given query.  
* **Lucky**. Add an “I’m Feeling Lucky” button to the main Google Search page. Consistent with Google’s own behavior, clicking this link should take users directly to the first Google search result for the query, bypassing the normal results page.
Aesthetics. The CSS you write should match Google’s own aesthetics as best as possible.  









   
