(function () {
  'use strict';

  var translations = {
    // English
    en: {
      // Shared navigation & footer
      'Документы': 'Documents',
      'Команды': 'Commands',
      'Функции': 'Features',
      'Как работает': 'How it works',
      'Главная': 'Home',
      '+ Добавить': '+ Add',
      'Добавить бота': 'Add bot',
      'VoiceScribe · Разработан': 'VoiceScribe · Developed by',
      'Мы не являемся аффилированным лицом компании Discord Inc.': 'We are not affiliated with Discord Inc.',
      'Меню': 'Menu',
      'На связи': 'Online',
      'Связаться': 'Contact',
      'Проекты': 'Projects',

      // Index page
      'Discord developer': 'Discord developer',
      'Делаю ботов, которые ': 'I build bots that ',
      'Делаю ботов, которые': 'I build bots that',
      'помогают.': 'help.',
      'Создаю Discord-ботов и полезные инструменты для серверов. Мой главный проект — VoiceScribe, бот для перевода голосовых сообщений в текст.': 'I build Discord bots and useful tools for servers. My main project is VoiceScribe, a bot that turns voice messages into text.',
      'Добавить VoiceScribe': 'Add VoiceScribe',
      'Смотреть проекты': 'View projects',
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

      // General page
      'Превращает голосовые сообщения и аудиофайлы в текст прямо в Discord. Для тех, кто не всегда может слушать.': 'Turns voice messages and audio files into text right in Discord. For those who cannot always listen.',
      'Добавить на сервер': 'Add to server',
      '🚀 Добавить на сервер': '🚀 Add to server',
      '🚀 Добавить VoiceScribe': '🚀 Add VoiceScribe',
      'Как это работает': 'How it works',
      'Форматов аудио': 'Audio formats',
      'Быстрая обработка': 'Fast processing',
      'Языков распознавания': 'Recognition languages',
      '~3 сек': '~3 sec',
      'Все аудиоформаты': 'All audio formats',
      'Мгновенный ответ': 'Instant response',
      'Транскрипция за 2-3 секунды': 'Transcription in 2-3 seconds',
      'Умное распознавание': 'Smart recognition',
      'Автоопределение языка': 'Auto language detection',
      'Сегодня в 17:59': 'Today at 5:59 PM',
      'Сегодня в 18:00': 'Today at 6:00 PM',
      '«Привет! Напоминаю, что встреча сегодня в шесть часов вечера.»': '“Hey! Just a reminder that the meeting is today at 6 PM.”',
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
      'Международная подписка и поддержка': 'International subscription and support'
    },

    // German
    de: {
      // Shared navigation & footer
      'Документы': 'Dokumente',
      'Команды': 'Befehle',
      'Функции': 'Funktionen',
      'Как работает': 'Funktionsweise',
      'Главная': 'Startseite',
      '+ Добавить': '+ Hinzufügen',
      'Добавить бота': 'Bot hinzufügen',
      'VoiceScribe · Разработан': 'VoiceScribe · Entwickelt von',
      'Мы не являемся аффилированным лицом компании Discord Inc.': 'Wir sind nicht mit Discord Inc. verbunden.',
      'Меню': 'Menü',
      'На связи': 'Online',
      'Связаться': 'Kontakt',
      'Проекты': 'Projekte',

      // Index page
      'Discord developer': 'Discord-Entwickler',
      'Делаю ботов, которые ': 'Ich erstelle Bots, die ',
      'Делаю ботов, которые': 'Ich erstelle Bots, die',
      'помогают.': 'helfen.',
      'Создаю Discord-ботов и полезные инструменты для серверов. Мой главный проект — VoiceScribe, бот для перевода голосовых сообщений в текст.': 'Ich entwickle Discord-Bots und nützliche Tools für Server. Mein Hauptprojekt ist VoiceScribe, ein Bot zur Transkription von Sprachnachrichten in Text.',
      'Добавить VoiceScribe': 'VoiceScribe hinzufügen',
      'Смотреть проекты': 'Projekte ansehen',
      'Открыт для новых идей': 'Offen für neue Ideen',
      'Discord-разработчик': 'Discord-Entwickler',
      'Разработка ботов, автоматизация и интеграции — без лишней сложности и перегруженных решений.': 'Bot-Entwicklung, Automatisierung und Integrationen — ohne unnötige Komplexität.',
      'Избранные проекты': 'Ausgewählte Projekte',
      'Что я создаю': 'Was ich erstelle',
      'Проекты и разработка под заказ': 'Projekte und Auftragsentwicklung',
      'Открыть страницу проекта': 'Projektseite öffnen',
      'Бот распознаёт голосовые сообщения и аудиофайлы, чтобы их можно было быстро прочитать прямо в Discord.': 'Der Bot erkennt Sprachnachrichten und Audiodateien, damit man sie direkt in Discord lesen kann.',
      'Боты под заказ': 'Individuelle Bots',
      'Автоматизация, команды, роли и интеграции под конкретный сервер или задачу.': 'Automatisierung, Befehle, Rollen und Integrationen für bestimmte Server oder Aufgaben.',
      'Обсудить идею': 'Idee besprechen',
      'Обо мне': 'Über mich',
      'Люблю понятные решения, которые экономят время и действительно используются каждый день.': 'Ich mag klare Lösungen, die Zeit sparen und täglich genutzt werden.',
      'Поддержать проект': 'Projekt unterstützen',
      'Если VoiceScribe оказался полезен, поддержать проект можно здесь.': 'Wenn VoiceScribe nützlich war, kannst du das Projekt hier unterstützen.',

      // General page
      'Превращает голосовые сообщения и аудиофайлы в текст прямо в Discord. Для тех, кто не всегда может слушать.': 'Verwandelt Sprachnachrichten und Audiodateien direkt in Discord in Text. Für alle, die nicht immer zuhören können.',
      'Добавить на сервер': 'Zum Server hinzufügen',
      '🚀 Добавить на сервер': '🚀 Zum Server hinzufügen',
      '🚀 Добавить VoiceScribe': '🚀 VoiceScribe hinzufügen',
      'Как это работает': 'Wie es funktioniert',
      'Форматов аудио': 'Audioformate',
      'Быстрая обработка': 'Schnelle Verarbeitung',
      'Языков распознавания': 'Erkennungssprachen',
      '~3 сек': '~3 Sek.',
      'Все аудиоформаты': 'Alle Audioformate',
      'Мгновенный ответ': 'Sofortige Antwort',
      'Транскрипция за 2-3 секунды': 'Transkription in 2-3 Sekunden',
      'Умное распознавание': 'Intelligente Erkennung',
      'Автоопределение языка': 'Automatische Spracherkennung',
      'Сегодня в 17:59': 'Heute um 17:59',
      'Сегодня в 18:00': 'Heute um 18:00',
      '«Привет! Напоминаю, что встреча сегодня в шесть часов вечера.»': '„Hallo! Zur Erinnerung: Das Treffen findet heute um 18:00 Uhr statt.“',
      'и другие форматы': 'und weitere Formate',
      'Быстрая транскрипция': 'Schnelle Transkription',
      'Поддержка языков': 'Sprachunterstützung',
      'Возможности': 'Funktionen',
      'Всё, что нужно': 'Alles, was du brauchst',
      'для транскрипции': 'für Transkriptionen',
      'VoiceScribe обрабатывает аудио и превращает его в читаемый текст быстро и без лишних действий.': 'VoiceScribe verarbeitet Audio und verwandelt es schnell und mühelos in lesbaren Text.',
      'Голосовые сообщения': 'Sprachnachrichten',
      'Транскрибирует голосовые сообщения Discord одной командой. Больше не нужно слушать.': 'Transkribiert Discord-Sprachnachrichten mit einem Befehl. Kein Anhören mehr nötig.',
      'Аудиофайлы': 'Audiodateien',
      'Поддерживает MP3, OGG, WAV и другие популярные аудиоформаты.': 'Unterstützt MP3, OGG, WAV und andere gängige Audioformate.',
      'Быстро и просто': 'Schnell und einfach',
      'Просто отправь файл и бот сам всё сделает. Никаких сложных настроек.': 'Sende einfach eine Datei und der Bot erledigt den Rest. Keine komplizierten Einstellungen.',
      'Доступность': 'Barrierefreiheit',
      'Создан для людей, которые не могут слушать аудио в шуме, в тишине или при нарушениях слуха.': 'Entwickelt für Personen, die Audio bei Lärm, in Ruhe oder bei Hörbeeinträchtigungen nicht hören können.',
      'Как использовать': 'Verwendung',
      'Три простых шага': 'Drei einfache Schritte',
      'Начать работу с VoiceScribe очень просто.': 'Der Einstieg in VoiceScribe ist kinderleicht.',
      'Добавь бота на сервер': 'Bot zum Server hinzufügen',
      'Нажми «Добавить на сервер» и выбери нужный Discord-сервер.': 'Klicke auf „Zum Server hinzufügen“ und wähle deinen Discord-Server.',
      'Отправь аудио': 'Audio senden',
      'Прикрепи голосовое сообщение или аудиофайл.': 'Hänge eine Sprachnachricht oder Audiodatei an.',
      'Получи текст': 'Text erhalten',
      'Бот ответит готовой транскрипцией прямо в чате.': 'Der Bot antwortet mit der fertigen Transkription direkt im Chat.',
      'Форматы': 'Formate',
      'Поддерживаемые форматы': 'Unterstützte Formate',
      'VoiceScribe работает с большинством популярных аудиоформатов.': 'VoiceScribe funktioniert mit den meisten gängigen Audioformaten.',
      'Готов попробовать?': 'Bereit es auszuprobieren?',
      'Добавь VoiceScribe на сервер и начни пользоваться ботом уже сейчас.': 'Füge VoiceScribe zu deinem Server hinzu und nutze den Bot sofort.',

      // Pro page
      'Главное и честное преимущество VoiceScribe Pro: безлимитное использование транскрипции без ограничений по количеству запросов.': 'Der ehrlichste Vorteil von VoiceScribe Pro: unbegrenzte Transkription ohne Einschränkungen bei der Anzahl der Anfragen.',
      'Безлимитная транскрипция голосовых сообщений Discord без ограничений по количеству запросов.': 'Unbegrenzte Transkription von Discord-Sprachnachrichten ohne Anfragelimits.',
      'Безлимитная транскрипция MP3, OGG, WAV и других популярных аудиоформатов.': 'Unbegrenzte Transkription von MP3, OGG, WAV und anderen gängigen Audioformaten.',
      'Статус Pro': 'Pro-Status',
      'Один Pro-статус для постоянного использования без регулярных ограничений по нагрузке.': 'Ein Pro-Status für die dauerhafte Nutzung ohne wiederkehrende Auslastungsgrenzen.',
      'Для любых серверов': 'Für jeden Server',
      'Подходит для личных, учебных и рабочих Discord-серверов с активным общением.': 'Geeignet für private, schulische und geschäftliche Discord-Server mit reger Kommunikation.',
      'Станьте участником': 'Mitglied werden bei',
      'Поддержка помогает развивать бота и сохранять безлимитную транскрипцию.': 'Deine Unterstützung hilft, den Bot weiterzuentwickeln und unbegrenzte Transkriptionen zu ermöglichen.',
      'Удобная поддержка из России и СНГ': 'Bequemer Support aus Russland und der GUS',
      'Международная подписка и поддержка': 'Internationales Abonnement und Support'
    },

    // Italian
    it: {
      // Shared navigation & footer
      'Документы': 'Documenti',
      'Команды': 'Comandi',
      'Функции': 'Funzionalità',
      'Как работает': 'Come funziona',
      'Главная': 'Home',
      '+ Добавить': '+ Aggiungi',
      'Добавить бота': 'Aggiungi bot',
      'VoiceScribe · Разработан': 'VoiceScribe · Sviluppato da',
      'Мы не являемся аффилированным лицом компании Discord Inc.': 'Non siamo affiliati a Discord Inc.',
      'Меню': 'Menu',
      'На связи': 'Online',
      'Связаться': 'Contattami',
      'Проекты': 'Progetti',

      // Index page
      'Discord developer': 'Sviluppatore Discord',
      'Делаю ботов, которые ': 'Creo bot che ',
      'Делаю ботов, которые': 'Creo bot che',
      'помогают.': 'aiutano.',
      'Создаю Discord-ботов и полезные инструменты для серверов. Мой главный проект — VoiceScribe, бот для перевода голосовых сообщений в текст.': 'Sviluppo bot Discord e strumenti utili per i server. Il mio progetto principale è VoiceScribe, un bot per trascrivere messaggi vocali in testo.',
      'Добавить VoiceScribe': 'Aggiungi VoiceScribe',
      'Смотреть проекты': 'Vedi i progetti',
      'Открыт для новых идей': 'Aperto a nuove idee',
      'Discord-разработчик': 'Sviluppatore Discord',
      'Разработка ботов, автоматизация и интеграции — без лишней сложности и перегруженных решений.': 'Sviluppo di bot, automazioni e integrazioni — senza inutili complessità.',
      'Избранные проекты': 'Progetti in evidenza',
      'Что я создаю': 'Cosa creo',
      'Проекты и разработка под заказ': 'Progetti e sviluppo su misura',
      'Открыть страницу проекта': 'Apri pagina del progetto',
      'Бот распознаёт голосовые сообщения и аудиофайлы, чтобы их можно было быстро прочитать прямо в Discord.': 'Il bot converte messaggi vocali e file audio in testo per leggerli direttamente in Discord.',
      'Боты под заказ': 'Bot personalizzati',
      'Автоматизация, команды, роли и интеграции под конкретный сервер или задачу.': 'Automazione, comandi, ruoli e integrazioni per qualsiasi server o scopo.',
      'Обсудить идею': 'Discuti un\'idea',
      'Обо мне': 'Chi sono',
      'Люблю понятные решения, которые экономят время и действительно используются каждый день.': 'Prediligo soluzioni chiare che risparmiano tempo e vengono usate ogni giorno.',
      'Поддержать проект': 'Supporta il progetto',
      'Если VoiceScribe оказался полезен, поддержать проект можно здесь.': 'Se VoiceScribe ti è stato utile, puoi supportare il progetto qui.',

      // General page
      'Превращает голосовые сообщения и аудиофайлы в текст прямо в Discord. Для тех, кто не всегда может слушать.': 'Trasforma messaggi vocali e file audio in testo direttamente su Discord. Per chi non può sempre ascoltare.',
      'Добавить на сервер': 'Aggiungi al server',
      '🚀 Добавить на сервер': '🚀 Aggiungi al server',
      '🚀 Добавить VoiceScribe': '🚀 Aggiungi VoiceScribe',
      'Как это работает': 'Come funziona',
      'Форматов аудио': 'Formati audio',
      'Быстрая обработка': 'Elaborazione rapida',
      'Языков распознавания': 'Lingue di riconoscimento',
      '~3 сек': '~3 sec',
      'Все аудиоформаты': 'Tutti i formati audio',
      'Мгновенный ответ': 'Risposta istantanea',
      'Транскрипция за 2-3 секунды': 'Trascrizione in 2-3 secondi',
      'Умное распознавание': 'Riconoscimento smart',
      'Автоопределение языка': 'Rilevamento automatico lingua',
      'Сегодня в 17:59': 'Oggi alle 17:59',
      'Сегодня в 18:00': 'Oggi alle 18:00',
      '«Привет! Напоминаю, что встреча сегодня в шесть часов вечера.»': '«Ciao! Ti ricordo che l\'incontro è oggi alle 18:00.»',
      'и другие форматы': 'e altri formati',
      'Быстрая транскрипция': 'Trascrizione rapida',
      'Поддержка языков': 'Supporto linguistico',
      'Возможности': 'Funzionalità',
      'Всё, что нужно': 'Tutto ciò di cui hai bisogno',
      'для транскрипции': 'per la trascrizione',
      'VoiceScribe обрабатывает аудио и превращает его в читаемый текст быстро и без лишних действий.': 'VoiceScribe elabora l\'audio e lo trasforma in testo leggibile rapidamente e senza passaggi extra.',
      'Голосовые сообщения': 'Messaggi vocali',
      'Транскрибирует голосовые сообщения Discord одной командой. Больше не нужно слушать.': 'Trascrive i messaggi vocali di Discord con un solo comando. Non serve più ascoltare.',
      'Аудиофайлы': 'File audio',
      'Поддерживает MP3, OGG, WAV и другие популярные аудиоформаты.': 'Supporta MP3, OGG, WAV e altri popolari formati audio.',
      'Быстро и просто': 'Veloce e semplice',
      'Просто отправь файл и бот сам всё сделает. Никаких сложных настроек.': 'Invia semplicemente un file e il bot farà il resto. Nessuna configurazione complicata.',
      'Доступность': 'Accessibilità',
      'Создан для людей, которые не могут слушать аудио в шуме, в тишине или при нарушениях слуха.': 'Creato per persone che non possono ascoltare audio nel rumore, nel silenzio o con problemi di udito.',
      'Как использовать': 'Come si usa',
      'Три простых шага': 'Tre semplici passaggi',
      'Начать работу с VoiceScribe очень просто.': 'Iniziare a usare VoiceScribe è semplicissimo.',
      'Добавь бота на сервер': 'Aggiungi il bot al server',
      'Нажми «Добавить на сервер» и выбери нужный Discord-сервер.': 'Fai clic su "Aggiungi al server" e seleziona il server Discord desiderato.',
      'Отправь аудио': 'Invia audio',
      'Прикрепи голосовое сообщение или аудиофайл.': 'Allega un messaggio vocale o un file audio.',
      'Получи текст': 'Ricevi il testo',
      'Бот ответит готовой транскрипцией прямо в чате.': 'Il bot risponderà con la trascrizione completa direttamente in chat.',
      'Форматы': 'Formati',
      'Поддерживаемые форматы': 'Formati supportati',
      'VoiceScribe работает с большинством популярных аудиоформатов.': 'VoiceScribe supporta la maggior parte dei formati audio più diffusi.',
      'Готов попробовать?': 'Pronto a provarlo?',
      'Добавь VoiceScribe на сервер и начни пользоваться ботом уже сейчас.': 'Aggiungi VoiceScribe al tuo server e inizia a usarlo subito.',

      // Pro page
      'Главное и честное преимущество VoiceScribe Pro: безлимитное использование транскрипции без ограничений по количеству запросов.': 'Il vantaggio principale e trasparente di VoiceScribe Pro: trascrizione illimitata senza limiti al numero di richieste.',
      'Безлимитная транскрипция голосовых сообщений Discord без ограничений по количеству запросов.': 'Trascrizione illimitata di messaggi vocali Discord senza limiti di richieste.',
      'Безлимитная транскрипция MP3, OGG, WAV и других популярных аудиоформатов.': 'Trascrizione illimitata di MP3, OGG, WAV e altri formati audio diffusi.',
      'Статус Pro': 'Stato Pro',
      'Один Pro-статус для постоянного использования без регулярных ограничений по нагрузке.': 'Un unico stato Pro per un uso continuativo senza limiti di carico periodici.',
      'Для любых серверов': 'Per qualsiasi server',
      'Подходит для личных, учебных и рабочих Discord-серверов с активным общением.': 'Ideale per server Discord personali, di studio e di lavoro con comunicazioni frequenti.',
      'Станьте участником': 'Unisciti a',
      'Поддержка помогает развивать бота и сохранять безлимитную транскрипцию.': 'Il tuo supporto aiuta a sviluppare il bot e a mantenere attiva la trascrizione illimitata.',
      'Удобная поддержка из России и СНГ': 'Supporto comodo dalla Russia e dalla CSI',
      'Международная подписка и поддержка': 'Abbonamento e supporto internazionale'
    }
  };

  var pageTitles = {
    en: {
      'Quger — Discord-боты и проекты': 'Quger — Discord bots and projects',
      'VoiceScribe — Транскрипция голоса': 'VoiceScribe — Audio transcription in Discord',
      'VoiceScribe — транскрипция': 'VoiceScribe — Audio transcription in Discord',
      'Команды — VoiceScribe': 'Commands — VoiceScribe',
      'Premium — VoiceScribe': 'Premium — VoiceScribe',
      'VoiceScribe Pro': 'VoiceScribe Pro',
      'Правовые': 'Legal Documents — VoiceScribe'
    },
    de: {
      'Quger — Discord-боты и проекты': 'Quger — Discord-Bots und Projekte',
      'VoiceScribe — Транскрипция голоса': 'VoiceScribe — Audio-Transkription in Discord',
      'VoiceScribe — транскрипция': 'VoiceScribe — Audio-Transkription in Discord',
      'Команды — VoiceScribe': 'Befehle — VoiceScribe',
      'Premium — VoiceScribe': 'Premium — VoiceScribe',
      'VoiceScribe Pro': 'VoiceScribe Pro',
      'Правовые': 'Rechtliche Dokumente — VoiceScribe'
    },
    it: {
      'Quger — Discord-боты и проекты': 'Quger — Bot Discord e progetti',
      'VoiceScribe — Транскрипция голоса': 'VoiceScribe — Trascrizione audio in Discord',
      'VoiceScribe — транскрипция': 'VoiceScribe — Trascrizione audio in Discord',
      'Команды — VoiceScribe': 'Comandi — VoiceScribe',
      'Premium — VoiceScribe': 'Premium — VoiceScribe',
      'VoiceScribe Pro': 'VoiceScribe Pro',
      'Правовые': 'Documenti legali — VoiceScribe'
    }
  };

  function detectBrowserLanguage() {
    var rawLangs = navigator.languages || [navigator.language || 'ru'];
    for (var i = 0; i < rawLangs.length; i += 1) {
      var lang = (rawLangs[i] || '').toLowerCase();
      if (/^(ru|uk|be|kk)(?:-|$)/.test(lang)) return 'ru';
      if (/^de(?:-|$)/.test(lang)) return 'de';
      if (/^it(?:-|$)/.test(lang)) return 'it';
      if (/^en(?:-|$)/.test(lang)) return 'en';
    }
    // Fallback for all other international visitors
    return 'en';
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

  function applyTextTranslations(lang) {
    if (lang === 'ru') return;
    var dict = translations[lang] || translations.en;
    if (!dict) return;

    // Explicit keys are used for UI fragments where text can be nested or
    // changed by markup. They are more reliable than matching all text nodes.
    document.querySelectorAll('[data-i18n]').forEach(function (element) {
      var key = element.getAttribute('data-i18n');
      if (key && dict[key]) element.textContent = dict[key];
    });

    var walker = document.createTreeWalker(document.body, NodeFilter.SHOW_TEXT);
    var nodes = [];
    while (walker.nextNode()) nodes.push(walker.currentNode);

    nodes.forEach(function (node) {
      var original = node.nodeValue;
      if (!original) return;
      var trimmed = original.trim();
      if (trimmed && dict[trimmed]) {
        node.nodeValue = original.replace(trimmed, dict[trimmed]);
      } else {
        // Partial string matching for compound phrases
        for (var key in dict) {
          if (dict.hasOwnProperty(key) && original.indexOf(key) !== -1) {
            original = original.split(key).join(dict[key]);
            node.nodeValue = original;
          }
        }
      }
    });

    // Update document title
    var titles = pageTitles[lang] || pageTitles.en;
    if (titles) {
      for (var tKey in titles) {
        if (titles.hasOwnProperty(tKey) && document.title.indexOf(tKey) !== -1) {
          document.title = titles[tKey];
          break;
        }
      }
    }
  }

  function applyLanguageVisibility(lang) {
    document.documentElement.lang = lang;

    // Update body classes
    var classes = document.body.className.split(/\s+/).filter(function (c) {
      return !/^lang-/.test(c) && c !== 'fallback-lang-en';
    });
    classes.push('lang-' + lang);
    document.body.className = classes.join(' ').trim();

    // Check data-lang containers for fallback if specific language isn't directly in DOM
    var allDataLang = document.querySelectorAll('[data-lang]');
    var hasSpecificLang = false;
    allDataLang.forEach(function (el) {
      if (el.getAttribute('data-lang') === lang) {
        hasSpecificLang = true;
      }
    });

    // If no specific language blocks found and not Russian, fallback data-lang to 'en'
    if (!hasSpecificLang && lang !== 'ru') {
      document.body.classList.add('fallback-lang-en');
    }

    // Update aria labels
    var menu = document.querySelector('.burger');
    if (menu) {
      var menuLabels = { ru: 'Меню', de: 'Menü', it: 'Menu', en: 'Menu' };
      menu.setAttribute('aria-label', menuLabels[lang] || 'Menu');
    }
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

  window.switchTab = window.switchTab || function (tab) {
    var docs = document.querySelectorAll('[data-doc]');
    for (var i = 0; i < docs.length; i += 1) {
      docs[i].classList.toggle('visible', docs[i].getAttribute('data-doc') === tab);
    }
    var buttons = document.querySelectorAll('.tab-btn');
    for (var j = 0; j < buttons.length; j += 1) {
      var isTarget = buttons[j].getAttribute('data-tab') === tab ||
        (tab === 'privacy' && j === 0) ||
        (tab === 'terms' && j === 1);
      buttons[j].classList.toggle('active', isTarget);
    }
  };

  function init() {
    var detected = detectBrowserLanguage();
    applyLanguageVisibility(detected);
    applyTextTranslations(detected);

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
