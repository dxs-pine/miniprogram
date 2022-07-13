# 基操

## 1-视图布局：页面结构语言 WXML



**概念介绍**

WXML 是小程序的标签语言 ，作用和 HTML 一样。

常用的标签（也称组件）如下：

- 容器类组件 `<view>`   => 相当于HTML的 `div`
- 内容类组件 `<text>`  =>  相当于HTML的 `span`
- 媒体类组件 `<image>` =>  相当于HTML的 `img`
- 导航类组件`<navigator>` =>  相当于HTML的 `a`
- 表单类组件 `<input>` 、`<button>`
- 轮播图组件 `<swiper>`

```jsx
<!-- url属性跳转页面, 最后一级路径不是logs.wxml! -->
<navigator url="/pages/logs/logs">跳转</navigator>
<!-- 默认没有边框! -->
<input type="text"/>
<input type="text" password/>

<button>按钮</button>
<button type="primary">按钮2</button>

<!-- 
  autoplay 自动轮播
  interval 设置多少毫秒切换
  circular 循环轮播
  indicator-dots 指示点
 -->
<swiper autoplay interval="1000" circular indicator-dots>
  <swiper-item>
    <image src="/assets/images/slide_1.jpg"></image>
  </swiper-item>
  <swiper-item>
    <image src="../../assets/images/slide_2.jpg"></image>
  </swiper-item>
  <swiper-item>
    <image src="/assets/images/slide_3.jpg"></image>
  </swiper-item>
  <swiper-item>
    <image src="/assets/images/slide_4.jpg"></image>
  </swiper-item>
  <swiper-item>
    <image src="/assets/images/slide_5.jpg"></image>
  </swiper-item>
</swiper>

```

## 2-视图布局：页面样式语言 WXSS

> 了解编写小程序页面样式的语言：WXSS



**概念介绍**

WXSS 是小程序的样式语言 ，它的功能和语法都和 CSS 非常类似。

主要区别是：

1. **WXSS 比 CSS 支持的选择器较少**

![image-20210220111756295](F:\前端\前端\就业班资料\就业班老师资料\预习资料\小程序\小程序(预习加密)\小程序(预习加密)\资料\day-01\01-讲义\微信小程序-基础.assets\image-20210220111756295.png)

2. **WXSS 比 CSS 多了一个长度单位 rpx**

- 使用 WXSS 为之前的轮播图示例按设计稿添加长宽样式

```css
swiper {
  width: 375px;
  height: 160px;
}

image {
  width: 100%;
  height: 100%;
}
```

## 3-屏幕适配

- rpx（responsive pixel）: 可以根据屏幕宽度进行自适应。规定屏幕宽为750rpx。如在 iPhone6 上，屏幕宽度为375px，共有750个物理像素，则750rpx = 375px = 750物理像素，1rpx = 0.5px = 1物理像素。

| 设备         | rpx换算px (屏幕宽度/750) | px换算rpx (750/屏幕宽度) |
| :----------- | :----------------------- | :----------------------- |
| iPhone5      | 1rpx = 0.42px            | 1px = 2.34rpx            |
| iPhone6      | 1rpx = 0.5px             | 1px = 2rpx               |
| iPhone6 Plus | 1rpx = 0.552px           | 1px = 1.81rpx            |

> **建议：** 开发微信小程序时设计师可以用 iPhone6 作为视觉稿的标准。
>
> **注意：** 在较小的屏幕上不可避免的会有一些毛刺，请在开发时尽量避免这种情况。

## 4-[全局配置](https://developers.weixin.qq.com/miniprogram/dev/reference/configuration/app.html)：设置页面路径

>  配置小程序中可以被访问的页面的路径



**操作步骤**

1. 在 app.json 中使用 pages 配置项，添加一个页面的路径

```json
{
  "pages": [
    "pages/index/index",
    "pages/logs/logs",
    "pages/test1/test1"
  ]
}
```

观察  pages 目录，会发现生成了 test1目录及 4 个文件



2. pages 数组中的第一个路径，**作为小程序的启动页**

```json
{
  "pages": [
	  "pages/test1/test1",
    "pages/index/index",
    "pages/logs/logs"
  ]
}
```



## 5-全局配置：设置顶部导航栏

> 通过配置，改变小程序顶部导航栏的外观



<img src="F:\前端\前端\就业班资料\就业班老师资料\预习资料\小程序\小程序(预习加密)\小程序(预习加密)\资料\day-01\01-讲义\微信小程序-基础.assets\image-20201121142601654.png" alt="image-20201121142601654" style="zoom:50%;" />



**操作步骤**

1. 在 app.json 中的 window 配置项下设置顶部导航栏的：背景色、标题文字、**标题颜色**(black,white)

```json
{
  "window": {
     "navigationBarBackgroundColor": "#262626",
     "navigationBarTitleText": "游乐园",
     "navigationBarTextStyle": "white"
  }
}
```

## 6-全局配置：下拉刷新和上拉加载

> 了解如何实现小程序中下拉刷新和上拉加载效果



**实现下拉刷新：**

1. 在 `app.json` 的 `window` 下配置 `"enablePullDownRefresh": true`

2. 在页面 JS 代码中，添加监听函数 `onPullDownRefresh()`

```js
onPullDownRefresh: function () {
  console.log('我被下拉了...,我要获取数据重新渲染页面了');
},
```





**实现上拉加载：**

1. 在 `app.json` 的 `window` 下配置 `"onReachBottomDistance": 200`   设置触底的距离

2. 在页面 JS 代码中，添加监听函数 `onReachBottom()`

```js
onReachBottom: function () {
  console.log('我离底部只有200距离啦,我要加载新内容啦');
},
```

```html
<!--pages/tab1/tab1.wxml-->
<text>pages/tab1/tab1.wxml</text>
<view style="width: 700rpx; height: 3000rpx; background: pink;">一个很高的盒子</view>
```

## 7-页面配置：针对某个页面的个性化配置

> 将之前示例中 “我的” 标签页的顶部导航栏，个性化配置成如下图所示的样子



<img src="F:\前端\前端\就业班资料\就业班老师资料\预习资料\小程序\小程序(预习加密)\小程序(预习加密)\资料\day-01\01-讲义\微信小程序-基础.assets\image-20201121142808974.png" alt="image-20201121142808974" style="zoom:50%;" />



**操作步骤**

在 “我的” 页面的 json 配置文件中，设置：

```json
{
  "navigationBarBackgroundColor": "#FECA49",
  "navigationBarTitleText": "我的",
  "navigationBarTextStyle": "white",
}
```

## 8-数据操作：数据绑定

> 将数据绑定到组件上，以便让它们渲染到页面



**概念介绍**

- 页面渲染相关的数据放在`Page({data: {}})` 中

- 页面模板中绑定要渲染的数据使用 `{{ }}`



**操作步骤**

1. 新增一个页面data, 在页面 js 中定义参与页面渲染的数据

```javascript
Page({
  data: {
    message: 'hello world',
    id: 'myid',
    myclass: 'myclass'
  }
})
```

2. 在页面 wxml 中使用 {{ }} 绑定数据

```xml
<view id="{{id}}" class="{{myclass}}">{{message}}</view>
```

## 9-数据操作：插值表达式详解

> 了解小程序插值表达式内支持和不支持的写法



**支持：**

- 数据属性，如：`{{ message }}` 

- 路径运算，如：`{{ list[0] }}`、`{{ obj.name }}` 
- 算术运算，如：`{{ num1 * num2 }}`
- 逻辑运算，如：`{{ a > b }}`
- 三元运算，如：`{{ a > b ? "大" :  "小" }}`
- 字符串连接，如：`{{ "hello," + name }}`



**不支持：**

- 函数调用，如： `{{ str.split(',') }}`、`{{ test1(str) }}`
- 完整语句，即含有js关键字的语句，如：`{{ var a = 1 }}`

## 10-数据操作：列表渲染

> 将数组数据渲染到页面上，显示成列表结构



**概念介绍**

列表渲染就是在页面的某个位置上，将一个数组数据遍历生成结构相同的一组界面元素。

<img src="F:\前端\前端\就业班资料\就业班老师资料\预习资料\小程序\小程序(预习加密)\小程序(预习加密)\资料\day-01\01-讲义\微信小程序-基础.assets\image-20201105150948569.png" alt="image-20201105150948569" style="zoom: 33%;" />

语法：

- `wx:for="{{数据}}"`  
- 默认由 `item` 和 `index` 两个变量来获取当前遍历的数据和索引



**操作步骤**

1. 准备一个数组数据

```js
Page({
  data: {
    list: ['三国演义', '红楼梦', '水浒传', '西游记']
  }
})
```



2. 在列表项上添加 `wx:for="{{ xxx }}"` ，以及使用 `item` 和 `index` 变量完成列表渲染

```xml
<view wx:for="{{list}}">{{index + 1}}---{{item}}</view>
```

## 11-数据操作：列表渲染 - 更改默认变量

> 修改列表渲染中的默认变量名 item 和 index



**概念介绍**

通过在含有 `wx:for` 的标签上添加 `wx:for-item="新元素变量名"` 和 `wx:for-index="新索引变量名"` 进行修改。



**操作步骤：**

```html
<view wx:for="{{list}}">{{index + 1}}---{{item}}</view>

<view wx:for="{{list}}" wx:for-item="book" wx:for-index="i">
  {{i + 1}}---{{book}}
</view>
```

## 12-数据操作：列表渲染 - 性能优化

> 为列表渲染的元素添加 wx:key 属性来提升渲染性能



**概念介绍**

当为列表元素设置 `wx:key` 属性值后，会在列表发生重新渲染时根据 `wx:key` 的值对新数组元素做唯一性鉴定，**判断是否可以复用现有组件实例**。



**wx:key 的合法值：**

- 数组元素是 `对象` 时：设为对象中代表唯一性的属性名，如 `wx:key="id"`
- 数组元素是 `字符串或数字` 时：设为固定值 `wx:key="*this"`

```jsx
<view wx:for="{{list}}" wx:key="*this">{{index + 1}}---{{item}}</view>

<!-- 字符串型数组/数字型数组 指定key为*this -->
<view wx:for="{{list}}" wx:for-item="book" wx:for-index="i" wx:key="*this">
  {{i + 1}}---{{book}}
</view>

<!-- 对象型数组 指定key为唯一标识的属性名即可 -->
<view wx:for="{{list2}}" wx:key="id">{{item.name}}</view>
```

## 13-数据操作：条件渲染

> 通过逻辑条件来控制组件是否显示



**概念介绍**

语法：

`wx:if="{{条件一}}"`

`wx:elif="{{条件二}}"`

`wx:else`



**操作步骤**

1. 在 page.js 中定义一个数据

```js
Page({
  data: {
  	year: 0
  }
})
```



2. 在组件上添加条件渲染属性

```xml
<view wx:if="{{year < 2}}">初级前端</view>
<view wx:elif="{{year < 4}}">中级前端</view>
<view wx:elif="{{year < 6}}">高级前端</view>
<view wx:else>专家</view>
```

## 14-数据操作：block标签

> 使用 <block> 标签将控制属性（列表渲染或条件渲染的属性）从组件上分离出去
>
> **注意：** `<block/>` 并不是一个组件，它仅仅是一个包装元素，不会在页面中做任何渲染，只接受控制属性--**不符合条件是不会被包裹的元素不会被渲染出来**

template 空标签(不渲染任何实质的内容)  用于包裹一堆标签!!!

好处：

- 提高代码可读性
- 可以提升某些场景下的性能
- 不会创建额外的组件实例



条件渲染示例：

```xml
<!-- 使用前 -->
<view wx:if="{{ isShow }}">A</view>

<!-- 使用后 -->
<block wx:if="{{ isShow }}">
  <view>A</view>
</block>
```



列表渲染示例：

```xml
<!-- 使用前 -->
<view wx:for="{{books}}">
	{{ item.name }}
</view>

<!-- 使用后 -->
<block wx:for="{{books}}" wx:key="id">
  <view>{{ item.name }}</view>
</block>
```



用于提升性能(减少判断): 

```jsx
<view>------------</view>

<view wx:if="{{isShow}}">hello</view>
<text wx:if="{{isShow}}">world</text>
<button wx:if="{{isShow}}">按钮</button>

<view>------------</view>

<block wx-if="{{isShow}}">
  <view>hello</view>
  <text>world</text>
  <button>按钮</button>
</block>
```

## 15-事件处理：监听事件

> 为小程序组件添加事件监听



**概念介绍**

语法：

```
bind事件名="事件监听函数名"
bind:事件名="事件监听函数名"
```



**操作步骤**

1. 编写 button 组件，并使用`bind事件名` 或 `bind:事件名`添加点击事件

```xml
<button bindtap="tapHandler">按钮</button>
<button bind:tap="tapHandler">按钮</button>
```

2. 在页面js中添加事件监听函数


```javascript
Page({
  // 事件监听函数
	tapHandler() {
  	console.log('按钮被点击啦！')
  }
})
```

## 16-事件处理：事件冒泡以及阻止冒泡

> 实现点击子组件，它的父组件也能触发点击事件



**概念介绍**

事件的冒泡阶段：事件从目标组件向最外层组件逐层传递。

<img src="F:\前端\前端\就业班资料\就业班老师资料\预习资料\小程序\小程序(预习加密)\小程序(预习加密)\资料\day-01\01-讲义\微信小程序-基础.assets\image-20201105152603679.png" alt="image-20201105152603679" style="zoom:25%;" />



`bind:事件名` 语法监听的就是事件的冒泡阶段。因此事件在当前组件上处理完后，会继续向父组件传递并触发父组件上的事件监听。

**阻止冒泡**

> 实现点击子组件后，事件不再继续向父组件传递的效果（即父组件的事件监听不会被触发）



**概念介绍**

语法：

```
catch事件名="事件监听函数"
catch:事件名="事件监听函数"
```

## 17-事件处理：事件捕获

> 实现以捕获阶段的顺序触发事件（从外到里）



**概念介绍**

事件的捕获阶段：事件从最外层组件向事件目标组件逐层传递。

<img src="F:\前端\前端\就业班资料\就业班老师资料\预习资料\小程序\小程序(预习加密)\小程序(预习加密)\资料\day-01\01-讲义\微信小程序-基础.assets\image-20201105152535455.png" alt="image-20201105152535455" style="zoom:25%;" />



- 监听捕获阶段的事件语法：`capture-bind:事件名`

- 阻止捕获事件传递的语法：`capture-catch:事件名`



**操作步骤**

1. 在 wxml 中编写两个父子结构的组件，并使用  `bind事件名` 进行事件监听(**从里到外**)

```xml
<view style="width: 300rpx; height: 300rpx; background-color: pink;" bind:tap="tapHandler1">
  外层
  <view style="width: 200rpx; height: 200rpx; background-color: teal;" bind:tap="tapHandler2">
    内层
  </view>
</view>
```



2. 在页面js中编写事件监听函数

```javascript
Page({
  tapHandler() {
    console.log('我被触摸了');
  },
  tapHandler1() {
    console.log('外层被点击了...');
  },
  tapHandler2() {
    console.log('内层被点击了...');
  }
})
```



3. 在父元素使用 `capture-bind:事件名` 来监听捕获阶段(**从外到里**)

```jsx
<view style="width: 300rpx; height: 300rpx; background-color: pink;" capture-bind:tap="tapHandler1">
  外层
  <view style="width: 200rpx; height: 200rpx; background-color: teal;" capture-bind:tap="tapHandler2">
    内层
  </view>
</view>
```

## 18-事件处理：事件对象与参数传递

> 了解事件对象的获取，以及如何通过事件对象传递数据



- vue中可以`@click="handle(1, 'abc', $event)"`
  - 小程序中不可以函数调用, 也就是没法直接传递参数
  - **通过自定义属性 配合 事件对象**



**概念介绍**

可以通过事件监听函数的第一个参数来获取事件对象。

**可以通过组件的自定义属性（data-xxx）向事件监听函数传递额外的数据。**



**操作步骤**

1. 在页面中为 view 组件添加自定义属性及事件监听

```xml
<button data-id="1" bind:tap="remove">按钮</button>
<button data-id="2" bind:tap="remove">按钮</button>
<button data-id="3" bind:tap="remove">按钮</button>
```



3. 在js中添加监听函数，并从事件对象中获取自定义属性

```js
Page({
  remove(e) {
    console.log(e);
    console.log(e.target.dataset);
  }
})
```

## 19-数据更新：setData方法

> 修改页面中动态渲染的数据



**概念介绍**

可在页面js中调用 `this.setData()` 更新 `data` 中的数据，语法如下：

```js
this.setData(
  
  // 第一个参数：是一个对象，表示要更新的数据
  {
    data1: ....,
    data2: ....
  },

  // 第二个参数：是一个函数，会在视图重新渲染完后执行
  () => { }
  
)
```



setData 执行时的**重要细节**：

1. 以同步的方式更新逻辑层的 `this.data` 中的数据
1. 以异步的方式将数据从逻辑层发送到视图层，触发视图层的重新渲染





**操作步骤**

1. 在 page.js 中定义视图要使用的数据

```js
Page({
  data: {
    message: "Hello,World"
  }
})
```



2. 在 page.wxml 中编写一个 view 组件并展示 data 中的 message 数据

```xml
<view>{{ message }}</view>
```



3. 在 page.wxml 中编写一个按钮并添加事件监听，并调用 setData 更新 message 数据

```xml
<button bind:tap="updateMessage">更新message</button>
```

```js
Page({
  data: {
    message: 'hello, world!'
  },

  updateMessage() {
    console.log('更新前', this.data.message);
    
    this.setData(
      {
        message: '你好, 小程序!'
      },
      () => {
        console.log('渲染结束了...');
      }
    )

    console.log('更新后', this.data.message);
  }
})
```

- Q1：setData更新数据是同步还是异步？
- Q2：setData更新界面是同步还是异步？

也就是说改变值是同步的,改变值之后渲染页面是异步的, 
应该是为了提高性能,不可能改变一次数据渲染一次页面,等所有data改变完之后一块渲染页面. 

# 升级

API 文档地址：https://developers.weixin.qq.com/miniprogram/dev/api/

小程序 API 提供了很多功能，如：路由导航、显示弹框等、网络请求、文件操作、设备信息、地理定位、本地存储等等。

小程序 API 都放在全局对象 `wx` 中，并分同步和异步两种：

1. 方法名以 `Sync` 结尾的是同步 API
2. 其他均为异步 API

## 1-小程序 API：网络相关

> 了解发起网络请求的 API



**概念介绍**

1. wx.request 发起网络请求



![image-20220110185403547](F:\前端\前端\就业班资料\就业班老师资料\预习资料\小程序\小程序(预习加密)\小程序(预习加密)\资料\day-01\01-讲义\微信小程序-基础.assets\image-20220110185403547.png)

【注意】

- 在调用一个域名上的接口时，要先在[小程序管理后台](https://mp.weixin.qq.com/wxamp/devprofile/get_profile?token=808612705&lang=zh_CN)中**配置域名白名单**，即允许小程序调用该域名下的接口, 然后**关闭项目, 重新启动**

- 在本地开发时，也可在开发者工具中设置不检查域名(临时)



```js
Page({
  data: {
    hot: []
  },

  getHotMovies() {
    wx.request({
      url: 'https://wx.maoyan.com/mmdb/movie/v2/list/hot.json',
      method: 'GET',
      data: {
        limit: 12,
        offset: 0,
        ct: '上海'
      },
      // 成功的回调(箭头函数解决this问题)
      success: (res) => {
        console.log(res);
        this.setData({
          hot: res.data.data.hot
        })
      },
      fail: (err) => {
        console.log(err);
      },
      complete: () => {
        console.log('请求结束了');
      }
    })
  }
})
```



```jsx
<button bind:tap="getHotMovies">获取热门电影</button>

<view wx:for="{{hot}}" wx:key="id">{{item.nm}}</view>
```

## 2-小程序 API：界面相关

> 了解界面弹窗相关的API

https://developers.weixin.qq.com/miniprogram/dev/api/

**概念介绍**

1. wx.showLoading / wx.hideLoading：显示/隐藏加载框
2. wx.showModal：显示确认框
3. wx.showToast：显示提示框



```js
wx.showLoading({
  title: '正在加载中...',
})

wx.hideLoading()

wx.showModal({
  title: '弹出框标题',
  content: '正文',

  success: res => {
    console.log(res);
  },

  fail: err => {
    console.log(err);
  }
})

wx.showToast({
  title: '这是一条提示',
  icon: 'success',
  duration: 3000
})
```

## 3-小程序 API：媒体相关

> 了解图片选择和图片展示相关的API



**概念介绍**

1. wx.chooseImage：从手机相册选择照片，或使用手机相机拍照



```js
Page({
  data: {
    path: ''
  },

  chooseImage() {
    wx.chooseImage({
      count: 1,
      sizeType: ['compressed', 'original'],
      sourceType: ['album', 'camera'],

      success: res => {
        console.log(res);
        this.setData({
          path: res.tempFilePaths[0]
        })
      },

      fail: err => {
        console.log(err);
      },

      complete: () => {
        console.log('操作结束!');
      }
    })
  }
})
```

