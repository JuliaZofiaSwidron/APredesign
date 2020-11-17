// const link = "http://agataswistak.com/wordpress/wp-json/wp/v2/ap_content";

// let params = new URLSearchParams(document.location.search.substring(1));
// let articleFromUrl = params.get("article");

window.addEventListener("DOMContentLoaded", getData);
function getData() {
    const urlParams = new URLSearchParams(window.location.search);
    console.log("URLSearchParams " + window.location);
    const articles_category = urlParams.get('category');
    console.log(articles_category);
    fetch("http://agataswistak.com/wordpress/wp-json/wp/v2/ap_content?per_page=100")
      .then(response => response.json())
      .then(showPosts);
  }


function showPosts(posts) {
    console.log(posts);
    posts.forEach(showArticles);
  }

// const urlParams = new URLSearchParams(window.location.search);
// const articles_showcategory = urlParams.get('category');

function showArticles(article){
   
    const template = document.querySelector(`#articletemplate`).content;
    const clone = template.cloneNode(true);
    let opencategory = '';
    // if ( article.categories === 37){
    //     opencategory = 'members';
    // }else if(
    //     article.categories=== 39){
    //     opencategory = 'pension';
    //     }else{
    //         opencategory = 'about_ap'
    //     }
    console.log(opencategory);
    clone.querySelector('.title_small > h1').textContent = article.title_article;
    clone.querySelector('.title_small > h2').textContent = article.short_line;
    clone.querySelector('.articlelink').href = article.link;
    // if (articles_showcategory === opencategory){
        if(clone.positioning === 0){
            document.querySelector(".all_articles").appendChild(clone);
        }else{
            document.querySelector(".all_articles").appendChild(clone);
        }
    

}









