import scrollTo from './common/scroll-to';

let isPositionFixed = false;

export default function () {

  const chapters = document.querySelector('.chapter-text__chapters');
  const startWorkingElement = document.querySelector('.chapter-text__chapters');
  const firstChapter = document.querySelector('.chapter-text__all');
  const headerHeight = 71;
  const paddingChaptersTop = 0;

  const chapterSections = $('[data-chapter]');
  const chapterSectionLinks = $('[data-chapter-link]');



  checkForChaptersPosition();

  window.addEventListener('scroll', function() {
    requestAnimationFrame(checkForChaptersPosition);
  });


  chapterSectionLinks.on('click', function() {
      const id = $(this).attr('data-chapter-link');
      const target = $(`[data-chapter="${id}"]`);

      if(!$(this).hasClass('chapter-text__inactive-chapter')) {
        if(target.length){
          scrollTo(target, -90);
        }
      }
  });



  function checkForChaptersPosition(){
    // when we get to chapters make their position fixed
    if (firstChapter.getBoundingClientRect().y- (headerHeight + paddingChaptersTop) <= 0 && !isPositionFixed) {
      firstChapter.className += " chapter-text__add-padding";
      chapters.className += " chapter-text__fixed-chapters";
      isPositionFixed = true;
    } else {
      // if we return site to position higher of our chapters starting pos, delete fixed position
      if (firstChapter.getBoundingClientRect().y - (headerHeight + paddingChaptersTop) >= 0) {
        firstChapter.classList.remove('chapter-text__add-padding');
        chapters.classList.remove('chapter-text__fixed-chapters');
        isPositionFixed = false;
      }
    }
    //document.getElementById('showScroll').innerHTML = pageYOffset + 'px ' + getCoords(firstChapter);

    setActiveChapter();
  }

  function setActiveChapter(){
    chapterSections.each(function() {
      const sectionRect = this.getBoundingClientRect();
      const sectionId = $(this).attr('data-chapter');

      const chapterLink = $(`[data-chapter-link="${sectionId}"]`);
      const isActive = sectionRect.top < 200 && sectionRect.bottom > 200;

      chapterLink.toggleClass('active', isActive);
    });
  }

}


/*
function getCoords(elem) {
  let box = elem.getBoundingClientRect().height;
  return elem.getBoundingClientRect().right;
}
*/
