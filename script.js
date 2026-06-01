// ============================================================
//  DATA STORE
// ============================================================
const defaultStore = {
  photos: [
    { id:1, src:'images/image1.jpeg', caption:'Un sourire qui illumine tout', collection:'Portraits', desc:'Un moment de pure joie capturé' },
    { id:2, src:'images/image2.jpeg', caption:'Élégance naturelle', collection:'Lifestyle', desc:'L\'art d\'être soi' },
    { id:3, src:'images/image3.jpeg', caption:'magnifique', collection:'Femme Baoule', desc:'Ces moments qui comptent' },
    { id:4, src:'images/image4.jpeg', caption:'La lumière dans ses yeux', collection:'Portraits', desc:'Sa présence unique' },
    { id:5, src:'images/image5.jpeg', caption:'Style inimitable', collection:'Mode', desc:'Toujours impeccable' },
    { id:6, src:'images/image6.jpeg', caption:'Rires partagés', collection:'Trop Belle', desc:'La joie de vivre' },
    { id:7, src:'images/image8.jpeg', caption:'Un regard qui parle', collection:'Portraits', desc:'Profondeur et douceur' },
    { id:8, src:'images/image7.jpeg', caption:'Moments de bonheur', collection:'Lifestyle', desc:'Chaque instant est précieux' },
    { id:9, src:'images/image9.jpeg', caption:'Sa beauté singulière', collection:'Portraits', desc:'Unique en son genre' },
    { id:10, src:'images/image10.jpeg', caption:'Soirée mémorable', collection:'Événements', desc:'Une nuit inoubliable' }
  ],
  videos: [
    { id:1, type:'youtube', url:'', embedId:'', title:'Message d\'anniversaire', message:'Avec tout notre amour pour ce jour spécial', section:'Messages' },
    { id:2, type:'youtube', url:'', embedId:'', title:'Nos meilleurs souvenirs', message:'Une compilation de moments inoubliables', section:'Souvenirs' }
  ],

  memories: [
    { id:1, title:'La première fois qu\'on s\'est rencontré', date:'Un jour mémorable', photo:'', story:'Ce jour-là, quelque chose de spécial s\'est passé. Un sourire échangé, une conversation qui n\'en finissait plus...', video:'' },
    { id:2, title:'Notre aventure ensemble', date:'Une belle période', photo:'', story:'On dit que les meilleures histoires sont celles qu\'on n\'aurait jamais pu imaginer. La nôtre en est la preuve.', video:'' },
    { id:3, title:'Le moment qui a tout changé', date:'Un tournant', photo:'', story:'Il y a des instants qui redéfinissent tout. Celui-là était l\'un d\'eux.', video:'' }
  ],
  timeline: [
    { id:1, year:'Le début', title:'Les premières années', desc:'Une vie qui commence avec éclat et promet tant de merveilles à venir.' },
    { id:2, year:'La croissance', title:'Devenir qui elle est', desc:'Ces années de formation qui ont sculpté la femme extraordinaire qu\'elle est.' },
    { id:3, year:'Les rencontres', title:'Des liens précieux', desc:'Chaque personne entrée dans sa vie a été enrichie par sa présence.' },
    { id:4, year:'Les succès', title:'Accomplissements & fiertés', desc:'La récolte de tout ce qu\'elle a semé avec courage et persévérance.' },
    { id:5, year:'Aujourd\'hui', title:'Ce bel anniversaire', desc:'Une journée pour célébrer tout ce qu\'elle est et tout ce qu\'elle va devenir.' }
  ],
  messages: [
    { id:1, text:`🎉🎂 Joyeux anniversaire, Jennifer ! 🎂🎉

Je ne sais pas vraiment comment exprimer tout ce que je ressens dans un long texte, mais une chose est certaine : je t’aime énormément, bien plus que les mots ne peuvent le décrire. ❤️

En ce jour si spécial, je prie Dieu de te protéger, de veiller sur toi et de te combler de bonheur, de santé et de réussite. 🙏✨ J’espère de tout cœur que ce cadeau te plaira et qu’il te fera sourire autant que tu le mérites. 🎁💖

Que Dieu t’accorde ce que ton cœur désire le plus et qu’Il t’ouvre les portes des plus belles opportunités. 🌷🌟 Tu es une personne précieuse, et je te souhaite une année remplie de joie, d’amour, de paix et de magnifiques souvenirs. 🥰💐

N’oublie jamais que tu as une amie qui sera toujours là pour toi, dans les bons comme dans les mauvais moments. Tu peux compter sur moi quand tu en as besoin. 🤗❤️

Profite pleinement de cette journée qui est la tienne. Je t’aime très fort et je te souhaite encore un merveilleux anniversaire ! 🎉🎊💝

Avec toute mon affection,`, author:'ASSOUA ARLENE' },
    { id:2, text:`Joyeux anniversaire ma Jenni 🤍

Tu es de loin l’une des meilleures rencontres amicales que j’ai faites dans ma vie.
Au début on ne se supportait même pas en vrai 🤣🤣 et voilà qu’aujourd’hui nous sommes plus proches que jamais. On en a vécu des choses toutes les deux 🤣🤍

Après avoir commencé à vraiment te côtoyer, j’ai découvert la belle personne que tu es.

Merci d’être là et surtout ne change jamais.
Je t’aime 🫶🏾`, author:'Andrea' },
    { id:3, text:`Je suis pas quelqu’un d’ouverte, je suis pas quelqu’un qui aime parler de ses problèmes, de ses sentiments mais avec toi j’y arrive plus, tu es la personne qui sait le plus de choses sur moi, la personne avec qui je suis plus alaise de parler de certaines choses. J’ai la chance immense d’avoir trouvé en une seule personne une cousine, une meilleure amie, une sœur et un refuge.
Je ne sais pas où la vie nous emmènera demain. Peut-être que beaucoup de choses changeront. Peut-être qu’on grandira encore, qu’on prendra des chemins différents, qu’on vivra mille choses. Mais il y a une chose dont je suis certaine peu importe le temps, peu importe la distance, peu importe la vie… tu resteras toujours ma meilleure amie.
Je veux que tu saches aujourd’hui que tu mérites absolument tout ce qu’il y a de beau : l’amour sincère, le bonheur, la paix, la réussite, la santé, les rêves accomplis et toutes les belles choses que ton cœur espère.
Je ne célèbre pas seulement ton anniversaire aujourd’hui. Je célèbre aussi la personne incroyable que tu es.

Joyeux anniversaire à ma meilleure amie je t’aime ❤️`, author:'Reine' }
  ],
  facts: [
    { number:'100', unit:'%', label:'Unique en son genre', desc:'Il n\'en existe qu\'une' },
    { number:'∞', unit:'', label:'Raisons de l\'aimer', desc:'Impossible à compter' },
    { number:'1', unit:'ère', label:'En tout ce qu\'elle fait', desc:'Toujours au top' },
    { number:'365', unit:'j', label:'De bonheur par an', desc:'Elle illumine chaque jour' },
    { number:'★', unit:'', label:'Étoile parmi les étoiles', desc:'Brille de mille feux' },
    { number:'♥', unit:'', label:'Cœur en or', desc:'D\'une générosité infinie' }
  ],
  qaItems: [
    { q:'Qu\'est-ce qui vous rend unique, Jennifer ?', a:'Ma façon d\'aimer les gens sincèrement et de voir la beauté dans les petites choses.' },
    { q:'Votre plus grand bonheur ?', a:'Les moments simples : le rire partagé, un regard complice, la chaleur d\'une présence aimée.' },
    { q:'Ce que vous dites aux gens qui vous aiment ?', a:'Merci. Merci d\'être là, de voir en moi quelque chose qui vaut la peine d\'être aimé.' },
    { q:'Votre philosophie de vie ?', a:'Vivre pleinement, aimer sans retenue et laisser une trace de lumière partout où je passe.' },
    { q:'Un rêve que vous portez ?', a:'Que chacun autour de moi soit heureux. C\'est tout ce dont j\'ai besoin.' },
    { q:'Comment célébrer un anniversaire ?', a:'Entourée des gens que j\'aime, dans la simplicité et la joie. C\'est ça, la vraie fête.' }
  ],
  coverPhotoSrc: ''
};

let store;
const persistedData = JSON.parse(localStorage.getItem('ja_magazine_data') || 'null');
if (persistedData && typeof persistedData === 'object') {
  store = { ...defaultStore, ...persistedData };
  if (!Array.isArray(store.photos) || store.photos.some(p => !p || !p.src)) {
    store.photos = defaultStore.photos;
  }
} else {
  store = defaultStore;
}

function saveStore() {
  try { localStorage.setItem('ja_magazine_data', JSON.stringify(store)); } catch(e) {}
}

// ============================================================
//  INIT
// ============================================================
window.addEventListener('load', () => {
  setTimeout(() => {
    document.getElementById('loading-screen').classList.add('hidden');
  }, 1800);
  renderAll();
  initScrollObserver();
  initNavScroll();
  attachUIListeners();
  initBackgroundAudio();
});

function renderAll() {
  renderGallery();
  renderVideos();
  renderMemories();
  renderTimeline();
  renderMessages();
  renderFacts();
  renderInterview();
  renderCoverPhoto();
}

// ============================================================
//  GALLERY
// ============================================================
function renderGallery() {
  const grid = document.getElementById('gallery-grid');
  grid.innerHTML = store.photos.map((p, i) => `
    <div class="gallery-item" data-id="${p.id}" data-src="${p.src||''}" data-caption="${(p.caption||'').replace(/"/g,'&quot;')}">
      ${p.src
        ? `<img src="${p.src}" alt="${p.caption||''}"/>`
        : `<div class="gallery-placeholder">
            <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1"><rect x="3" y="3" width="18" height="18" rx="2"/><circle cx="8.5" cy="8.5" r="1.5"/><polyline points="21,15 16,10 5,21"/></svg>
            Photo ${i+1}
           </div>`}
      <div class="gallery-collection-tag">${p.collection||'Galerie'}</div>
      <div class="gallery-overlay"><div class="gallery-caption">${p.caption||''}</div></div>
    </div>
  `).join('');
}

function deletePhoto(e, id) {
  e.stopPropagation();
  store.photos = store.photos.filter(p => p.id !== id);
  saveStore(); renderGallery(); showToast('Photo supprimée');
}

function editPhoto(e, id) {
  e.stopPropagation();
  // Admin editing has been removed from the UI.
}

// ============================================================
//  VIDEOS
// ============================================================
function getYouTubeEmbed(url) {
  if (!url) return '';
  const match = url.match(/(?:youtu\.be\/|youtube\.com\/(?:watch\?v=|embed\/|v\/))([^?&\s]+)/);
  return match ? match[1] : '';
}

function renderVideos() {
  const grid = document.getElementById('video-grid');
  if (!store.videos.length) {
    grid.innerHTML = '<div style="grid-column:1/-1; text-align:center; color:rgba(255,255,255,0.2); font-family:var(--font-serif); font-style:italic; font-size:18px; padding:60px;">Aucune vidéo disponible pour le moment.</div>';
    return;
  }
  grid.innerHTML = store.videos.map(v => {
    const embedId = v.embedId || getYouTubeEmbed(v.url);
    return `
    <div class="video-card">
      <div class="video-thumb">
        ${embedId
          ? `<iframe src="https://www.youtube.com/embed/${embedId}" allowfullscreen allow="autoplay"></iframe>`
          : `<div class="video-thumb-placeholder">▶</div>`}
      </div>
      <div class="video-info">
        <div class="video-type-tag">${v.section||'Vidéo'}</div>
        <div class="video-title">${v.title||'Titre de la vidéo'}</div>
        <div class="video-message">${v.message||''}</div>
      </div>
    </div>`;
  }).join('');
}

// ============================================================
//  MEMORIES
// ============================================================
function renderMemories() {
  const grid = document.getElementById('memories-grid');
  grid.innerHTML = store.memories.map(m => `
    <div class="memory-card">
      ${m.photo
        ? `<img class="memory-photo" src="${m.photo}" alt="${m.title}">`
        : `<div class="memory-photo-placeholder">📸</div>`}
      <div class="memory-content">
        <div class="memory-date">${m.date||'Date'}</div>
        <div class="memory-title">${m.title||'Titre du souvenir'}</div>
        <div class="memory-story">${m.story||''}</div>
      </div>
      <div class="memory-corner"></div>
    </div>
  `).join('');
}

// ============================================================
//  TIMELINE
// ============================================================
function renderTimeline() {
  const list = document.getElementById('timeline-list');
  list.innerHTML = store.timeline.map(t => `
    <div class="timeline-item">
      <div class="timeline-content">
        <div class="timeline-year">${t.year||''}</div>
        <div class="timeline-moment-title">${t.title||''}</div>
        <div class="timeline-moment-desc">${t.desc||''}</div>
      </div>
      <div class="timeline-dot"></div>
      <div class="timeline-empty"></div>
    </div>
  `).join('');
}

// ============================================================
//  MESSAGES
// ============================================================
function renderMessages() {
  const grid = document.getElementById('messages-grid');
  grid.innerHTML = store.messages.map(m => `
    <div class="message-card">
      <div class="message-text">${m.text||''}</div>
      <div class="message-author">— ${m.author||'Anonyme'}</div>
    </div>
  `).join('');
}

function submitMessage() {
  const name = document.getElementById('msg-name').value.trim();
  const text = document.getElementById('msg-text').value.trim();
  if (!text) { showToast('Veuillez écrire un message'); return; }
  store.messages.push({
    id: Date.now(),
    text: text,
    author: name || 'Anonyme'
  });
  saveStore();
  renderMessages();
  document.getElementById('msg-name').value = '';
  document.getElementById('msg-text').value = '';
  showToast('Message envoyé ! ✦');
}

// ============================================================
//  FACTS
// ============================================================
function renderFacts() {
  const grid = document.getElementById('facts-grid');
  grid.innerHTML = store.facts.map(f => `
    <div class="fact-card">
      <div class="fact-number">${f.number||'?'}<span class="fact-unit">${f.unit||''}</span></div>
      <div class="fact-label">${f.label||''}</div>
      <div class="fact-desc">${f.desc||''}</div>
    </div>
  `).join('');
}

// ============================================================
//  INTERVIEW
// ============================================================
function renderInterview() {
  const grid = document.getElementById('interview-grid');
  grid.innerHTML = store.qaItems.map(qa => `
    <div class="interview-qa">
      <div class="qa-question">${qa.q}</div>
      <div class="qa-answer">${qa.a}</div>
    </div>
  `).join('');
}

// ============================================================
//  COVER PHOTO
// ============================================================
function renderCoverPhoto() {
  const frame = document.getElementById('cover-photo-frame');
  const placeholder = document.getElementById('cover-placeholder');
  if (store.coverPhotoSrc) {
    placeholder.innerHTML = `<img src="${store.coverPhotoSrc}" style="width:100%;height:100%;object-fit:cover;filter:grayscale(15%) contrast(1.05)">`;
  }
}

// ============================================================
//  MODAL
// ============================================================
function openModal(src, caption) {
  if (!src) return;
  document.getElementById('modal-img').src = src;
  document.getElementById('modal-caption').textContent = caption || '';
  document.getElementById('modal-overlay').classList.add('open');
}
function closeModal() {
  document.getElementById('modal-overlay').classList.remove('open');
}
document.addEventListener('keydown', e => { if (e.key === 'Escape') closeModal(); });

// ============================================================
//  SCROLL OBSERVER
// ============================================================
function initScrollObserver() {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(e => {
      if (e.isIntersecting) e.target.classList.add('visible');
    });
  }, { threshold: 0.1 });
  document.querySelectorAll('.section-wrap').forEach(el => observer.observe(el));
}

// ============================================================
//  NAV SCROLL
// ============================================================
function initNavScroll() {
  window.addEventListener('scroll', () => {
    document.getElementById('nav').classList.toggle('scrolled', window.scrollY > 80);
  });
}

// ============================================================
//  TOAST
// ============================================================
function showToast(msg) {
  const t = document.getElementById('toast');
  t.textContent = msg;
  t.classList.add('show');
  setTimeout(() => t.classList.remove('show'), 2800);
}

// ============================================================
//  UI LISTENERS (replace inline onclick handlers)
// ============================================================
function attachUIListeners() {
  // mobile nav hamburger
  const navHamb = document.getElementById('nav-hamburger');
  if (navHamb) navHamb.addEventListener('click', toggleMobileNav);

  // gallery click delegation
  const galleryGrid = document.getElementById('gallery-grid');
  if (galleryGrid) {
    galleryGrid.addEventListener('click', (e) => {
      const item = e.target.closest('.gallery-item');
      if (!item) return;
      const src = item.dataset.src || '';
      const caption = item.dataset.caption || '';
      openModal(src, caption);
    });
  }

  // modal open/close handlers
  const overlay = document.getElementById('modal-overlay');
  if (overlay) overlay.addEventListener('click', closeModal);
  const modalInner = document.querySelector('.modal-inner');
  if (modalInner) modalInner.addEventListener('click', e => e.stopPropagation());
  const modalClose = document.getElementById('modal-close-btn');
  if (modalClose) modalClose.addEventListener('click', closeModal);

  // submit message
  const submitBtn = document.getElementById('submit-message-btn');
  if (submitBtn) submitBtn.addEventListener('click', submitMessage);
}

// ============================================================
// BACKGROUND AUDIO
// Attempts to autoplay; if blocked, starts on first user interaction.
// Replace the audio source in the HTML (`assets/audio/bg-music.mp3`).
function initBackgroundAudio() {
  const audio = document.getElementById('bg-audio');
  if (!audio) return;
  // sensible default volume
  audio.volume = 0.6;

  audio.muted = true;
  audio.playsInline = true;

  const unmuteIfPlaying = () => {
    if (!audio.paused) {
      audio.muted = false;
      audio.volume = 0.7;
    }
  };

  const tryPlay = () => {
    const p = audio.play();
    if (p !== undefined) {
      p.then(() => {
        setTimeout(unmuteIfPlaying, 100);
      }).catch(() => {
        // Autoplay blocked entirely. Keep trying when visibility changes or page becomes active.
      });
    }
  };

  audio.addEventListener('ended', tryPlay);
  audio.addEventListener('pause', () => {
    if (!document.hidden) setTimeout(tryPlay, 100);
  });
  audio.addEventListener('error', () => setTimeout(tryPlay, 200));

  tryPlay();
  const retryPlayback = setInterval(() => {
    if (audio.paused && !document.hidden) tryPlay();
  }, 3000);

  document.addEventListener('visibilitychange', () => {
    if (document.visibilityState === 'visible') tryPlay();
  });
  window.addEventListener('focus', tryPlay);

  // Pause audio when page is unloaded to be explicit
  window.addEventListener('pagehide', () => { try { audio.pause(); clearInterval(retryPlayback); } catch(e){} });
}

// ============================================================
//  MOBILE NAV
// ============================================================
function toggleMobileNav() {
  const links = document.querySelector('.nav-links');
  if (links.style.display === 'flex') {
    links.style.display = '';
  } else {
    links.style.display = 'flex';
    links.style.flexDirection = 'column';
    links.style.position = 'absolute';
    links.style.top = '70px';
    links.style.left = '0';
    links.style.right = '0';
    links.style.background = 'rgba(18,18,22,0.98)';
    links.style.padding = '20px 40px';
    links.style.gap = '20px';
    links.style.borderBottom = '1px solid rgba(244,183,196,0.2)';
  }
}
