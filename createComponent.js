import fs from "fs";
import path from "path";
import readline from "readline";

// Создаем интерфейс для ввода с командной строки
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

// Функция для создания компонента с пустыми файлами PUG, SCSS и JS
const createComponent = (componentName) => {
  // Получаем текущую рабочую директорию
  const projectDir = process.cwd();

  // Путь к папке компонента в src/pug/components
  const componentFolder = path.join(
    projectDir,
    "src",
    "pug",
    "components",
    componentName
  );

  // Проверка, существует ли папка компонента, если нет - создаем
  if (!fs.existsSync(componentFolder)) {
    fs.mkdirSync(componentFolder, { recursive: true });
    console.log(`Папка для компонента ${componentName} была успешно создана.`);
  } else {
    console.log(`Папка для компонента ${componentName} уже существует.`);
  }

  // Пути к файлам компонента
  const pugFile = path.join(componentFolder, `${componentName}.pug`);
  const scssFile = path.join(componentFolder, `${componentName}.scss`);
  const jsFile = path.join(componentFolder, `${componentName}.js`);

  // Создание пустых файлов PUG, SCSS и JS
  fs.writeFileSync(pugFile, `${componentName}`, "utf8");
  console.log(`Файл ${componentName}.pug был успешно создан в ${pugFile}`);

  fs.writeFileSync(scssFile, `${componentName}`, "utf8");
  console.log(`Файл ${componentName}.scss был успешно создан в ${scssFile}`);

  fs.writeFileSync(jsFile, `${componentName}`, "utf8");
  console.log(`Файл ${componentName}.js был успешно создан в ${jsFile}`);

  // Пути к main.scss и index.pug
  const mainScssFile = path.join(projectDir, "src", "scss", "main.scss");
  const mainPugFile = path.join(projectDir, "src", "pug", "pages", "index.pug");

  // Строка импорта для main.scss
  const scssImport = `@import "./../pug/components/${componentName}/${componentName}.scss";\n`;

  // Строка включения для index.pug (с табом)
  const pugInclude = `\tinclude ../../components/${componentName}/${componentName}.pug\n`;

  // Обновление main.scss
  try {
    if (fs.existsSync(mainScssFile)) {
      const scssContent = fs.readFileSync(mainScssFile, "utf8");
      if (!scssContent.includes(scssImport.trim())) {
        fs.appendFileSync(mainScssFile, scssImport, "utf8");
        console.log(`Добавлен импорт в ${mainScssFile}: ${scssImport.trim()}`);
      }
    } else {
      console.log(
        `Файл ${mainScssFile} не найден. Пропускаем добавление импорта SCSS.`
      );
    }
  } catch (err) {
    console.error(`Ошибка при обновлении ${mainScssFile}: ${err.message}`);
  }

  // Обновление index.pug
  try {
    if (fs.existsSync(mainPugFile)) {
      let pugContent = fs.readFileSync(mainPugFile, "utf8");
      if (!pugContent.includes(pugInclude.trim())) {
        // Ищем main.inner с учетом табов и переносов строк
        const mainInnerRegex = /^[\t]*main\.inner[\t]*(\r?\n)/m;
        const match = pugContent.match(mainInnerRegex);
        if (match) {
          const insertPosition = match.index + match[0].length;
          pugContent =
            pugContent.slice(0, insertPosition) +
            pugInclude +
            pugContent.slice(insertPosition);
          fs.writeFileSync(mainPugFile, pugContent, "utf8");
          console.log(
            `Добавлено включение в ${mainPugFile} после main.inner: ${pugInclude.trim()}`
          );
        } else {
          console.log(
            `Строка "main.inner" не найдена в ${mainPugFile}. Добавляем include в конец файла.`
          );
          fs.appendFileSync(mainPugFile, pugInclude, "utf8");
        }
      }
    } else {
      console.log(
        `Файл ${mainPugFile} не найден. Пропускаем добавление включения Pug.`
      );
    }
  } catch (err) {
    console.error(`Ошибка при обновлении ${mainPugFile}: ${err.message}`);
  }
};

// Запрашиваем имя компонента у пользователя
rl.question("Введите название нового компонента: ", (componentName) => {
  if (!componentName) {
    console.log("Имя компонента не может быть пустым.");
    rl.close();
    process.exit(1); // Завершаем процесс с ошибкой
  }

  // Создаем компонент с заданным именем
  createComponent(componentName);

  // Закрываем интерфейс readline и завершаем процесс
  rl.close();
  process.exit(0); // Завершаем процесс успешно
});
