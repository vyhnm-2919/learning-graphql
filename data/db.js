const Author = require("../models/Author");
const Book = require("../models/Book");
const Todo = require("../models/Todo");
const Category = require("../models/Category");
const Color = require("../models/Color");
const PriceRange = require("../models/PriceRange");
const Product = require("../models/Product");
const User = require("../models/User");
const Contact = require("../models/Contact");

const moongoseDataMethods = {
  // book
  getAllBooks: async () => await Book.find(),
  getBookById: async (id) => await Book.findById(id),

  // author
  getAllAuthors: async () => await Author.find(),
  getAuthorById: async (id) => await Author.findById(id),

  // product
  getAllProduct: async (id) => await Product.find(),
  getProductById: async (id) => await Product.findById(id),

  // user
  getAllUser: async () => await User.find(),
  getUserById: async (id) => await User.findById(id),

  // color
  getAllColor: async (id) => await Color.find(),
  getColorById: async (id) => await Color.findById(id),

  // category
  getAllCategory: async () => await Category.find(),
  getCategoryById: async (id) => await Category.findById(id),

  // price range
  getAllPriceRange: async (id) => await PriceRange.find(),
  getPriceRangeById: async (id) => await PriceRange.findById(id),

  //contact
  getAllContact: async (id) => await Contact.find(),
  getContactById: async (id) => await Contact.findById(id),

  createAuthor: async (args) => {
    const newAuthor = new Author(args);
    return await newAuthor.save();
  },
  createBook: async (args) => {
    const newBook = new Book(args);
    return await newBook.save();
  },
  createTodo: async (args) => {
    const newTodo = new Todo(args);
    return await newTodo.save();
  },
  createCategory: async (args) => {
    const newCategory = new Category(args);
    return await newCategory.save();
  },
  createColor: async (args) => {
    const newColor = new Color(args);
    return await newColor.save();
  },
  createPriceRange: async (args) => {
    const newPriceRange = new PriceRange(args);
    return await newPriceRange.save();
  },
  createUser: async (args) => {
    const newUser = new User(args);
    return await newUser.save();
  },
  createProduct: async (args) => {
    const newProduct = new Product(args);
    return await newProduct.save();
  },
  createContact: async (args) => {
    const newcontact = new Contact(args);
    return await newcontact.save();
  },
};

module.exports = moongoseDataMethods;
