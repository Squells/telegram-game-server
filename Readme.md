<h1>Телеграм бот для мониторинга и управления сервером Counter-Strike 1.6</h1>

<h2>Возможности</h2>
<ul>
  <li>
    Просмотр статуса сервера:
    <ul>
      <li>Название сервера.</li>
      <li>Текущая карта.</li>
      <li>Онлайн игроков.</li>
    </ul>
  </li>
</ul>

<h2>Требования</h2>
<ul>
  <li>Node.js >= 20</li>
</ul>

<h2>Установка и запуск</h2>
<ol>
  <li>Клонируйте репозиторий:<br><code>git clone https://github.com/Squells/telegram.git </code></li>
  <li>Перейдите в каталог проекта:<br><code>cd telegram</code></li>
  <li>Установите зависимости:<br><code>npm install</code></li>

  <li>Соберите проект:<br><code>npm run build</code></li>

  <li>Запустите сбилженный файл <code>node ./dist/app.js</code></li>
</ol>

<h2>Использование</h2>
<p>Начните диалог с ботом командой /start в Telegram.</p>

<h2>Конфигурация</h2>
<p>Переименуйте файл .env example -> .env, подставьте свои значения вместо дефолтных.</p>
