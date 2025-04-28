import { promises as fs } from 'fs';

// Словарь для перевода мастей
const suitTranslation = {
	Wands: 'Жезлов',
	Cups: 'Кубков',
	Swords: 'Мечей',
	Pentacles: 'Пентаклей',
};

// Словарь для перевода придворных карт
const courtTranslation = {
	page: 'Паж',
	knight: 'Рыцарь',
	queen: 'Королева',
	king: 'Король',
};

// Асинхронная функция для обработки файла
async function updateCardNames() {
	try {
		// Чтение файла
		const data = await fs.readFile('src/data/cards-complete.json', 'utf8');
		const cards = JSON.parse(data);

		// Проход по всем картам
		cards.forEach((cardObj) => {
			const card = cardObj;

			// Проверка, что это младший аркан
			if (card.arcana === 'minor') {
				const originalName = card.original_name;

				// Обработка для придворных карт (Page, Knight, Queen, King)
				for (const [court, translation] of Object.entries(courtTranslation)) {
					if (originalName.includes(court + ' of ')) {
						const suit = originalName.split(' of ')[1];
						if (suitTranslation[suit]) {
							card.standard_name = `${translation} ${suitTranslation[suit]}`;
							break;
						}
					}
				}

				// Обработка для числовых карт (Ace = Туз, 2-10)
				if (originalName.includes('Ace of ')) {
					const suit = originalName.split(' of ')[1];
					if (suitTranslation[suit]) {
						card.standard_name = `Туз ${suitTranslation[suit]}`;
					}
				} else {
					for (let i = 2; i <= 10; i++) {
						if (
							originalName.includes(`${i} of `) ||
							originalName.includes(`${i.toString()} of `)
						) {
							const suit = originalName.split(' of ')[1];
							if (suitTranslation[suit]) {
								card.standard_name = `${i} ${suitTranslation[suit]}`;
								break;
							}
						}
					}
				}

				// Если не удалось определить стандартное имя, извлекаем из существующего имени
				if (!card.standard_name && card.name) {
					const nameParts = card.name.split(',');
					for (const part of nameParts) {
						const trimmed = part.trim();
						// Попробуем найти формат "X масть"
						const match = trimmed.match(
							/^(\d+|Туз)\s+(Жезлов|Кубков|Мечей|Пентаклей|Посохов|Скипетров|Чаш|Монет|Динариев|Денариев)$/
						);
						if (match) {
							let num = match[1];
							let suit = match[2];

							// Нормализуем масть
							if (suit === 'Посохов' || suit === 'Скипетров') suit = 'Жезлов';
							if (suit === 'Чаш') suit = 'Кубков';
							if (
								suit === 'Монет' ||
								suit === 'Динариев' ||
								suit === 'Денариев'
							)
								suit = 'Пентаклей';

							card.standard_name = `${num} ${suit}`;
							break;
						}
					}
				}
			}
		});

		// Запись обновленного JSON в файл
		await fs.writeFile(
			'src/data/cards-complete-updated.json',
			JSON.stringify(cards, null, 2),
			'utf8'
		);
		console.log('Файл успешно обновлен');
	} catch (error) {
		console.error('Ошибка при обработке файла:', error);
	}
}

// Запуск функции
updateCardNames();
