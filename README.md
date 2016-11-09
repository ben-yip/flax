#Flax - A skeleton for web project development.

As the name explains itself, I wish this project is as versatile as flax.


## 项目目录结构构思
- resources             静态资源主目录
    - sass              Sass的源目录
        - component     UI组件化
        - settings      设定
        - utilities     各种快捷工具
    - css               Sass的样式输出目录，纯css库（如animate.css）也可以放这里
    - js               （未考虑模块化）
    - font              每种字体有自己的目录，包含eot,svg,ttf,woff,woff2等格式
    - img   
        - holder        占位用的临时图片
    - icon              快捷方式图标、iPad图标等
    - plugin            第三方插件/组件，每个插件目录下都包含自身的css和js等资源
- assert                存放用于线上访问的静态资源。
- test                  测试目录
