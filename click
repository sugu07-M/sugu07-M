errorMessage: string = '';
successMessage: string = '';


submitApprove() {
  if (this.isFormValid()) {
    // Perform submission logic here
    
    // Clear any previous messages
    this.errorMessage = '';
    // Set success message
    this.successMessage = 'Saved successfully!';
  } else {
    // Set error message
    this.errorMessage = 'Please fill out all required fields!';
    // Clear success message
    this.successMessage = '';
  }
}

isFormValid(): boolean {
  // Perform your validation logic here
  // Return true if the form is valid, false otherwise
}

clearMessages() {
  this.errorMessage = '';
  this.successMessage = '';
}



<div class="notification" *ngIf="errorMessage">
  <button type="button" class="btn-close" style="color: white;" (click)="clearMessages()" aria-label="Close"></button>
  <p class="message-txt">{{ errorMessage }}</p>
</div>

<div class="success" *ngIf="successMessage">
  <button type="button" class="btn-close" style="color: white;" (click)="clearMessages()" aria-label="Close"></button>
  <p class="message-txt">{{ successMessage }}</p>
</div>
