console.log("Let's get this party started!");
const frm = document.querySelector("#searchFrm");
frm.style.display="inline-block";
frm.style.width="250px";

frm.addEventListener("submit", getImage);
const remove = document.querySelector('#removeImg');
remove.addEventListener("click", (e) => {
    while (ul.firstChild) ul.removeChild(ul.firstChild);
});
let ul = document.querySelector('#imageList');

async function getImage(e) {
    e.preventDefault();

     try {
    let term = document.querySelector('#searchTerm').value.trim();
    let res = await axios.get('http://api.giphy.com/v1/gifs/search',
        {
            params: {
                q: term,
                api_key: "MhAodEJIJxQMxW9XqxKjyXfNYdLoOIym"
            }
        });

    addImageToList(res);

    } catch (err) {
        alert('No image found.');
    }

}

function addImageToList(res) {
    let imageList = document.querySelector('#imageList');
    if (res.data.data.length) {    
        let random_Id = Math.floor(Math.random() * res.data.data.length);    
        let list = document.createElement('LI');
        list.classList.add('img');
        list.innerHTML = `<img src="${res.data.data[random_Id].images.original.url}">`
        imageList.append(list);
        console.log(list)
    }

}