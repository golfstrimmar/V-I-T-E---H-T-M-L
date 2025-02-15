const fs = require("fs");
const path = require("path");

// Функция для создания структуры папки и пустых файлов
function createComponent(componentName) {

const componentFolder = path.join(
  __dirname,
  "src",
  "Components",
  componentName
);




  const currentDir = path.dirname(new URL(import.meta.url).pathname);
  const componentsDir = path.join(currentDir, "src", "pug", "components");

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

  // Путь к пустым файлам внутри папки компонента
  const pugFilePath = path.join(componentDir, `${componentName}.pug`);
  const scssFilePath = path.join(componentDir, `${componentName}.scss`);
  const cssFilePath = path.join(componentDir, `${componentName}.css`);

  // Создание пустых файлов
  fs.writeFileSync(pugFilePath, "", "utf8");
  fs.writeFileSync(scssFilePath, "", "utf8");
  fs.writeFileSync(cssFilePath, "", "utf8");

  console.log(
    `Пустые файлы для компонента '${componentName}' успешно созданы.`
  );
}

// Вызов функции с примером компонента
const componentName = process.argv[2]; // Получаем имя компонента из аргументов командной строки
if (!componentName) {
  console.log("Пожалуйста, укажите имя компонента.");
  process.exit(1);
}

createComponent(componentName);
