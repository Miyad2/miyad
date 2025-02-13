
// ============ Isotop ================

$(document).ready(function(){

//   // init Isotope
// var $grid = $('.grid').isotope({
//     // options
//   });
//   // filter items on button click
//   $('.btn').on( 'click', 'button', function() {
//     var filterValue = $(this).attr('data-filter');
//     $grid.isotope({ filter: filterValue });
//   });

// ============== MixitUp ==================
var mixer = mixitup(".grid");

});

// ===================  Header Scrolling Effect  ==========================

window.onscroll = () => {
    const header = document.getElementById("main-nav");
    let scroll = scrollY;
    if(scroll>=50){
        header.classList.add("mainnavActive");
    }else{
        header.classList.remove("mainnavActive");
    }
}





// ==================  Typeing  ====================================

var type=new Typed(".typing",{
    strings:["Web Designer", "Web Developer", "WordPress Expert"],
    typeSpeed:80,
    backSpeed:80,
    loop: true,
    loopCount: Infinity,
    
});
var type=new Typed(".typing-2",{
    strings:["Web Designer", "Web Developer", "WordPress Expert"],
    typeSpeed:100,
    backSpeed:60,
    loop: true,
    loopCount: Infinity,
});







//==================  Progress-Bar  =======================================

const skillsSection = document.getElementById('skills-section');
const progressBars = document.querySelectorAll(".progress-bar");

function showProgress(){
    progressBars.forEach(progressBar=> {
        const value = progressBar.dataset.progress;
        progressBar.style.opacity=1;
        progressBar.style.width=`${value}%`; 

    });
}

function hideProgress(){
    progressBars.forEach(p => {
p.style.opacity=1;
p.style.width=0;
    })
}

window.addEventListener("scroll", () => {
    const sectionPos = skillsSection.getBoundingClientRect().top;
    const screenPos = window.innerHeight;

    if(sectionPos < screenPos){
        showProgress();
    }else{
        hideProgress();
    }
});



// ===================  FAQ Part  =================================




// Show/Hide FAQs answer
const faqs = document.querySelectorAll('.faq');
faqs.forEach(faq => {
    faq.addEventListener('click', () => {
        faq.classList.toggle('open');

        //change icon
        const icon = faq.querySelector('.faq_icon i');
        if (icon.className === 'fas fa-plus'){
            icon.className = 'fas fa-minus';
        }
        else{
            icon.className = 'fas fa-plus';
        }

    });
});


