# Store Front Project


## Open API


[BestBuy Open API](https://bestbuyapis.github.io/api-documentation/#overview)

Best Buy Developer API
suite allows you to query Products, Stores and much more. 
Responses can be returned in either JSON or XML.

**Subcategories of Category "TV & Home Theater"**
https://api.bestbuy.com/v1/categories(id=abcat0100000)?format=json&&apiKey=YourKey

**Products in subcategory "Projectors & Screens"**
https://api.bestbuy.com/v1/products(categoryPath.id=pcmcat158900050008)?format=json&show=sku,name,salePrice,image&sort=salePrice&apiKey=YourKey