# Khawarizm Academy Platform

منصة أكاديمية خوارزم كاملة على React/Vite مع Backend Express + Prisma + PostgreSQL.

## Architecture
- React + React Router للواجهة.
- Feature-based folders داخل `src/features`.
- Shared UI داخل `src/components`.
- API client داخل `src/api`.
- Express API داخل `server`.
- JWT + bcrypt لتسجيل الدخول.
- Prisma/PostgreSQL للبيانات.
- Vercel Serverless entry داخل `api/index.js`.

## أهم الـflows
الرئيسية، الكتالوج، البحث والتصفية، صفحة الدورة، الدروس، الاختبارات والنتائج، لوحة الطالب، الملف الشخصي، التسجيل وتسجيل الدخول، المنح والفرص، حفظ التقدم والالتحاق بالدورات.

## تشغيل محلي
```bash
npm install
copy .env.example .env
npx prisma generate
npm run db:push
npm run db:seed
npm run dev
```
وفي terminal آخر:
```bash
npm run server
```

## متغيرات البيئة
- `DATABASE_URL`: رابط PostgreSQL.
- `JWT_SECRET`: secret قوي وطويل.
- `VITE_API_URL`: اتركه `/api` في Vercel.

## API
- GET /api/health
- POST /api/auth/register
- POST /api/auth/login
- GET /api/users/me
- GET /api/courses
- GET /api/courses/:id
- POST /api/courses/:id/enroll
- POST /api/courses/:id/progress
- GET /api/opportunities

## قبل الإطلاق
اربط PostgreSQL حقيقي في Vercel، أضف `DATABASE_URL` و`JWT_SECRET` إلى Environment Variables، ثم شغّل `npm run db:push`/seed على قاعدة البيانات. لا تضع الأسرار داخل GitHub.

الواجهة الحالية تحتوي demo data للحفاظ على الـUI حتى قبل ربط قاعدة البيانات، بينما الـauth والـAPI جاهزان للعمل فور ضبط البيئة.