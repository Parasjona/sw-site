export function stringHash(str: string) {
	let hash = 0;
	for (let i = 0; i < str.length; i++) {
		const chr = str.charCodeAt(i);
		hash = (hash << 5) - hash + chr;
		hash |= 0; // Преобразовываем к 32-битному целому числу
	}
	return hash;
}
