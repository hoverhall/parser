preSTEP-1:
	- ���������� mongodb �� ��� ��������� - https://www.mongodb.com/download-center/community
	  ����������� ���������� - https://medium.com/@LondonAppBrewery/how-to-download-install-mongodb-on-windows-4ee4b3493514 - ��������� 1-3 ����.
	- ���������� mongodb compass - https://www.mongodb.com/download-center/compass

preSTEP-2:
	- � ����� �������, �������� ���� � ��������� "index.js" � ������ ��������� ����
	- � ������ :10 �������� ������ �� ���� � �������� �� ������ ����� ����������
	- � ������ :11 �������� ����� ���� �� ��� � �������� �� ������ ����� ����������
	- � ������ :12 � ������� ".set()" � ��������� ������ �������� �������� ������ - � ���� ������ ������ ����������� ������ ��� ����������.

STEP-1: ����������� � mongodb:
	- �������� ���� � ���������� mongodb � ���������� ����� - https://www.architectryan.com/2018/03/17/add-to-the-path-on-windows-10/
	- �������� cmd ��� powerShell � ��������: > mongod
	- �������� mongodb Compass � ������� ������ "connect"

STEP-2: ���������� ���:
	- �������� ���������� ������ � cmd ��� powerShell � ��������: > npm install
	- > npm install mongodb --save
	- > npm install osmosis --save

STEP-3: ������ ����������:
	- �������� cmd ��� powerShell � ���������� ������� � ��������:
	  * > npm start
	- ����� ����� �� ������ ��������� ���� "data.json" � mongodb Compass

COMMENT: ����������� �������������� ��� ��� ����!