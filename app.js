// =============================================
//  앱 목록 — 여기에 항목을 추가/수정하세요
// =============================================
const APPS = [
  {
    id: 7,
    name: "G-MAP 2028 시행계획",
    description: "2028 시행계획을 정리하여 검색할 수 있는 프로그램. feat 조만기, 허정욱, 강순영, 김수정, 이지수, 채무철, 김한국, 김기정, 정현석",
    category: "진학데이터검색",
    thumbnail: "images/GMAP.png",
    thumbnailColor: "#10b981",
    link: "https://specialzoker.github.io/gmap/",
  },
  {
    id: 6,
    name: "2028 대입전형 시행계획 나침반",
    description: "2028 대입전형 시행계획 링크 모음",
    note: "제작자 새솔고 김태진",
    category: "진학데이터검색",
    thumbnail: "images/나침반.png",
    thumbnailColor: "#10b981",
    link: "namdimban.html",
  },
  {
    id: 8,
    name: "경기진협 연구자료 모음",
    description: "경기진협의 다양한 연구팀들이 만든 강의자료, 연구파일 등을 모아 놓은 드라이브",
    category: "교육",
    thumbnail: "images/drive.png",
    thumbnailColor: "#8b5cf6",
    link: "https://drive.google.com/drive/folders/1CUKnL3UHuV_D234netutiPuFWY1NhXjK?usp=drive_link",
  },
  {
    id: 1,
    name: "모의고사 오답정리기",
    description: "틀린 모의고사 문제와 유사한 문제를 추천 받아 풀어보는 프로그램",
    category: "교육",
    thumbnail: "images/wrong.png",
    thumbnailColor: "#6c63ff",
    link: "https://specialzoker.github.io/wrong/",
  },
  {
    id: 5,
    name: "수리 논술 대학 추천기",
    description: "수리논술을 지원하고자 하는 학생들에게 합격자의 수학 백분위와의 비교를 통해 가능성이 높은 대학을 추천하는 앱",
    category: "진학데이터검색",
    thumbnail: "images/nonsul.png",
    thumbnailColor: "#f59e0b",
    link: "https://specialzoker.github.io/nonsul/",
  },
  {
    id: 4,
    name: "경기진협 강의영상",
    description: "수시모집 요강비교, 진학독립, 긴급 점검 등 경기진협 연수영상",
    category: "유튜브 영상",
    thumbnail: "images/youtube.png",
    thumbnailColor: "#ef4444",
    link: "https://www.youtube.com/@%EA%B2%BD%EA%B8%B0%EC%A7%84%ED%98%91/playlists",
  },
  {
    id: 2,
    name: "경기진협 대입합격 분석 박스플롯",
    description: "경기진협 대입 지원-합격 데이터 박스플롯",
    note: "이 앱은 경기진협에 수시입결을 제공하신 학교에만 코드가 제공됩니다.",
    category: "진학데이터검색",
    thumbnail: "images/box.png",
    thumbnailColor: "#10b981",
    link: "https://specialzoker.github.io/ggjinhyubboxplot/",
  },
  {
    id: 9,
    name: "지원성향분석",
    description: "작년 경기진협 데이터를 바탕으로 학생들의 지원 경향성을 분석",
    category: "진학데이터검색",
    thumbnail: "images/another.png",
    thumbnailColor: "#10b981",
    link: "https://specialzoker.github.io/another/",
  },
  {
    id: 3,
    name: "G-MAP 대입통합검색기",
    description: "일상 상담시 라인잡기용 상담프로그램. 수시와 정시를 함께 볼 수 있음.",
    category: "진학데이터검색",
    thumbnail: "images/search.png",
    thumbnailColor: "#3b82f6",
    link: "https://specialzoker.github.io/daip-search/",
  },
];

// =============================================
//  카테고리 목록 — APPS 배열에서 자동 추출
// =============================================
const CATEGORIES = ["전체", ...new Set(APPS.map(a => a.category))];

// =============================================
//  카테고리 색상 맵
// =============================================
const CATEGORY_COLORS = {
  "교육":           "#8b5cf6",
  "진학데이터검색": "#10b981",
  "유튜브 영상":    "#ef4444",
};

// =============================================
//  아이콘 맵 (카테고리별 SVG 아이콘)
// =============================================
const CATEGORY_ICONS = {
  "교육":          `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M12 2L2 7l10 5 10-5-10-5z"/><path d="M2 17l10 5 10-5"/><path d="M2 12l10 5 10-5"/></svg>`,
  "진학데이터검색": `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="11" cy="11" r="8"/><path d="m21 21-4.35-4.35"/><path d="M11 8v6M8 11h6"/></svg>`,
  "유튜브 영상":   `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M22.54 6.42a2.78 2.78 0 0 0-1.95-1.96C18.88 4 12 4 12 4s-6.88 0-8.59.46A2.78 2.78 0 0 0 1.46 6.42 29 29 0 0 0 1 12a29 29 0 0 0 .46 5.58 2.78 2.78 0 0 0 1.95 1.96C5.12 20 12 20 12 20s6.88 0 8.59-.46a2.78 2.78 0 0 0 1.95-1.96A29 29 0 0 0 23 12a29 29 0 0 0-.46-5.58z"/><polygon points="9.75 15.02 15.5 12 9.75 8.98 9.75 15.02"/></svg>`,
  "default":       `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="3" y="3" width="18" height="18" rx="2"/><path d="M9 9h6M9 13h4"/></svg>`,
};

// =============================================
//  렌더링
// =============================================
let currentFilter = "전체";

function getIcon(category) {
  return CATEGORY_ICONS[category] || CATEGORY_ICONS["default"];
}

function buildFilterButtons() {
  const nav = document.getElementById("filter-nav");
  nav.innerHTML = CATEGORIES.map(cat => `
    <button
      class="filter-btn ${cat === currentFilter ? "active" : ""}"
      data-cat="${cat}"
    >${cat}</button>
  `).join("");

  nav.querySelectorAll(".filter-btn").forEach(btn => {
    btn.addEventListener("click", () => {
      currentFilter = btn.dataset.cat;
      buildFilterButtons();
      renderCards();
    });
  });
}

function renderCards() {
  const grid = document.getElementById("card-grid");
  const empty = document.getElementById("empty-state");
  const filtered = currentFilter === "전체"
    ? APPS
    : APPS.filter(a => a.category === currentFilter);

  if (filtered.length === 0) {
    grid.innerHTML = "";
    empty.hidden = false;
    return;
  }
  empty.hidden = true;

  grid.innerHTML = filtered.map(app => {
    const accent = CATEGORY_COLORS[app.category] || app.thumbnailColor;
    const thumb = app.thumbnail
      ? `<img src="${app.thumbnail}" alt="${app.name} 썸네일" class="card-thumb-img">`
      : `<div class="card-thumb-placeholder" style="background:${accent}22; color:${accent}">
           ${getIcon(app.category)}
         </div>`;

    return `
      <article class="card" style="--accent:${accent}">
        <div class="card-thumb">${thumb}</div>
        <div class="card-body">
          <span class="badge">${app.category}</span>
          <h2 class="card-title">${app.name}</h2>
          <p class="card-desc">${app.description}</p>
          ${app.note ? `<p class="card-note">${app.note}</p>` : ""}
        </div>
        <div class="card-footer">
          <a href="${app.link}" class="btn-link" target="_blank" rel="noopener">
            열기
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" width="14" height="14"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/><polyline points="15 3 21 3 21 9"/><line x1="10" y1="14" x2="21" y2="3"/></svg>
          </a>
        </div>
      </article>
    `;
  }).join("");
}

function updateCount() {
  const total = document.getElementById("app-count");
  total.textContent = `앱 ${APPS.length}개`;
}

async function updateVisitorCount() {
  const el = document.getElementById("visitor-count");
  if (!el) return;

  const today = new Date().toISOString().slice(0, 10);
  const alreadyCounted = sessionStorage.getItem("counted");

  if (!alreadyCounted) {
    sessionStorage.setItem("counted", "1");
    try {
      const totalRes = await fetch("https://api.counterapi.dev/v1/ggjinhyub-platform/views/up");
      const totalData = await totalRes.json();
      sessionStorage.setItem("totalCount", totalData.count);
      el.textContent = `👁 총 ${totalData.count.toLocaleString()}`;
    } catch {
      el.textContent = `👁 조회 중…`;
    }
  } else {
    const total = sessionStorage.getItem("totalCount");
    if (total) {
      el.textContent = `👁 총 ${parseInt(total).toLocaleString()}`;
    }
  }
}

document.addEventListener("DOMContentLoaded", () => {
  updateCount();
  buildFilterButtons();
  renderCards();
  updateVisitorCount();
});
