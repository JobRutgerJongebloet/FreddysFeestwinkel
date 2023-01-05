import mysql.connector

mydb = mysql.connector.connect(
    host="localhost",
    port=3306,
    user="root",
    password="",
    database="productencsv"
)


mycursor = mydb.cursor()
mycursor.execute("SELECT * FROM producten")
myresult = mycursor.fetchall()
print(myresult)

invoerproductnaam = input("vul product in ")
invoerprijs = input("vul prijs in ")
sql = "INSERT INTO producten(ID, naam, prijs) values(NULL,%s,%s)"
values = (invoerproductnaam, invoerprijs)
mycursor.execute(sql, values)

mydb.commit()
print(mycursor.rowcount, "product toegevoegd")