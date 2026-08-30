(function () {
  'use strict';

  var translations = {
    'Документы': 'Documents',
    'Команды': 'Commands',
    'Функции': 'Features',
    'Как работает': 'How it works',
    'Главная': 'Home',
    '+ Добавить': '+ Add',
    'Добавить бота': 'Add bot',
    'VoiceScribe · Разработан': 'VoiceScribe · Developed by',
    'Мы не являемся аффилированным лицом компании Discord Inc.': 'We are not affiliated with Discord Inc.',
    'Превращает голосовые сообщения и аудиофайлы в текст прямо в Discord. Для тех, кто не всегда может слушать.': 'Turns voice messages and audio files into text right in Discord. For those who cannot always listen.',
    'Добавить на сервер': 'Add to server',
    'Как это работает': 'How it works',
    'и другие форматы': 'and other formats',
    'Быстрая транскрипция': 'Fast transcription',
    'Поддержка языков': 'Language support',
    'Возможности': 'Features',
    'Всё, что нужно': 'Everything you need',
    'для транскрипции': 'for transcription',
    'VoiceScribe обрабатывает аудио и превращает его в читаемый текст быстро и без лишних действий.': 'VoiceScribe processes audio and turns it into readable text quickly and without extra steps.',
    'Голосовые сообщения': 'Voice messages',
    'Транскрибирует голосовые сообщения Discord одной командой. Больше не нужно слушать.': 'Transcribes Discord voice messages with one command. No need to listen anymore.',
    'Аудиофайлы': 'Audio files',
    'Поддерживает MP3, OGG, WAV и другие популярные аудиоформаты.': 'Supports MP3, OGG, WAV, and other popular audio formats.',
    'Быстро и просто': 'Fast and simple',
    'Просто отправь файл и бот сам всё сделает. Никаких сложных настроек.': 'Just send a file and the bot does the rest. No complicated setup.',
    'Доступность': 'Accessibility',
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
    'Готов попробовать?': 'Ready to try it?',
    'Добавь VoiceScribe на сервер и начни пользоваться ботом уже сейчас.': 'Add VoiceScribe to a server and start using the bot now.',
    'Добавить VoiceScribe': 'Add VoiceScribe',
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
      if (document.title === 'VoiceScribe — Транскрипция голоса') document.title = 'VoiceScribe — Voice transcription';
      if (document.title === 'Команды — VoiceScribe') document.title = 'Commands — VoiceScribe';
      if (document.title === 'Premium — VoiceScribe') document.title = 'Premium — VoiceScribe';
      if (document.title === 'Правовые документы — VoiceScribe') document.title = 'Legal documents — VoiceScribe';
      if (document.title === 'VoiceScribe Pro') document.title = 'VoiceScribe Pro';
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

  function init() {
    setLanguage(browserLanguage());
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
}());