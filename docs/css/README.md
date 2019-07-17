---
sidebarDepth: 4
pageClass: custom-code-highlight
---

# CSS总结

## 一、CSS

### 1. CSS3新特性有哪些？

- 新增选择器     p:nth-child(n){color: rgba(255, 0, 0, 0.75)}
- 弹性盒模型     display: flex;
- 多列布局       column-count: 5;
- 媒体查询       @media (max-width: 480px) {.box: {column-count: 1;}}
- 个性化字体     @font-face{font-family: BorderWeb; src:url(BORDERW0.eot);}
- 颜色透明度     color: rgba(255, 0, 0, 0.75);
- 圆角           border-radius: 5px;
- 渐变           background:linear-gradient(red, green, blue);
- 阴影           box-shadow:3px 3px 3px rgba(0, 64, 128, 0.3);
- 倒影           box-reflect: below 2px;
- 文字装饰       text-stroke-color: red;
- 文字溢出       text-overflow:ellipsis;
- 背景效果       background-size: 100px 100px;
- 边框效果       border-image:url(bt_blue.png) 0 10;
- 转换
  - 旋转          transform: rotate(20deg);
  - 倾斜          transform: skew(150deg, -10deg);
  - 位移          transform: translate(20px, 20px);
  - 缩放          transform: scale(.5);
- 平滑过渡       transition: all .3s ease-in .1s;
- 动画           @keyframes anim-1 {50% {border-radius: 50%;}} animation: anim-1 1s;

### 2. CSS不同选择器的权重(CSS层叠的规则)

- `！important`规则最重要，大于其它规则
- 行内样式规则，加`1000`
- 对于选择器中给定的各个`ID`属性值，加`100`
- 对于选择器中给定的各个类属性、属性选择器或者伪类选择器，加`10`
- 对于选择其中给定的各个元素标签选择器，加1
- 如果权值一样，则按照样式规则的先后顺序来应用，顺序靠后的覆盖靠前的规则

### 3. display: none; 与 visibility: hidden; 的区别

- 联系：它们都能让元素不可见
- 区别：
  - `display:none`;会让元素完全从渲染树中消失，渲染的时候不占据任何空间；`visibility: hidden`;不会让元素从渲染树消失，渲染师元素继续占据空间，只是内容不可见
  - `display: none`;是非继承属性，子孙节点消失由于元素从渲染树消失造成，通过修改子孙节点属性无法显示；`visibility:hidden`;是继承属性，子孙节点消失由于继承了`hidden`，通过设置`visibility: visible`;可以让子孙节点显式
  - 修改常规流中元素的`display`通常会造成文档重排。修改`visibility`属性只会造成本元素的重绘
  - 读屏器不会读取`display: none;`元素内容；会读取`visibility: hidden`元素内容。

### 4. 引入CSS时，link与@import的区别？

- `link` 是`HTML`方式， `@import` 是`CSS`方式
- `link `最大限度支持并行下载，` @import` 过多嵌套导致串行下载，出现FOUC( Flash Of Unstyled Content 文档样式闪烁)
- `link` 可以通过 `rel="alternate stylesheet"` 指定候选样式
- 浏览器对 `link` 支持早于` @import` ，可以使用 `@import` 对老浏览器隐藏样式
- `@import` 必须在样式规则之前，可以在`css`文件中引用其他文件
- 总体来说：`link`优于`@import`

### 5. 什么是 FOUC(Flash of Unstyled Content)？如何来避免FOUC？
  
- 当使用 @import 导入 CSS 时，会导致某些页面在 IE 出现奇怪的现象：没有样式的页面内容显示瞬间闪烁，这种现象称为“文档样式短暂失效”，简称为FOUC
- 产生原因：当样式表晚于结构性html加载时，加载到此样式表时，页面将停止之前的渲染。
- 等待此样式表被下载和解析后，再重新渲染页面，期间导致短暂的花屏现象。
- 解决方法：使用 link 标签将样式表放在文档 head。

### 6. 解释下什么是浮动和它的工作原理？

- 非IE浏览器下，容器不设高度且子元素浮动时，容器高度不能被内容撑开。
此时，内容会溢出到容器外面而影响布局。这种现象被称为浮动（溢出）。
- 工作原理：
  - 浮动元素脱离文档流，不占据空间（引起“高度塌陷”现象）
  - 浮动元素碰到包含它的边框或者其他浮动元素的边框停留


### 7. 左边定宽，右边自适应方案有哪些？

- 一般使用float + margin 或者 float + calc 方案

```css
/* float + margin方案 */
.left {
  width: 200px;
  float: left;
}

.right {
  margin-left: 200px;
}

/* float + calc 方案 */
.left {
  width: 200px;
  float: left;  
}

.right {
  width: calc(100% - 200px);
  float: left;
}

```

### 8. 左右两边定宽，中间自适应方案有哪些？

- 一般有float, float + calc, flex方案

```css
.wrap {
  width: 100%;
  height: 400px;
}

.warp > div {
  height: 100%;
}

/* float方案 */
.left {
  width: 200px;
  float: left;
}

.right {
  width: 200px;
  float: right;
}

.center {
  margin: 0 120px;
}

/* float + calc 方案 */
.left {
  width: 200px;
  float: left;
}

.right {
  width: 200px;
  float: right;
}

.center {
 width: calc(100% - 400px);
 margin-left: 200px;
}

/* flex 方案 */
.wrap {
  display: flex;
}

.left {
  width: 200px;
}

.right {
  width: 200px;
}

.center {
  flex: 1;
}
```

### 9. 元素水平居中的几种方式？

- 对于行内元素: 

```css
.span {
  text-align: center
}
```

- 对于确定宽度的块状元素: 
  - 1. margin和width实现水平居中,  `margin-left: auto; margin-right: auto`, 左右margin值设为auto
  ```css
  .wrap {
    width: 200px;
    margin-left: auto;
    margin-right: auto;
  }
  ```

  - 2. 绝对定位和margin-left: -(元素宽度值/2)
    - 固定宽度块级元素水平居中，通过使用绝对定位，以及设置元素margin-left为其宽度的一半

    ```css
    .wrap{
      width: 200px;
      position: absolute;
      left: 50%;
      margin-left: -100px; // 该元素宽度的一半，即100px
      background-color: red;
    }
    ```
  - 3. position:absolute + （left=0+top=0+right=0+bottom=0） + margin:auto

    ```css
    .wrap {
      width: 200px;
      position: absolute;
      top: 0;
      left: 0;
      bottom: 0;
      right: 0;
      margin: auto;
    }
    ```

- 对于未知宽度的块级元素

  - 1. table标签配合margin左右auto实现水平居中
    - 使用table标签（或直接将块级元素设值为display:table），再通过给该标签添加左右margin为auto
  
  - 2. inline-block实现水平居中方法
    - display：inline-block;（或display:inline）和text-align:center;实现水平居中

  - 3. 绝对定位实现水平居中

    ```css
    .wrap {
      position: absolute;
      left: 50%;
      transform: translateX(-50%);  /* 移动元素本身50% */
      background: red;
    }
    ```
  - 4. 相对定位实现水平居中
    - 用float或者display把父元素变成行内块状元素

    ```css
    .contentParent {
      display: inline-block; /* 把父元素转化为行内块状元素 */
      /*float: left; 把父元素转化为行内块状元素 */
      position: relative;
      left: 50%;
    }

    /*目标元素*/
    .content{
      position: relative;
      right: 50%;
      background-color: red;
    }
    ```
  - 5. CSS3的flex实现水平居中，方法一

     ```css
    .contentParent {
      display: flex;
      flex-direction: column;
    }

    /*目标元素*/
    .content{
      align-self: center;
    }
    ```

   - 6. CSS3的flex实现水平居中方法，法二

    ```css
    .contentParent{
      display: flex;
    }
    .content{
      margin: auto;
    }
    ```

   - 7. CSS3的fit-content配合左右margin为auto实现水平居中方法

    ```css
    .content{
      width: fit-content;
      margin-left: auto;
      margin-right: auto;
    }
    ```

### 10. 元素垂直居中的方式？

  - 1. 通过line-height实现CSS垂直居中
    - 设置子元素的line-height值等于父元素的height，这种方法适用于子元素为单行文本的情况
    ```css
    .contentParent{
      height: 100px;
      background: blue;
    }
    .content{
      height: 100px;
      line-height: 100px;
    }
    ```

  - 2. 通过verticle-align:middle实现CSS垂直居中
    - 通过vertical-align:middle实现CSS垂直居中是最常使用的方法，但是有一点需要格外注意，vertical生效的前提是元素的display：inline-block


  - 3. 通过display:flex实现CSS垂直居中
    - 通过display:flex实现CSS垂直居中的方法是给父元素display:flex;而子元素align-self:center;
    
    ```css
    .contentParent{
      display: flex;
    }
    .content{
      align-self: center;
    }
    ```

  - 4. 通过display:table-cell实现CSS垂直居中
    - 给父元素display:table，子元素display：table-cell的方式实现CSS垂直居中

    ```css
    .contentParent{
      display: table;
      width: 600px;
      height: 600px;
      background: blue;
    }
    .content{
      width: 50%;
      height: 50%;
      background: red;
      display: table-cell;
      vertical-align: middle;
    }
    ```

  - 5. 已知父元素高度通过transform实现CSS垂直居中
    - 给子元素的position:relative，再通过translateY即可定位到垂直居中的位置
    ```css
    .contentParent{
      width: 600px;
      height: 600px;
      background: blue;
    }
    .content{
      width: 50%;
      height: 50%;
      background: red;
      position: relative;
      top: 50%;
      transform: translateY(-50%);
    }
    ```


   - 6. 父元素高度不知道，同过transform实现，先给父元素相对定位，在给子元素绝对定位

     ```css
    .contentParent{
      width: 600px;
      background: blue;
      position: relative;
    }
    .content{
      widht: 50%;
      height: 50%;
      background: red;
      position: absolute;
      top: 50%;
      transform: translateY(-50%);
    }
    ```

    - 7. 通过伪元素:before实现CSS垂直居中
      - 具体方式是为父元素添加伪元素:before，使得子元素实现垂直居中

     ```css
    .contentParent{
      width: 600px;
      height: 600px;
      background: blue;
      display: block;
    }

    .contentParent:before {
      content: '';
      display: inline-block;
      vertical-align: middle;
      height: 100%;
    }
    .content{
      widht: 50%;
      height: 50%;
      background: red;
      display: inline-block;
      vertical-align: middle;
    }
    ```

### 11. 水平垂直居中的实现方式？

  - 已知高度和宽度的元素

    - 1. 设置父元素为相对定位，给子元素设置绝对定位，top: 0; right: 0; bottom: 0; left: 0; margin: auto;

    ```css
        .contentParent {
            width: 500px;
            height: 300px;
            background-color: blue;
            position: relative;
        }
    
        .content {
            width: 100px;
            height: 100px;
            background-color: green;
            position: absolute;
            top: 0;
            right: 0;
            bottom: 0;
            left: 0;
            margin: auto;
        }
    ```

    - 2. 设置父元素为相对定位，给子元素设置绝对定位，left: 50%; top: 50%; margin-left: --元素宽度的一半px; margin-top: --元素高度的一半px;
   
        ```css
        .contentParent {
            width: 500px;
            height: 300px;
            background-color: blue;
            position: relative;
        }
    
        .content {
            width: 100px;
            height: 100px;
            background-color: green;
            position: absolute;
            top: 50%;
            left: 50%;
            margin-top: -50px;
            margin-left: -50px;
        }
        ```

    - 3. 设置父元素为相对定位，给子元素设置绝对定位，设置top: calc(50% - 50px); left: calc(50% - 50px);
   
        ```css
        .contentParent {
            width: 500px;
            height: 300px;
            background-color: blue;
            position: relative;
        }
    
        .content {
            width: 100px;
            height: 100px;
            background-color: green;
            position: absolute;;
            top: calc(50% - 50px);
            left: calc(50% - 50px);
        }
        ```

  - 未知高度和宽度的元素 
    
    - 1. 设置父元素为相对定位，给子元素设置绝对定位，left: 50%; top: 50%; transform: translateX(-50%) translateY(-50%);

    ```css
        .contentParent {
          width: 500px;
          height: 300px;
          background-color: blue;
          position: relative;
        }
    
        .content {
            background-color: green;
            position: absolute;
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%);
        }
    ```
    - 2. 使用flex布局实现， 设置父元素为flex定位，justify-content: center; align-items: center;

    ```css
        .contentParent {
          width: 500px;
          height: 300px;
          background-color: blue;
          display: flex;
          justify-content: center;
          align-items: center;
        }
    
        .content {
            background-color: green;
        }
    ```
    





 
