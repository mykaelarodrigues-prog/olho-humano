// script.js
document.addEventListener('DOMContentLoaded', () => {
    // Mock Data baseado no conteúdo fornecido
    const mockNews = [
        {
            id: 1,
            title: "O que é a Íris e como ela controla a luz?",
            category: "Anatomia",
            image: "https://www.facebook.com/HospitalHOlhos/photos/ei-voc%C3%AA-conhece-a-%C3%ADris-isso-mesmo-estamos-falando-da-%C3%ADris-do-olho-ela-%C3%A9-a-parte-/1689104214526574/",
            excerpt: "A íris é a parte colorida do olho responsável por regular a quantidade de luz que entra através da pupila.",
            readTime: "5 min",
            date: "Há 2 dias"
        },
        {
            id: 2,
            title: "Reflexo Pupilar à Luz: O mecanismo automático do olho",
            category: "Fisiologia",
            image: "https://ssfurosinteligentes.com.br/reflexos-pupilares-o-que-sao-e-por-que-sao-importantes/",
            excerpt: "Como o cérebro detecta luz forte e contrai a pupila em milésimos de segundo para proteger a retina.",
            readTime: "8 min",
            date: "Há 5 dias"
        },
        {
            id: 3,
            title: "Miose e Midríase: Adaptação à claridade e ao escuro",
            category: "Curiosidades",
            image: "https://www.lecturio.com/pt/concepts/fisiologia-e-anomalias-da-pupila/",
            excerpt: "Entenda os dois principais processos que permitem que nossos olhos funcionem em ambientes muito diferentes.",
            readTime: "6 min",
            date: "Há 1 semana"
        },
        {
            id: 4,
            title: "Anisocoria: Quando as pupilas têm tamanhos diferentes",
            category: "Saúde",
            image: "https://www.hospitaldeolhos.net/conteudo-blog-hosp/pupilas-anisocoricas-o-que-sao-entenda-suas-causas-e-tratamentos/",
            excerpt: "Causas, sintomas e quando essa condição pode indicar um problema neurológico mais sério.",
            readTime: "7 min",
            date: "Há 2 semanas"
        },
        {
            id: 5,
            title: "Síndrome de Horner e suas consequências oculares",
            category: "Patologias",
            image: "https://dramedeiacoradini.com.br/blog/exame-neuro-oftalmologico-e-seu-papel-na-gestao-de-sindrome-de-horner/",
            excerpt: "Como uma lesão no sistema nervoso simpático afeta o tamanho da pupila e outras funções.",
            readTime: "9 min",
            date: "Há 3 semanas"
        },
        {
            id: 6,
            title: "Glaucoma: Quando a pressão intraocular afeta a pupila",
            category: "Doenças",
            image: "https://www.visaohospital.com.br/o-que-voce-precisa-saber-sobre-glaucoma/",
            excerpt: "Sintomas, riscos e a importância do diagnóstico precoce para evitar perda da visão.",
            readTime: "10 min",
            date: "Há 1 mês"
        }
    ];

    // Renderizar cards
    function renderNewsCards() {
        const grid = document.getElementById('news-grid');
        grid.innerHTML = '';

        mockNews.forEach(news => {
            const cardHTML = `
                <article class="news-card">
                    <img src="${news.image}" alt="${news.title}">
                    <div class="news-content">
                        <span class="category">${news.category}</span>
                        <h3>${news.title}</h3>
                        <p>${news.excerpt}</p>
                        <div class="card-meta">
                            <span>${news.readTime}</span>
                            <span>${news.date}</span>
                        </div>
                    </div>
                </article>
            `;
            grid.innerHTML += cardHTML;
        });
    }

    // Hamburger Menu
    const hamburger = document.getElementById('hamburger');
    const mobileMenu = document.getElementById('mobile-menu');

    hamburger.addEventListener('click', () => {
        hamburger.classList.toggle('active');
        mobileMenu.classList.toggle('active');
        
        // Animação do hamburger
        const spans = hamburger.querySelectorAll('span');
        if (hamburger.classList.contains('active')) {
            spans[0].style.transform = 'rotate(45deg) translate(5px, 5px)';
            spans[1].style.opacity = '0';
            spans[2].style.transform = 'rotate(-45deg) translate(7px, -6px)';
        } else {
            spans[0].style.transform = 'none';
            spans[1].style.opacity = '1';
            spans[2].style.transform = 'none';
        }
    });

    // Dark Mode
    const themeToggle = document.getElementById('theme-toggle');
    const currentTheme = localStorage.getItem('theme') || 'light';
    
    if (currentTheme === 'dark') {
        document.documentElement.setAttribute('data-theme', 'dark');
        themeToggle.innerHTML = '<i class="fas fa-sun"></i>';
    }

    themeToggle.addEventListener('click', () => {
        if (document.documentElement.getAttribute('data-theme') === 'dark') {
            document.documentElement.removeAttribute('data-theme');
            localStorage.setItem('theme', 'light');
            themeToggle.innerHTML = '<i class="fas fa-moon"></i>';
        } else {
            document.documentElement.setAttribute('data-theme', 'dark');
            localStorage.setItem('theme', 'dark');
            themeToggle.innerHTML = '<i class="fas fa-sun"></i>';
        }
    });

    // Inicializar
    renderNewsCards();

    // Fechar menu mobile ao clicar em link
    document.querySelectorAll('.mobile-menu a').forEach(link => {
        link.addEventListener('click', () => {
            mobileMenu.classList.remove('active');
            hamburger.classList.remove('active');
        });
    });

    console.log('%c✅ Blog Visão Viva carregado com sucesso!', 'color: #0ea5e9; font-size: 14px; font-weight: bold');
});