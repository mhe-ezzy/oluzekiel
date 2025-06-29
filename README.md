# Student CRUD API with MongoDB

This is a simple RESTful CRUD service for managing student records using MongoDB as the database.

## 📦 Features

- Create, Read, Update, Delete student records
- Get total count of students
- Email uniqueness enforcement
- Pagination and filtering support

## Endpoints

| Method | Endpoint         | Description               |
|--------|------------------|---------------------------|
| POST   | `/students`      | Create a new student      |
| GET    | `/students`      | Get all students          |
| GET    | `/students/count`| Get total number of students |
| GET    | `/students/:id`  | Get student by ID         |
| PUT    | `/students/:id`  | Update student by ID      |
| DELETE | `/students/:id`  | Delete student by ID      |



## Tech Stack

- Node.js
- Express.js
- MongoDB
- Mongoose
- Postman


## Import Postman Collection

To test the API endpoints:

1. Open Postman
2. Click **Import > Link**
3. Upload the file: `postman/studentDB.postman_collection.json`
4. You’ll see pre-configured requests for all CRUD operations



## Setup Instructions

## Setup

1. Clone the repo
2. Run `npm install`
3. Create `.env` with MongoDB URI
4. Run `npm start`