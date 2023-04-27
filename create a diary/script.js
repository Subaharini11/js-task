let entries = JSON.parse(localStorage.getItem('entries')) || [];
function displayEntries() {
	const entryList = document.getElementById('entry-list');
	entryList.innerHTML = '';
	for (let i = 0; i < entries.length; i++) {
		const entry = entries[i];
		const li = document.createElement('li');
		const date = new Date(entry.date).toLocaleDateString();
		const title = entry.title;
		const content = entry.content;
		li.innerHTML = `<b>${date}:</b> ${title}<br>${content}`;
		entryList.appendChild(li);
	}
}
function saveEntry() {
	const date = document.getElementById('date').value;
	const title = document.getElementById('title').value;
	const content = document.getElementById('content').value;
	if (!date || !title || !content) {
		alert('Please fill in all fields');
		return;
	}
	const entry = { date, title, content };
	entries.push(entry);
	localStorage.setItem('entries', JSON.stringify(entries));
	displayEntries();
}
window.onload = function() {
	displayEntries();
}