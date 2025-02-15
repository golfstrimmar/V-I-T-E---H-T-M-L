const fs = require("fs");
const path = require("path");

// Функция для создания структуры папки и файлов
function createComponent(componentName) {
  // Путь к папке src/pug/components
  const componentsDir = path.join(__dirname, "src", "pug", "components");

  // Проверка, существует ли папка src/pug/components, если нет - создадим её
  if (!fs.existsSync(componentsDir)) {
    fs.mkdirSync(componentsDir, { recursive: true });
    console.log(`Папка '${componentsDir}' была успешно создана.`);
  }

  // Создание папки для компонента в src/pug/components
  const componentDir = path.join(componentsDir, componentName);

  // Проверим, существует ли папка с таким именем
  if (!fs.existsSync(componentDir)) {
    fs.mkdirSync(componentDir);
    console.log(`Папка '${componentName}' успешно создана.`);
  } else {
    console.log(`Папка '${componentName}' уже существует.`);
    return;
  }

  // Путь к файлам внутри папки компонента
  const pugFilePath = path.join(componentDir, `${componentName}.pug`);
  const scssFilePath = path.join(componentDir, `${componentName}.scss`);
  const cssFilePath = path.join(componentDir, `${componentName}.css`);

  // Шаблон для файла Pug
  const pugContent = `//- ${componentName} component template
doctype html
html
  head
    title ${componentName}
  body
    h1 This is the ${componentName} component
    // Add more markup here`;

  // Шаблон для файла SCSS
  const scssContent = `// ${componentName} styles
.${componentName} {
  background-color: #f0f0f0;
  padding: 20px;
  border: 1px solid #ccc;
}`;

  // Шаблон для файла CSS (пустой, для того чтобы компилировать SCSS)
  const cssContent = `/* ${componentName} compiled CSS */`;

  // Запись контента в файлы
  fs.writeFileSync(pugFilePath, pugContent, "utf8");
  fs.writeFileSync(scssFilePath, scssContent, "utf8");
  fs.writeFileSync(cssFilePath, cssContent, "utf8");

  console.log(`Файлы для компонента '${componentName}' успешно созданы.`);
}

// Вызов функции с примером компонента
const componentName = process.argv[2]; // Получаем имя компонента из аргументов командной строки
if (!componentName) {
  console.log("Пожалуйста, укажите имя компонента.");
  process.exit(1);
}

createComponent(componentName);
