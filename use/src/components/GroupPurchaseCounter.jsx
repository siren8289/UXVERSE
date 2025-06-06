// //useState 예제
// import React, { useState } from 'react';

// function GroupPurchaseCounter() {
//   // 참여 인원 수를 저장하는 useState (처음 값은 1명)
//   const [participants, setParticipants] = useState(1);

//   // 버튼 클릭 시 참여 인원 수를 +1 증가시키는 함수
//   const handleJoinClick = () => {
//     setParticipants(participants + 1);

//   };

//   return (
//     <div style={styles.container}>
//       <h2>📦 스마트 공동구매 참여</h2>
//       <p>현재 참여 인원: <strong>{participants}명</strong></p>

//       {/* 버튼을 누르면 참여 인원이 1명씩 증가 */}
//       <button onClick={handleJoinClick} style={styles.button}>
//         나도 참여하기 (+1)
//       </button>
//     </div>
//   );
// }

// // 🔧 간단한 인라인 스타일
// const styles = {
//   container: {
//     backgroundColor: '#fefefe',
//     border: '1px solid #ddd',
//     borderRadius: '12px',
//     padding: '20px',
//     maxWidth: '320px',
//     margin: 'auto',
//     textAlign: 'center'
//   },
//   button: {
//     backgroundColor: '#5C6BC0',
//     color: '#fff',
//     border: 'none',
//     padding: '10px 16px',
//     borderRadius: '8px',
//     cursor: 'pointer',
//     fontSize: '16px',
//     marginTop: '10px'
//   }
// };

// export default GroupPurchaseCounter;

import React, { useState, useEffect } from 'react';

function GroupPurchaseCounter() {
  // 참여 인원 수 상태
  const [participants, setParticipants] = useState(1);

  // participants가 변경될 때마다 실행되는 useEffect
  useEffect(() => {
    console.log(`참여 인원 수가 변경되었습니다: ${participants}명`);
  }, [participants]); // 의존성 배열에 participants 포함

  // 버튼 클릭 시 참여 인원 +1
  const handleJoinClick = () => {
    setParticipants(participants + 1);
  };

  return (
    <div style={styles.container}>
      <h2>📦 스마트 공동구매 참여</h2>
      <p>현재 참여 인원: <strong>{participants}명</strong></p>

      <button onClick={handleJoinClick} style={styles.button}>
        나도 참여하기 (+1)
      </button>
    </div>
  );
}

// 간단한 인라인 스타일
const styles = {
  container: {
    backgroundColor: '#fefefe',
    border: '1px solid #ddd',
    borderRadius: '12px',
    padding: '20px',
    maxWidth: '320px',
    margin: 'auto',
    textAlign: 'center'
  },
  button: {
    backgroundColor: '#5C6BC0',
    color: '#fff',
    border: 'none',
    padding: '10px 16px',
    borderRadius: '8px',
    cursor: 'pointer',
    fontSize: '16px',
    marginTop: '10px'
  }
};

export default GroupPurchaseCounter;
