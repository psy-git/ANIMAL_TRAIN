window.addEventListener("load",function(){
    //tab mobile gnb menu 버튼
    let toggleMenuBtn = document.getElementById("toggleMenu")
    let hiddenGnb = document.querySelector(".hidden_gnb")
    let btnOpenImg = "./img/btn_open.svg"
    let btnCloseImg = "./img/btn_close.svg"

    let isMenuOpen = false;

    toggleMenuBtn.addEventListener("click", function(e){
        e.preventDefault();
        isMenuOpen = !isMenuOpen

        if(isMenuOpen){
            hiddenGnb.classList.add("on")
            toggleMenuBtn.querySelector("img").setAttribute("src", btnCloseImg)
            toggleMenuBtn.querySelector("img").setAttribute("alt","gnb 닫는 버튼")
        } else{
            hiddenGnb.classList.remove("on");
            toggleMenuBtn.querySelector("img").setAttribute("src", btnOpenImg)
            toggleMenuBtn.querySelector("img").setAttribute("alt","gnb 여는 버튼")
        }
    })

    //버튼 누르면 맨 위로 올라가는 버튼
    let btnTop = document.querySelector('.btn_top');
    let lastScrollY = window.scrollY
    window.addEventListener('scroll',() => {
        if(window.scrollY >200){
            btnTop.classList.add('on')
        }else{
            btnTop.classList.remove('on')
        }

        if(window.scrollY>lastScrollY){
            btnTop.style.bottom = '-120px'
        }else{
            btnTop.style.bottom = '20px'
        }
        lastScrollY = this.window.scrollY;
    })
    btnTop.addEventListener('click', () => {
        window.scrollTo({
            top:0,
            behavior:'smooth'
        })
    })



})