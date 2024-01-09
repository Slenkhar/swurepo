let shareButton = document.querySelector("#shareButton");

shareButton.addEventListener('click', event => {
    if (navigator.share) {
      navigator.share({
        title: 'SWU Player Resources',
        url: 'https://starwarsunlimitedresources.com/'
      }).then(() => {
        console.log('Thanks for sharing!');
      })
      .catch(console.error);
    } else {
      // fallback
    }
  });