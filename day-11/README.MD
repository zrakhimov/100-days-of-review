   
  
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

Navigate to https://www.google.com/, type in a query like “Harvard” into the search field, and click the “Google Search” button.  

As you probably expected, you should see Google search results for “Harvard.” But now, take a look at the URL. It should begin with https://www.google.com/search, the route on Google’s website that allows for searching. But following the route is a ?, followed by some additional information.  

Those additional pieces of information in the URL are known as a query string. The query string consists of a sequence of GET parameters, where each parameter has a name and a value. Query strings are generally formatted as:

```
field1=value1&field2=value2&field3=value3...

```
   
### :uzbekistan: 

Oldingi video-darslarimizda HTML orqali <input> va <form> elementlarini yaratishni ko’rib chiqdik. Lekin forma orqali olingan informatsiyani qanday qilib web server da qabul qilib olishni o’tkanimiz yo’q. Shuning uchun, bu loyihada faqat front-end ni yaratib, informatsiya oldi berdisini google ni o’zining serveridan foydalanib turamiz.  

Google-da qidiruvni amalga oshirayotganda, masalan, Google-ning bosh sahifasida so'rovni yozib, "Google Search" tugmachasini bosganingizda, bu so'rov qanday ishlaydi? Keling, buni bilib olishga harakat qilaylik.  

https://www.google.com/ saytiga o'ting, qidiruvga "javascript" kabi so'rovni kiriting va "Google Search" tugmasini bosing.  

Ehtimol siz kutganingizdek, Google-da "javascript" uchun qidiruv natijalarini ko'rishingiz kerak. Ammo endi URL manzilini ko'rib chiqing. U https://www.google.com/search bilan boshlanishi kerak, bu Google veb-saytidagi qidiruvga imkon beruvchi **route/marshrut/yo’nalish**. Undan keyin `?` belgisi va qo’shimcha informatsiya beriladi. Shu so’roq belgisidan keyingi qo’shimcha informatsiya `query string` (so’rovlar qatori) deyiladi. So'rovlar qatori GET parametrlari ketma-ketligidan iborat bo'lib, bu yerda har bir parametrning nomi va qiymati mavjud. So'rov satrlari odatda quyidagicha formatlanadi:

```
   parametr1=qiymat1&parametr2=qiymat2&parametr3=qiymat3...
```

   
