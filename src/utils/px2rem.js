export default function px2rem(ratio){
    return ratio*parseFloat(getComputedStyle(document.documentElement).fontSize);
}