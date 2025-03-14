const isSafari = /^((?!chrome|android).)*safari/i.test(navigator.userAgent);
const isStandAlone = !!window.matchMedia('(display-mode: standalone)').matches;

if (isSafari && !isStandAlone) {
  const setVh = () => {
    const vh = window.innerHeight * 0.01;
    document.documentElement.style.setProperty('--vh', `${vh}px`);
  };

  // Check if orientationchange event is supported
  if ('onorientationchange' in window) {
    window.addEventListener('orientationchange', setVh);
  } else {
    (window as Window).addEventListener('resize', setVh);
  }
  setVh();
}
