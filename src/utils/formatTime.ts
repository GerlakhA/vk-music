export function formatTime(seconds: number) {
	const minutes = Math.floor(seconds / 60) // Получаем количество минут
	const remainingSeconds = seconds % 60 // Получаем оставшиеся секунды

	return `${minutes}:${remainingSeconds < 10 ? '0' + remainingSeconds : remainingSeconds}`
}
