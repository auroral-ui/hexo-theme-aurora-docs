# Introduction

ObsidiaNext is the next generation of [hexo-theme-obsidian](https://github.com/TriDiamond/hexo-theme-obsidian) and its UI and features have been completely rewritten.

## Compare to Obsidian

The main significant difference between Obsidian and ObsidiaNext, is that ObsidiaNext is base on Vue3, which means its performance and user interactions are much better than Obsidian.

Obsidian uses vanilla JavaScript and JQuery to support most of the user interaction and blog features. Of course, I am not saying using vanilla JavaScript and JQuery cannot build a fast and high-quality blog application. It's just using Vue is much more enjoyable for the developer and even more for the readers or viewers.

Why? Because using Vue, we could turn our blog into a Single Page Application (SPA), therefore users will notice fewer distractions during page to page hopping. For an article-reading blog site, SPA is best for this kind of purpose.

## Why vue3?

Many asked me that: "Why use Vue3 with Hexo, why not just use the default EJS template system with vuejs."

Of course, I could add in vuejs with the support of the default ejs template system. Honestly, it wasn't easy making the blog fully customizable using fully restful APIs. It could have been much easier with EJS templates.

But in the modern frontend development trend, most web applications had switch to frameworks like Vue, React or Angular, because they are much easier and quicker for development. With the support of SPA for these frameworks, it would improve the user accessibility and interactions of the application.

Thinking through the pros and cons, I had decided to use Vue3 as the framework for developing ObsidiaNext.

## What is new in ObsidiaNext

The main focus of ObsidiaNext, is to include all the main features in Obsidian and also the features that were requested in the issues for a long time.

The first few versions will focus on the main features in Obsidian. The other focus is the new design for the whole blog, which includes modern web design ideas to make ObsidiaNext a more up-to-date theme.

Lets us take a look at the feature list and plans for ObsidiaNext:

### 🎨 THEME

- <span class="tag new-tag">NEW</span> Light and dark theme support.
- Modern magazine grid layout.
- Modern gradient colour styles, adding more rich colours into the theme.

### ⭐️ FEATURES

- <span class="tag new-tag">NEW</span> `Featured section` - can add a feature meta to any post, those will be pinned into the feature section on the home page.
- <span class="tag new-tag">NEW</span> `Instant multi-language support` - can dynamically switch the language of the main texts in the application.
- <span class="tag wip-tag">WIP</span> `Custom pages` - can add any custom pages, need to use `customized menu` to display in the menu.
- <span class="tag wip-tag">WIP</span> `Page navbar` - can setup a sidebar on specific page, act as the sub menu of the page.
- <span class="tag wip-tag">WIP</span> `Latest comments` - added a widget showing the latest comments, supported using `gitalk` or `valine`.

### 🛠 CUSTOMIZATION

- <span class="tag new-tag">NEW</span> `Config Beian` - his feature is especially for China users, for those that need to put Beian info at the footer of the blog.
- <span class="tag new-tag">NEW</span> `Customizable menu` - can customize your menu with internal links, external links, custom pages.

<style>
  .tag {
    display: inline-block;
    color: white;
    padding: 0 0.5rem;
    border-radius: 4px;
    font-weight: 700;
    font-size: 0.8rem;
  }
  .new-tag {
    background: linear-gradient(
      130deg,
      rgb(36, 198, 220),
      rgb(84, 51, 255) 41.07%,
      rgb(255, 0, 153) 76.05%
    );
  }
  .wip-tag {
    background: linear-gradient(
      130deg,
      #23074d,
      #cc5333 76.05%
    )
  }
</style>
