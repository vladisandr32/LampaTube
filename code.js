// Основной код инициализации плагина
(function() {
    'use strict';
    
    // Адрес вашего прокси-сервера (ЗАМЕНИТЕ НА СВОЙ!)
    const PROXY_URL = 'http:192.168.0.19'; 
    // Или для HTTPS:
    // const PROXY_URL = 'https://your-proxy-domain-or-ip';

    // Добавляем кнопку YouTube TV в меню
    Lampa.Listener.add('app_ready', function() {
        // Создаем элемент меню
        const menuItem = Lampa.Template.get('menu_youtube');
        
        // Создаем SVG-иконку YouTube
        const svgIcon = 
            <svg viewBox="0 0 50 50" width="100" height="100">
                <path fill="#fff" d="M 44.898438 14.5 C 44.5 12.300781 42.601563 10.699219 40.398438 10.199219 C 37.101563 9.5 31 9 24.398438 9 C 17.800781 9 11.601563 9.5 8.300781 10.199219 C 6.101563 10.699219 4.199219 12.199219 3.800781 14.5 C 3.398438 17 3 20.5 3 25 C 3 29.5 3.398438 33 3.898438 35.5 C 4.300781 37.699219 6.199219 39.300781 8.398438 39.800781 C 11.699219 40.5 17.898438 41 24.5 41 C 31.101563 41 37.101563 40.5 40.398438 39.800781 C 42.597656 39.300781 44.5 37.800781 44.898438 35.5 C 45.398438 33 46 29.398438 46.101563 25 C 45.898438 20.5 45.398438 17 44.898438 14.5 Z M 19 32 L 19 18 L 32.199219 25 Z"/>
            </svg>
        ;

        // Собираем HTML структуру
        menuItem.html(
            <li class="menu__item">
                <div class="menu__ico">${svgIcon}</div>
                <a target="_blank" href="${PROXY_URL}"></a>
            </li>
        );

        // Обработчик клика
        menuItem.on('hover:enter', function() {
            window.open(PROXY_URL, '_blank');
        });

        // Добавляем элемент в меню
        $('.menu .menu__list').append(menuItem);
    });

    // Обновление каждые 10 секунд
    setInterval(() => {
        try {
            // Обновленный селектор для проверки
            if (!$(.menu__item [href="${PROXY_URL}"]).length) {
                location.reload();
            }
        } catch(e) {
            console.error('YouTube TV button error:', e);
        }
    }, 10000);
})();
