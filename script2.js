const circle = document.querySelector('.circle');
const im1 = document.querySelector('.im1');
const im2 = document.querySelector('.im2');
const best1 = document.querySelector('.best1');

best1.addEventListener('mousemove', (event) => {
    const mouseX = event.clientX; 
    const mouseY = event.clientY; 
    const windowWidth = window.innerWidth; 
    const windowHeight = window.innerHeight; 

    // Circle movement (원의 움직임)
    const circleMoveX = (windowWidth / 2 - mouseX) / 20; // 원의 X 좌표 이동량
    const circleMoveY = (windowHeight / 2 - mouseY) / 20; // 원의 Y 좌표 이동량
    circle.style.transform = `translate(${circleMoveX}px, ${circleMoveY}px)`;

    // Image 1 movement (이미지 1의 움직임)
    const im1MoveX = (windowWidth / 2 - mouseX) / 10; 
    const im1MoveY = (windowHeight / 2 - mouseY) / 10;
    im1.style.transform = `translate(${im1MoveX}px, ${im1MoveY}px)`;

    // Image 2 movement (이미지 2의 움직임)
    const im2MoveX = (windowWidth / 2 - mouseX) / 5; 
    const im2MoveY = (windowHeight / 2 - mouseY) / 5 * 2; 
    im2.style.transform = `translate(${im2MoveX}px, ${im2MoveY}px)`;
});


let progress = 10; // 진행도
let startX = 0; // 마우스 클릭/터치 시작 지점의 X 좌표
let active = 0; // 현재 활성화된 항목의 인덱스
let isDown = false; // 마우스 클릭/터치 상태

const speedWheel = 0.1; 
const speedDrag = -0.4; 

// 인덱스를 기준으로 Z 인덱스를 계산하는 함수
const getZindex = (array, index) => array.map((_, i) => (index === i) ? array.length : array.length - Math.abs(index - i));

// 항목들을 선택
const $items = document.querySelectorAll('.bbest-item');

// 항목들을 표시하는 함수
const displayItems = (item, index, active) => {
    const zIndex = getZindex([...$items], active)[index];
    item.style.setProperty('--zIndex', zIndex);
    item.style.setProperty('--active', (index - active) / $items.length);
};

// 애니메이션 함수
const animate = () => {
    progress = Math.max(0, Math.min(progress, 100)); // 진행도를 0과 100 사이로 제한
    active = Math.floor(progress / 100 * ($items.length - 1)); // 진행도를 기준으로 활성화된 항목의 인덱스 계산

    $items.forEach((item, index) => displayItems(item, index, active)); 
};
animate();

// 항목 클릭 이벤트 처리
$items.forEach((item, i) => {
    item.addEventListener('click', () => {
        progress = (i / $items.length) * 100 + 10;
        animate(); // 애니메이션 실행
    });
});

// 마우스 휠 이벤트 처리
const handleWheel = e => {
    const wheelProgress = e.deltaY * speedWheel; // 마우스 휠 이벤트에서 얻은 이동량 계산
    progress = progress + wheelProgress; // 진행도 업데이트
    animate(); // 애니메이션 실행
};

// 마우스 이동 이벤트 처리
const handleMouseMove = (e) => {
    if (e.type === 'mousemove') {
        // 마우스 커서 위치에 따라 커서 요소들의 위치 조정
        $cursors.forEach(($cursor) => {
            $cursor.style.transform = `translate(${e.clientX}px, ${e.clientY}px)`;
        });
    }
    if (!isDown) return;
    const x = e.clientX || (e.touches && e.touches[0].clientX) || 0; // 마우스 X 좌표 또는 터치 이벤트에서 얻은 X 좌표
    const mouseProgress = (x - startX) * speedDrag; // 이동한 거리에 따른 진행도 변화량 계산
    progress = progress + mouseProgress; // 진행도 업데이트
    startX = x; // 시작 지점 업데이트
    animate(); // 애니메이션 실행
};

// 마우스 클릭 이벤트 처리
const handleMouseDown = e => {
    isDown = true;
    startX = e.clientX || (e.touches && e.touches[0].clientX) || 0; // 마우스 클릭/터치 시작 시 X 좌표 저장
};

// 마우스 클릭 해제 이벤트 처리
const handleMouseUp = () => {
    isDown = false; // 마우스 클릭/터치 상태 해제
};

// 이벤트 리스너 등록
document.addEventListener('mousewheel', handleWheel);
document.addEventListener('mousedown', handleMouseDown); 
document.addEventListener('mousemove', handleMouseMove); 
document.addEventListener('mouseup', handleMouseUp);
document.addEventListener('touchstart', handleMouseDown); 
document.addEventListener('touchmove', handleMouseMove); 
document.addEventListener('touchend', handleMouseUp); 
