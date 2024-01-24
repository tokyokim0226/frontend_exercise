// Element.getBoundingClientRect() method returns the size of an element and its position relative to the viewport.
// pageYOffset is a read - only window property that returns the number of pixels the document has been scrolled vertically.
// slice extracts a section of a string without modifying original string
//offsetTop - A Number, representing the top position of the element, in pixels

// ********** set date ************
const date = document.getElementById('date');

date.innerHTML = new Date().getFullYear();

// ********** close links ************

const navToggle = document.querySelector('.nav-toggle');
const linksContainer = document.querySelector('.links-container');
const links = document.querySelector('.links');

navToggle.addEventListener('click', function(){
    // linksContainer.classList.toggle('show-links');
    const containerHeight = linksContainer.getBoundingClientRect().height;
    const linksHeight = links.getBoundingClientRect().height;

    if (containerHeight === 0) { //if default setup where links is not shown
        linksContainer.style.height=`${linksHeight}px`; 
        //this is an inline way to style
        //and inline styling takes precedence over any styling done in the css styles file.
        //therefore in this case when we open our toggle in a small tab (horizontally narrow), the height will be correctly equivalent to the total height of all the toggled list items, but when you make the tab bigger in that state where the list is toggled, you can notice the section still taking up the spacec equivalent to the space the toggled list was taking over when the tab was smaller.
    } else {
        linksContainer.style.height = 0;
    }

})

// ********** fixed navbar ************
const navbar = document.getElementById('nav');
const topLink = document.querySelector('.top-link');

window.addEventListener('scroll', function(){
    const scrollHeight = window.pageYOffset;
    const navHeight = navbar.getBoundingClientRect().height;

    if (scrollHeight > navHeight) {
        navbar.classList.add('fixed-nav');
    }else {
        navbar.classList.remove('fixed-nav')
    }

    if (scrollHeight > 500) {
        topLink.classList.add('show-link');
    }else {
        topLink.classList.remove('show-link');``

    }
});

// ********** smooth scroll ************
// select links
const scrollLinks = document.querySelectorAll('.scroll-link');

scrollLinks.forEach(function(link) {
    link.addEventListener('click', function(e) {
        //prevent default
        e.preventDefault();

        //navigate to specific spot
        const id = e.currentTarget.getAttribute('href').slice(1); //skipping the hashtag by starting from index 1 
        const element = document.getElementById(id);
        //calculate the heights
        const navHeight = navbar.getBoundingClientRect().height;
        const containerHeight = linksContainer.getBoundingClientRect().height;
        const fixedNav = navbar.classList.contains('fixed-nav');

        let position = element.offsetTop - navHeight; //value for the top of that section
        if (!fixedNav) { //if navbar is static/not in fixed position
            position = position - navHeight;
        }if (navHeight > 82) {
            position += containerHeight;
        }
        console.log(position);
        window.scrollTo({
            left:0,  
            top:position,
        });
        linksContainer.style.height = 0;
    });
});