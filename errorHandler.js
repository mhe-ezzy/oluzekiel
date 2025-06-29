module.exports = (err, req, res, next) => {
  console.error(err.stack);

  if (err.code === 11000) {
    return res.status(409).json({ message: 'Email already exists' });
  }

  if (err.name === 'ValidationError') {
    return res.status(400).json({ message: 'Validation failed', errors: err.errors });
  }

  if (err.name === 'CastError') {
    return res.status(400).json({ message: 'Invalid student ID' });
  }

  res.status(500).json({ message: 'Something went wrong', error: err.message });
};