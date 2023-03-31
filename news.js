console.log("this is the news website");

let newsard = document.getElementById("newsaccordian");
let source = 'google-news';
let apikey = '6904952831f34f169b618a8bd67d52d8';  // create your own api. 
// instantiated the object 
let xhr = new XMLHttpRequest();
xhr.open("GET", `https://newsapi.org/v2/top-headlines?sources=${source}&apikey=${apikey}`, true);     // get request to server .

xhr.onload = function () {
    if (this.status == 200) {
        let json = JSON.parse(this.responseText);
        // console.log(json);
        let articles = json.articles;   // take the articles in a array .
        // console.log(articles);
        let hmtl = ""    
        articles.forEach((element,index) => {

            let news = `<div class="accordion-item">
                            <h2 class="accordion-header" id="heading${index}">
                                <button class="accordion-button" type="button" data-bs-toggle="collapse"
                                    data-bs-target="#collapse${index}" aria-expanded="true" aria-controls="collapse${index}">
                                   <strong> Breaking News ${index+1}</strong>&nbsp${element["title"]}
                                </button>
                            </h2>
                            <div id="collapse${index}" class="collapse" aria-labelledby="heading${index}"
                                data-bs-parent="#newsaccordian">
                                <div class="accordion-body">${element["content"]} <a href="${element["url"]}" target="__blank"> Read more </a> </div>
                            </div>
                        </div>`
        hmtl+=news;   // adding in div for popplate.
        });
        newsard.innerHTML=hmtl;
    }
}
xhr.send();


