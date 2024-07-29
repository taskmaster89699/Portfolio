document.querySelector(".cross").style.display = 'none';
document.querySelector(".hamburger").addEventListener("click", () => {
    document.querySelector('.navbar-side').classList.toggle('side-go');
    if (document.querySelector('.navbar-side').classList.contains('side-go')) {
        document.querySelector('.ham').style.display = 'inline';
        document.querySelector('.cross').style.display = 'none';
    }
    else {
        document.querySelector('.ham').style.display = 'none';
        setTimeout(() => {
            document.querySelector('.cross').style.display = 'inline';
        }, 300);
    }
})

