// Function to initialize modal behavior
function setupModal() {
    const modal = document.querySelector('.modal');
    const yesButton = document.querySelector('.button.yes');
    const noButton = document.querySelector('.button.no');
  
    // Function to hide the modal
    function hideModal() {
        modal.style.display = 'none';
    }
  
    // Function to show new screen content and append "here" link
    function showNewScreen() {
        hideModal(); // Hide the modal
        const newContent = `
            <div class="new-screen">
                <div class="modal1">
                    <h2>Confirmation</h2>
                    <p>Are you sure you want to continue?</p>
                    <div class="buttons">
                        <button class="button lightson">Lights On</button>
                    </div>
                </div>
            </div>
        `;
        document.body.innerHTML = newContent; // Replace entire body content

        // Append the "here" link to the document body
        const linkElement = document.createElement('a');
        linkElement.href = 'index2.html';
        linkElement.textContent = 'here';
        document.body.appendChild(linkElement); // Add the link to the page

        // Reinitialize modal2 behavior for the newly created content
        setupModal1();
    }
  
    // Attach event listeners to buttons
    yesButton.addEventListener('click', showNewScreen);
    noButton.addEventListener('click', hideModal);
}
  
// Run the setupModal function after DOM is fully loaded
document.addEventListener('DOMContentLoaded', setupModal);

// Function to initialize modal1 behavior
function setupModal1() {
    const modal1 = document.querySelector('.modal1');
    const lightsonButton = document.querySelector('.button.lightson');
  
    // If modal1 or button is not found, return
    if (!modal1 || !lightsonButton) {
        console.error('Modal1 or LightsOn button not found in the DOM.');
        return;
    }
  
    // Function to hide the modal
    function hideModal1() {
        modal1.style.display = 'none';
    }
  
    // Function to redirect to the new page
    function redirectToNewPage() {
        window.location.href = 'index2.html';
    }
  
    // Attach event listener to the "Lights On" button
    lightsonButton.addEventListener('click', redirectToNewPage);
}
