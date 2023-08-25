let isZoomed=true;

function zoomInAndOut(elementIndex){
if(isZoomed){

    const firstImage = document.getElementsByClassName('cardimage')[elementIndex];
    firstImage.style.width = '300';
    firstImage.style.height = '300';

    const teksti = document.getElementsByClassName('title')[elementIndex];
    teksti.style.display = 'none';

    const title = document.getElementsByClassName('texti')[elementIndex];
    title.style.display = 'none';

    isZoomed=false;

} else {
    const firstImage = document.getElementsByClassName('cardimage')[elementIndex];
    firstImage.style.width = '200';
    firstImage.style.height = '200';

    const teksti = document.getElementsByClassName('title')[elementIndex];
    teksti.style.display = 'block';

    const title = document.getElementsByClassName('texti')[elementIndex];
    title.style.display = 'block';

    isZoomed=true;

}
}

