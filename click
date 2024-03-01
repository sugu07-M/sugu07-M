      this.errorMessage = 'Enter imactedFunction ';
      window.scrollTo({ top: 0, behavior: 'smooth' });
      const inputElement = document.querySelector<HTMLInputElement>('input[ngModel="imactedFunc"]');
      if (inputElement) {
        inputElement.focus();
      }
    }
   
    else if (this.changeControlNo == "") {
      this.errorMessage = 'Enter change Control No ';
      window.scrollTo({ top: 0, behavior: 'smooth' });
      const inputElement = document.querySelector<HTMLInputElement>('input[ngModel="changeControlNo"]');
      if (inputElement) {
        inputElement.focus();
      }
    }
    else if (this.changeControlDt == "") {
      this.errorMessage = 'Select change Control Dt ';
      window.scrollTo({ top: 0, behavior: 'smooth' });
      const selectElement = document.querySelector<HTMLSelectElement>('input[ngModel="changeControlDt"]');
      if (selectElement) {
        selectElement.focus();
      }
    }
    else {
      this.successMessage = 'Save successfully';
      const apiUrl = this.apiurl + "/ChangeRequest/InsertChangeRequest";
     const requestBody = {
       "type": "I",
       "itcrid": 0,
       "supportId": 1,
       "classifcationId": this.classificationId,
       "categoryId": this.selectedCategory,
       "categoryTypeId": this.categoryTypeId,
       "crowner": this.supportid,
       "crdate": this.crdate,
       "crrequestedBy": this.changerequestedby,
       "crinitiatedFor": this.supportid,
       "status": "New",
       "referenceId": this.referenceid,
       "referenceTyp": this.referencetype,
       "natureOfChange": this.natureOfChange,
       "priorityType": this.priorityType,
       "plantId": this.plantId,
       "gxpclassification": true,
       "changeControlNo": this.changeControlNo,
       "changeControlDt": this.changeControlDt,
       "changeControlAttach": true,
       "changeDesc": this.changeDesc,
       "reasonForChange": this.reasonForChange,
       "alternateConsidetation": this.alternateConsidetation,
       "impactNotDoing": this.impactNotDoing,
       "businessImpact": this.businessImpact,
       "triggeredBy": this.triggeredBy,
       "benefits": this.benefits,
       "estimatedCost": this.estimatedCost,
       "estimatedCostCurr": this.estimatedCostCurr,
       "estimatedEffort": this.estimatedEffort,
       "estimatedEffortUnit": this.estimatedEffortUnit,
       "estimatedDateCompletion": this.estimatedDateCompletion,
       "rollbackPlan": this.rollbackPlan,
       "backoutPlan": this.backoutPlan,
       "downTimeRequired": true,
       "downTimeFromDate": this.downTimeFromDate,
       "downTimeToDate": this.downTimeToDate,
       "impactedLocation": this.impactedLocation,
       "impactedDept": this.impactedDept,
       'imactedFunc': this.imactedFunc,
       "isSubmitted": false,
       "isApproved": false,
       "isImplemented": false,
       "isReleased": false,
       "createdBy": this.supportid
      }
      
       
      const httpOptions = {
        headers: new HttpHeaders({
          'Content-Type': 'application/json'
        })
      };
      this.http.post(apiUrl, requestBody, httpOptions).subscribe(
        (response: any) => {
          console.log(response);
        },
        (error: any) => {
          console.log('Post request failed', error);
        }
      );
      
      this.route.navigate(['/change-request']);
    }
  }

  // successmessage:any='';
  // successMessage(){
  //   this.successmessage = 'Save Successfully!';
  //   setTimeout(()=>{
  //     this.successmessage = '';
  //   },1000);   
  // }
  

  clearErrorMessage() {
    this.errorMessage = '';
  }
  clearSuccessMessage() {
    this.successMessage = '';
  }

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
