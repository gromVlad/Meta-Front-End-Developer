//Как работает Интернет
//устройство все соединены через сети
//сервер позволяет соединять множество устройств
//также одни серверы могут подключаться к другим и т.д.
//интернет соединяет сервер и клиента
//мировые сети соеденены через кабели подводные

//Что такое веб-сервер и как он работает?
//работает в центре обработки данных
//постоянное питание, подключение к интернету и их работа 24 часа в сутки
//аппаратное обеспечения -  физическая часть
//програмная обеспечение - метафизическая часть в интернете
//хранение и администрирвание сайта
//хранение данных
//безопасность и управление эл. почтой
//цикл ответа на запрос - клиент -> cервер -> дата -> и обратно
//для обработки тысяч запросо от клиентов в секунду

//Что такое веб-сайты и веб-страницы?
//веб-страницы - страница с контентом в браузере
//сайт - это набор веб страниц связанных между собой
//могут иметь ссылки на другие сайты
//простой вариант страницы - текстовый документ который можно отредактировать 
//надо знать три технологии -> html /css / js
//html - язык гипертекстовой разметки
//css - стилизация
//js - язык програмирование встроеных в браузер
//когда с сервера приходит страница в браузер то каждая строка кода обрабатываеться последовательно от первой до последней
//этот процесс создание известен как рендеринг страницы

//Что такое веб-браузер и как он работает?
//Програмное приложение которое для просмотра контента
//url -> содержит протокол https: / доменое имя www.coursera.org / путь к файлу /learn
//браузер отпровляет запрос по сети и подключаеться к серверу / в ответ сервер отпровляет веб страницу обратно в браузер и страница поисковой ситсемы становиться видимой
//страница - закодированный документ
//данные которые берет сервер храняться базе данных

//Веб-хостинг
//услуга при которой мы размещаем свой сайт на веб сервере хостинговой компании 
//арендуем пространство
//общий хостинг / виртуальный частный хостинг / выделенный хостинг / облачный хостинг
//виртуальный хостинг - платим за размещение на веб сервере содержащий множество учетных данных / делим места с другими пользователми поэтому производительность невысокая / для небольшого сайта
//VPS hosting - выделенный хостинг с памятью и пропускной способностью / не влияют на прозводительность т.к находться в отдельных своих vps все пользователи / дороже
//Выделенный хостинг - сервер только для тебя 
//Облачный хостинг - в облачной среде на вертуальном сервере / берем столько ресурсов сколько нужно но при этом и платим за это в зависемости от наших затрат при работе. Облачный хостинг использует комбинацию физических и виртуальных серверов

//__тест
/* 
В модели клиент/сервер устройством доступа является ____________________.

Клиент

Вопрос 2
Адрес сайта, который Вы набираете в своем веб-браузере для перехода на сайт, называется ____________________.

Доменное имя

Серверы обычно хранятся в здании, называемом ____________________.

Центр обработки данных

Физические компоненты сервера называются ____________________.

Аппаратное обеспечение

Назначение веб-сервера - ____________________.

Получать запросы от веб-браузера и отвечать на них правильным содержанием, соответствующим этому запросу.

Правда или ложь. Веб-сайт может состоять из нескольких веб-страниц, связанных между собой.

True

Ссылки, на которые Вы щелкаете в своем веб-браузере, известны как ____________________.

Гиперссылки

Когда Вы запускаете веб-сайт в "облаке", он ограничивается одним физическим сервером.

False
*/

//---------------------------------
//__Основные интернет-технологии__//

//-------------------------------
//_Введение в протоколы Интернета
//помочь гарантировать, что данные поступают так, чтобы они не были повреждены, потеряны или потеряны во время передачи
//ip address - работает как адресс в почтовой системе
//интернет протолы 4(192.0.2.235) и 6(4572.8579...) версии популярны на данный момент
//отпровлем в виде серии сообщений называемые ip пакеты ( в них указаны ip адрес источника и получателя)
//также полезная нагрузка содержит данные и другие протолы
//протол tsp для отправки данных которые должны прийти коректно и в определенном порядке , может справиться с пакетами данных, пришедшими не по порядку, поврежденными или испорченными, отброшенными или потерянными, хотя и ценой небольшой задержки.
//протол udp - решает проблему с поврежденными пакетами , могут приходить попорядку или не приходить вообще / для потоковых данных, типо видео или голосовые сообщения

//--------------------
//_Введение в HTTP
//HTTP является основным операционным протоколом всемирной паутины
//HTTP — это протокол связи, который вы используете при просмотре веб-страниц. HTTP означает протокол передачи гипертекста
//это протокол, основанный на ответе на запрос
//Запрос HTTP состоит из метода, пути, версии и заголовков.
//Метод HTTP описывает тип действия, которое должен выполнить клиент. Основными или наиболее часто используемыми методами HTTP являются GET, POST, PUT и DELETE
//Часто используемые http/1.1
//Заголовки содержат дополнительную информацию о запросе и клиенте, который его отправляет
//Коды состояния HTTP, содержащиеся в заголовке, указывают на выполнение HTTP-запроса. Существует пять групп кодов состояния. Они сгруппированы по первой цифре номера ошибки. Информационные сгруппированы 100-199. Успешные ответы сгруппированы по 200-299. Сообщение о перенаправлении: 300-399. Ответы на ошибки клиента варьируются от 400 до 499, а ответы на ошибки сервера — от 500 до 599.
//HTTPS — это безопасная версия HTTP, используется так называемое шифрование, значок блокировки слева в браузере
//Синтаксис HTTPS-запросов включает метод, путь, версии и заголовки. HTTP-ответы имеют тот же формат, что и запрос.

//---------------------
//_Примеры HTTP
//Она состоит из метода HTTP, запрашиваемого ресурса и версии протокола HTTP. -> GET / home.html HTTP / 1.1
//Методы HTTP указывают на действие, которое клиент хочет выполнить над ресурсом веб-сервера

//Заголовки HTTP-запроса :
// Host: example.com - Host определяет хост сервера и указывает, откуда запрашивается ресурс
// User - Agent: Mozilla / 5.0(Macintosh; Intel Mac OS X 10.9; rv: 50.0) Gecko / 20100101 Firefox / 50.0 - информирует веб-сервер о приложении, которое выполняет запрос
// Accept: */* - тип содержимого клиент примет в качестве ответа
// Accept-Language: en - указывает язык и, опционально, локаль, которую предпочитает клиент
// Content-type: text/json - тип содержимого, передаваемого в теле запроса

//Тело HTTP-запроса - для передачи данных
/* 
OST /users HTTP/1.1
Host: example.com

{
 "key1":"value1",
 "key2":"value2",
 "array1":["value3","value4"]
}
*/

//_Ответы HTTP
//Первая строка ответа - это строка статуса HTTP/1.1 200 OK 

//Заголовки ответа HTTP
//Общими заголовками ответа являются:
// Date: Fri, 11 Feb 2022 15:00:00 GMT + 2 - определяет дату и время, когда был сгенерирован HTTP-ответ
// Server: Apache / 2.2.14(Linux) - программное обеспечение веб-сервера, использованное для генерации ответа
// Content - Length: 84 - описывает длину ответа
// Content - Type: text / html - медиа-тип возвращаемого ресурса

//Тело ответа HTTP
/* 
HTTP/1.1 200 OK
Date: Fri, 11 Feb 2022 15:00:00 GMT+2
Server: Apache/2.2.14 (Linux)
Content-Length: 84
Content-Type: text/html

<html>
  <head><title>Test</title></head>
  <body>Test HTML page.</body>
</html>
*/

//----------------------------------
//_Другие протоколы Интернета
//динамической конфигурации хоста, или, как его еще называют, DHCP,Он назначает Вашему компьютеру IP-адрес и отвечает по протоколу, чтобы сообщить ему, какой IP-адрес следует использовать
//DNS - способ узнать, с каким IP-адресом ему общаться, когда Вы посещаете веб-сайт
//IMAP - способ загрузки электронной почты и управления Вашим почтовым ящиком на сервер
//SMTP - способ отправки электронной почты
//POP - более старый протокол, используемый для загрузки электронных писем
//FTP - Протокол передачи файлов 
//SSH - позволяет Вам подключаться к SSH-серверу, работающему на сервере, для выполнения команд на удаленном компьютере
//SFTP - Протокол передачи файлов,гарантирует, что данные будут передаваться безопасно

//-----------------------------------------
//_Веб-страницы, веб-сайты и веб-приложения
//веб приложения более интерактивнее чем веб сайт, отображает контент на основе ввода пользователя

//---------------------
//_Тест
/* 
При отправке сообщения на другой компьютер источник и пункт назначения указываются с помощью ________________.

iP-адрес

Какие из следующих адресов являются действительными IP-адресами? Выберите все, что применимо.

192.0.2.235
4527:0db8:0a00:1567:0200:ff00:0042:8329

При использовании TCP данные могут поступать не по порядку.

True

Какие из следующих методов являются допустимыми методами HTTP? Выберите все, что применимо.

ПОЛУЧИТЬ
ПОСТ
DELETE

Когда Вы набираете адрес веб-сайта (например, coursera.org) в своем веб-браузере, какой протокол используется для определения IP-адреса веб-сайта?

Протокол системы доменных имен (DNS)

Вопрос 7
Веб-приложение более ________________ по сравнению с веб-сайтом.

Интерактивный

HTML описывает структуру и содержание веб-страницы.

True
*/

//--------------------------
//__Инструменты разработчика
//которые позволяют разработчикам инспектировать свой HTML, CSS и Javascript код. А также отслеживать http-запросы к веб-серверу, исследовать проблемы производительности и оценивать безопасность веб-страниц

//--------------------------
//_Фреймворки и библиотеки
//Библиотеки — это повторно используемые фрагменты кода, которые можно использовать в вашем приложении
//Фреймворки представляют собой структуру, в которой разработчик предоставляет свой собственный код , с которым фреймворк взаимодействует(использует дригие библиотеки),отличный способ сократить время разработки и упорядочить написание кода. В них уже внедрено множество лучших практик.

//--------------------------
//__API и сервисы
//API — это набор функций и процедур для создания приложений, которые обращаются к функциям или данным операционной системы, приложения или другого сервиса
//Одним из распространенных типов API являются браузерные или веб-API, которые встроены в сам браузер
//REST или передача репрезентативного состояния — это набор принципов, которые помогают создавать высокоэффективные API. Одной из основных обязанностей таких API является отправка и получение данных в централизованную базу данных и из нее
//Последний тип API, с которым вы можете столкнуться как веб-разработчик, — это API на основе датчиков

//--------------------------
//___Что такое IDE?
//Интегрированная среда разработки или IDE — это программное обеспечение для создания приложений. IDE похожа на текстовый редактор, за исключением того, что вместо написания документов вы пишете код. Доступно множество IDE, некоторые из которых предназначены только для одного языка программирования, а другие поддерживают несколько языков в одной IDE.

//------------------------
//__Тест
/* 
Что из нижеперечисленного можно сделать с помощью инструментов разработчика в Вашем браузере? Выберите все, что относится к данному вопросу.

Осмотрите HTML-элементы веб-страницы.
Проверьте журналы ошибок JavaScript.
Просмотрите временную шкалу запросов и ответов HTTP.
Проверьте производительность и использование памяти веб-страницы.

При разработке программного обеспечения библиотека предоставляет _________________________.
Многократно используемые фрагменты кода, которые могут быть использованы Вашим приложением.

В разработке программного обеспечения API - это _________________________.

набор функций, которые может обеспечить компонент приложения или сервис.

Какие из перечисленных ниже преимуществ дает использование интегрированной среды разработки (IDE), такой как Visual Studio Code? Выберите все, что применимо.

Выделение синтаксиса
Выделение ошибок
Автозаполнение
IntelliSense
*/

//-----------------------
//__Заключительный тест
/* 
Что из нижеперечисленного можно сделать с помощью инструментов разработчика в Вашем браузере? Выберите все, что относится к данному вопросу.

Осмотрите HTML-элементы веб-страницы.
Проверьте журналы ошибок JavaScript.
Просмотрите временную шкалу запросов и ответов HTTP.
Проверьте производительность и использование памяти веб-страницы.

При разработке программного обеспечения библиотека предоставляет _________________________.

Многократно используемые фрагменты кода, которые могут быть использованы Вашим приложением.

В разработке программного обеспечения API - это _________________________.

набор функций, которые может обеспечить компонент приложения или сервис.

Какие из перечисленных ниже преимуществ дает использование интегрированной среды разработки (IDE), такой как Visual Studio Code? Выберите все, что применимо.

Выделение синтаксиса
Выделение ошибок
Автозаполнение
IntelliSense

Когда два компьютера подключаются непосредственно друг к другу, это образует ______________.

Сеть

Программы, которые выполняются на компьютере, называются ______________.

Программное обеспечение

Структура веб-страницы определяется с помощью ______________.

HTML

Компьютеры общаются друг с другом с помощью какого протокола?

Протокол Интернета

Чтобы установить связь с другим компьютером в сети, Ваш компьютер посылает сообщение, называемое __________________.

IP-пакет

Веб-браузер и веб-сервер используют какой протокол для передачи данных?

HTTP

При разработке программного обеспечения фреймворк предоставляет разработчикам структуру для создания приложения.

True

Будучи разработчиком, лучше всего использовать _____________ для написания и сопровождения кода.

Интегрированная среда разработки

В разработке программного обеспечения API - это набор функций, которые может предоставлять компонент приложения или сервис.

True
*/