// Скрипт для объединения информации о картах Таро
import * as fs from 'fs';
import * as path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Пути к файлам
const cardsFilePath = path.join(__dirname, 'cards.json');
const symbolsFilePath1 = path.join(__dirname, 'tarot-symbols.json');
const symbolsFilePath2 = path.join(__dirname, 'tarot-symbols-2.json');
const symbolsFilePath3 = path.join(__dirname, 'tarot-symbols-3.json');
const outputFilePath = path.join(__dirname, 'cards-complete.json');

// Загрузка файлов
const cards = JSON.parse(fs.readFileSync(cardsFilePath, 'utf8'));
const symbols1 = JSON.parse(fs.readFileSync(symbolsFilePath1, 'utf8'));
const symbols2 = JSON.parse(fs.readFileSync(symbolsFilePath2, 'utf8'));
const symbols3 = JSON.parse(fs.readFileSync(symbolsFilePath3, 'utf8'));

// Объединение символики в один массив
const allSymbols = [...symbols1, ...symbols2, ...symbols3];

// Функция для поиска символики по имени карты
function findSymbolInfo(originalName) {
	return allSymbols.find((symbol) => symbol.original_name === originalName);
}

// Добавление символики к данным о картах
const enrichedCards = cards.map((cardData) => {
	const originalName = cardData.original_name;
	const symbolInfo = findSymbolInfo(originalName);

	if (symbolInfo) {
		return {
			...cardData,
			symbolism: symbolInfo.symbolism,
			correspondences: symbolInfo.correspondences,
			photo: '',
		};
	}

	// Если для карты нет соответствий в символике, все равно добавляем photo
	return {
		...cardData,
		photo: '',
	};
});

// Сохранение результата
fs.writeFileSync(
	outputFilePath,
	JSON.stringify(enrichedCards, null, 2),
	'utf8'
);
console.log('Данные успешно объединены и сохранены в', outputFilePath);
