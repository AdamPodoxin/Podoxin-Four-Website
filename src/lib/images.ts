const numImages = 68;
export const images = Array.from(
	{ length: numImages },
	(_, i) => `/assets/img/gallery/${String(i + 1).padStart(3, "0")}.jpg`
);
