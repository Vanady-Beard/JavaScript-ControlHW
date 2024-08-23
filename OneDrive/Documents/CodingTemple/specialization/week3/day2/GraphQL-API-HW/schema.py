from graphene import ObjectType, String, Int, List, Field, Mutation, Schema

# Define a BakeryProduct class
class BakeryProduct(ObjectType):
    id = Int()
    name = String()
    price = Int()
    quantity = Int()
    category = String()

# In-memory list to store bakery products
products = []

# Define a Query class
class Query(ObjectType):
    products = List(BakeryProduct)

    def resolve_products(root, info):
        return products

# Define mutations for creating, updating, and deleting products
class CreateProduct(Mutation):
    class Arguments:
        name = String(required=True)
        price = Int(required=True)
        quantity = Int(required=True)
        category = String(required=True)

    product = Field(lambda: BakeryProduct)

    def mutate(root, info, name, price, quantity, category):
        product = BakeryProduct(id=len(products) + 1, name=name, price=price, quantity=quantity, category=category)
        products.append(product)
        return CreateProduct(product=product)

class UpdateProduct(Mutation):
    class Arguments:
        id = Int(required=True)
        name = String()
        price = Int()
        quantity = Int()
        category = String()

    product = Field(lambda: BakeryProduct)

    def mutate(root, info, id, name=None, price=None, quantity=None, category=None):
        product = next((p for p in products if p.id == id), None)
        if product:
            if name:
                product.name = name
            if price:
                product.price = price
            if quantity:
                product.quantity = quantity
            if category:
                product.category = category
        return UpdateProduct(product=product)

class DeleteProduct(Mutation):
    class Arguments:
        id = Int(required=True)

    ok = String()

    def mutate(root, info, id):
        global products
        products = [p for p in products if p.id != id]
        return DeleteProduct(ok="Product deleted")

class Mutation(ObjectType):
    create_product = CreateProduct.Field()
    update_product = UpdateProduct.Field()
    delete_product = DeleteProduct.Field()

schema = Schema(query=Query, mutation=Mutation)
