import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { InsuredItem } from '../insured';
import { InsuredService } from '../insured.service';

@Component({
  selector: 'app-detail-insured',
  templateUrl: './detail-insured.component.html',
  styleUrls: ['./detail-insured.component.css']
})
export class DetailInsuredComponent implements OnInit {

  id!: string;
  insuredItem!: InsuredItem;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private insuredService: InsuredService
    ) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];

    this.insuredItem = new InsuredItem();
    this.insuredService.getInsuredItemById(this.id).subscribe({
      next: data => {
        this.insuredItem = data;
      }
    })
  }

  updateInsuredItem(id: string) {
    this.router.navigate(['insured-update', id]);
  }

  goToInsuredItemList() {
    this.router.navigate(['insured-list']);
  }

  deleteInsuredItem(id: string) {
    this.insuredService.deleteInsuredItem(id).subscribe({
      next: data => {
        console.log(data);
        this.goToInsuredItemList();
      }
    })
  }

}
