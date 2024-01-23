let subscribeBtn = document.querySelector('#open_modal');
let modalPage = document.querySelector('#contentsOfModal');

modalPage.style.display = 'none';

//display 속성을 none과 flex 둘다 할 수 가 없으므로 전환 사용
subscribeBtn.addEventListener('click',(event)=>{
    let emailAddr = document.querySelector('.emailAddr').value;
    event.preventDefault();

    if (!emailAddr){ //email 칸이 비어있다면
        alert("구독을 위해 이메일을 입력해야 합니다.");
        return;
    }

    modalPage.style.display = 'flex';
});

let closeBtn = document.querySelector('#close_modal');
closeBtn.addEventListener('click',()=>{
    modalPage.style.display='none';
});