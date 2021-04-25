# Plugins

This theme supports a couple of different plugins. Each plugin will provide advance features for the theme.

> More plugins will be added in the near future!

## Multiple Authors

This plugin supports multi-author, this feature is designed for multi-author blogs or communities.

The concept is like this, as the default author, there is no need to write the author over and over in every post's markdown file. Therefore, in the [site configure](/guide/configuration.html#site-configs), there is an author property to set the default blog author. Once that is set, all your posts will inherit the default author, unless specified.

To setup different author for each article. There are two ways to setup authors for an article.

> - Since [`v1.2.x`](https://github.com/auroral-ui/hexo-theme-aurora/releases/tag/v1.2.0) author supports more properties.
> - Since `v1.4.3` multi-author also supports**custom social links**.

:::tip
Multi-author also supports **custom social links**，inside `author`'s `socials` property you can add a `customs` configuration. For full documentation on how to setup `custom` property, please refer to the [custom social link](/guide/social.html#custom-social-links) part of the document.
:::

**Method 1** - Configure the `author` attribute in the **Front-Meta** in the article's markdown file.

```markdown:no-line-numbers
---
title: Article Title
date: 2020-08-15 18:49:36
tags:
  - Tag
categories:
  - Cate
cover: https://cover.png
author:
  name: TriDiamond
  link: https://tridiamond.tech
  avatar: https://avatar.png
  description: 'Think like an artist, code like an artisan.'
  socials:
    github: https://github.com/tridiamond
---
```

---

**Method 2** - Pre-configure a list of authors for the blog, then use the pre-configured `author key` in the article `author` property.

- First you need to pre-configure a list of authors in the theme config file, which is at `_config.aurora.yml`.

```yaml:no-line-numbers
authors:
  author-1:
    name: TriDiamond
    link: https://tridiamond.tech
    avatar: https://avatar.png
    description: 'Think like an artist, code like an artisan.'
    socials:
      github: https://github.com/tridiamond
  author-2:
    name: Jerry
    avatar: https://Jerry.png
    link: https://github.com/TriDiamond
    description: 'I am Jerry, how are you?'
    socials:
      github: https://github.com/Jerry
```

- Then you can use the author `keys` in the theme config to set the author in the article **Front-Meta**.

```markdown:no-line-numbers
---
title: Article Title
date: 2020-08-15 18:49:36
tags:
  - Tag
categories:
  - Cate
cover: https://cover.png
author: author-1
---
```

:::tip
If no `author` attribute is set for an post, the default author of the blog will be used.
:::

## Comments

This theme currently supports two different comment plugins. You can use the `enable` attribute to turn on one of the following comment plugin.

:::tip
If you turned `on` both comment plugins, **Gitalk** will be used over **Valine**.
:::

### Gitalk

Config attributes:

|      Attributes       | Description                                                                                                                                                                                                                     |
| :-------------------: | :------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
|       `enable`        | **true** to enable, **false** to disable.                                                                                                                                                                                       |
|     `autoExpand`      | If set to **true**, the comment will expand out automatically.                                                                                                                                                                  |
|      `clientID`       | **clientID** is provided by your Github OauthAPP                                                                                                                                                                                |
|    `clientSecret`     | **clientSecret** is provided by your Github OauthAPP                                                                                                                                                                            |
|        `repo`         | Repository name, eg: https://github.com/Aurora/**hexo-theme-Aurora-docs**, repo is `hexo-theme-Aurora-docs`                                                                                                                     |
|        `owner`        | Repository's owner's name. eg: `Aurora`                                                                                                                                                                                         |
|        `admin`        | Repository's admins' names. This can fill in multiple admin names.                                                                                                                                                              |
|         `id`          | **Ensure uniqueness and length less than 50**. If you are using 'pathname' ensure length is less than 50 characters or use 'uid' instead for better compatibility (If you use other theme before, this will lost your comments) |
|      `language`       | Can be `en ` for English or `cn` for Chinese.                                                                                                                                                                                   |
| `distractionFreeMode` | Facebook-like distraction, `true` to turn on, `false` to turn off.                                                                                                                                                              |
|    `recentComment`    | To enable recent comment feature.                                                                                                                                                                                               |
|        `proxy`        | GitHub oauth request reverse proxy for CORS.                                                                                                                                                                                    |

For more usage information, go to [Gitalk's](https://github.com/gitalk/gitalk) repo.

### Valine

Config attributes:

|   Attributes    | Description                                                                             |
| :-------------: | :-------------------------------------------------------------------------------------- |
|    `enable`     | **true** to enable, **false** to disable.                                               |
|    `app_id`     | Application `app_id` from Leancloud.                                                    |
|    `app_key`    | Application `app_key` from Leancloud.                                                   |
|    `avatar`     | See the [Avatar setting](https://valine.js.org/en/avatar.html) for more details.        |
|  `placeholder`  | Comment box placeholders.                                                               |
|    `visitor`    | Article reading statistics.                                                             |
|     `lang`      | If you need a custom language, please refer to [i18n](https://valine.js.org/i18n.html). |
|     `meta`      | Reviewer attributes. `['nick','mail','link']`                                           |
|     `admin`     | Used to define which comment is posted by author of the blog.                           |
| `recentComment` | To enable recent comment feature.                                                       |

For more usage information, go to [Valine's](https://valine.js.org/) documentation website.

## Bot Dia

![](https://img-blog.csdnimg.cn/2021041520261017.gif)

> `Dia` is available since version 1.4.0

This cute little fellow will be hanging around with your readers as they visit your site.

Dia will react to `certain actions` that your readers actions and help you reader go around your blog.

But that's not the only thing that Dia can do. Dia will also give your reader a `daily "quote"`, `holiday greeting` and `random messages` to give your visitor unexpected surprises.

### Bot Configuration

There are tons of configuration for our `Dia`.

Dia has default talk system installed, you can simply just turn on the bot using the `enable` property and change the language using `locale` property.

A simple configuration would be like this:

```yaml
# Enable Aurora Bot Dia
aurora_bot:
  # ======================================================
  # Set to true to turn on your lovely cute bot.
  # ======================================================
  enable: true
  # ======================================================
  # The bot comes with two languages support
  # -- en: for English
  # -- cn: for Chinese
  # ======================================================
  locale: en
  # ======================================================
  # Currently only support using Dia, will support live2d in the future.
  # ======================================================
  bot_type: dia
```

However if you want to completely change the talk system's content, you can do that too in your `_config.aurora.yml` config file.

Change your `Dia`'s configuration like the following:

```yaml:no-line-numbers
# Enable Aurora Bot Dia
aurora_bot:
  # ======================================================
  # Set to true to turn on your lovely cute bot.
  # ======================================================
  enable: true

  # ======================================================
  # The bot comes with two languages support
  # -- en: for English
  # -- cn: for Chinese
  # ======================================================
  locale: en

  # ======================================================
  # Currently only support using Dia, will support live2d in the future.
  # ======================================================
  bot_type: dia

  # This tips are used to react to user interactions
  tips:
    # ======================================================
    # These are random messages that Dia will say every 30 seconds.
    # ======================================================
    messages:
      - Hi, I am <span>Dia</span>, I am here to help you~
      - Long time no see, time passes with the blink of the eyes...
      - Hi～ Come play with me！
      - '*Hammer your chest with my kitty fist*'
      # This is a special function which will trigger the quotes API
      # and Dia will say out the daily quote message.
      - showQuote

    # ======================================================
    # This will trigger when user open the browser console.
    # ======================================================
    console: LOL, you opened the console, want to find out my little secrets?

    # ======================================================
    # This will trigger when user copy things off your blog.
    # ======================================================
    copy: What have you copied? Remember to add the source when using it!

    # ======================================================
    # This will trigger when user come back to the window.
    # ======================================================
    visibility_change: Welcome back my friend!~

    # ======================================================
    # Welcome messages, the number is the time of the day.
    # -----------------------------------
    # eg: 24 = 00:00 which is midnight
    # eg: 17-19 = during 5pm to 7pm
    # -----------------------------------
    # During this time of the day, Dia will greet your readers
    # with the corresponding message.
    # ======================================================
    welcome:
      '24': Are you a night owl? Will you able get up tomorrow?
      '5_7':
        Good morning! The plan for a day lies in the morning, and a beautiful day
        is about to begin.
      '7_11': Good morning! How is your day doing? don't sit for too long!
      '11_13': It's noon, Must have being working all morning, and it's lunch time!
      '13_17': It's easy to get sleepy in the afternoon. Have a cup of coffee maybe?
      '17_19': It's evening! The sunset outside the window is beautiful.
      '19_21': Good evening, how are you doing today?
      '21_23':
        - It's getting late, rest early, good night~
        - Take good care of your eyes!

    # ======================================================
    # This is used when your user come from a Search Engine.
    # ======================================================
    referrer:
      # User came from your own site.
      self: Welcome to <span>「[PLACEHOLDER]」</span>
      # User came from Baidu search engine.
      baidu:
        Hello！Friend from Baidu search engine,<br>did you search <span>「[PLACEHOLDER]」</span>
        to find me？
      # User came from 360 search engine.
      so:
        Hello！Friend from 360 search engine,<br>did you search <span>「[PLACEHOLDER]」</span>
        to find me？
      # User came from Google search engine.
      google: Hello！Friend from Google search engine,<br>enjoy your time reading <span>「[PLACEHOLDER]」</span>
      # User came from another website.
      site: Hello there, friend from <span>[PLACEHOLDER]</span>
      # For any other source.
      other: Thanks for reading <span>「[PLACEHOLDER]」</span>

    # ======================================================
    # When your `mouse hover` on to certain HTML tag, Dia will
    # give your user a message to help them out.
    # ------------------------------------------------------
    # selector: tag selector (you can use any css selector for this)
    # text: this is the message(s) that Dia will say. (If you want
    #       Dia to say a random one from a set of messages, set it with
    #       array, else just plain text)
    # ======================================================
    mouseover:
      # Hover on Dia
      - selector: '#Aurora-Dia'
        text:
          - Waaaaaaaa...What are you <span>doing</span>? O.O
          - Please be gentle, I am very delicate! O.O
          - '<span>Sir yes sir!</span> What can I help you with? O.O'
      # Hover on home menu
      - selector: "[data-menu='Home']"
        text:
          - 'Click to go to the <span>home page</span>. '
          - Yes, click here to go <span>back home</span>.
          - Go take a look at the <span>home page</span>.
      # Hover on about menu
      - selector: "[data-menu='About']"
        text:
          - You want to know more about my <span>master</span>?
          - Here hides all the <span>secrets of my master</span>, want to take a look?
          - Found my master's <span>secret hideout</span>!
      # Hover on archives menu
      - selector: "[data-menu='Archives']"
        text:
          - Here stores all the <span>works</span> my master had done！
          - Wanna see my master's <span>library?</span>
          - Yes, my masters' <span>ancient histories</span> are all here!
      # Hover on tags menu
      - selector: "[data-menu='Tags']"
        text:
          - Click here to look at <span>article tags</span>.
          - Tags are used to better <span>categorize</span> your articles.
      # Hover on language menu
      - selector: "[data-dia='language']"
        text: Master's blog supports multiple <span>languages.</span>
      # Hover on light and dark switch
      - selector: "[data-dia='light-switch']"
        text:
          You can switch between <span>light</span> and <span>dark</span> mode, click
          the switch to see the magic!
      # Hover on author profile
      - selector: "[data-dia='author']"
        text:
          - Here is a short profile of my master.
          - Click any of these links can teleport to my master's other worlds.
      # Hover on jump to comment menu in article page.
      - selector: "[data-dia='jump-to-comment']"
        text:
          - Do you want to check out the comments?
          - Click here will help you jump right into the comments section.

    # ======================================================
    # When your `mouse on click` for certain HTML tag, Dia will
    # give your user a message to help them out.
    # ------------------------------------------------------
    # Properties is same as `moveover` event
    # ======================================================
    click:
      # Click on search button.
      - selector: "[data-dia='search']"
        text:
          - Didn't find what you are looking for? Try search it here!
          - You can also use <span>ctrl/cmd + k</span> keyboard shortcut to open the search
            menu.
      # Click on article header link.
      - selector: "[data-dia='article-link']"
        text:
          - Enjoy reading:<span>「{text}」</span>.
          - That's a good pick, enjoy time reading this article.
          - Hope you can learn something from:<span>「{text}」</span>.
      # Click on Gitalk comment
      - selector: '.gt-header-textarea'
        text:
          - Wanna write something?
          - Be sure write your comment carefully meow~
          - Anything you want to say to the author?
          - If you think the article is good, leave a message for the author.
      # Click on Valine comment
      - selector: '.veditor'
        text:
          - Wanna write something?
          - Be sure write your comment carefully meow~
          - Anything you want to say to the author?
          - If you think the article is good, leave a message for the author.

    # ======================================================
    # During certain special date Dia will greet your readers.
    # ------------------------------------------------------
    # date: date of the special event (format: month/day or month/day - month/day)
    # text:
    #   --- Single text just use a simple string.
    #   --- Random set of message, use array config format.
    # ======================================================
    events:
      - date: 01/01
        text: '<span>Happy new year</span>，{year}～'
      - date: 02/14
        text: It's <span>Valentine's Day</span>，have you found your loved one in {year}?
      - date: 03/08
        text: Today is <span>International Women's Day</span>！
      - date: 04/01
        text:
          Tell you a secret, don't trust anyone today, because today is <span>April
          Fool</span>
      - date: 05/01
        text: Today is <span>International Labour Day</span>，have you planned to go travel?
      - date: 12/20-12/30
        text:
          These few days is <span>Christmas</span>，my master must being shopping like
          crazy!
      - date: 12/31
        text:
          Today is <span>New Year's Eve</span>, this year is going away, but next year
          is going to be better!
```
