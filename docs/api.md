# Backend API Documentation

## 🏗️ Architecture Overview

The backend follows a modular MVC architecture with Express.js, providing
RESTful APIs for the AI CallAssist appointment booking system.

## 📁 Project Structure

```
backend/
├── config/           # Configuration files
│   ├── database.js  # Database connection
│   ├── jwt.js       # JWT configuration
│   └── app.js       # App configuration
├── controllers/     # Route handlers
│   ├── auth.js      # Authentication
│   ├── appointments.js
│   ├── payments.js
│   └── users.js
├── middleware/      # Custom middleware
│   ├── auth.js      # Authentication middleware
│   ├── validation.js
│   └── errorHandler.js
├── models/         # Database models
│   ├── User.js
│   ├── Appointment.js
│   └── Payment.js
├── routes/         # API routes
│   ├── auth.js
│   ├── appointments.js
│   └── payments.js
└── src/           # Main application files
    └── server.js  # Entry point
```

## 🛠️ Development Setup

### Prerequisites

- Node.js (v16+)
- MongoDB or PostgreSQL
- Environment variables configured

### Installation

```bash
cd backend
npm install
cp .env.example .env  # Configure environment variables
npm run dev
```

## 📚 API Endpoints

### Authentication

```
POST   /api/auth/register    # User registration
POST   /api/auth/login       # User login
POST   /api/auth/refresh     # Token refresh
POST   /api/auth/logout      # User logout
```

### Appointments

```
GET    /api/appointments     # Get user appointments
POST   /api/appointments     # Create appointment
PUT    /api/appointments/:id # Update appointment
DELETE /api/appointments/:id # Cancel appointment
```

### Payments

```
POST   /api/payments/create  # Create payment intent
POST   /api/payments/confirm # Confirm payment
GET    /api/payments/history # Payment history
```

### Users

```
GET    /api/users/profile    # Get user profile
PUT    /api/users/profile    # Update profile
GET    /api/users/settings   # Get settings
PUT    /api/users/settings   # Update settings
```

## 🔐 Security Implementation

### Authentication

- JWT tokens with refresh mechanism
- Password hashing with bcrypt
- Rate limiting on sensitive endpoints
- CORS configuration

### Input Validation

- Joi schema validation
- SQL injection prevention
- XSS protection
- Request sanitization

### Data Protection

- Environment variable secrets
- Encrypted sensitive data
- HTTPS enforcement
- Audit logging

## 💾 Database Design

### User Model

```javascript
{
  id: ObjectId,
  email: String (unique),
  password: String (hashed),
  profile: {
    name: String,
    phone: String,
    language: String,
    timezone: String
  },
  settings: {
    notifications: Boolean,
    autoReminders: Boolean,
    paymentMethod: String
  },
  createdAt: Date,
  updatedAt: Date
}
```

### Appointment Model

```javascript
{
  id: ObjectId,
  userId: ObjectId,
  customerInfo: {
    name: String,
    phone: String,
    email: String
  },
  datetime: Date,
  duration: Number,
  status: Enum ['pending', 'confirmed', 'completed', 'cancelled'],
  paymentStatus: Enum ['pending', 'paid', 'refunded'],
  paymentAmount: Number,
  notes: String,
  createdAt: Date,
  updatedAt: Date
}
```

## 🚀 Deployment

### Environment Configuration

```env
NODE_ENV=production
PORT=5000
DATABASE_URL=mongodb://...
JWT_SECRET=your-secret-key
STRIPE_SECRET_KEY=sk_live_...
TWILIO_ACCOUNT_SID=...
TWILIO_AUTH_TOKEN=...
```

### Production Build

```bash
npm run build
npm start
```

### Docker Deployment

```dockerfile
FROM node:16-alpine
WORKDIR /app
COPY package*.json ./
RUN npm ci --only=production
COPY . .
EXPOSE 5000
CMD ["npm", "start"]
```

## 🧪 Testing

### Test Structure

- Unit tests for models and utilities
- Integration tests for API endpoints
- Load testing for performance
- Security testing for vulnerabilities

### Running Tests

```bash
npm test              # All tests
npm run test:unit     # Unit tests only
npm run test:integration # Integration tests
npm run test:coverage    # Coverage report
```

## 📊 Monitoring & Logging

### Logging Strategy

- Winston for structured logging
- Error tracking and alerting
- Performance monitoring
- User activity logging

### Health Checks

```
GET /health           # Basic health check
GET /health/detailed  # Detailed system status
```

## 🔧 Maintenance

### Database Migrations

```bash
npm run db:migrate    # Run migrations
npm run db:seed       # Seed development data
```

### Backup Strategy

- Automated daily backups
- Point-in-time recovery
- Cross-region replication
- Data retention policies
