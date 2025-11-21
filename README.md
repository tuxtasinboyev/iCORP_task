# ICORP Interview Test

Bu kichik loyiha test API bilan ikki bosqichli ishlash jarayonini ko‘rsatadi. Dastur birinchi bosqichda API’dan birinchi bo‘lak (part1) ni oladi. Ikkinchi bosqichda API siz bergan callback manzilga ikkinchi bo‘lak (part2) ni yuboradi. Ikkala bo‘lak birlashtiriladi va API orqali yakuniy javob olinadi.

## Ishlash tartibi qisqacha:

1. `/start?msg=...` orqali xabar yuboriladi. Shu orqali API’dan part1 qaytadi.
2. API siz ko‘rsatgan ngrok manziliga part2 ni jo‘natadi.
3. part1 va part2 qo‘shib, yakuniy code shakllantiriladi.
4. Ushbu code bilan API’ga GET so‘rov yuboriladi.
5. API qaytargan yakuniy javob konsolda ko‘rinadi.

## Ishga tushirish:

- `npm install` orqali kerakli paketlarni o‘rnatish.
- `ngrok http 1709` ishga tushiriladi va chiqqan URL kodga qo‘yiladi.
- `node index.js` orqali server ishga tushiriladi.

## Endpointlar:

- **GET** `/start` – birinchi qismni olish uchun.
- **POST** `/callback` – API tomonidan yuboriladigan ikkinchi qismni qabul qilish uchun.

Loyiha talab qilingan barcha bosqichlarni bajaradi: part1 olish, part2 qabul qilish, ikkalasini birlashtirish va yakuniy natijani chiqarish. Hammasi oddiy va bitta faylda yozilgan.