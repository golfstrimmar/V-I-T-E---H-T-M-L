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
  fs.writeFileSync(pugFile, "", "utf8");
  console.log(`Файл ${componentName}.pug был успешно создан в ${pugFile}`);

  fs.writeFileSync(scssFile, "", "utf8");
  console.log(`Файл ${componentName}.scss был успешно создан в ${scssFile}`);

  fs.writeFileSync(jsFile, "", "utf8");
  console.log(`Файл ${componentName}.js был успешно создан в ${jsFile}`);
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
