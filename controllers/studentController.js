const Student = require('../models/Student');

exports.createStudent = async (req, res, next) => {
  try {
    const { firstName, lastName, email, age } = req.body;
    const student = new Student({ firstName, lastName, email, age });
    await student.save();
    res.status(201).json(student);
  } catch (err) {
    next(err);
  }
};

exports.getAllStudents = async (req, res, next) => {
  try {
    const { lastName, page = 1, limit = 10 } = req.query;

    let query = {};
    if (lastName) query.lastName = new RegExp(lastName, 'i');

    const students = await Student.find(query)
      .skip((page - 1) * limit)
      .limit(Number(limit));

    res.json(students);
  } catch (err) {
    next(err);
  }
};

exports.getStudentById = async (req, res, next) => {
  try {
    const student = await Student.findById(req.params.id);
    if (!student) return res.status(404).json({ message: 'Student not found' });
    res.json(student);
  } catch (err) {
    next(err);
  }
};

exports.updateStudent = async (req, res, next) => {
  try {
    const updates = req.body;
    const student = await Student.findByIdAndUpdate(req.params.id, updates, {
      new: true,
      runValidators: true
    });
    if (!student) return res.status(404).json({ message: 'Student not found' });
    res.json(student);
  } catch (err) {
    next(err);
  }
};

exports.deleteStudent = async (req, res, next) => {
  try {
    const student = await Student.findByIdAndDelete(req.params.id);
    if (!student) return res.status(404).json({ message: 'Student not found' });
    res.json({ message: 'Student deleted successfully', id: student._id });
  } catch (err) {
    next(err);
  }
};

exports.countStudents = async (req, res, next) => {
  try {
    const count = await Student.countDocuments();
    res.json({ count });
  } catch (err) {
    next(err);
  }
};