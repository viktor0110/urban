export function closeFullImg(e) {
    e.currentTarget.parentElement.style.display = "none";
  }
  
  export function openFullImg(e) {
    const fullImgBox = e.target.parentElement.previousElementSibling;
    const fullImg = e.target.parentElement.previousElementSibling.firstElementChild;

    const imgPath = e.currentTarget.src;
    fullImgBox.style.display = "flex";
    fullImg.src = imgPath;
    fullImg['data-id'] = e.currentTarget.attributes["data-id"].value;
  }