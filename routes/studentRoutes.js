const express = require('express');
const router = express.Router();
const {
  createStudent,
  getAllStudents,
  getStudentById,
  updateStudent,
  deleteStudent,
  countStudents
} = require('../controllers/studentController');

router.post('/', createStudent);
router.get('/', getAllStudents);
router.get('/count', countStudents);
router.get('/:id', getStudentById);
router.put('/:id', updateStudent);
router.delete('/:id', deleteStudent);

module.exports = router;