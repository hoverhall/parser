preSTEP-1:
	- установите mongodb на ваш компьютер - https://www.mongodb.com/download-center/community
	  используйте инструкцию - https://medium.com/@LondonAppBrewery/how-to-download-install-mongodb-on-windows-4ee4b3493514 - выполните 1-3 шаги.
	- установите mongodb compass - https://www.mongodb.com/download-center/compass

preSTEP-2:
	- в папке проекта, откройте файл с названием "index.js" в любому редакторе кода
	- в строке :10 измените ссылку на сайт с которого вы хотите взять информацию
	- в строке :11 измените класс тэга на тот с которого вы будете брать информацию
	- в строке :12 в функции ".set()" в значениях ключей измените название класса - в этом классе должна содержаться нужная вам информация.

STEP-1: Подключение к mongodb:
	- добавьте путь к директории mongodb в переменные среды - https://www.architectryan.com/2018/03/17/add-to-the-path-on-windows-10/
	- откройте cmd или powerShell и напишите: > mongod
	- откройте mongodb Compass и нажмите кнопку "connect"

STEP-2: Установить все:
	- откройте директорию пректа в cmd или powerShell и напишите: > npm install
	- > npm install mongodb --save
	- > npm install osmosis --save

STEP-3: Начать выполнение:
	- откройте cmd или powerShell в директории проекта и напишите:
	  * > npm start
	- после этого вы можете проверить файл "data.json" и mongodb Compass

COMMENT: Обязательно отредактируйте код под себя!