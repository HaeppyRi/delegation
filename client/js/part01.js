


const data = [
  {
    "id": 1,
    "src": "visual1.jpg",
    "alt": "모던한 테이블과 화분의 조화를 표현한 공간"
  },
  {
    "id": 2,
    "src": "visual2.jpg",
    "alt": "강렬한 의자의 색상과 따뜻한 느낌의 공간"
  },
  {
    "id": 3,
    "src": "visual3.jpg",
    "alt": "호텔 라운지 느낌의 편안한 의자가 있는 공간"
  },
  {
    "id": 4,
    "src": "visual4.jpg",
    "alt": "물방을 모양의 독특한 디자인의 의자들을 나열한 공간"
  }
]



const navigation = getNode('.navigation');
// const list = getNode('.navigation li');
const visualImage = getNode('.visual img')

// 1.  e.target을 조회 
// 2. li만 수집 (closest)
// 3. 내가 선택한 li에게 is-active 클래스를 넣어주세요.

function handleSlide(e){

  e.preventDefault();

  const target = e.target.closest('li');
  const a = e.target.closest('a');

  const list = [...navigation.children];

  if(!target | !a) return;



  const index = target.dataset.index;
  // visualImage.setAttribute('src',a.href);
  //  visualImage.src = a.href
  attr(visualImage,'src', `./assets/part01/${dadt[index-1].src}`);
  attr(visualImage,'alt',data[index-1].alt);



  //forEach
  //모든 li에게 is-active class remove
  list.forEach(li => removeClass(li, 'is-active'));

// target.classList.add('is-active');
  addClass(target,'is-active');
}



navigation.addEventListener('click',handleSlide);


















