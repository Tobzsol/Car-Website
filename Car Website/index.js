document.querySelector("#LoginBtn").onclick = () =>{
    document.querySelector(".LoginFormContainer").classList.toggle
    ("active");
};
document.querySelector("#LoginFormClose").onclick = () =>{
    document.querySelector(".LoginFormContainer").classList.remove
    ("active");
};
let MenuBtn = document.querySelector("#MenuBtn");
let Navbar = document.querySelector(".navbar");

MenuBtn.onclick = () => {
    MenuBtn.classList.toggle("fa-times");
    Navbar.classList.toggle("active")
}

window.onscroll = () => {
    document.querySelector(".LoginFormContainer").classList.remove
    ("active");
    MenuBtn.classList.remove("fa-times");
    Navbar.classList.remove("active")
}

var swiper = new Swiper(".vehiclesSlider", {
    loop:true,
    centeredSlides:true,
    grabCursor:true,
    spaceBetween:20,
    autoplay: {
        delay:9500,
        disableOnInteraction:false,
    },
    paginatiom: {
        el:".swiperPagination",
        clickable:true,
    },
    breakpoints: {
        0: {
            slidesPerView:1,  
        },
        768: {
            slidesPerView:2,
        },
        1024: {
            slidesPerView:3,
        },
    }
});

var swiper = new Swiper(".featureSlider", {
    loop:true,
    centeredSlides:true,
    grabCursor:true,
    spaceBetween:20,
    autoplay: {
        delay:9500,
        disableOnInteraction:false,
    },
    paginatiom: {
        el:".swiperPagination",
        clickable:true,
    },
    breakpoints: {
        0: {
            slidesPerView:1,  
        },
        768: {
            slidesPerView:2,
        },
        1024: {
            slidesPerView:3,
        },
    }
});