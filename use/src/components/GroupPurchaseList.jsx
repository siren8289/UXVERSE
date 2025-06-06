//useEffect 예제
import React, { useEffect, useState } from 'react';

function GroupPurchaseList() {
  // 상품 데이터를 저장할 공간 (처음엔 빈 배열)
  const [products, setProducts] = useState([]);

  // 🧠 페이지가 처음 열릴 때 자동으로 실행되는 코드
  useEffect(() => {
    // 여기에선 서버 요청 대신 가짜 데이터 사용
    const dummyProducts = [
      { id: 1, name: '스마트 선풍기', price: 49000 },
      { id: 2, name: '미니 냉장고', price: 98000 },
      { id: 3, name: '간편 전자렌지', price: 39000 }
    ];

    // 데이터를 state에 저장
    setProducts(dummyProducts);

    // 콘솔에 출력 (자동 실행되는 부분 확인용)
    console.log('🛒 공동구매 상품 데이터를 불러왔습니다!');
  }, []); // 🔍 의존성 배열이 비어있으면, 처음 한 번만 실행됨

  return (
    <div style={styles.container}>
      <h2>📦 공동구매 상품 목록</h2>
      <ul>
        {/* 상품 리스트를 화면에 보여주기 */}
        {products.map((item) => (
          <li key={item.id}>
            {item.name} – {item.price.toLocaleString()}원
          </li>
        ))}
      </ul>
    </div>
  );
}

// 🎨 간단한 스타일링
const styles = {
  container: {
    backgroundColor: '#fff',
    border: '1px solid #ccc',
    borderRadius: '12px',
    padding: '20px',
    maxWidth: '400px',
    margin: '20px auto',
    fontSize: '18px'
  }
};

export default GroupPurchaseList;

