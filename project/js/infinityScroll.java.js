const showMoreBtn = document.querySelector('#showMoreBtn');
const gridFrame = document.querySelector(".grid_frame");
let pageToFetch = 1;
let flag = true;
let timer;

showMoreBtn.addEventListener('click', function (){
    if(flag) {
        fetchImages(pageToFetch++);
        window.addEventListener('scroll', infinityScroll);
        showMoreBtn.innerText = 'Stop';
        flag=false;
    }else {
        window.removeEventListener('scroll', infinityScroll);
        showMoreBtn.innerText = 'Show more';
        flag=true;
    }
});

async function fetchImages(pageNum) {
    try {
        const response = await fetch('https://api.thecatapi.com/v1/images/search?limit=10&breed_ids=beng&api_key=live_spXwiwOkUNQTIxNpWjpyde1Skwo5JPBC4Urcw0bqiPCrVe9wEiiTaeQ3DdbEGTxE');
        if (!response.ok) {
            throw new Error('네트워크 응답에 문제가 있습니다.');
        }

        const datas = await response.json();
        makeImageList(datas);

    } catch (error) {
        console.error('데이터를 가져오는데 문제가 발생했습니다 :', error);
    }
}

function makeImageList(datas) {
    let img_dummy = '';
    datas.forEach((item, index) => {
        img_dummy += `<img src="${item.url}" alt="">`;
        if ((index + 1) % 3 === 0) {
            // 3개씩 그룹화된 경우, 현재 그룹을 추가하고 초기화
            gridFrame.innerHTML += `<div class = 'three_img'>${img_dummy}</div>`;
            img_dummy = '';
        }
    })
}

function infinityScroll() {
    if (window.innerHeight + document.documentElement.scrollTop + 750 >= document.documentElement.offsetHeight) {
        if (!timer) {
            timer = setTimeout(() => {
                timer = null;
                fetchImages(pageToFetch++);
            }, 500);
        }
    }
}