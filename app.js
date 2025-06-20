function loadImage(url) {
  return new Promise((resolve, reject) => {
    let image = new Image();

    image.onload = function () {
      resolve(image);
    };

    image.onerror = function () {
      let msg = 'Could not load image at ' + url;
      reject(new Error(msg));
    };

    image.src = url;
  });
}

let addImg = (src) => {
  let imgElement = document.createElement('img');
  imgElement.src = src;
  document.body.appendChild(imgElement);
};

Promise.all([
  loadImage('/images/cat1.jpg'),
  loadImage('/images/cat2.jpg'),
  loadImage('/images/cat3.jpg'),
  loadImage('/images/cat4.jpg')
])
  .then((images) => {
    images.forEach((img) => addImg(img.src));
  })
  .catch((error) => {
    console.error(error);
  });
