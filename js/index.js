const btns = document.querySelectorAll('.btn');
const iframes = document.querySelectorAll('.pdf');
const closeLink = document.querySelector('.close');

closeLink.style.display = 'none';

btns.forEach((btn, index) => {
    btn.addEventListener('click', () => {
        // Hide all iframes
        iframes.forEach((iframe) => {
            iframe.style.display = 'none';
        });

        // Show the corresponding iframe
        iframes[index].style.display = 'block';

        // Show the close link
        closeLink.style.display = 'block';
    });
});

// Add event listener for the close link
closeLink.addEventListener('click', () => {
    // Hide all iframes when the close link is clicked
    iframes.forEach((iframe) => {
        iframe.style.display = 'none';
    });

    // Hide the close link
    closeLink.style.display = 'none';
});