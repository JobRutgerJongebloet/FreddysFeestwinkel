import mysql.connector
import csv
import os

# verbinding met de db
cnx = mysql.connector.connect(
    host="localhost",
    user="root",
    port=3306,
    password="",
    database="productencsv"
)

# cursor
cursor = cnx.cursor()

# Lijst met alle tabellen in de db
cursor.execute("SHOW TABLES")
tables = cursor.fetchall()

# gebruiker kiest een tabel om te laten zien
print("Select a table:")
for i, table in enumerate(tables):
    print(f"{i}: {table[0]}")
table_index = int(input())
table_name = tables[table_index][0]

# alle rijen uit de gekozen tabel ophalen
cursor.execute(f"SELECT * FROM {table_name}")
rows = cursor.fetchall()

# alle rijen naar een csv bestand
folder = r"C:\Users\Admin\Desktop\projectpy\projectpy\Verkoopcijfers\VerkoopcijfersCSV"
filename = f"{table_name}.csv"
filepath = os.path.join(folder, filename)

with open(filepath, "w", newline="") as csv_file:
    writer = csv.writer(csv_file, quoting=csv.QUOTE_MINIMAL)
    for row in rows:
        writer.writerow(row)


# cursor en verbinding sluiten
cursor.close() 
cnx.close()
