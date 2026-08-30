(function () {
  'use strict';

  var translations = {
    // Shared navigation and footer
    'Документы': 'Documents',
    'Команды': 'Commands',
    'Функции': 'Features',
    'Как работает': 'How it works',
    'Главная': 'Home',
    '+ Добавить': '+ Add',
    'Добавить бота': 'Add bot',
    'VoiceScribe · Разработан': 'VoiceScribe · Developed by',
    'Мы не являемся аффилированным лицом компании Discord Inc.': 'We are not affiliated with Discord Inc.',

    // General page
    'Превращает голосовые сообщения и аудиофайлы в текст прямо в Discord. Для тех, кто не всегда может слушать.': 'Turns voice messages and audio files into text right in Discord. For those who cannot always listen.',
    'Не можешь слушать — просто прочитай. VoiceScribe превращает голосовые сообщения и аудиофайлы в текст прямо в Discord.': 'Can’t listen? Just read. VoiceScribe turns voice messages and audio files into text right in Discord.',
    'Добавить на сервер': 'Add to server',
    '🚀 Добавить на сервер': '🚀 Add to server',
    '🚀 Добавить VoiceScribe': '🚀 Add VoiceScribe',
    'Как это работает': 'How it works',
    'и другие форматы': 'and other formats',
    'Быстрая транскрипция': 'Fast transcription',
    'Поддержка языков': 'Language support',
    'Возможности': 'Features',
    'Всё, что нужно': 'Everything you need',
    'для транскрипции': 'for transcription',
    'VoiceScribe обрабатывает аудио и превращает его в читаемый текст быстро и без лишних действий.': 'VoiceScribe processes audio and turns it into readable text quickly and without extra steps.',
    'Голосовые сообщения': 'Voice messages',
    'Отправь голосовое сообщение — бот ответит готовым текстом прямо в чате.': 'Send a voice message — the bot replies with ready text right in the chat.',
    'Транскрибирует голосовые сообщения Discord одной командой. Больше не нужно слушать.': 'Transcribes Discord voice messages with one command. No need to listen anymore.',
    'Аудиофайлы': 'Audio files',
    'Загружай MP3, OGG, WAV, M4A и FLAC без отдельного конвертера.': 'Upload MP3, OGG, WAV, M4A, and FLAC without a separate converter.',
    'Поддерживает MP3, OGG, WAV и другие популярные аудиоформаты.': 'Supports MP3, OGG, WAV, and other popular audio formats.',
    'Быстро и просто': 'Fast and simple',
    'Прикрепи аудио и дождись результата. Настройки не нужны.': 'Attach audio and wait for results. No setup needed.',
    'Просто отправь файл и бот сам всё сделает. Никаких сложных настроек.': 'Just send a file and the bot does the rest. No complicated setup.',
    'Доступность': 'Accessibility',
    'Читайте сообщения в шумном месте, тишине или при нарушениях слуха.': 'Read messages in noisy places, quiet environments, or with hearing loss.',
    'Создан для людей, которые не могут слушать аудио в шуме, в тишине или при нарушениях слуха.': 'Built for people who cannot listen to audio in noise, silence, or because of hearing loss.',
    'Как использовать': 'How to use',
    'Три простых шага': 'Three simple steps',
    'Начать работу с VoiceScribe очень просто.': 'Getting started with VoiceScribe is easy.',
    'Добавь бота на сервер': 'Add the bot to a server',
    'Нажми «Добавить на сервер» и выбери нужный Discord-сервер.': 'Click “Add to server” and choose the Discord server you need.',
    'Отправь аудио': 'Send audio',
    'Прикрепи голосовое сообщение или аудиофайл.': 'Attach a voice message or audio file.',
    'Получи текст': 'Get the text',
    'Бот ответит готовой транскрипцией прямо в чате.': 'The bot will reply with the completed transcription right in the chat.',
    'Форматы': 'Formats',
    'Поддерживаемые форматы': 'Supported formats',
    'VoiceScribe работает с большинством популярных аудиоформатов.': 'VoiceScribe works with most popular audio formats.',
    'Сценарии': 'Use cases',
    'Когда аудио неудобно слушать': 'When audio is inconvenient to listen to',
    'VoiceScribe помогает не пропустить важное — в рабочем чате, на учёбе или в дороге.': 'VoiceScribe helps you not miss important info — in work chats, studies, or on the go.',
    'Рабочие серверы': 'Work servers',
    'Быстро прочитай содержание сообщения и вернись к обсуждению.': 'Quickly read message contents and get back to discussion.',
    'Учёба и заметки': 'Study & notes',
    'Преврати объяснение или идею в текст, который легко сохранить.': 'Turn an explanation or idea into text that is easy to save.',
    'Тихие места': 'Quiet places',
    'Пойми сообщение в транспорте, библиотеке или на встрече без звука.': 'Understand messages in transit, libraries, or meetings without sound.',
    'Сделай голосовое общение удобнее для людей с нарушениями слуха.': 'Make voice communication more convenient for people with hearing impairment.',
    'Коротко о работе бота': 'Briefly about the bot',
    'Как начать пользоваться?': 'How to get started?',
    'Добавь VoiceScribe на Discord-сервер, отправь голосовое сообщение или поддерживаемый аудиофайл — бот ответит транскрипцией.': 'Add VoiceScribe to your Discord server, send a voice message or supported audio file — the bot will reply with a transcription.',
    'Какие форматы поддерживаются?': 'What formats are supported?',
    'MP3, OGG, WAV, M4A, FLAC и Discord Voice. Если формат не обработался, попробуй экспортировать файл в MP3.': 'MP3, OGG, WAV, M4A, FLAC, and Discord Voice. If a format fails to process, try exporting to MP3.',
    'Какие языки доступны?': 'What languages are available?',
    'Сейчас доступны русский и английский языки.': 'Russian and English are currently supported.',
    'Хранятся ли аудиофайлы?': 'Are audio files stored?',
    'Смотри актуальные условия обработки и хранения данных в правовых документах.': 'See current data processing and retention terms in legal documents.',
    'Готов попробовать?': 'Ready to try it?',
    'Добавь VoiceScribe на сервер и начни пользоваться ботом уже сейчас.': 'Add VoiceScribe to a server and start using the bot now.',
    'Добавить VoiceScribe': 'Add VoiceScribe',
    'Discord-инструмент': 'Discord tool',
    'Привет! Напоминаю, что встреча сегодня в шесть часов вечера.': 'Hey! Just a reminder that the meeting is today at 6 PM.',

    // Pro page
    'Главное и честное преимущество VoiceScribe Pro: безлимитное использование транскрипции без ограничений по количеству запросов.': 'The main and honest advantage of VoiceScribe Pro: unlimited transcription with no limit on the number of requests.',
    'Безлимитная транскрипция голосовых сообщений Discord без ограничений по количеству запросов.': 'Unlimited transcription of Discord voice messages with no limit on the number of requests.',
    'Безлимитная транскрипция MP3, OGG, WAV и других популярных аудиоформатов.': 'Unlimited transcription of MP3, OGG, WAV, and other popular audio formats.',
    'Статус Pro': 'Pro status',
    'Один Pro-статус для постоянного использования без регулярных ограничений по нагрузке.': 'One Pro status for ongoing use without recurring load limits.',
    'Для любых серверов': 'For any server',
    'Подходит для личных, учебных и рабочих Discord-серверов с активным общением.': 'Suitable for personal, educational, and work Discord servers with active conversations.',
    'Станьте участником': 'Join',
    'Поддержка помогает развивать бота и сохранять безлимитную транскрипцию.': 'Your support helps develop the bot and keep unlimited transcription available.',
    'Удобная поддержка из России и СНГ': 'Convenient support from Russia and the CIS',
    'Международная подписка и поддержка': 'International subscription and support',

    // Accessibility labels
    'Меню': 'Menu',
    'На связи': 'Online'
  };

  function browserLanguage() {
    var languages = navigator.languages || [navigator.language || 'ru'];
    for (var i = 0; i < languages.length; i += 1) {
      if (/^en(?:-|$)/i.test(languages[i])) return 'en';
      if (/^ru(?:-|$)/i.test(languages[i])) return 'ru';
    }
    return 'ru';
  }

  function closeNav() {
    var burger = document.querySelector('.burger');
    var links = document.querySelector('.nav-links');
    var overlay = document.querySelector('.nav-overlay');
    if (burger) {
      burger.classList.remove('open');
      burger.setAttribute('aria-expanded', 'false');
    }
    if (links) links.classList.remove('open');
    if (overlay) overlay.classList.remove('open');
  }

  function translateTextNodes() {
    var walker = document.createTreeWalker(document.body, NodeFilter.SHOW_TEXT);
    var nodes = [];
    while (walker.nextNode()) nodes.push(walker.currentNode);
    nodes.forEach(function (node) {
      var original = node.nodeValue;
      var trimmed = original.trim();
      if (!trimmed || !translations[trimmed]) return;
      node.nodeValue = original.replace(trimmed, translations[trimmed]);
    });
  }

  function setLanguage(lang) {
    document.documentElement.lang = lang;
    document.body.classList.remove('lang-ru', 'lang-en');
    document.body.classList.add('lang-' + lang);

    if (lang === 'en') {
      translateTextNodes();
      if (document.title.indexOf('VoiceScribe — транскрипция') !== -1) document.title = 'VoiceScribe — Audio transcription in Discord';
      if (document.title.indexOf('Команды') !== -1) document.title = 'Commands — VoiceScribe';
      if (document.title.indexOf('Premium') !== -1) document.title = 'Premium — VoiceScribe';
      if (document.title.indexOf('Правовые') !== -1) document.title = 'Legal Documents — VoiceScribe';
      if (document.title.indexOf('VoiceScribe Pro') !== -1) document.title = 'VoiceScribe Pro';
    }

    var menu = document.querySelector('.burger');
    if (menu) menu.setAttribute('aria-label', lang === 'en' ? 'Menu' : 'Меню');
  }

  window.toggleNav = window.toggleNav || function (button) {
    var links = document.querySelector('.nav-links');
    var overlay = document.querySelector('.nav-overlay');
    var open = links && !links.classList.contains('open');
    if (button) {
      button.classList.toggle('open', open);
      button.setAttribute('aria-expanded', String(open));
    }
    if (links) links.classList.toggle('open', open);
    if (overlay) overlay.classList.toggle('open', open);
  };
  window.closeNav = window.closeNav || closeNav;

  // Tab switcher for the legal (documents) page
  window.switchTab = window.switchTab || function (tab) {
    var docs = document.querySelectorAll('[data-doc]');
    for (var i = 0; i < docs.length; i += 1) {
      docs[i].classList.toggle('visible', docs[i].getAttribute('data-doc') === tab);
    }
    var buttons = document.querySelectorAll('.tab-btn');
    for (var j = 0; j < buttons.length; j += 1) {
      buttons[j].classList.toggle('active', buttons[j].getAttribute('data-tab') === tab);
    }
  };

  function init() {
    setLanguage(browserLanguage());

    // Event delegation for navigation & overlay clicks
    document.addEventListener('click', function (e) {
      var burger = e.target.closest('.burger');
      if (burger) {
        window.toggleNav(burger);
        return;
      }
      var overlay = e.target.closest('.nav-overlay');
      if (overlay) {
        window.closeNav();
        return;
      }
      if (e.target.closest('.nav-links a')) {
        window.closeNav();
      }
    });
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
}());
