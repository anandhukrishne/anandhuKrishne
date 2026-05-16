// ═══════════════════════════════════════════════
// BLOG SPA — Vanilla JS (Zero Template Literals)
// ═══════════════════════════════════════════════

// Article Database — all content stored as plain strings
var articleDatabase = {
    "vyntra": {
        title: "VYNTRA: Engineering a Real-Time IoT Dashboard",
        category: "IoT Systems",
        date: "Published May 10, 2026",
        content: '<p>VYNTRA is a real-time IoT environmental monitoring dashboard built for smart campus infrastructure at IIIT Kottayam. It aggregates data from a distributed network of ESP32-based sensor nodes to track temperature, humidity, air quality index, and energy consumption patterns across buildings.</p><h2>The Sensor Network</h2><p>Each node runs an ESP32 microcontroller paired with DHT22 (temperature/humidity), MQ-135 (air quality), and INA219 (power) sensors. Data is transmitted via MQTT to a lightweight Node.js aggregation layer that normalizes readings and pushes them to connected clients over WebSockets.</p><h3>Live Visualization</h3><p>The dashboard renders sub-second live charts using HTML5 Canvas, with historical trend analysis powered by a time-series database. Alerts are triggered when readings breach configurable thresholds, notifying campus administrators via push notifications.</p><h3>Impact</h3><p>VYNTRA reduced manual HVAC monitoring overhead by 60% and identified three previously undetected energy waste patterns in the first month of deployment.</p>'
    },
    "parakkum-thallika": {
        title: "Parakkum Thallika: Engineering an Autonomous Drone",
        category: "Autonomous Systems",
        date: "Published April 28, 2026",
        content: '<p>Parakkum Thallika started as a college project and evolved into a fully autonomous drone management interface tailored for chaotic disaster scenarios. Built with reactive logic suited for mobile and tactical deployment.</p><h2>From Concept to First Flight</h2><p>The initial prototype used off-the-shelf components and a basic radio controller. Within three months, we had integrated GPS waypoint navigation, obstacle detection via ultrasonic sensors, and a live video feed transmitted over a custom 2.4GHz link.</p><h3>The Software Stack</h3><p>The ground control station was built as a progressive web app using Vanilla HTML, CSS, and JavaScript. Flight telemetry is processed client-side, with no server dependency. This makes the system deployable in areas with zero internet connectivity.</p><h3>Disaster Deployment</h3><p>The drone was field-tested during a simulated flood scenario, successfully mapping a 2km radius in under 15 minutes and relaying thermal imaging data back to the command center.</p>'
    },
    "raamanuj": {
        title: "Raamanuj: Scaling a Commercial Sales Platform",
        category: "Web Architecture",
        date: "Published April 15, 2026",
        content: '<p>The Raamanuj sales architecture faced significant challenges in database synchronization and secure session management. We implemented a robust PostgreSQL bridge and customized JWT authentication for high-frequency transactions.</p><h2>Technical Hurdles</h2><p>The primary bottleneck was login latency. Initial benchmarks showed 800ms response times on the authentication endpoint. Through aggressive query optimization and connection pooling, we reduced this to under 180ms.</p><h3>Multi-Tenant Architecture</h3><p>To future-proof the platform, we implemented a multi-tenant architecture where each client organization operates in an isolated data silo. This ensures data sovereignty while sharing the same application infrastructure.</p><h3>Key Results</h3><p>45% reduction in login latency. Successful integration with three legacy commercial APIs. And a deployment pipeline that pushes zero-downtime updates to production in under 4 minutes.</p>'
    },
    "45-studios": {
        title: "45|STUDioS: The Open-Source Agency Blueprint",
        category: "Open Source",
        date: "Published March 30, 2026",
        content: '<p>45|STUDioS is more than a brand. It is the central nervous system for our open-source engineering collective. The web suite handles automated enrollment logic and secure staging environment provisioning.</p><h2>Why Open Source?</h2><p>We believe that transparency in code leads to transparency in intent. Every tool, template, and system we build is available for public audit. This philosophy has attracted collaborators from IIIT Kottayam and beyond.</p><h3>The Web Suite</h3><p>Built entirely with Vanilla CSS and JavaScript, the 45|STUDioS website serves as both a portfolio and a live testing ground. Every design decision, from the futuristic footer to the glassmorphism header, was prototyped and validated on this platform before being offered to clients.</p><h3>Future Roadmap</h3><p>We are expanding into automated CI/CD pipelines for student projects, a public API for our design token system, and a contributor-friendly documentation portal.</p>'
    },
    "mastering-mips": {
        title: "Mastering MIPS: Understanding sw &amp; lw",
        category: "Systems Architecture",
        date: "Published March 18, 2026",
        content: '<p>MIPS (Microprocessor without Interlocked Pipelined Stages) is a reduced instruction set computer (RISC) instruction set architecture (ISA). Memory management is crucial in assembly. The <code>sw</code> (store word) instruction moves data from a register to memory, while <code>lw</code> (load word) moves data from memory to a register.</p><h2>The Importance of Alignment</h2><p>Understanding these limits is essential for efficient cache allocation and low-level system optimization. Word alignment affects performance dramatically, and improper offset calculation leads to system exceptions that are notoriously difficult to debug.</p><h3>Advanced Operations</h3><p>We also cover memory-mapped I/O and how these basic instructions form the foundation of more complex data structures in assembly language. Understanding sw and lw is the gateway to mastering MIPS pipeline behavior.</p>'
    },
    "evaluating-postfix": {
        title: "Evaluating Postfix via Shunting Yard",
        category: "Data Structures",
        date: "Published March 5, 2026",
        content: '<p>The Shunting Yard algorithm is a method for parsing mathematical expressions specified in infix notation. It can produce either a postfix notation string (also known as Reverse Polish Notation) or an Abstract Syntax Tree (AST).</p><h2>Why Stacks Matter</h2><p>Stacks are the backbone of this process. By converting infix to postfix, we eliminate the need for parentheses and operator precedence rules during evaluation, making it significantly faster for compilers to process.</p><h3>Performance Analysis</h3><p>We analyze the time complexity (<strong>O(n)</strong>) and walk through a manual trace of the algorithm using a stack for operators and an output queue for operands. The elegance of Dijkstra\'s original design remains unmatched.</p>'
    },
    "vanilla-css": {
        title: "Why 45|STUDioS Opts for Core Vanilla CSS",
        category: "Web Engineering",
        date: "Published February 20, 2026",
        content: '<p>Utility frameworks like Tailwind or Bootstrap are great for speed, but they often lead to div soup and a lack of deep CSS understanding. At 45|STUDioS, we prioritize precision and performance.</p><h2>Variable-Driven Design</h2><p>By using Vanilla CSS with CSS Variables (Custom Properties), we achieve the same modularity as frameworks but with zero runtime overhead and complete creative control. This approach ensures our designs remain lightweight and easy to audit.</p><h3>The Long-Term Benefits</h3><p>We structure our variable-driven design systems around a single source of truth. Changing one variable propagates across the entire site. No build steps. No dependencies. No breaking updates from third-party maintainers.</p>'
    }
};

// ── State Tracker ──
var currentView = "index"; // "index" or "article"

// ── View Swap Functions ──
function showArticle(slug, pushToHistory) {
    if (pushToHistory === undefined) pushToHistory = true;
    var article = articleDatabase[slug];
    var indexView = document.getElementById('blog-index-view');
    var articleView = document.getElementById('blog-article-view');
    if (!article || !indexView || !articleView) return;

    var titleEl = document.getElementById('articleTitle');
    var catEl = document.getElementById('articleCategory');
    var dateEl = document.getElementById('articleDate');
    var contentEl = document.getElementById('articleContent');

    if (titleEl) titleEl.innerText = article.title;
    if (catEl) catEl.innerText = article.category;
    if (dateEl) dateEl.innerText = article.date;
    if (contentEl) contentEl.innerHTML = article.content;

    indexView.style.display = 'none';
    articleView.style.display = 'block';
    currentView = "article";
    window.scrollTo(0, 0);

    if (pushToHistory) {
        history.pushState({ view: 'article', slug: slug }, '', '?article=' + slug);
    }
    localStorage.setItem('45studios_active_blog', slug);
}

function showIndex(pushToHistory) {
    if (pushToHistory === undefined) pushToHistory = true;
    var indexView = document.getElementById('blog-index-view');
    var articleView = document.getElementById('blog-article-view');
    if (!indexView || !articleView) return;

    articleView.style.display = 'none';
    indexView.style.display = 'block';
    currentView = "index";
    window.scrollTo(0, 0);

    if (pushToHistory) {
        history.pushState({ view: 'index' }, '', window.location.pathname);
    }
    localStorage.removeItem('45studios_active_blog');
}

// ── Global Click Delegation ──
document.addEventListener('click', function(e) {
    // 1. "Execute Read" buttons
    var readBtn = e.target.closest('.blog-read-btn');
    if (readBtn) {
        e.preventDefault();
        e.stopPropagation();
        var slug = readBtn.getAttribute('data-slug');
        if (slug) showArticle(slug);
        return;
    }

    // 2. Clickable card body (click anywhere on card)
    var card = e.target.closest('.blog-card');
    if (card && !e.target.closest('.blog-read-btn')) {
        e.preventDefault();
        var cardSlug = card.getAttribute('data-slug');
        if (cardSlug) showArticle(cardSlug);
        return;
    }

    // 3. Context-aware Back button
    var backBtn = e.target.closest('#blogBackBtn');
    if (backBtn) {
        e.preventDefault();
        if (currentView === "article") {
            // Go back to blog grid
            showIndex();
        } else {
            // Already on grid — go to homepage
            window.location.href = 'index.html';
        }
        return;
    }

    // 4. Theme toggle — do it directly (portThemeToggle doesn't exist on this page)
    var themeBtn = e.target.closest('#blogThemeToggle');
    if (themeBtn) {
        var htmlEl = document.documentElement;
        var currentTheme = htmlEl.getAttribute('data-port-theme');
        if (currentTheme === 'dark' || !currentTheme) {
            htmlEl.setAttribute('data-port-theme', 'light');
            localStorage.setItem('port-theme', 'light');
            themeBtn.textContent = '\uD83C\uDF19'; // moon
        } else {
            htmlEl.setAttribute('data-port-theme', 'dark');
            localStorage.setItem('port-theme', 'dark');
            themeBtn.textContent = '\u2600\uFE0F'; // sun
        }
        return;
    }

    // 5. Back to Top
    var bttBtn = e.target.closest('#blogBttBtn');
    if (bttBtn) {
        e.preventDefault();
        window.scrollTo({ top: 0, behavior: 'smooth' });
        return;
    }
});

// ── Back to Top: Scroll Visibility ──
window.addEventListener('scroll', function() {
    var btt = document.getElementById('blogBttBtn');
    if (!btt) return;
    if (window.scrollY > 300) {
        btt.classList.add('visible');
    } else {
        btt.classList.remove('visible');
    }
}, { passive: true });

// ── Browser Back/Forward ──
window.addEventListener('popstate', function(e) {
    if (e.state && e.state.view === 'article') {
        showArticle(e.state.slug, false);
    } else {
        showIndex(false);
    }
});

// ── Initial Load: URL > localStorage > Index ──
document.addEventListener('DOMContentLoaded', function() {
    var urlParams = new URLSearchParams(window.location.search);
    var urlArticle = urlParams.get('article');
    var cachedArticle = localStorage.getItem('45studios_active_blog');
    var initialArticle = urlArticle || cachedArticle;

    if (initialArticle && articleDatabase[initialArticle]) {
        showArticle(initialArticle, false);
        history.replaceState({ view: 'article', slug: initialArticle }, '', '?article=' + initialArticle);
    } else {
        currentView = "index";
        history.replaceState({ view: 'index' }, '', window.location.pathname);
    }

    // Sync theme toggle icon with saved preference
    var blogToggle = document.getElementById('blogThemeToggle');
    var savedTheme = localStorage.getItem('port-theme') || 'dark';
    if (blogToggle) {
        blogToggle.textContent = savedTheme === 'dark' ? '\u2600\uFE0F' : '\uD83C\uDF19';
    }
});
