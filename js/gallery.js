const images = [
    {
      preview: 'img/photo1.jpg',
      original: 'img/photo1.jpg',
      description: 'Кошеня в кошику',
    },
    {
        preview: 'img/photo1.jpg',
        original: 'img/photo1.jpg',
      description: 'Кошеня грається',
    },
    {
        preview: 'img/photo1.jpg',
        original: 'img/photo1.jpg',
      description: 'Кошеня спить',
    },
    {
        preview: 'img/photo1.jpg',
        original: 'img/photo1.jpg',
      description: 'Кошеня спить',
    },
    {
        preview: 'img/photo1.jpg',
        original: 'img/photo1.jpg',
      description: 'Кошеня спить',
    },
    {
        preview: 'img/photo1.jpg',
        original: 'img/photo1.jpg',
      description: 'Кошеня спить',
    },
    {
        preview: 'img/photo1.jpg',
        original: 'img/photo1.jpg',
      description: 'Кошеня спить',
    },
    {
        preview: 'img/photo1.jpg',
        original: 'img/photo1.jpg',
      description: 'Кошеня спить',
    },
    {
        preview: 'img/photo1.jpg',
        original: 'img/photo1.jpg',
      description: 'Кошеня спить',
    },
    {
        preview: 'img/photo1.jpg',
        original: 'img/photo1.jpg',
      description: 'Кошеня спить',
    },
    {
        preview: 'img/photo1.jpg',
        original: 'img/photo1.jpg',
      description: 'Кошеня спить',
    },
    {
        preview: 'img/photo1.jpg',
        original: 'img/photo1.jpg',
      description: 'Кошеня спить',
    },
    {
        preview: 'img/photo1.jpg',
        original: 'img/photo1.jpg',
      description: 'Кошеня спить',
    }
  ];
  


  const gallery = document.querySelector('.gallery');

const markup = images.map(({ preview, original, description }) => `
  <li class="gallery-item">
    <a href="${original}">
      <img src="${preview}" data-source="${original}" alt="${description}" class="gallery-image" />
    </a>
  </li>
`).join('');

gallery.innerHTML = markup;

  

gallery.addEventListener('click', (e) => {
    e.preventDefault();
    const img = e.target;
    if (img.nodeName !== 'IMG') return;
  
    const largeImageURL = img.dataset.source;
    console.log(largeImageURL); // тест: вивід у консоль
  
    // КРОК 12: Відкриття модального вікна
    const instance = basicLightbox.create(`
      <img src="${largeImageURL}" alt="${img.alt}" />
      <p style="text-align:center; color:white;">${img.alt}</p>
    `);
    instance.show();
  });
  