//변수 할당(html->js 파일)
const btn = document.getElementById('btn');
//단어를 저장하는 배열 생성
const lst = new Array(3);

//버튼을 클릭했을때 행동 지정(함수를 불러옴)
btn.addEventListener('click', () => {
  getWord();
});

const getWord = () => {
  //random word API(무작위로 단어 3개 생성)
  axios.get('https://random-word-api.herokuapp.com/word?number=3')
    .then(response=>{ //콜백(무작위의 단어들을 response 매개변수에 저장)
        console.log(response); //response변수를 콘솔창에 출력 - 받아온 데이터의 속성
        console.log(response.data); //data변수를 콘솔창에 출력 - 받아온 데이터의 실제값
        const words = response.data; //data변수를 words라는 변수에 각각 저장
        //api에서 받아온 데이터의 실제값을 배열에 넣기
        for(let i=0;i<words.length;i++){
          lst[i]=words[i];
        }
        //html에 노출시키는 함수
        document.getElementById('word1').innerText=lst[0];
        document.getElementById('word2').innerText=lst[1];
        document.getElementById('word3').innerText=lst[2];
    })
}

//Navbar
//변수 선언
const navbarMenu = document.querySelector('.navbar__menu');
const navbarToggleBtn = document.querySelector('.navbar__toggle-btn');

//navbar의 토글버튼을 눌렀을때(open->close, close->open)
navbarToggleBtn.addEventListener('click', () => {
  navbarMenu.classList.toggle('open');
});
