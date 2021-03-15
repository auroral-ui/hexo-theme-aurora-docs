# Configuration

## Config File

There are two different configuration files, one is for **Hexo itself** and one for **the theme**.

- [Hexo configuration](https://hexo.io/docs/configuration.html) file is in the **root of Hexo project folder**
- Hexo theme configuration file is in the **root of the theme folder**

```shell:no-line-numbers{2,5}
. # Hexo project root.
├─ _config.yml # Hexo config file.
└─ themes
   └─ obsidianext # theme folder.
      └─ _config.yml # theme config file.
```

:::tip
Most feature of the theme is configured using the theme config, except for those that require Hexo plugin's support.
:::

## Site Configs

The main settings of the blog is configured with the `site` config, it can be used to configure the **main information and settings** of your blog.

The `site` config has the following options:

|     Options      | Accepted Types | Usages                                                                                                   |
| :--------------: | :------------: | -------------------------------------------------------------------------------------------------------- |
|    `subtitle`    |     String     | Blog title, will be displayed after the current page title.                                              |
|     `author`     |     String     | Author of the blog, will be displayed in the **top header logo area**, also in the **profile widget**.   |
|      `nick`      |     String     | Sub header for the author, will be displayed below the author name in the logo area.                     |
|  `description`   |     String     | Used in the profile section, a few sentences to describe what you do or who you are. (Support HTML tags) |
|    `language`    |     en, cn     | Setting the default locale of your blog.                                                                 |
| `multi_language` |  true, false   | Enabling the blog to have multi-language switching ability.                                              |
|      `logo`      |     String     | Link to your logo image.                                                                                 |
|     `avatar`     |     String     | Link to your avatar image.                                                                               |
|     `beian`      |     String     | China website BeiAn information.                                                                         |

:::tip
If you did not set an `avatar` url, the logo's url will be used instead.
:::

Site config demo:

```yaml
# Site Config
site:
  subtitle: TriDiamond's Blog
  author: TriDiamond
  nick: Frontend
  description: Seeking to deliver efficient and high quality programs. <br/> Senior Frontend Engineer
  language: en
  multi_language: true
  logo: https://image-website.com/path-to-image.jpg
  avatar: https://image-website.com/path-to-image.jpg
  beian: ''
```
