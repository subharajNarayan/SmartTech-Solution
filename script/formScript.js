document.getElementById('contact-form').addEventListener('submit', function (event) {
  event.preventDefault();

  const submitBtn = document.getElementById('submit-btn');
  const statusMsg = document.getElementById('form-status');

  // Update button state to loading
  submitBtn.disabled = true;
  submitBtn.innerText = 'SENDING...';
  statusMsg.textContent = '';
  statusMsg.className = 'form-status';

  // EmailJS Service ID and Template ID
  const serviceID = 'service_yc6vyjk'; 
  const templateID = 'template_dimp8vd'; // Replace with your actual Template ID

  emailjs.sendForm(serviceID, templateID, this)
    .then(() => {
      submitBtn.disabled = false;
      submitBtn.innerText = 'SUBMIT →';
      statusMsg.textContent = 'Thank you! Your message has been sent successfully.';
      statusMsg.classList.add('success');

      // Reset form
      document.getElementById('contact-form').reset();
    }, (error) => {
      submitBtn.disabled = false;
      submitBtn.innerText = 'SUBMIT →';
      statusMsg.textContent = 'Failed to send message. Please try again later.';
      statusMsg.classList.add('error');
      console.error('EmailJS Error:', error);
    });
});