let profileOpen = true;
let messangerOpen = false;
let planOpen = false;
let profileTab = document.querySelector('article#profile');
let messangerTab = document.querySelector('article#messanger');
let planTab = document.querySelector('article#profileplan');
let profileLi = document.querySelector('li.pensinsu');
let msgLi = document.querySelector('li.msg');
let planLi = document.querySelector('li.plan');

document.querySelector('.pensinsu').addEventListener('click',changeArticle(profile));
document.querySelector('.msg').addEventListener('click',changeArticle(messanger));
document.querySelector('.profplan').addEventListener('click',changeArticle(plan));
 
const changeArticle = (article) => {
    switch (article){
        case profile :
            do{
            
            }
    }
}