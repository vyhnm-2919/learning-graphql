const resolver = {
  Query: {
    books: async (parent, args, { mongooseDataMethods }) =>
      await mongooseDataMethods.getAllBooks(),
    book: async (parent, { id }, { mongooseDataMethods }) =>
      await mongooseDataMethods.getBookById(id),
    authors: async (parent, args, { mongooseDataMethods }) =>
      await mongooseDataMethods.getAllAuthors(),
    author: async (parent, { id }, { mongooseDataMethods }) =>
      await mongooseDataMethods.getAuthorById(id),
    todos: async (parent, args, { mongooseDataMethods }) =>
      await mongooseDataMethods.getAllTodo(),
    todo: async (parent, { id }, { mongooseDataMethods }) =>
      await mongooseDataMethods.getTodoById(id),
    categories: async (parent, args, { mongooseDataMethods }) =>
      await mongooseDataMethods.getAllCategory(),
    category: async (parent, { id }, { mongooseDataMethods }) =>
      await mongooseDataMethods.getCategoryById(id),
    // color
    colors: async (parent, args, { mongooseDataMethods }) =>
      await mongooseDataMethods.getAllColor(),
    color: async (parent, { id }, { mongooseDataMethods }) =>
      await mongooseDataMethods.getColorById(id),
    // product
    products: async (parent, args, { mongooseDataMethods }) =>
      await mongooseDataMethods.getAllProduct(),
    product: async (parent, { id }, { mongooseDataMethods }) =>
      await mongooseDataMethods.getProductById(id),
    // user
    users: async (parent, args, { mongooseDataMethods }) =>
      await mongooseDataMethods.getAllUser(),
    user: async (parent, { id }, { mongooseDataMethods }) =>
      await mongooseDataMethods.getUserById(id),
    // price range
    price_ranges: async (parent, args, { mongooseDataMethods }) =>
      await mongooseDataMethods.getAllPriceRange(),
    price_range: async (parent, { id }, { mongooseDataMethods }) =>
      await mongooseDataMethods.getPriceRangeById(id),
  },
  Product: {
    user: async ({ userId }, args, { mongooseDataMethods }) =>
      await mongooseDataMethods.getUserById(userId),
    category: async ({ categoryId }, args, { mongooseDataMethods }) =>
      await mongooseDataMethods.getCategoryById(categoryId),
    color: async ({ colorId }, args, { mongooseDataMethods }) =>
      await mongooseDataMethods.getColorById(colorId),
    price_range: async ({ price_rangeId }, args, { mongooseDataMethods }) =>
      await mongooseDataMethods.getPriceRangeById(price_rangeId),
  },
  Category: {
    products: async ({ categoryId }, args, { mongooseDataMethods }) =>
      await mongooseDataMethods.getProductById({ categoryId: categoryId }),
  },
  User: {
    products: async ({ userId }, args, { mongooseDataMethods }) =>
      await mongooseDataMethods.getProductById({ userId: userId }),
  },
  Color: {
    products: async ({ colorId }, args, { mongooseDataMethods }) =>
      await mongooseDataMethods.getProductById({ colorId: colorId }),
  },
  PriceRange: {
    products: async ({ price_rangeId }, args, { mongooseDataMethods }) =>
      await mongooseDataMethods.getProductById({
        price_rangeId: price_rangeId,
      }),
  },
  Book: {
    author: async ({ authorId }, args, { mongooseDataMethods }) =>
      await mongooseDataMethods.getAuthorById(authorId),
  },
  Author: {
    books: async ({ id }, args, { mongooseDataMethods }) =>
      await mongooseDataMethods.getAllBooks({ authorId: id }),
  },
  Mutation: {
    createAuthor: async (parent, args, { mongooseDataMethods }) =>
      await mongooseDataMethods.createAuthor(args),
    createBook: async (parent, args, { mongooseDataMethods }) =>
      await mongooseDataMethods.createBook(args),
    createTodo: async (parent, args, { mongooseDataMethods }) =>
      await mongooseDataMethods.createTodo(args),
    createCategory: async (parent, args, { mongooseDataMethods }) =>
      await mongooseDataMethods.createCategory(args),
    createColor: async (parent, args, { mongooseDataMethods }) =>
      await mongooseDataMethods.createColor(args),
    createUser: async (parent, args, { mongooseDataMethods }) =>
      await mongooseDataMethods.createUser(args),
    createPriceRange: async (parent, args, { mongooseDataMethods }) =>
      await mongooseDataMethods.createPriceRange(args),
    createProduct: async (parent, args, { mongooseDataMethods }) =>
      await mongooseDataMethods.createProduct(args),
    createContact: async (parent, args, { mongooseDataMethods }) =>
      await mongooseDataMethods.createContact(args),
  },
};

module.exports = resolver;
