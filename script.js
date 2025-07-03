document.addEventListener('DOMContentLoaded', function () {

    // 1. Lógica do Carrossel de Avaliações (Splide.js)
    const avaliacoesCarousel = document.getElementById('avaliacoes-carousel');
    if (avaliacoesCarousel) {
        new Splide('#avaliacoes-carousel', {
            type: 'loop',
            perPage: 2, // Mostra 2 avaliações por vez em telas maiores
            perMove: 1,
            gap: '1.5rem',
            pagination: false, // Esconde os "pontinhos" de navegação
            arrows: true,     // Mostra as setas de navegação
            autoplay: true,
            interval: 5000,   // Muda a cada 5 segundos
            pauseOnHover: true,
            breakpoints: {
                992: {
                    perPage: 1, // Mostra 1 avaliação em tablets e celulares
                },
            },
        }).mount();
    }

    // 2. Lógica para animar elementos ao aparecerem na tela (efeito reveal)
    const revealElements = document.querySelectorAll('.reveal');
    if (revealElements.length > 0) {
        const revealObserver = new IntersectionObserver((entries, observer) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('visible');
                    observer.unobserve(entry.target);
                }
            });
        }, {
            threshold: 0.1 // A animação começa quando 10% do elemento está visível
        });

        revealElements.forEach(element => {
            revealObserver.observe(element);
        });
    }

});
