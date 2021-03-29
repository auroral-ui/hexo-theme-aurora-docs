# Introduction

Aurora is the next generation of [hexo-theme-obsidian](https://github.com/TriDiamond/hexo-theme-obsidian) and its UI and features have been completely rewritten.

## Compare to Obsidian

The main significant difference between Obsidian and Aurora, is that Aurora is base on Vue3, which means its performance and user interactions are much better than Obsidian.

Obsidian uses vanilla JavaScript and JQuery to support most of the user interaction and blog features. Of course, I am not saying using vanilla JavaScript and JQuery cannot build a fast and high-quality blog application. It's just using Vue is much more enjoyable for the developer and even more for the readers or viewers.

Why? Because using Vue, we could turn our blog into a Single Page Application (SPA), therefore users will notice fewer distractions during page to page hopping. For an article-reading blog site, SPA is best for this kind of purpose.

## Why vue3?

Many asked me that: "Why use Vue3 with Hexo, why not just use the default EJS template system with vuejs."

Of course, I could add in vuejs with the support of the default ejs template system. Honestly, it wasn't easy making the blog fully customizable using fully restful APIs. It could have been much easier with EJS templates.

But in the modern frontend development trend, most web applications had switch to frameworks like Vue, React or Angular, because they are much easier and quicker for development. With the support of SPA for these frameworks, it would improve the user accessibility and interactions of the application.

Thinking through the pros and cons, I had decided to use Vue3 as the framework for developing Aurora.
