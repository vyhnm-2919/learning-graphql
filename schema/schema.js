const { gql } = require("apollo-server-express");

const typeDefs = gql`
  type Book {
    id: ID
    name: String
    genre: String
    author: Author
  }
  type Contact {
    id: ID!
    email: String
    name: String
    message: String
    created: String
  }
  type Author {
    id: ID!
    name: String
    age: Int
    books: [Book]
  }
  type Todo {
    id: ID
    title: String
    completed: Boolean
  }
  type Category {
    id: ID!
    categoryName: String
    products: [Product]
  }
  type User {
    id: ID!
    firstname: String
    lastname: String
    avatar: String
    products: [Product]
    orders: [Order]
  }
  type PriceRange {
    id: ID!
    text: String
    price_gte: Int
    price_lte: Int
    unit: String
    products: [Product]
  }
  type Color {
    id: ID!
    name: String
    value: String
    products: [Product]
  }
  type Review {
    id: ID!
    user: User
    content: String
  }
  type Product {
    id: ID!
    name: String
    description: String
    color: Color
    image: [String]
    reviews: [Review]
    ratings: Int
    category: Category
    user: User
    price: Int
    unit: String
    price_range: PriceRange
  }
  type OrderDetail {
    id: ID!
    count: Int
    subtotal: Int
    unit: Int
    products: [Product]
  }
  type Order {
    id: ID!
    total: Int
    unit: String
    count: Int
    note: String
    created: String
    updated: String
    order_details: [OrderDetail]
  }
  # ROOT TYPE
  type Query {
    books: [Book]
    book(id: ID!): Book
    authors: [Author]
    author(id: ID!): Author
    todos: [Todo]
    todo(id: ID!): Todo
    categories: [Category]
    category(id: ID!): Category
    users: [User]
    user(id: ID!): User
    colors: [Color]
    color(id: ID!): Color
    price_ranges: [PriceRange]
    price_range(id: ID!): PriceRange
    products: [Product]
    product(id: ID!): Product
    order_details: [OrderDetail]
    order_detail(id: ID!): OrderDetail
    orders: [Order]
    order(id: ID!): Order
    contacts: [Contact]
    contact(id: ID!): Contact
  }
  type Mutation {
    createAuthor(name: String, age: Int): Author
    createBook(name: String, genre: String, authorId: ID!): Book
    createTodo(title: String, completed: Boolean): Todo
    createCategory(categoryName: String): Category
    createUser(firstname: String, lastname: String, avatar: String): User
    createColor(name: String): Color
    createProduct(name: String, description: String, colorId: ID!, price_rangeId: ID!, categoryId: ID!, price: Int, unit: String, image: [String], ratings: Int, userId: ID!): Product
    createPriceRange(text: String, price_gte: Int, price_lte: Int, unit: String): PriceRange
    createOrderDetail(count: Int, subtotal: Int, unit: String): OrderDetail
		createOrder(total: Int, unit: String, count: Int, note: String): Order
    createContact(email: String, name: String, message: String, created: String): Contact
  }
`;
module.exports = typeDefs;
