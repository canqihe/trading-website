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

        // 设置当前页面的 active 类
        const currentPage = window.location.pathname.split('/').pop();
        const links = document.querySelectorAll('.nav-menu a');
        links.forEach(link => {
            const href = link.getAttribute('href');
            if (href === currentPage || (currentPage === '' && href === '../index.html')) {
                link.classList.add('active');
            }
        });
    }
});

