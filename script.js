function changeLang(page) {
    window.location.href = page;
}

// Ensure marquee behaves on hover
document.addEventListener('DOMContentLoaded', () => {
    const mq = document.querySelector('marquee');
    if(mq) {
        mq.addEventListener('mouseover', () => mq.stop());
        mq.addEventListener('mouseout', () => mq.start());
    }
});