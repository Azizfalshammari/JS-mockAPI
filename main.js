let title = document.getElementById("imgName");
let link = document.getElementById("imgTitle");
let btn = document.getElementById("btn");
let div = document.getElementById("bigcontainer");

printAll()

async function logIn() {
  let printer = document.getElementById("printer");
  let Response = await fetch(
    "https://665736a19f970b3b36c865bf.mockapi.io/imgs",
    {
      method: "POST",
      body: JSON.stringify({
        imgName: title.value,
        imgLink: link.value,
      }),
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
    }
  );
  let data = await Response.json();
  printAll()
}





async function printAll() {
  let Response = await fetch(
    "https://665736a19f970b3b36c865bf.mockapi.io/imgs"
  );
  let data = await Response.json();
  data.forEach((element) => {
    let imgHolder = document.createElement("img");
    let imgHolderName = document.createElement("p");
    let imgHolderDiv = document.createElement("div");
    let deleteBtn = document.createElement('button')
    div.append(imgHolderDiv)
    imgHolderDiv.classList.add('container-fluid', 'col-3')
    imgHolder.classList.add('img-thumbnail')
    deleteBtn.innerText = 'Delete';
    deleteBtn.id = element.id
    
    imgHolder.src = element.imgLink;
    imgHolderName.innerText = element.imgName;
    imgHolderDiv.append(imgHolderName);
    imgHolderDiv.append(imgHolder);
    imgHolderDiv.append(deleteBtn);
    
    deleteBtn.addEventListener('click',  async function deleteItem() {
    
        let Response = await fetch(
          `https://665736a19f970b3b36c865bf.mockapi.io/imgs/${element.id}`,
          {
            method: "DELETE"
          }
        );
        let data = await Response.json();
        location.reload()
      })
  });
}




