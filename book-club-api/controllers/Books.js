const ErrorResponse = require('../utils/errorResponse')
const asyncHandler = require('../middleware/async')
const Book = require('../models/Book')

// @desc    Show all books
// @route   GET /api/v1/books
// @access  Public
exports.getBooks = asyncHandler(async (req, res, next) => {
  const book = await Book.find({})

  res.json(book)
})

// @desc    Show single book
// @route   GET /api/v1/books/:id
// @access  Public
exports.getSingleBook = asyncHandler(async (req, res, next) => {
  const book = await Book.findById(req.params.id)

  if (!book) {
    return next(
      new ErrorResponse(`Book not found with id of ${req.params.id}. Please add correct id`, 404)
    )
  }

  res.status(200).json({success: true, data: book})
})

// @desc    Publish Book
// @route   POST /api/v1/books
// @access  Private
exports.createBook = asyncHandler(async (req, res, next) => {
  const book = await Book.create(req.body)

  res.status(201).json({
    success: true,
    data: book,
  })
})

// @desc    Update book
// @route   PUT /api/v1/books/:id
// @access  Private
exports.updateBook = asyncHandler(async (req, res, next) => {
  let book = await Book.findById(req.params.id)

  if (!book) {
    return next(
      new ErrorResponse(`Book not found with id of ${req.params.id}. Please add correct id`, 404)
    )
  }

  // Make sure user is book owner
  if (book.user.toString() !== req.user.id && req.user.role !== 'admin') {
    return next(
      new ErrorResponse(`User ${req.params.id} is not authorized to update this book`, 401)
    )
  }

  book = await Book.findOneAndUpdate(req.params.id, req.body, {
    new: true,
    runValidators: true,
  })

  res.status(200).json({success: true, data: book})
})

// @desc    Remove book
// @route   Delete /api/v1/books/:id
// @access  Private
exports.deleteBook = asyncHandler(async (req, res, next) => {
  const book = await Book.findById(req.params.id)

  if (!book) {
    return next(
      new ErrorResponse(`Book not found with id of ${req.params.id}. Please add correct id`, 404)
    )
  }

  // Make sure user is book owner
  if (book.user.toString() !== req.user.id && req.user.role !== 'admin') {
    return next(
      new ErrorResponse(`User ${req.params.id} is not authorized to delete this book`, 401)
    )
  }

  book.remove()

  res.status(200).json({
    success: true,
    data: {},
  })
})
