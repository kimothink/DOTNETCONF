const grid = document.querySelector('#speaker-grid');
function element(tag, className, text) {
  const node = document.createElement(tag);
  if (className) node.className = className;
  if (text) node.textContent = text;
  return node;
}
window.conferenceSpeakers.forEach((speaker, index) => {
  const card = element('article', speaker.name ? 'speaker-card' : 'speaker-card upcoming');
  if (!speaker.name) {
    card.append(element('span', 'slot-number', String(index + 1).padStart(2, '0')), element('span', 'upcoming-symbol', '＋'), element('h3', '', '다음 이야기를 준비 중입니다'), element('p', '', '발표자 · 세션 추후 공개'));
  } else {
    const top = element('div', 'speaker-top');
    if (speaker.image) { const img = element('img', 'speaker-photo'); img.src = speaker.image; img.alt = `${speaker.name} 발표자`; img.loading = 'lazy'; top.append(img); }
    const identity = element('div'); identity.append(element('span', 'eyebrow', `SPEAKER ${String(index + 1).padStart(2, '0')}`), element('h3', '', speaker.name)); top.append(identity);
    const tags = element('div', 'tags'); speaker.tags.forEach(tag => tags.append(element('span', '', tag)));
    card.append(top, tags, element('h4', '', speaker.title), element('p', 'session-description', speaker.description));
    if (speaker.url) { const link = element('a', 'session-link', '발표 관련 프로젝트 ↗'); link.href = speaker.url; link.target = '_blank'; link.rel = 'noopener noreferrer'; card.append(link); }
  }
  grid.append(card);
});
