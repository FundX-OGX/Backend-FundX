# 🚀 FundX Backend API

<div align="center">

**A decentralized crowdfunding platform backend built with NestJS**

[![NestJS](https://img.shields.io/badge/NestJS-11.0-E0234E?logo=nestjs&logoColor=white)](https://nestjs.com/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.7-3178C6?logo=typescript&logoColor=white)](https://www.typescriptlang.org/)
[![License](https://img.shields.io/badge/License-UNLICENSED-red)]()

[API Documentation](#-api-documentation) • [Quick Start](#-quick-start) • [Architecture](#-architecture) • [Deployment](#-deployment)

</div>

---

## 📋 Table of Contents

- [Overview](#-overview)
- [Features](#-features)
- [Tech Stack](#-tech-stack)
- [Architecture](#-architecture)
- [Quick Start](#-quick-start)
- [API Documentation](#-api-documentation)
- [Project Structure](#-project-structure)
- [Development](#-development)
- [Deployment](#-deployment)
- [Contributing](#-contributing)

---

## 🎯 Overview

FundX is a next-generation crowdfunding platform that leverages blockchain technology to enable transparent, secure, and decentralized fundraising. This backend API powers the entire platform, providing robust endpoints for campaign management, milestone tracking, contribution processing, and more.

### Key Highlights

- 🔐 **Secure & Scalable** - Built with enterprise-grade NestJS framework
- 📊 **Real-time Tracking** - Monitor campaigns, milestones, and contributions
- 🎯 **Milestone-based Funding** - Structured funding with voting mechanisms
- 💰 **Multi-tier Contributions** - Flexible contribution tiers and rewards
- 📱 **RESTful API** - Clean, well-documented REST endpoints
- 🚀 **Production Ready** - Error handling, logging, and monitoring built-in

---

## ✨ Features

### Core Functionality

- **Campaign Management**
  - Create and manage fundraising campaigns
  - Track campaign progress and funding goals
  - Filter campaigns by creator, status, and category
  - Support for multiple currencies

- **Milestone System**
  - Create milestones with deliverables
  - Voting mechanism for milestone approval
  - Track milestone completion and claims
  - Timeline management

- **Contribution Processing**
  - Record blockchain transactions
  - Track contributions by wallet address
  - Automatic campaign amount updates
  - Multi-tier contribution system

- **Image Management**
  - Upload campaign images
  - Support for multiple image types
  - Image metadata tracking

- **Tier System**
  - Define contribution tiers
  - Set limits and track current usage
  - Tier-based rewards

### Technical Features

- ✅ **Input Validation** - Comprehensive DTO validation with class-validator
- ✅ **Error Handling** - Global exception filter with consistent error responses
- ✅ **Request Logging** - Detailed HTTP request/response logging
- ✅ **API Documentation** - Interactive Swagger/OpenAPI documentation
- ✅ **Health Monitoring** - Health check endpoints for monitoring
- ✅ **CORS Support** - Configured for cross-origin requests
- ✅ **Type Safety** - Full TypeScript implementation

---

## 🛠 Tech Stack

### Core

- **[NestJS](https://nestjs.com/)** - Progressive Node.js framework
- **[TypeScript](https://www.typescriptlang.org/)** - Type-safe JavaScript
- **[Express](https://expressjs.com/)** - Web framework (via NestJS)

### Validation & Transformation

- **[class-validator](https://github.com/typestack/class-validator)** - Decorator-based validation
- **[class-transformer](https://github.com/typestack/class-transformer)** - Object transformation

### Documentation

- **[Swagger/OpenAPI](https://swagger.io/)** - API documentation
- **[swagger-ui-express](https://github.com/scottie1984/swagger-ui-express)** - Swagger UI

### Database

- **Walrus** - (Coming soon) Decentralized database solution

### Development Tools

- **ESLint** - Code linting
- **Prettier** - Code formatting
- **Jest** - Testing framework

---

## 🏗 Architecture

### Module Structure

The application follows NestJS modular architecture with clear separation of concerns:

```
┌─────────────────────────────────────────────────┐
│              App Module                         │
│  (Global Config, Exception Filters, Pipes)     │
└─────────────────────────────────────────────────┘
                    │
        ┌───────────┼───────────┐
        │           │           │
    ┌───▼───┐   ┌───▼───┐   ┌───▼───┐
    │Campaigns│  │Images │  │Milestones│
    └────────┘   └───────┘   └─────────┘
        │           │           │
    ┌───▼───┐   ┌───▼───┐
    │Contrib│   │ Tiers │
    └───────┘   └───────┘
```

### Data Flow

1. **Request** → Controller (Validation)
2. **Controller** → Service (Business Logic)
3. **Service** → Database (Data Persistence) - *Coming soon*
4. **Response** ← Controller (Formatted Output)

### Error Handling

- Global exception filter catches all errors
- Consistent error response format
- Detailed error logging
- HTTP status code mapping

---

## 🚀 Quick Start

### Prerequisites

- **Node.js** >= 18.x
- **pnpm** >= 8.x (or npm/yarn)

### Installation

```bash
# Clone the repository
git clone <repository-url>
cd backend-fund-x

# Install dependencies
pnpm install

# Copy environment file
cp .env.example .env

# Update .env with your configuration
# PORT=3000
# NODE_ENV=development
```

### Running the Application

```bash
# Development mode (with hot reload)
pnpm run start:dev

# Production mode
pnpm run build
pnpm run start:prod

# Debug mode
pnpm run start:debug
```

The API will be available at `http://localhost:3000`

### Verify Installation

```bash
# Health check
curl http://localhost:3000/health

# API documentation
open http://localhost:3000/api/docs
```

---

## 📚 API Documentation

### Interactive Documentation

Visit the Swagger UI at `/api/docs` for interactive API documentation:

```
http://localhost:3000/api/docs
```

### Endpoint Overview

#### Campaigns
- `POST /create-campaign` - Create a new campaign
- `GET /campaigns` - List campaigns (with pagination)
- `GET /campaigns/creator?creator=<address>` - Get campaigns by creator
- `GET /voting-campaigns` - Get campaigns in voting phase
- `GET /campaign?id=<objectId>` - Get campaign details

#### Milestones
- `POST /upload-milestone` - Create a milestone
- `PUT /campaigns/:objectId/milestones/:milestoneId/vote-result` - Update vote
- `PUT /campaigns/:objectId/milestones/:milestoneId/claimed` - Mark as claimed
- `GET /milestones?id=<objectId>` - Get campaign milestones

#### Contributions
- `POST /create-contribution` - Record a contribution
- `GET /contributions?address=<wallet>` - Get contributions by address
- `GET /contributions?campaign_id=<id>` - Get contributors for campaign

#### Images
- `POST /upload-image` - Upload campaign image

#### Tiers
- `POST /add-tier` - Add contribution tier

#### Health
- `GET /health` - Basic health check
- `GET /health/detailed` - Detailed system status

### Response Format

All responses follow a consistent format:

**Success:**
```json
{
  "is_success": true,
  "data": { ... }
}
```

**Error:**
```json
{
  "is_success": false,
  "statusCode": 400,
  "timestamp": "2025-11-09T...",
  "path": "/endpoint",
  "method": "POST",
  "error": "Error message"
}
```

For detailed API documentation, see [API_ENDPOINTS.md](./API_ENDPOINTS.md)

---

## 📁 Project Structure

```
backend-fund-x/
├── src/
│   ├── campaigns/              # Campaign management module
│   │   ├── dto/                # Data Transfer Objects
│   │   ├── campaigns.controller.ts
│   │   ├── campaigns.service.ts
│   │   └── campaigns.module.ts
│   ├── images/                 # Image management module
│   ├── milestones/             # Milestone management module
│   ├── contributions/          # Contribution processing module
│   ├── tiers/                  # Tier management module
│   ├── health/                 # Health check module
│   ├── common/                 # Shared utilities
│   │   ├── filters/            # Exception filters
│   │   └── interceptors/       # Request interceptors
│   ├── app.module.ts           # Root module
│   └── main.ts                 # Application entry point
├── dist/                       # Compiled JavaScript (generated)
├── test/                       # E2E tests
├── .env.example                # Environment variables template
├── render.yaml                 # Render deployment config
├── package.json
├── tsconfig.json
└── README.md
```

### Module Responsibilities

- **Controllers** - Handle HTTP requests/responses
- **Services** - Business logic implementation
- **DTOs** - Data validation and transformation
- **Modules** - Dependency injection and module configuration

---

## 💻 Development

### Available Scripts

```bash
# Development
pnpm run start:dev      # Start with hot reload
pnpm run start:debug    # Start in debug mode

# Building
pnpm run build          # Compile TypeScript to JavaScript
pnpm run start:prod     # Run production build

# Code Quality
pnpm run lint           # Run ESLint
pnpm run format         # Format code with Prettier

# Testing
pnpm run test           # Run unit tests
pnpm run test:watch     # Run tests in watch mode
pnpm run test:cov       # Generate coverage report
pnpm run test:e2e       # Run end-to-end tests
```

### Code Style

- Follow TypeScript best practices
- Use ESLint and Prettier configurations
- Write descriptive commit messages
- Add JSDoc comments for public APIs

### Environment Variables

```env
# Server
PORT=3000
NODE_ENV=development

# Database (Coming soon)
# DATABASE_URL=
# DATABASE_TYPE=walrus
```

---

## 🚢 Deployment

### Render Cloud

The project includes a `render.yaml` configuration for easy deployment on Render.

#### Quick Deploy

1. **Connect Repository** to Render
2. **Auto-detect** settings from `render.yaml` or configure manually:
   - **Build Command:** `pnpm install && pnpm run build`
   - **Start Command:** `pnpm run start:prod`
   - **Health Check Path:** `/health`

3. **Environment Variables:**
   - `NODE_ENV=production`
   - `PORT` (auto-set by Render)

#### Manual Configuration

- **Runtime:** Node.js
- **Build Command:** `pnpm install && pnpm run build`
- **Start Command:** `pnpm run start:prod`
- **Health Check:** `/health`

### Post-Deployment

After deployment, verify:

```bash
# Health check
curl https://your-app.onrender.com/health

# API docs
open https://your-app.onrender.com/api/docs
```

### Production Checklist

- [ ] Environment variables configured
- [ ] Health check endpoint working
- [ ] API documentation accessible
- [ ] Error logging configured
- [ ] Database connection ready (when implemented)
- [ ] CORS settings updated for production domain

---

## 🔮 Roadmap

### Coming Soon

- [ ] **Walrus Database Integration** - Decentralized data storage
- [ ] **Authentication & Authorization** - JWT-based auth system
- [ ] **Blockchain Integration** - Smart contract interactions
- [ ] **WebSocket Support** - Real-time updates
- [ ] **Rate Limiting** - API protection
- [ ] **Caching Layer** - Performance optimization
- [ ] **Unit & E2E Tests** - Comprehensive test coverage
- [ ] **CI/CD Pipeline** - Automated deployment

---

## 🤝 Contributing

We welcome contributions! Please follow these guidelines:

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

### Development Guidelines

- Write clear, self-documenting code
- Add tests for new features
- Update documentation as needed
- Follow the existing code style
- Ensure all tests pass before submitting

---

## 📄 License

This project is UNLICENSED. All rights reserved.

---

## 📞 Support

For questions, issues, or contributions:

- Open an issue on GitHub
- Contact the development team
- Check the [API Documentation](./API_ENDPOINTS.md)

---

<div align="center">

**Built with ❤️ for the Web3 community**

[Back to Top](#-fundx-backend-api)

</div>
