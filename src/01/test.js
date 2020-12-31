function debounce(func, delay){
    let inDebounce;
    return function(...args){
        if(inDebounce){
            clearTimeout(inDebounce)
        }
        inDebounce = setTimeout(()=>func(...args),delay)
    }
}
const run = debounce(val=> console.log(val),100);
run('a')
run('b')
run('2')

function throttle(func, delay){
    let lastFunc; //함수실행
    let lastRan; //이전 실행 시간
    return function(...args){
        const context = this;
        if(!lastRan){  //이전에 실행시간이 없으면 
            func.call(context,...args); //함수 실행
            lastRan = Date.now(); //현재시간 대입
        }else{
            if(lastFunc) clearTimeout(lastFunc);//이전에 실행시간이 있으면
            lastFunc = setTimeout(function(){ //이 다음 함수 실행까지 딜레이를 줌
                if((Date.now()-lastRan)>=delay){ //경과시간이 딜레이 시간보다 크면
                    func.call(context,...args); //함수실행
                }
            },delay - (Date.now() - lastRan));//실행간격
        }
    }
}

var checkPosition = () =>{
    const offset = 500;
    const currentScrollPosition = window.pageYOffset;
    const pageBottomPosion = document.body.offsetHeight - window.innerHeight - offset;
    if(currentScrollPosition >= pageBottomPosion){
        console.log('다음 페이지 로딩')
    }
};
var infiniteScroll = throttle(checkPosition,300);
window.addEventListener('scroll',infiniteScroll);