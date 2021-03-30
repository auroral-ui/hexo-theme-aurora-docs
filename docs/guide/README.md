# Introduction

My very first theme is [hexo-theme-obsidian](https://github.com/TriDiamond/hexo-theme-obsidian) which got quite a bit of attention. A lot of bloggers loved this theme, but later on the theme gets a bit hard to maintain due to the fact that it's not using a framework like Vue or React.

Ever since than, I start to think about refactoring that theme using Vue, and that's when I started my journey of using Vue to build a Hexo theme.

As I was refactoring Obsidian, I figure some of the user interface isn't as fine tuned as it should be, and as I notice the "Aurora UI" trend in UI designs. (Know as the trend of using gradient colors for UI elements.), at the end I decided to make a brand new theme using the popular UI design elements.

**Aurora is a next generation theme using Aurora colours and UI elements. It give you the feel of smooth flow of colours and a futuristic feeling.**

## Compare to Obsidian

The main significant difference between Obsidian and Aurora, is that Aurora is base on Vue3, which means its performance and user interactions are much better than Obsidian.

Obsidian uses vanilla JavaScript and JQuery to support most of the user interaction and blog features. Of course, I am not saying using vanilla JavaScript and JQuery cannot build a fast and high-quality blog application. It's just using Vue is much more enjoyable for the developer and even more for the readers or viewers.

Why? Because using Vue, we could turn our blog into a Single Page Application (SPA), therefore users will notice fewer distractions during page to page hopping. For an article-reading blog site, SPA is best for this kind of purpose.

## Why vue3?

Many asked me that: "Why use Vue3 with Hexo, why not just use the default EJS template system with vuejs."

Of course, I could add in vuejs with the support of the default ejs template system. Honestly, it wasn't easy making the blog fully customizable using fully restful APIs. It could have been much easier with EJS templates.

But in the modern frontend development trend, most web applications had switch to frameworks like Vue, React or Angular, because they are much easier and quicker for development. With the support of SPA for these frameworks, it would improve the user accessibility and interactions of the application.

Thinking through the pros and cons, I had decided to use Vue3 as the framework for developing Aurora.
