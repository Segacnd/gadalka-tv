import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

// Получаем текущую директорию
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Загружаем данные карт
const cardsFilePath = path.join(__dirname, '../src/data/cards-complete.json');
const cardsData = JSON.parse(fs.readFileSync(cardsFilePath, 'utf8'));

// Базовый URL сайта
const baseUrl = 'https://gadalka-tv.vercel.app';

// Текущая дата в формате YYYY-MM-DD
const today = new Date().toISOString().split('T')[0];

// Создаем sitemap
let sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  <url>
    <loc>${baseUrl}/</loc>
    <lastmod>${today}</lastmod>
    <changefreq>daily</changefreq>
    <priority>1.0</priority>
  </url>
  <url>
    <loc>${baseUrl}/cards</loc>
    <lastmod>${today}</lastmod>
    <changefreq>weekly</changefreq>
    <priority>0.8</priority>
  </url>
`;

// Добавляем страницы карт
cardsData.forEach((item, index) => {
	sitemap += `  <url>
    <loc>${baseUrl}/cards/${index + 1}</loc>
    <lastmod>${today}</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.7</priority>
  </url>
`;
});

// Закрываем XML
sitemap += '</urlset>';

// Путь для сохранения файла
const outputPath = path.join(__dirname, '../public/sitemap.xml');

// Записываем файл
fs.writeFileSync(outputPath, sitemap);

console.log(`Sitemap успешно сгенерирован: ${outputPath}`);
