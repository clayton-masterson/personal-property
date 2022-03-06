import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { InsuredItem } from '../insured';
import { InsuredService } from '../insured.service';

@Component({
  selector: 'app-update-insured',
  templateUrl: './update-insured.component.html',
  styleUrls: ['./update-insured.component.css']
})
export class UpdateInsuredComponent implements OnInit {

  id!: string;
  insuredItem: InsuredItem = new InsuredItem();

  constructor(
    private insuredService: InsuredService,
    private route: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];

    this.insuredService.getInsuredItemById(this.id).subscribe({
      next: data => {
        this.insuredItem = data;
      },
      error: error => console.log(error)
    })
  }

  onSubmit() {
    this.insuredService.updateInsuredItem(this.id, this.insuredItem).subscribe({
      next: data => {
        console.log(data);
        this.insuredItemDetails(this.id);
        //this.goToInsuredItemList();
      },
      error: error => console.log(error)
    })
  }

  insuredItemDetails(id: string) {
    this.router.navigate(['insured-details', id]);
  }

  goToInsuredItemList() {
    this.router.navigate(['insured-list']);
  }

}
