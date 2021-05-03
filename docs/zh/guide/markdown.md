# Markdown

**更新记录**

> - 版本 `1.5.0+`
>   - Aurora 添加了 markdown [自定义容器](/zh/guide/markdown.html#custom-containers).
>   - Font-Meta 中的`Feature`属性会影响在置顶模式下的置顶状态

---

## Font-Meta

Aurora 主题有它自己的自定义前置元属性，他们是用来配置特定的功能。

### Feature 属性

```markdown:no-line-numbers
---
feature: true
---
```

这个`feature`属性将允许 Aurora 引擎找到这些文章，并将它们添加到推荐列表或置顶列表数据中。使用[推荐布局模式](/zh/guide/theme.html#推荐布局模式)或[置顶布局模式](/zh/guide/theme.html#置顶布局模式)。

---

## 自定义容器

所有的自定义容器都使用这种格式:

```markdown:no-line-numbers
:::[type] [title]
文本内容
:::
```

- `type` 是容器的类型
- `title` 是可选的，可以用来重命名容器的标题

### Tip 容器

```markdown:no-line-numbers
:::tip
Normal Tips Container
:::
```

![](/images/screenshots/tip.png)

如果你不想使用默认的标题`TIP`，你可以使用以下方法重命名你的容器标题:

```markdown:no-line-numbers
:::tip Custom header

Custom header

- tips content
- tips new line

:::
```

![](/images/screenshots/tip-rename.png)

### Warning 容器

```markdown:no-line-numbers
:::warning
Warning!!!
:::
```

![](/images/screenshots/warning.png)

### Danger 容器

```markdown:no-line-numbers
:::danger
Danger!!!
:::
```

![](/images/screenshots/danger.png)

### Details 容器

这是一种特殊类型的容器。如果你看过 GitHub 中的 `details` 容器，你可能会猜出它的功能是什么。

是的，您可以隐藏某些内容，并单击来展开它。

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

**关闭状态:**

![](/images/screenshots/detail.png)

**展开状态:**

![](/images/screenshots/detail-opened.png)
