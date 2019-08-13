MenuItems: A Food Menu Visualization

Overview:
A mix of simple bibliographic description of the menus (created by The New York Public Library) and the culinary and economic content of the menus are used as data to reflect all the menus, dishes, prices and more in the graphical representation. 

Functionality and MVP
Users are able to:
[] See a broad overview of the menus by category
[] See menus by year
[] See dishes by price

Data and APIS
  Data is freely available through API and direct download(csv) from http://menus.nypl.org/data. This visualization uses locally stored data as .csv.
  
WireFrame
  This visualization consists of a single screen a) containing a primary data list, b) interactive graph, c) a panel to refine data by year/price d) and links to the information modal, Github and LinkedIn(e). Footer(f) includes copywright.
<img width="1029" alt="Screen Shot 2019-08-13 at 6 14 15 AM" src="https://user-images.githubusercontent.com/46845773/62936685-752be380-bd98-11e9-9b48-21457acc294a.png">

Architecture and Technologies
  MenuItems is built with:
  * JavaScript for data retrival and computaion
  * D3.js + HTML5 + CSS3 for interactive visualization
  * Webpack and Babel to bundle js files.
  
Bonus Features
  
