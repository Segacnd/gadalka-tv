// Скрипт для добавления стандартных названий карт Таро
import * as fs from 'fs';
import * as path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Путь к файлу с данными
const cardsFilePath = path.join(__dirname, 'cards-complete.json');
const outputFilePath = path.join(__dirname, 'cards-complete.json');

// Загрузка файла
const cards = JSON.parse(fs.readFileSync(cardsFilePath, 'utf8'));

// Объект с переводами мастей
const suits = {
	swords: 'мечей',
	wands: 'жезлов',
	cups: 'кубков',
	pentacles: 'пентаклей',
};

// Объект с переводами номиналов карт
const ranks = {
	ace: 'Туз',
	two: '2',
	three: '3',
	four: '4',
	five: '5',
	six: '6',
	seven: '7',
	eight: '8',
	nine: '9',
	ten: '10',
	page: 'Паж',
	knight: 'Рыцарь',
	queen: 'Королева',
	king: 'Король',
};

// Регулярное выражение для определения карт Младших Арканов
const minorArcanaRegex =
	/^The (Ace|Two|Three|Four|Five|Six|Seven|Eight|Nine|Ten|Page|Knight|Queen|King) of (Swords|Wands|Cups|Pentacles)$/i;

// Обновление имен карт
const updatedCards = cards.map((cardData) => {
	// Проверяем наличие поля original_name
	const originalName = cardData.card.original_name;

	if (originalName) {
		const match = originalName.match(minorArcanaRegex);

		if (match) {
			// Карта Младшего Аркана
			const rank = match[1].toLowerCase();
			const suit = match[2].toLowerCase();

			// Формирование стандартного имени
			const standardName = `${ranks[rank]} ${suits[suit]}`;

			// Добавление стандартного имени к существующему имени
			if (!cardData.card.name.includes(standardName)) {
				cardData.card.name = `${cardData.card.name} (${standardName})`;
			}
		}
	}

	return cardData;
});

// Сохранение обновленного файла
fs.writeFileSync(outputFilePath, JSON.stringify(updatedCards, null, 2), 'utf8');

console.log(
	'Стандартные названия карт добавлены и сохранены в',
	outputFilePath
);
