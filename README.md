#Flax - A skeleton for web project development.

As the name explains itself, I wish this project is as versatile as flax.


## 项目目录结构构思
- resources     静态资源主目录
    - icon      快捷方式图标、iPad图标等
    - images    
        - holder        占位用的临时图片
    - fonts             每种字体有自己的目录，包含eot,svg,ttf,woff,woff2等格式
    - sass              Sass的源目录
        - component     UI组件化
        - settings      设定
        - utilities     各种快捷工具
    - stylesheets       Sass的样式输出目录
    - javascripts       （未考虑模块化）
    - plugin            各种插件，每个插件目录下都包含自身的css和js资源
- test          测试目录
