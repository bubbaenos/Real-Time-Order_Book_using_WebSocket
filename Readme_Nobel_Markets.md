## Readme Nobel Markets


> **Create Schema in MySQL(e.g mydb)**
- Go to root folder of project and in*** setting.py***. It contains all the settings related to database. Change the name according to your database. By default it is root with no password.
```python
username = "root" # change according to the system username
password = ""     # according to the password set
db_name = "mydb"  # name of the schema, it will create table if already not exist 
```

> **Two ways to create table in mydb schema**
- Easiest way to create table is just to run the ***WebSocketClient.py***. (It will create table with name 'ordername'). But before running ***WebSocketClient.py ***you need to follow *3rd step.*
- Other way is to run** *DataBase.sql*** file in MySQL enviornment or workbench or run below code with schema name ***mydb.***
```sql
use mydb
CREATE TABLE `orderBooks1` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `type` varchar(45) NOT NULL,
  `price` double NOT NULL,
  `amount` double NOT NULL,
  `count` double NOT NULL,
  `exchange` varchar(45) NOT NULL,
  `pairname` varchar(45) NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `id_UNIQUE` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=233787 DEFAULT CHARSET=utf8
```
*Above steps will  form a table.*
**Warning! MySQL DB will fill to lakhs of data in few minutes so be careful with your software and machine!**
** **
> ** Run Below command in shell. It will install all the dependencies to run the given project**
```python
pip install -r requirements.txt
```
> **Go to '*path_of_the_project/Mehul_Mistry/python_database/WebSocketClient.py'* to fill the database up with the real-time data from the websockets.**
```python
python WebSocketClient.py
```

> **Go to '*path_of_the_project/Mehul_Mistry/python_backend/WebService.py'* to handle the REST API endpoints.**
```python
python WebService.py
```
Above steps will start the backened. By default it will start at* [http://localhost:9505 *](http://localhost:6000)you can change it in the following codes:
```python
if __name__ == '__main__':
    app.listen(9505) # change port
    IOLoop.instance().start()
```
*Test the REST API endpoints by running *
[*http://localhost:9505 /noble-markets-realtime-order-book*](http://localhost:6000 /noble-markets-realtime-order-book)
[*http://localhost:9505 /noble-markets-order-book-snapshot*]( http://localhost:6000 /noble-markets-order-book-snapshot)

> **Now, time to start the frontend. Go to *'project_folder/Mehul_Mistry/NobelMarketsFrontEnd'* and run the project with the below terminal command.**


```typescript
npm start
```
- Visit [*http://localhost:4200*](http://localhost:3000)it should display the orderBook. 
- It will by default point to *'**noble-markets-realtime-order-book'*** endpoint when you visit *'**noble-markets-order-book-snapshot'* **it will display the Reactive form along with the Real-Time snapshots.
- Change the filters using drop-down to see the working of different filters.

## Snapshots:
In root folder 
1)  ***orderBook.jpeg***

2) ***snapShot1.jpeg***

3) ***snapShot2.jpeg***

## Video-Link:

[*https://youtu.be/p55cAsPVePY*](https://youtu.be/p55cAsPVePY)



