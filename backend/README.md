# Sithee Food Products - Backend API

## 🏗️ Project Structure

```
backend/
├── config/
│   └── database.js          # MongoDB connection configuration
├── controller/
│   └── userController.js    # User registration and authentication logic
├── db/
│   └── models/
│       └── User.js          # User model schema
├── middleware/
│   └── authMiddleware.js    # JWT authentication middleware
├── routes/
│   └── userRoutes.js        # User API routes
├── server.js                # Main server file
├── package.json             # Dependencies and scripts
├── config.env              # Environment variables
└── README.md               # This file
```

## 🚀 Getting Started

### Prerequisites
- Node.js (v14 or higher)
- MongoDB Atlas account
- npm or yarn

### Installation

1. **Install Dependencies**
   ```bash
   cd backend
   npm install
   ```

2. **Environment Setup**
   - Copy `config.env` and update with your MongoDB connection string
   - Update JWT_SECRET for production

3. **Start the Server**
   ```bash
   # Development mode
   npm run dev
   
   # Production mode
   npm start
   ```

## 📡 API Endpoints

### User Registration
- **POST** `/api/users/register`
- **Body:**
  ```json
  {
    "firstName": "John",
    "lastName": "Doe",
    "email": "john@example.com",
    "password": "password123",
    "phone": "+91-9876543210",
    "address": "123 Main Street",
    "city": "Erode",
    "state": "Tamil Nadu",
    "pincode": "638001"
  }
  ```

### User Login
- **POST** `/api/users/login`
- **Body:**
  ```json
  {
    "email": "john@example.com",
    "password": "password123"
  }
  ```

### Get User Profile (Protected)
- **GET** `/api/users/profile`
- **Headers:** `Authorization: Bearer <token>`

### Update User Profile (Protected)
- **PUT** `/api/users/profile`
- **Headers:** `Authorization: Bearer <token>`
- **Body:**
  ```json
  {
    "firstName": "John",
    "lastName": "Doe",
    "phone": "+91-9876543210",
    "address": "123 Main Street",
    "city": "Erode",
    "state": "Tamil Nadu",
    "pincode": "638001"
  }
  ```

### Health Check
- **GET** `/api/health`

## 🔐 Authentication

The API uses JWT (JSON Web Tokens) for authentication:

1. **Register/Login** to get a token
2. **Include token** in Authorization header: `Bearer <token>`
3. **Protected routes** require valid token

## 🗄️ Database Schema

### User Model
```javascript
{
  firstName: String (required),
  lastName: String (required),
  email: String (required, unique),
  password: String (required, hashed),
  phone: String,
  address: String,
  city: String,
  state: String,
  pincode: String,
  isActive: Boolean (default: true),
  createdAt: Date,
  updatedAt: Date
}
```

## 🔧 Configuration

### Environment Variables
- `NODE_ENV`: Development/Production mode
- `PORT`: Server port (default: 5000)
- `MONGODB_URI`: MongoDB connection string
- `JWT_SECRET`: Secret key for JWT tokens

## 📦 Dependencies

- **express**: Web framework
- **mongoose**: MongoDB ODM
- **bcryptjs**: Password hashing
- **jsonwebtoken**: JWT authentication
- **cors**: Cross-origin resource sharing
- **dotenv**: Environment variables

## 🚀 Deployment

1. Set environment variables
2. Install dependencies: `npm install`
3. Start server: `npm start`
4. Ensure MongoDB connection is active

## 📝 API Response Format

### Success Response
```json
{
  "success": true,
  "message": "Operation successful",
  "data": { ... }
}
```

### Error Response
```json
{
  "success": false,
  "message": "Error description",
  "error": "Detailed error (development only)"
}
``` 