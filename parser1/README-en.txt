preSTEPS-1: 
	- install mongodb into your computer - https://www.mongodb.com/download-center/community
	  Use the instruction - https://medium.com/@LondonAppBrewery/how-to-download-install-mongodb-on-windows-4ee4b3493514 and complete 1-3 steps
	- install mongodb compass - https://www.mongodb.com/download-center/compass

preSTEP-2:
	- in project directory open file with name "index.js" in any code redactor
	- in line :10 change the site link on the one you want
	- in line :11 change the tag class where you will find the data
	- in line :12 in function ".set()" in keys values change the tag class - this classes have to contain the data.

STEP-1: Connect to mongodb:
	- add mongodb path to path veriables - https://www.architectryan.com/2018/03/17/add-to-the-path-on-windows-10/
	- open cmd and type: > mongod
	- open mongodb Compass and press button "connect"

STEP-2: Install all:
	- open a project folder in cmd or powerShell and type: > npm install
	- > npm install mongodb --save
	- > npm install osmosis --save

STEP-3: Start an execution:
	- open cmd or powerShell in project directory and type:
	  * > npm start
	- after that you can check the file "data.json" and mongodb Compass