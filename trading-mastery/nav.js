// 导航栏 HTML
const navHTML = `
<ul class="nav-menu">
    <li><a href="../index.html">首页</a></li>
    <li><a href="ten-disciplines.html">十大金句</a></li>
    <li><a href="roppel-quotes.html">Roppel语录</a></li>
    <li><a href="57-questions.html">57问</a></li>
    <li><a href="livermore.html">利弗莫尔</a></li>
    <li><a href="ding-hongbo.html">丁洪波</a></li>
    <li><a href="tony-bible.html">Tony圣经</a></li>
    <li><a href="tony-quotes.html">Tony语录</a></li>
    <li><a href="strategy-reading.html">策略解读</a></li>
    <li><a href="six-lessons.html">六堂课</a></li>
    <li><a href="chen-xiao.html">陈晓文章</a></li>
    <li><a href="other-quotes.html">其他语录</a></li>
</ul>
`;

// 等待 DOM 加载完成后执行
document.addEventListener('DOMContentLoaded', function() {
    const navContainer = document.querySelector('.nav-container');
    if (navContainer) {
        navContainer.innerHTML = navHTML;

        // 获取当前页面文件名
        let currentPage = window.location.pathname.split('/').pop();

        // 移除查询参数和哈希
        if (currentPage) {
            currentPage = currentPage.split(/[?#]/)[0];
        }

        const links = document.querySelectorAll('.nav-menu a');
        links.forEach(link => {
            let href = link.getAttribute('href');

            // 统一处理：移除 ../ 前缀来比较文件名
            if (href.startsWith('../')) {
                href = href.substring(3);
            }

            // 兼容 Cloudflare Pages Pretty URLs：去掉 .html 后缀
            const hrefWithoutExt = href.endsWith('.html') ? href.slice(0, -5) : href;
            const currentPageWithoutExt = currentPage.endsWith('.html') ? currentPage.slice(0, -5) : currentPage;

            // 匹配逻辑：比较去掉 .html 后缀的文件名
            if (currentPageWithoutExt === hrefWithoutExt || currentPage === href) {
                link.classList.add('active');
            }
            // 处理首页（空文件名或 index.html）
            else if ((!currentPage || currentPage === 'index' || currentPage === 'index.html' || currentPage === '') && href === 'index.html') {
                link.classList.add('active');
            }
        });
    }
});

