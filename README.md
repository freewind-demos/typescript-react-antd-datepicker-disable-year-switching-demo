# TypeScript React Antd DatePicker 示例

这个示例展示了如何在 Antd DatePicker 中禁用年份切换按钮。

原本以为使用 
<DatePicker superPrevIcon={null} superNextIcon={null} />
即可，但实际使用时，发现按钮仍然存在，只是隐藏了图标。

用户仍然可以点击按钮区域来切换年份，因此需要通过 CSS 来完全隐藏按钮元素

## 关键知识点

1. 如何禁用 DatePicker 的年份切换按钮：
   - 使用 `popupClassName` 属性来为弹出面板添加样式
   - 通过 CSS 选择器隐藏按钮：`.ant-picker-header-super-prev-btn` 和 `.ant-picker-header-super-next-btn`

2. @emotion/css 的使用：
   - 使用 `css` 函数创建局部作用域的样式
   - 样式会自动添加前缀并保持局部作用域
   - 针对特定组件时不需要使用全局样式

3. 最佳实践：
   - 使用 `popupClassName` 而不是全局样式，避免影响其他 DatePicker 实例
   - 保持样式简洁，只针对需要修改的部分

```bash
npm install
npm start
```

执行后会自动在浏览器中打开页面。
