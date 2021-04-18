/* 
    Insta hover
*/
var linl_insta1 = document.getElementById("link-Insta1")
var linl_insta2 = document.getElementById("link-Insta2")

var insta1 = document.getElementById("insta1")
var insta2 = document.getElementById("insta2")

linl_insta1.addEventListener('mouseenter', () => {
    insta1.innerHTML = "@Salandin.py"
})
linl_insta2.addEventListener('mouseenter', () => {
    insta2.innerHTML = "@Salandin.kra"
})

linl_insta1.addEventListener('mouseleave', () => {
    insta1.innerHTML = ""
})
linl_insta2.addEventListener('mouseleave', () => {
    insta2.innerHTML = ""
})

/*
    Github hover
*/

linl_git = document.getElementById("link-Git")
git = document.getElementById("gitu")

linl_git.addEventListener('mouseenter', () => {
    git.innerHTML = "SaLandini"
})
linl_git.addEventListener('mouseleave', () => {
    git.innerHTML = ""
})

/*
    LinkedIn hover
*/

linl_link = document.getElementById("link-Link")
linkin = document.getElementById("linkin")

linl_link.addEventListener('mouseenter', () => {
    linkin.innerHTML = 'Rafael Salandin Moraes' 
})
linl_link.addEventListener('mouseleave', () => {
    linkin.innerHTML = '' 
})

/* 
    Twitter hover
*/

twitter_link = document.getElementById("link-Twitter")
twitter = document.getElementById("twit")

twitter_link.addEventListener('mouseenter', () => {
    twitter.innerHTML = '@salandin_' 
})
twitter_link.addEventListener('mouseleave', () => {
    twitter.innerHTML = '' 
})

/*
    Discord hover
*/

linl_disc = document.getElementById("link-Disc")
discord = document.getElementById("disc")

linl_disc.addEventListener('mouseenter', () => {
    discord.innerHTML = "Salandin.f90#3124"
})
linl_disc.addEventListener('mouseleave', () => {
    discord.innerHTML = ""
})