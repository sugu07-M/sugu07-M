
<div class="success" *ngIf="successMessage">
  <button type="button" class="btn-close" style="color: white;" aria-label="Close"(click)="clearSuccessMessage()" aria-label="Close"></button>
  <p class="message-txt">{{ successMessage }}</p>
</div>
<div class="col">
    <label>Plant</label>
    <select [(ngModel)]="plantId">
      <option value="" disabled selected>Select Plant</option>
      <option *ngFor="let pltdata of plantcode " value="{{pltdata.id}}">{{pltdata.code}}</option>
    </select>
  </div>
  <div class="col">
    <label>Reference</label>
    <select [(ngModel)]="referenceid">
      <option value="" disabled selected>Select Reference</option>
      <option *ngFor="let refdata of refer " value="{{refdata.referenceId}}">{{refdata.referenceName}}</option>
    </select>
  </div>
  <div class="col">
    <label>Reference Type</label>
    <select [(ngModel)]="referencetype">
      <option value="" disabled selected>Select Reference</option>
      <option *ngFor="let refdata of reftype " value="{{refdata.referenceTypeId}}">{{refdata.referenceType}}</option>
    </select>
  </div>
</div>





if (this.plantId == "") {
  this.errorMessage = 'Select Plant';
  window.scrollTo({ top: 0, behavior: 'smooth' });
  const selectElement = document.querySelector<HTMLSelectElement>('select[ngModel="plantId"]');
  if (selectElement) {
    selectElement.focus();
  }
}
else if (this.referenceid == "") {
  this.errorMessage = 'Select reference Id';
  window.scrollTo({ top: 0, behavior: 'smooth' });
  const selectElement = document.querySelector<HTMLSelectElement>('select[ngModel="referenceid"]');
  if (selectElement) {
    selectElement.focus();
  }
}

else if (this.referencetype == "") {
  this.errorMessage = 'Select reference type';
  window.scrollTo({ top: 0, behavior: 'smooth' });
  const selectElement = document.querySelector<HTMLSelectElement>('select[ngModel="referencetype"]');
  if (selectElement) {
    selectElement.focus();
  }
} else{
this.successMessage = 'save successfully';
}
