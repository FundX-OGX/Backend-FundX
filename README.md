# FundX Backend

Backend API cho nền tảng crowdfunding FundX, được xây dựng với NestJS.

## 🚀 Tech Stack

- **Framework:** NestJS
- **Language:** TypeScript
- **Validation:** class-validator, class-transformer
- **Database:** Walrus (sẽ implement sau)

## 📁 Cấu trúc Project

```
src/
├── campaigns/          # Campaigns module
│   ├── dto/
│   ├── campaigns.controller.ts
│   ├── campaigns.service.ts
│   └── campaigns.module.ts
├── images/            # Images module
├── milestones/        # Milestones module
├── contributions/     # Contributions module
├── tiers/             # Tiers module
├── app.module.ts
└── main.ts
```

## 🛠️ Setup

### 1. Cài đặt dependencies
```bash
pnpm install
```

### 2. Tạo file .env
```bash
cp .env.example .env
```

Cập nhật các biến môi trường trong `.env`:
```
PORT=3000
NODE_ENV=development
```

### 3. Chạy development server
```bash
pnpm run start:dev
```

Server sẽ chạy tại: `http://localhost:3000`

## 📝 API Documentation

Xem file [API_ENDPOINTS.md](./API_ENDPOINTS.md) để biết chi tiết về tất cả endpoints.

## 🧪 Testing

### Test endpoints
```bash
# Test root endpoint
curl http://localhost:3000/

# Test create campaign
curl -X POST http://localhost:3000/create-campaign \
  -H "Content-Type: application/json" \
  -d '{
    "blobId": "test123",
    "creatorAddress": "0x123",
    "targetAmount": 1000,
    "duration": 30,
    "rewardType": "equity",
    "currency": "USD",
    "title": "Test Campaign",
    "txHash": "0xabc",
    "objectId": "obj123",
    "category": "tech"
  }'
```

## 📦 Build

```bash
# Build project
pnpm run build

# Run production
pnpm run start:prod
```

## 🚀 Deployment

### Deploy to Render Cloud

1. **Connect Repository** to Render
2. **Set Environment Variables:**
   - `NODE_ENV=production`
   - `PORT=10000` (Render auto-sets this)
3. **Build Settings:**
   - Build Command: `pnpm install && pnpm run build`
   - Start Command: `pnpm run start:prod`
4. **Health Check Path:** `/health`

Xem [DEPLOY.md](./DEPLOY.md) để biết chi tiết.

## 🔄 Database

Database logic hiện tại được đánh dấu `TODO` và sẽ được implement với Walrus database.

## 📋 Modules

### ✅ Đã implement
- [x] Campaigns Module
- [x] Images Module
- [x] Milestones Module
- [x] Contributions Module
- [x] Tiers Module

### 🔜 Sắp tới
- [ ] Walrus Database Integration
- [ ] Authentication & Authorization
- [ ] Error Handling Middleware
- [ ] Logging
- [ ] Unit Tests
- [ ] E2E Tests

## 📄 License

UNLICENSED
