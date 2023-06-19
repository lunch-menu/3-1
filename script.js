window.addEventListener('scroll', function () {
  var scrollTop = window.pageYOffset || document.documentElement.scrollTop;

  var sec1 = document.querySelector('.sec1');
  var sec2 = document.querySelector('.sec2');

  var distanceFromTop = sec2.getBoundingClientRect().top;
  var distanceFromBottom = sec1.getBoundingClientRect().bottom;

  if (distanceFromTop <= 0 || distanceFromBottom <= 0) {
      sec1.classList.add('video-hidden');
      sec2.classList.add('padding-hidden');
      document.querySelector('header').style.top = '8px';
  } else {
      sec1.classList.remove('video-hidden');
      sec2.classList.remove('padding-hidden');
      document.querySelector('header').style.top = '0';
  }

  var borderRadius = 50 - (scrollTop / 10);
  borderRadius = Math.max(borderRadius, 0);
  borderRadius = Math.min(borderRadius, 50);

  var borderRadius1 = 50 + (scrollTop / 10);
  borderRadius1 = Math.max(borderRadius1, 0);
  borderRadius1 = Math.min(borderRadius1, 40);

  var video = sec1.querySelector('video');
  video.style.borderRadius = borderRadius + '%';
  var header = document.querySelector('header');
  header.style.borderRadius = borderRadius1 + 'px';
  
  const bodyHeight = bodyTag.getBoundingClientRect().height;
  let scrollableHeight = bodyHeight - window.innerHeight;

  let scrollWidth = (window.scrollY / scrollableHeight) * window.innerWidth;
  scrollWidth = Math.min(scrollWidth, 1200);

  progressBar.style.width = scrollWidth + "px";
});


const bodyTag = document.querySelector("body");
const progressBar = document.querySelector("div.progress-bar");

  document.addEventListener("scroll", function() {
  console.log(window.scrollY);

  const bodyHeight = bodyTag.getBoundingClientRect().height;
  let scrollableHeight = bodyHeight - window.innerHeight;

  let scrollWidth = (window.scrollY / scrollableHeight) * window.innerWidth;

  progressBar.style.width = scrollWidth + "px";
  });


const manLink = document.querySelector('.sub-navi a:nth-child(1)');
const womenLink = document.querySelector('.sub-navi a:nth-child(2)');
const kidsLink = document.querySelector('.sub-navi a:nth-child(3)');
const mmM1 = document.querySelector('.mm.m1');
const mmM2 = document.querySelector('.mm.m2');
const mmM3 = document.querySelector('.mm.m3');

// MAN을 클릭할 때의 동작을 정의합니다.
manLink.addEventListener('click', function (event) {
event.preventDefault(); // 링크 클릭 시 페이지 이동을 막습니다.

// 스타일 변경
manLink.style.color = 'black';
mmM1.style.flexGrow = '3';

// 다른 링크 스타일 초기화
womenLink.style.color = '';
kidsLink.style.color = '';
mmM2.style.flexGrow = '1';
mmM3.style.flexGrow = '1';

// acontainer 내용 변경
const acontainer = mmM1.querySelector('.acontainer');
acontainer.innerHTML = '<a href="#">신발</a><a href="#">의류</a><a href="#">액세서리</a><a href="#">커스텀</a>';
const acontainer1 = mmM2.querySelector('.acontainer');
acontainer1.innerHTML = '<a href="#"></a><a href="#"></a><a href="#"></a><a href="#"></a>';
const acontainer2 = mmM3.querySelector('.acontainer');
acontainer2.innerHTML = '<a href="#"></a><a href="#"></a><a href="#"></a><a href="#"></a>';
});

// WOMEN을 클릭할 때의 동작을 정의합니다.
womenLink.addEventListener('click', function (event) {
event.preventDefault(); 

womenLink.style.color = 'black';
mmM2.style.flexGrow = '3';

manLink.style.color = '';
kidsLink.style.color = '';
mmM1.style.flexGrow = '1';
mmM3.style.flexGrow = '1';

const acontainer = mmM1.querySelector('.acontainer');
acontainer.innerHTML = '<a href="#"></a><a href="#"></a><a href="#"></a><a href="#"></a>';
const acontainer1 = mmM2.querySelector('.acontainer');
acontainer1.innerHTML = '<a href="#">신발</a><a href="#">의류</a><a href="#">액세서리</a><a href="#">커스텀</a>';
const acontainer2 = mmM3.querySelector('.acontainer');
acontainer2.innerHTML = '<a href="#"></a><a href="#"></a><a href="#"></a><a href="#"></a>';
});

// KIDS를 클릭할 때의 동작을 정의합니다.
kidsLink.addEventListener('click', function (event) {
event.preventDefault(); 

kidsLink.style.color = 'black';
mmM3.style.flexGrow = '3';

manLink.style.color = '';
womenLink.style.color = '';
mmM1.style.flexGrow = '1';
mmM2.style.flexGrow = '1';

const acontainer = mmM1.querySelector('.acontainer');
acontainer.innerHTML = '<a href="#"></a><a href="#"></a><a href="#"></a><a href="#"></a>';
const acontainer1 = mmM2.querySelector('.acontainer');
acontainer1.innerHTML = '<a href="#"></a><a href="#"></a><a href="#"></a><a href="#"></a>';
const acontainer2 = mmM3.querySelector('.acontainer');
acontainer2.innerHTML = '<a href="#">신발</a><a href="#">의류</a><a href="#">액세서리</a><a href="#">커스텀</a>';
});

// mmM1을 클릭할 때의 동작을 정의합니다.
mmM1.addEventListener('click', function (event) {
event.preventDefault(); // 링크 클릭 시 페이지 이동을 막습니다.

// 스타일 변경
manLink.style.color = 'black';
mmM1.style.flexGrow = '3';

// 다른 링크 스타일 초기화
womenLink.style.color = '';
kidsLink.style.color = '';
mmM2.style.flexGrow = '1';
mmM3.style.flexGrow = '1';

// acontainer 내용 변경
const acontainer = mmM1.querySelector('.acontainer');
acontainer.innerHTML = '<a href="#">신발</a><a href="#">의류</a><a href="#">액세서리</a><a href="#">커스텀</a>';
const acontainer1 = mmM2.querySelector('.acontainer');
acontainer1.innerHTML = '<a href="#"></a><a href="#"></a><a href="#"></a><a href="#"></a>';
const acontainer2 = mmM3.querySelector('.acontainer');
acontainer2.innerHTML = '<a href="#"></a><a href="#"></a><a href="#"></a><a href="#"></a>';

});

// mmM2를 클릭할 때의 동작을 정의합니다.
mmM2.addEventListener('click', function (event) {
event.preventDefault(); // 링크 클릭 시 페이지 이동을 막습니다.

// 스타일 변경
womenLink.style.color = 'black';
mmM2.style.flexGrow = '3';

// 다른 링크 스타일 초기화
manLink.style.color = '';
kidsLink.style.color = '';
mmM1.style.flexGrow = '1';
mmM3.style.flexGrow = '1';

// acontainer 내용 변경
const acontainer = mmM1.querySelector('.acontainer');
acontainer.innerHTML = '<a href="#"></a><a href="#"></a><a href="#"></a><a href="#"></a>';
const acontainer1 = mmM2.querySelector('.acontainer');
acontainer1.innerHTML = '<a href="#">신발</a><a href="#">의류</a><a href="#">액세서리</a><a href="#">커스텀</a>';
const acontainer2 = mmM3.querySelector('.acontainer');
acontainer2.innerHTML = '<a href="#"></a><a href="#"></a><a href="#"></a><a href="#"></a>';
});

// mmM3를 클릭할 때의 동작을 정의합니다.
mmM3.addEventListener('click', function (event) {
event.preventDefault(); // 링크 클릭 시 페이지 이동을 막습니다.

// 스타일 변경
kidsLink.style.color = 'black';
mmM3.style.flexGrow = '3';

// 다른 링크 스타일 초기화
manLink.style.color = '';
womenLink.style.color = '';
mmM1.style.flexGrow = '1';
mmM2.style.flexGrow = '1';

// acontainer 내용 변경
const acontainer = mmM1.querySelector('.acontainer');
acontainer.innerHTML = '<a href="#"></a><a href="#"></a><a href="#"></a><a href="#"></a>';
const acontainer1 = mmM2.querySelector('.acontainer');
acontainer1.innerHTML = '<a href="#"></a><a href="#"></a><a href="#"></a><a href="#"></a>';
const acontainer2 = mmM3.querySelector('.acontainer');
acontainer2.innerHTML = '<a href="#">신발</a><a href="#">의류</a><a href="#">액세서리</a><a href="#">커스텀</a>';
});

