import { Component, isDevMode, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { InsuredItem } from '../insured';
import { InsuredService } from '../insured.service';
import { AppComponent } from '../app.component';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-create-insured',
  templateUrl: './create-insured.component.html',
  styleUrls: ['./create-insured.component.css'],
})
export class CreateInsuredComponent implements OnInit {
  insuredItem: InsuredItem = new InsuredItem();

  constructor(private insuredService: InsuredService, private router: Router) {}

  ngOnInit(): void {
    this.insuredItem.productType = "GENERAL";
  }

  saveInsuredItem() {
    this.insuredService.createInsuredItem(this.insuredItem).subscribe({
      next: (data) => {
        this.goToInsuredItemList();
        if (isDevMode()) {console.log(data)}
      },
      error: (error) => console.log(error),
    });
  }

  goToInsuredItemList() {
    this.router.navigate(['insured-list']);
  }

  onSubmit() {
    let form = document.getElementsByClassName(
      'needs-validation'
    )[0] as HTMLFormElement;
    if (form.checkValidity() === false) {
      event?.preventDefault;
      event?.stopPropagation;
    } else {
      console.log(this.insuredItem);
      this.saveInsuredItem();
    }
    form.classList.add('was-validated');
  }
}
