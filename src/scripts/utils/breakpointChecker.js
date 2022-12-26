export default function breakpointChecker(mediaVal = null, cb1 = () => {}, cb2 = () => {}) {
  return window.matchMedia(mediaVal).matches ? cb1() : cb2();
}
