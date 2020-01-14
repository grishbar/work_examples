export default function(element, offset) {
  element = $(element)[0];
  offset = offset || 0;

  const supportsNativeSmoothScroll = 'scrollBehavior' in document.documentElement.style;
  const targetTopPos = element.offsetTop + offset;

  if(supportsNativeSmoothScroll) {
    window.scrollTo({
      top: targetTopPos,
      behavior: "smooth"
    });
  } else {
    window.scrollTo(0, targetTopPos);
  }
}
