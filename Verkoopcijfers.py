import pandas as pd
from IPython.display import HTML

df = pd.read_csv('SA2019.csv')
html_table = df.to_html()
HTML(html_table)
with open('Verkoopcijfers.html', 'w') as f:
  f.write(html_table)
