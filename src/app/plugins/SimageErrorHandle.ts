export class SimageErrorHandle {
	handleMissingImage(event: Event) {
		const imgElem = event.target as HTMLImageElement;
		if (imgElem.parentElement) {
			imgElem.parentElement.style.display = 'none';
		} else {
			imgElem.style.display = 'none';
		}
	}
}
