# Markdown

## Font-Meta

Aurora theme has it's own custom Front-Meta properties, they are used to configure specific feature of the theme.

### Feature property

```markdown:no-line-numbers
---
feature: true
---
```

This `feature` property will allow the Aurora's engine to find these articles and add them into the feature list or pinned list. Which are used by the [Feature Layout](/guide/theme.html#feature-layout) or [Pinned Layout](/guide/theme.html#pinned-layout).

### Abstracts property

```markdown:no-line-numbers
---
abstracts: A abstracts of what this article is about.
---
```

By default the article's description use the first 140 characters from the content of the article.

This `abstracts` property will tell the Aurora's engine what to use as the description of an article. Which is used in the Home page under each article's title. Can set a `abstract` for each of your articles.

## Custom Containers

All the custom containers use this format:

```markdown:no-line-numbers
:::[type] [title]
Text content
:::
```

- `type` is the type of the container.
- `title` is optional, can use to rename the title of the container.

### Tip Container

```markdown:no-line-numbers
:::tip
Normal Tips Container
:::
```

If you do not want to use the default title `TIP`, you can rename your container title by using this:

```markdown:no-line-numbers
:::tip Custom header

Custom header

- tips content
- tips new line

:::
```

### Warning Container

```markdown:no-line-numbers
:::warning
Warning!!!
:::
```

### Danger Container

```markdown:no-line-numbers
:::danger
Danger!!!
:::
```

### Details Container

This is a special type of container. If you have seem the detail container in GitHub, you could probably guess what it's function is.

Yes you can hide certain content and click to expand it.

````markdown:no-line-numbers
:::details Click to see more

Fusce rutrum venenatis eros in hendrerit. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Nullam eget risus egestas, aliquet ipsum sed, volutpat tortor. Proin finibus tortor ac mauris finibus rutrum. Nullam tincidunt arcu eu urna ullamcorper, eu ultricies turpis ornare. Morbi id sollicitudin orci. Proin lobortis vehicula nibh a ornare. Cras sodales eu ligula quis fermentum. Proin eu ultrices leo, quis iaculis justo. Sed dictum, nulla sit amet imperdiet commodo, libero sapien semper justo, ut lobortis elit nunc vitae ante. Nullam lobortis odio quam, ac condimentum elit posuere vitae. Sed ornare, odio et rutrum varius, lorem eros gravida urna, in pharetra sapien justo non magna.

- details content
- details new line

```javascript
console.log('hello world')
```

:::
````

:::tip PREVIEW

Check the preview of all these custom container in my [blog](https://blog.bennyxguo.com/post/b695af22372019b5213d1466cd06b4ba).

:::
