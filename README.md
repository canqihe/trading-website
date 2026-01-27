# 交易智慧 - Trading Wisdom Website

一个融合多位交易大师智慧的静态网站，分享交易心法与实战经验。

![Trading Website](https://img.shields.io/badge/Trading-Website-brightgreen)
![Status](https://img.shields.io/badge/status-active-success)
![Style](https://img.shields.io/badge/style-cyberpunk-neon)
![License](https://img.shields.io/badge/license-MIT-green)

## 📖 项目简介

本项目是一个专注于交易智慧的知识分享网站，汇集了法师Tony、陈晓、丁洪波、杰西·利弗莫尔等交易大师的核心理念和实战经验。网站采用赛博朋克设计风格，提供沉浸式的阅读体验。

### 核心内容

- **交易心法** - 如何看待市场、选择时机、资金管理等核心要素
- **十大纪律** - 期货操盘必须遵守的十条铁律
- **57问** - 期货操盘的57个核心问题详解
- **大师智慧** - 利弗莫尔、丁洪波等传奇交易者的经验之谈
- **实战策略** - 具体的交易策略解读和案例分析
- **OKX访谈** - 顶级交易员的真实访谈记录

## ✨ 主要特点

### 🎨 设计特色

- **赛博朋克风格** - 深色主题配荧光绿和霓虹紫
- **视频背景** - 首页沉浸式视频背景体验
- **网格背景** - 淡淡的白色网格增加科技感
- **流畅的动画交互** - 卡片悬停、渐变边框、鼠标跟随光晕
- **导航栏智能切换** - 首屏透明，滚动后加深背景

### 🎨 配色方案

```css
--bg: #050507                  /* 深黑背景 */
--bg-card: #0d0d11             /* 卡片背景 */
--accent-green: #00FF88        /* 荧光绿 */
--accent-purple: #B829DD       /* 霓虹紫 */
--text-primary: #FFFFFF        /* 主要文字 */
--text-muted: #888899          /* 次要文字 */
```

### 📱 响应式设计

- **桌面端** (>1024px) - 完整体验，多列布局
- **平板端** (≤1024px) - 双列布局，优化间距
- **手机端** (≤768px) - 单列布局，紧凑布局

### 🚀 性能优化

- 纯 HTML/CSS/JavaScript，无外部依赖
- CSS 动画使用 GPU 加速
- 懒加载和视口检测
- 移动端自适应加载

## 📁 项目结构

```
trading-website/
├── index.html                      # 首页
├── styles-redesigned.css           # 首页样式
├── styles-new.css                  # 子页面样式
├── README.md                       # 项目说明文档
├── .gitignore                      # Git 忽略文件
│
├── trading-mastery/                # 交易心法页面
│   ├── ten-disciplines.html        # 十大纪律
│   ├── 57-questions.html           # 57问
│   ├── livermore.html              # 利弗莫尔
│   ├── ding-hongbo.html            # 丁洪波
│   ├── tony-bible.html             # Tony圣经
│   ├── tony-quotes.html            # Tony语录
│   ├── strategy-reading.html       # 策略解读
│   ├── six-lessons.html            # 六堂课
│   ├── chen-xiao.html              # 陈晓文章
│   └── other-quotes.html           # 其他语录
│
├── okx-talks/                      # OKX访谈页面
│   ├── yuyu.html                   # 予与访谈
│   ├── rgwbd.html                  # 如果我不懂访谈
│   ├── aoyin.html                  # 熬鹰访谈
│   └── Wesley.html                 # Wesley访谈
│
└── assets/                         # 资源文件
    └── videos/                     # 视频资源
        └── t.mp4                   # 首页背景视频
```

## 🎯 设计系统

### 卡片效果

- **渐变顶部边框** - 鼠标悬停时从左到右展开
- **多层阴影** - 深色阴影 + 绿色光晕 + 内部高光
- **数字索引动画** - 悬停时放大并左移
- **标题变色** - 悬停时变为荧光绿
- **鼠标跟随光晕** - 实时追踪鼠标位置

### 导航栏交互

- **首屏透明** - 使用 `mix-blend-mode: difference` 效果
- **滚动加深** - 到达第二模块时背景变为 `rgba(5, 5, 7, 0.9)`
- **高度自适应** - 滚动后 padding 从 16px 减少到 12px
- **平滑过渡** - 使用 `cubic-bezier(0.4, 0, 0.2, 1)` 缓动

### 页面动画

- **淡入上升** - 卡片进入视口时淡入并上升
- **悬停提升** - 卡片悬停时提升 -8px
- **渐变边框** - 绿色→紫色渐变线条动画
- **标题发光** - 荧光绿高亮效果

## 🚀 快速开始

### 本地运行

1. 克隆仓库
```bash
git clone https://github.com/canqihe/trading-website.git
cd trading-website
```

2. 直接用浏览器打开 `index.html`

或使用本地服务器：

```bash
# Python 3
python -m http.server 8000

# Node.js (需要安装 http-server)
npx http-server

# PHP
php -S localhost:8000
```

3. 在浏览器中访问 `http://localhost:8000`

### 部署

#### GitHub Pages

1. 推送到 GitHub 仓库
2. 在仓库设置中启用 GitHub Pages
3. 选择 main 分支作为源
4. 访问 `https://canqihe.github.io/trading-website/`

#### Netlify

1. 拖拽项目文件夹到 [Netlify Drop](https://app.netlify.com/drop)
2. 自动部署完成

#### Vercel

```bash
npm install -g vercel
vercel
```

## 🛠️ 技术栈

- **HTML5** - 语义化标签
- **CSS3** - 现代化样式，CSS 变量，Grid布局
- **JavaScript (ES6+)** - 交互逻辑
- **Intersection Observer API** - 滚动动画
- **响应式设计** - 媒体查询适配

## 📱 响应式断点

```css
/* 平板和小屏幕 */
@media (max-width: 1024px) {
  /* 双列布局 */
  /* 优化间距 */
}

/* 手机端 */
@media (max-width: 768px) {
  /* 单列布局 */
  /* 紧凑间距 */
}
```

## 🎨 自定义

### 修改颜色主题

编辑 `styles-redesigned.css` 和 `styles-new.css` 中的 CSS 变量：

```css
:root {
  --accent-green: #00FF88;  /* 荧光绿 */
  --accent-purple: #B829DD; /* 霓虹紫 */
}
```

### 调整动画速度

修改 CSS 中的 `transition` 时长：

```css
.card {
  transition: all 0.5s cubic-bezier(0.4, 0, 0.2, 1);
}
```

### 更换视频背景

替换 `assets/videos/t.mp4` 文件，或在 `index.html` 中修改视频路径：

```html
<video class="hero-video" autoplay muted loop playsinline>
    <source src="assets/videos/your-video.mp4" type="video/mp4">
</video>
```

## 🤝 贡献

欢迎提交 Issue 和 Pull Request！

### 贡献指南

1. Fork 本仓库
2. 创建特性分支 (`git checkout -b feature/AmazingFeature`)
3. 提交更改 (`git commit -m 'Add some AmazingFeature'`)
4. 推送到分支 (`git push origin feature/AmazingFeature`)
5. 开启 Pull Request

## 📝 版本历史

### v2.0.0 (2026-01-27)
- ✨ 完全重设计为赛博朋克风格
- 🎨 更新配色方案：荧光绿 + 霓虹紫
- 🎬 添加视频背景
- 🎯 增强卡片动效：渐变边框、鼠标跟随光晕
- 🧹 清理旧文件和脚本
- 📱 优化响应式布局

### v1.0.0
- 🎉 初始版本发布
- 📖 完成基础内容和页面

## ⚠️ 免责声明

市场有风险，投资需谨慎。本网站内容仅供参考学习，不构成任何投资建议。

---

**⭐ 如果觉得这个项目有帮助，请给一个 Star！**
