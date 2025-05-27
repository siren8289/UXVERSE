// 리뷰 데이터를 담은 배열
const reviews = [
  {
    title: "청소기 정말 좋아요!", // 리뷰 제목
    author: "reviewer01",         // 작성자 ID
    category: "rental",           // 카테고리 (렌탈)
    rating: 5,                    // 별점 (5점 만점 중 5점점)
    content: "성능 최고! 배송 빠름. 추천합니다.", // 리뷰 내용
    date: "2025-05-17",           // 작성일
    image: "https://via.placeholder.com/100x100?text=청소기", // 이미지 URL (임시)
    best: true,                   // 베스트 리뷰 여부 (참)
  },
  {
    title: "가습기 공동구매 후기",
    author: "groupLover",
    category: "group",            // 공동구매 카테고리
    rating: 4,
    content: "디자인 예쁘고 습도 조절 잘돼요.",
    date: "2025-05-16",
    image: "https://via.placeholder.com/100x100?text=가습기",
    best: false, // 베스트 리뷰 여부 (거짓)
  },
];

// 리뷰를 화면에 출력하는 함수
function renderReviews() {
  const list = document.getElementById("review-list"); // 리뷰가 들어갈 HTML 영역
  const keyword = document.getElementById("search").value.toLowerCase(); // 검색어를 소문자로 가져옴
  const filter = document.getElementById("filter").value; // 카테고리 필터 (전체, group, rental)
  const sort = document.getElementById("sort").value;     // 정렬 기준 (recent, rating, title)

  // 필터 조건에 따라 리뷰 배열 필터링
  let filtered = reviews.filter(
    (r) =>
      (!filter || r.category === filter) && // 필터값이 비어있거나, 카테고리가 일치하면 통과
      (!keyword ||
        r.title.toLowerCase().includes(keyword) || // 제목에 검색어 포함
        r.content.toLowerCase().includes(keyword) || // 내용에 포함
        r.author.toLowerCase().includes(keyword)) // 작성자에 포함
  );

  // 선택된 정렬 기준에 따라 정렬
  if (sort === "recent") {
    filtered.sort((a, b) => new Date(b.date) - new Date(a.date)); // 최신순 정렬
  } else if (sort === "rating") {
    filtered.sort((a, b) => b.rating - a.rating); // 별점 높은 순
  } else if (sort === "title") {
    filtered.sort((a, b) => a.title.localeCompare(b.title)); // 제목 가나다순
  }

  list.innerHTML = ""; // 기존 리뷰 목록 초기화
  let totalRating = 0; // 평균 평점을 계산하기 위한 변수

  // 필터링된 리뷰들을 반복하면서 화면에 출력
  filtered.forEach((r, i) => {
    totalRating += r.rating; // 전체 평점 합산

    const item = document.createElement("div"); // div 요소 생성
    item.className = "review"; // 클래스 추가

  // 리뷰 HTML 내용 구성
  /*제목 표시 + 베스트 뱃지 조건부 표시
  작성자, 카테고리, 날짜 표시
  별점 표시
  리뷰 본문 내용 출력
  리뷰 이미지 출력
  '도움됨' 및 '신고' 버튼 포함*/
  item.innerHTML = `
    <h3>${r.title} ${
      r.best ? '<span class="badge">베스트 리뷰어</span>' : ""
    }</h3>
    <div class="meta">작성자: ${r.author} | 카테고리: ${
      r.category === "group" ? "공동구매" : "렌탈"
    } | 날짜: ${r.date}</div>
    <div class="rating">⭐ ${r.rating} / 5.0</div>
    <p>${r.content}</p>
    <img src="${r.image}" alt="리뷰 사진" />
    <div class="vote">
      이 리뷰가 도움이 되었나요? 
      <button onclick="alert('도움됨')">👍</button>
      <button onclick="alert('신고 처리되었습니다.')">🚩 신고</button>
    </div>
  `;


    list.appendChild(item); // 완성된 리뷰를 DOM에 추가
  });

  // 평균 평점을 계산하여 페이지에 표시
  document.getElementById("avg-rating").innerText = (
    totalRating / filtered.length
  ).toFixed(1); // 소수점 1자리까지 표시
}

// '리뷰 작성' 버튼 클릭 시 실행되는 함수
function writeReview() {
  alert("리뷰 작성은 로그인 후 공동구매/렌탈 참여자만 가능합니다.");
}

// 검색어 입력 시 자동으로 리뷰 다시 렌더링
document.getElementById("search").addEventListener("input", renderReviews);

// 카테고리 선택 시 리뷰 다시 렌더링
document.getElementById("filter").addEventListener("change", renderReviews);

// 정렬 방식 변경 시 리뷰 다시 렌더링
document.getElementById("sort").addEventListener("change", renderReviews);

// 페이지 로드 시 최초 리뷰 렌더링 실행
renderReviews();
