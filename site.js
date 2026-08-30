(function () {
  'use strict';

  function closeNav() {
    var burger = document.querySelector('.burger');
    var links = document.querySelector('.nav-links');
    var overlay = document.querySelector('.nav-overlay');
    if (burger) { burger.classList.remove('open'); burger.setAttribute('aria-expanded', 'false'); }
    if (links) links.classList.remove('open');
    if (overlay) overlay.classList.remove('open');
  }

  function browserLanguage() {
    var languages = navigator.languages || [navigator.language || 'ru'];
    for (var i = 0; i < languages.length; i += 1) {
      if (/^en(?:-|$)/i.test(languages[i])) return 'en';
      if (/^ru(?:-|$)/i.test(languages[i])) return 'ru';
    }
    return 'ru';
  }

  window.toggleNav = function (button) {
    var links = document.querySelector('.nav-links');
    var overlay = document.querySelector('.nav-overlay');
    var open = !links.classList.contains('open');
    button.classList.toggle('open', open);
    button.setAttribute('aria-expanded', String(open));
    links.classList.toggle('open', open);
    overlay.classList.toggle('open', open);
  };

  window.closeNav = closeNav;

  var translations = {
    'Меню': 'Menu',
    'Открыть меню': 'Open menu',
    'Команды': 'Commands',
    'Документы': 'Documents',
    'Функции': 'Features',
    'Как работает': 'How it works',
    'Добавить бота': 'Add bot',
    'Discord-инструмент': 'Discord tool',
    'Добавить на сервер': 'Add to server',
    'Не можешь слушать — просто прочитай. VoiceScribe превращает голосовые сообщения и аудиофайлы в текст прямо в Discord.': 'Can’t listen right now? Just read it. VoiceScribe turns voice messages and audio files into text right in Discord.',
    'Привет! Напоминаю, что встреча сегодня в шесть часов вечера.': 'Hi! Just a reminder that the meeting is today at six in the evening.',
    'Пример работы VoiceScribe': 'VoiceScribe example',
    'Как это работает': 'How it works',
    'Быстрая транскрипция': 'Fast transcription',
    'Поддержка языков': 'Language support',
    'и другие форматы': 'and other formats',
    'Возможности': 'Features',
    'Всё, что нужно': 'Everything you need',
    'для транскрипции': 'for transcription',
    'VoiceScribe обрабатывает аудио и превращает его в читаемый текст быстро и без лишних действий.': 'VoiceScribe processes audio and turns it into readable text quickly and without extra steps.',
    'Создаю Discord-ботов и полезные инструменты для серверов. Мой главный проект — VoiceScribe, бот для перевода голосовых сообщений в текст.': 'I build Discord bots and useful tools for servers. My main project is VoiceScribe, a bot that turns voice messages into text.',
    'Discord developer': 'Discord developer',
    'Делаю ботов, которые ': 'I build bots that ',
    'помогают.': 'help.',
    'Открыт для новых идей': 'Open to new ideas',
    'Discord-разработчик': 'Discord developer',
    'Разработка ботов, автоматизация и интеграции — без лишней сложности и перегруженных решений.': 'Bots, automation and integrations — without unnecessary complexity.',
    'Избранные проекты': 'Featured projects',
    'Что я создаю': 'What I build',
    'Проекты и разработка под заказ': 'Projects and custom development',
    'Открыть страницу проекта': 'Open project page',
    'Бот распознаёт голосовые сообщения и аудиофайлы, чтобы их можно было быстро прочитать прямо в Discord.': 'A bot that turns voice messages and audio files into text you can quickly read in Discord.',
    'Боты под заказ': 'Custom bots',
    'Автоматизация, команды, роли и интеграции под конкретный сервер или задачу.': 'Automation, commands, roles and integrations for a specific server or task.',
    'Обсудить идею': 'Discuss an idea',
    'Обо мне': 'About me',
    'Люблю понятные решения, которые экономят время и действительно используются каждый день.': 'I like clear solutions that save time and are genuinely useful every day.',
    'Поддержать проект': 'Support the project',
    'Если VoiceScribe оказался полезен, поддержать проект можно здесь.': 'If VoiceScribe is useful to you, you can support the project here.',
    'Связаться': 'Get in touch',
    'Проекты': 'Projects',
    'Голосовые сообщения': 'Voice messages',
    'Аудиофайлы': 'Audio files',
    'Быстро и просто': 'Fast and simple',
    'Доступность': 'Accessibility',
    'Отправь голосовое сообщение — бот ответит готовым текстом прямо в чате.': 'Send a voice message and the bot will reply with ready-to-read text in the chat.',
    'Загружай MP3, OGG, WAV, M4A и FLAC без отдельного конвертера.': 'Upload MP3, OGG, WAV, M4A or FLAC without a separate converter.',
    'Прикрепи аудио и дождись результата. Настройки не нужны.': 'Attach audio and wait for the result. No setup is needed.',
    'Читайте сообщения в шумном месте, тишине или при нарушениях слуха.': 'Read messages in noisy places, quiet spaces or when hearing is limited.',
    'Как использовать': 'How to use',
    'Три простых шага': 'Three simple steps',
    'Начать работу с VoiceScribe очень просто.': 'Getting started with VoiceScribe is easy.',
    'Добавь бота на сервер': 'Add the bot to your server',
    'Нажми «Добавить на сервер» и выбери нужный Discord-сервер.': 'Click “Add to server” and choose the Discord server you need.',
    'Отправь аудио': 'Send audio',
    'Прикрепи голосовое сообщение или аудиофайл.': 'Attach a voice message or audio file.',
    'Получи текст': 'Get the text',
    'Бот ответит готовой транскрипцией прямо в чате.': 'The bot will reply with the finished transcription in the chat.',
    'Форматы': 'Formats',
    'Поддерживаемые форматы': 'Supported formats',
    'VoiceScribe работает с большинством популярных аудиоформатов.': 'VoiceScribe works with most popular audio formats.',
    'Сценарии': 'Use cases',
    'Когда аудио неудобно слушать': 'When audio is hard to listen to',
    'VoiceScribe помогает не пропустить важное — в рабочем чате, на учёбе или в дороге.': 'VoiceScribe helps you stay up to date in work chats, while studying or on the go.',
    'Рабочие серверы': 'Work servers',
    'Быстро прочитай содержание сообщения и вернись к обсуждению.': 'Quickly read the message and return to the discussion.',
    'Учёба и заметки': 'Study and notes',
    'Преврати объяснение или идею в текст, который легко сохранить.': 'Turn an explanation or idea into text that is easy to save.',
    'Тихие места': 'Quiet places',
    'Пойми сообщение в транспорте, библиотеке или на встрече без звука.': 'Understand a message on public transport, in a library or at a meeting without sound.',
    'Коротко о работе бота': 'About the bot',
    'Как начать пользоваться?': 'How do I get started?',
    'Добавь VoiceScribe на Discord-сервер, отправь голосовое сообщение или поддерживаемый аудиофайл — бот ответит транскрипцией.': 'Add VoiceScribe to a Discord server, send a voice message or supported audio file, and the bot will reply with a transcription.',
    'Какие форматы поддерживаются?': 'Which formats are supported?',
    'MP3, OGG, WAV, M4A, FLAC и Discord Voice. Если формат не обработался, попробуй экспортировать файл в MP3.': 'MP3, OGG, WAV, M4A, FLAC and Discord Voice. If a format is not processed, try exporting it as MP3.',
    'Какие языки доступны?': 'Which languages are available?',
    'Сейчас доступны русский и английский языки.': 'Russian and English are currently available.',
    'Хранятся ли аудиофайлы?': 'Are audio files stored?',
    'Смотри актуальные условия обработки и хранения данных в правовых документах.': 'See the current data processing and storage terms in the legal documents.',
    'Готов попробовать?': 'Ready to try it?',
    'Добавь VoiceScribe на сервер и начни пользоваться ботом уже сейчас.': 'Add VoiceScribe to a server and start using the bot today.',
    'Добавить VoiceScribe': 'Add VoiceScribe',
    'Безлимитная транскрипция': 'Unlimited transcription',
    'Безлимитная транскрипция голосовых сообщений Discord без ограничений по количеству запросов.': 'Unlimited transcription of Discord voice messages with no request limit.',
    'Безлимитная транскрипция MP3, OGG, WAV и других популярных аудиоформатов.': 'Unlimited transcription of MP3, OGG, WAV and other popular audio formats.',
    'Статус Pro': 'Pro status',
    'Один Pro-статус для постоянного использования без регулярных ограничений по нагрузке.': 'One Pro status for continued use without regular capacity limits.',
    'Для любых серверов': 'For any server',
    'Подходит для личных, учебных и рабочих Discord-серверов с активным общением.': 'Suitable for personal, study and work Discord servers with active conversations.',
    'Главное и честное преимущество VoiceScribe Pro: безлимитное использование транскрипции без ограничений по количеству запросов.': 'The clear advantage of VoiceScribe Pro: unlimited transcription with no request limit.',
    'Станьте участником': 'Become a member of',
    'Поддержка помогает развивать бота и сохранять безлимитную транскрипцию.': 'Your support helps develop the bot and keep transcription unlimited.',
    'Удобная поддержка из России и СНГ': 'Convenient support from Russia and the CIS',
    'Международная подписка и поддержка': 'International subscription and support',
    'Разработан': 'Built by',
    'Мы не являемся аффилированным лицом компании Discord Inc.': 'We are not affiliated with Discord Inc.'
  };

  function translatePage(lang) {
    var walker = document.createTreeWalker(document.body, NodeFilter.SHOW_TEXT);
    var nodes = [];
    while (walker.nextNode()) nodes.push(walker.currentNode);
    nodes.forEach(function (node) {
      if (node.parentElement && node.parentElement.closest('[data-lang]')) return;
      if (node.parentElement && /^(SCRIPT|STYLE)$/.test(node.parentElement.tagName)) return;
      if (!node.__ruText) node.__ruText = node.nodeValue;
      if (lang === 'ru') {
        node.nodeValue = node.__ruText;
        return;
      }
      var original = node.__ruText;
      var translated = original;
      Object.keys(translations).sort(function (a, b) { return b.length - a.length; }).forEach(function (from) {
        translated = translated.split(from).join(translations[from]);
      });
      node.nodeValue = translated;
    });
    document.querySelectorAll('[aria-label], [title]').forEach(function (element) {
      ['aria-label', 'title'].forEach(function (attribute) {
        var value = element.getAttribute(attribute);
        if (!element.dataset.ruOriginal && value) element.dataset.ruOriginal = value;
        var original = element.dataset.ruOriginal;
        if (!original) return;
        var translated = original;
        Object.keys(translations).sort(function (a, b) { return b.length - a.length; }).forEach(function (from) {
          translated = translated.split(from).join(translations[from]);
        });
        element.setAttribute(attribute, lang === 'en' ? translated : original);
      });
    });
  }

  window.setLang = function (lang) {
    lang = lang === 'en' ? 'en' : 'ru';
    document.body.className = document.body.className.replace(/\blang-\w+\b/g, '').trim() + ' lang-' + lang;
    document.documentElement.lang = lang;
    translatePage(lang);

    var titleTranslations = {
      'VoiceScribe — транскрипция аудио в Discord': 'VoiceScribe — Audio transcription in Discord',
      'Premium — VoiceScribe': 'Premium — VoiceScribe',
      'Команды VoiceScribe': 'VoiceScribe Commands',
      'Правовые документы — VoiceScribe': 'Legal Documents — VoiceScribe',
      'VoiceScribe Pro': 'VoiceScribe Pro'
    };
    if (!document.documentElement.dataset.ruTitle) document.documentElement.dataset.ruTitle = document.title;
    var ruTitle = document.documentElement.dataset.ruTitle;
    document.title = lang === 'en' && titleTranslations[ruTitle] ? titleTranslations[ruTitle] : ruTitle;

    document.querySelectorAll('meta[name="description"], meta[property="og:description"]').forEach(function (meta) {
      var value = meta.getAttribute('content');
      if (!meta.__ruContent) meta.__ruContent = value;
      if (lang === 'en' && meta.__ruContent === 'Превращайте голосовые сообщения и аудиофайлы в читаемый текст прямо в Discord. Быстро, удобно и доступно.') {
        meta.setAttribute('content', 'Turn voice messages and audio files into readable text right in Discord. Fast, convenient and accessible.');
      } else if (lang === 'ru' && meta.__ruContent) {
        meta.setAttribute('content', meta.__ruContent);
      }
    });
    document.querySelectorAll('.lang-btn').forEach(function (button) {
      var label = button.textContent.trim().toLowerCase();
      button.classList.toggle('active', label === (lang === 'ru' ? 'ру' : 'en'));
    });
  };

  window.switchTab = function (tab) {
    document.querySelectorAll('[data-doc]').forEach(function (el) {
      el.classList.toggle('visible', el.getAttribute('data-doc') === tab);
    });
    document.querySelectorAll('.tab-btn').forEach(function (button) {
      button.classList.toggle('active', button.dataset.tab === tab);
    });
  };

  document.addEventListener('keydown', function (event) { if (event.key === 'Escape') closeNav(); });

  document.addEventListener('DOMContentLoaded', function () {
    document.querySelectorAll('.nav-links a').forEach(function (link) { link.addEventListener('click', closeNav); });
    document.querySelectorAll('.tab-btn').forEach(function (button) {
      button.addEventListener('click', function () { window.switchTab(button.dataset.tab); });
    });

    /* English is selected only for English browsers; Russian remains the fallback. */
    window.setLang(browserLanguage());
  });
}());
