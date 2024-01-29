//Что такое язык разметки гипертекста?
//HTML означает язык гипертекстовой разметки. Но что именно это значит? Гипертекст — это текст, содержащий ссылки на другой текст

//--------------------
//_HTML-документы

//__Заголовки
/* 
<body>
  <h1>Heading 1</h1>
  <h2>Heading 2</h2>
  <h3>Heading 3</h3>
  <h4>Heading 4</h4>
  <h5>Heading 5</h5>
  <h6>Heading 6</h6>
</body>
*/

//_-Параграфы
/* 
<p>
   This paragraph
   contains a lot of lines
   but they are ignored.
</p>
*/

//__Разрывы строк
/* 
<p>
   This paragraph<br>
   contains a lot of lines<br>
   and they are displayed.
</p>
*/

//__Strong
/* 
<p>
   No matter how much the dog barks: <strong>don't feed him chocolate</strong>.
</p>
*/

//__Bold
//Жирные теги следует использовать для привлечения внимания
/* 
<p>
   The primary colors are <b>red</b>, <b>yellow</b> and <b>blue</b>.
</p>
*/

//__Emphasis
//добавления подчеркивания к текст
/* 
<p>
   Wake up <em>now</em>!
</p>
*/

//__Italics
/* 
<p>
   The term <i>HTML</i> stands for HyperText Markup Language.
</p>
*/

//__Курсив представляе
/* 
My favourite book is <i>Dracula</i>.
*/

//__Списки
/* 
<ul>
   <li>Tea</li>
   <li>Sugar</li>
   <li>Milk</li>
</ul>
*/

//упорядочивать с помощью тега<ol
/* 
<ol>
   <li>Rocky</li>
   <li>Rocky II</li>
   <li>Rocky III</li>
</ol>
*/

//__Теги Div
// общий контейнер и не оказывает никакого влияния на содержимое
/* 
<div>
   <p>This is a paragraph inside a div</p>
</div>

может быть вложен внутрь других элементов
<div>
   <div>
      <p>This is a paragraph inside a div that’s inside another div</p>
   </div>
</div>
*/

//__Комментарии
//<!-- This is a comment -->

//-----------------------
//__Связывание документов
// добавить ссылку на страницу about.html на Вашу страницу home.html
//<a href="about.html">Об информации</a>

//----------------------
//__Добавление изображений на веб-страницу с помощью HTML
//<img src="example.jpg" width="100" height="100" />

//---------------------
//__Используйте HTML для работы с данными в таблицах
/* 
<table>
    <thead>
      <tr>
        <th>Заголовок колонки 1</th>
        <th>Заголовок колонки 2</th>
        <th>Заголовок колонки 3</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td>Ячейка 1,1</td>
        <td>Ячейка 1,2</td>
        <td>Ячейка 1,3</td>
      </tr>
      <tr>
        <td>Ячейка 2,1</td>
        <td>Ячейка 2,2</td>
        <td>Ячейка 2,3</td>
      </tr>
    </tbody>
  </table>
*/

//--------------
//__Что такое формы?
//Формы в HTML являются средством взаимодействия с пользователем и позволяют собирать и отправлять данные на сервер для обработки
//HTML предоставляет несколько элементов, которые используются для создания форм, включая <form>, <input>, <select>, <textarea>, <button> и другие.
/* 
текстового поля ввод
<form>
  <label for="name">Имя:</label>
  <input type="text" id="name" name="name" placeholder="Введите ваше имя" required>
  <input type="submit" value="Отправить">
</form>

Пример флажка
<form>
  <label for="checkbox">Я согласен с условиями:</label>
  <input type="checkbox" id="checkbox" name="agree" required>
  <input type="submit" value="Отправить">
</form>

Пример выпадающего списк
<form>
  <label for="country">Страна:</label>
  <select id="country" name="country">
    <option value="usa">США</option>
    <option value="uk">Великобритания</option>
    <option value="france">Франция</option>
  </select>
  <input type="submit" value="Отправить">
</form>

Пример многострочного текстового поля
<form>
  <label for="message">Сообщение:</label>
  <textarea id="message" name="message" rows="4" cols="50" placeholder="Введите ваше сообщение" required></textarea>
  <input type="submit" value="Отправить">
</form>

группы радиокнопок:
<form>
  <label>Выберите пол:</label><br>
  <input type="radio" id="male" name="gender" value="male" required>
  <label for="male">Мужской</label><br>
  <input type="radio" id="female" name="gender" value="female" required>
  <label for="female">Женский</label><br>
  <input type="submit" value="Отправить">
</form>
*/

//--------------------------
//__Введение в DOM
//DOM (Document Object Model) - это программное представление HTML-документа, которое позволяет JavaScript и другим языкам программирования взаимодействовать с элементами и содержимым веб-страниц.Когда браузер загружает HTML-документ, он создает древовидное представление структуры документа, где каждый элемент HTML представлен в виде объекта.DOM представляет каждый элемент HTML в виде узла (node) в древовидной структуре, где корневым узлом является элемент <html>, а его дочерними узлами являются элементы <head> и <body>, и так далее.

//-------------------------
//__Веб-доступность
//Веб-доступность (Web Accessibility) означает создание и разработку веб-сайтов, приложений и других онлайн-ресурсов таким образом, чтобы они были доступны и использовались людьми с ограниченными возможностями
//Вот некоторые принципы и методы, которые помогают достичь веб-доступности - Понятная и доступная семанти / Удобочитаемый текст / Использование альтернативных текстовых описаний / Управление клавиатурой / Понятная навигация / Отзывчивые формы и элементы управления / Тестирование и обратная связь

//-------------------------
//__Выбор и стилизация
//Однако CSS — это краска, обои, фитинги, иллюстрации и общий стиль или внешний вид

