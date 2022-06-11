import { ref } from 'vue';

export default function () {
	function downloadResume(downloadIcon) {
		downloadIcon.classList.add('animate-bounce');
		// Intended delay for bounce animation purpose
		setTimeout(() => {
			const anchor = document.createElement('a');
			anchor.href = '/ronald-lambino-resume.pdf';
			anchor.download = 'ronald-lambino-resume.pdf';
			anchor.click();
			downloadIcon.classList.remove('animate-bounce');
		}, 1500);
	}

	return {
		downloadResume,
	};
}
