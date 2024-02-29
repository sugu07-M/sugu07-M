submitApprove() {
  // Perform validation logic here
  if (/* validation condition */) {
    // Show success message
    this.successMessage = 'Form submitted successfully.';
    // Clear any previous error message
    this.errorMessage = '';
    // Optionally, focus on another field
    // document.getElementById('fieldId').focus();
  } else {
    // Show error message
    this.errorMessage = 'Validation failed. Please fill all required fields.';
    // Clear any previous success message
    this.successMessage = '';
  }
}


clearErrorMessage() {
  this.errorMessage = '';
}

clearSuccessMessage() {
  this.successMessage = '';
}
