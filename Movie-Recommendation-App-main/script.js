const APILINK='https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=d7638af1a8ffad121fa069296efb35cb&page=1';
const IMG_PATH='https://image.tmdb.org/t/p/w1280';
const SEARCHAPI='https://api.themoviedb.org/3/search/movie?api_key=d7638af1a8ffad121fa069296efb35cb&query=';
const main=document.getElementById("section");
const form=document.getElementById("form");
const search=document.getElementById("query");

 returnMovies(APILINK);
function returnMovies(url){
    fetch(url).then(res=>res.json())
    .then(function(data)
    {

        data.results.forEach(element=>{
            const div_card=document.createElement('div');
            div_card.setAttribute('class','card');

            const div_row=document.createElement('div');
            div_row.setAttribute('class','row');

            const div_column=document.createElement('div');
            div_column.setAttribute('class','column');

            const image=document.createElement('img');
            image.setAttribute('class','thumbnail');
            image.setAttribute('id','image');

            const ediv=document.createElement('div');

            const title=document.createElement('h3');
            title.setAttribute('id','title');
            ediv.appendChild(title);
            ediv.setAttribute('class','extra')
            
            const center=document.createElement('center');
            title.innerHTML=`${element.title}`;
            image.src=IMG_PATH+element.poster_path;

            center.appendChild(image);
            div_card.appendChild(center);
            div_card.appendChild(ediv);
            div_column.appendChild(div_card);
            div_row.appendChild(div_column);
            
            main.appendChild(div_row);
        });
    });
}
form.addEventListener("submit",(e)=>{
    e.preventDefault();
    main.innerHTML='';
    const searchItem=search.value;
    if(searchItem){
        returnMovies(SEARCHAPI+searchItem);
        search.value="";
    }
});

/*"https://api.themoviedb.org/3/search/movie?&api_key=d7638af1a8ffad121fa069296efb35cb&query";*/
