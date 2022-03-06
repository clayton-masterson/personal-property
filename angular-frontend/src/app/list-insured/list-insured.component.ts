import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { InsuredItem } from '../insured';
import { InsuredService } from '../insured.service';

@Component({
  selector: 'app-list-insured',
  templateUrl: './list-insured.component.html',
  styleUrls: ['./list-insured.component.css']
})
export class ListInsuredComponent implements OnInit {

  insuredItems!: InsuredItem[];

  constructor(private insuredService: InsuredService, private router: Router) { }

  ngOnInit(): void {
    this.getInsuredItems();
  }

  private getInsuredItems() {
    this.insuredService.getInsuredItemList().subscribe({
      next: data => {
        this.insuredItems = data;
      }
    })
  }

  insuredItemDetails(id: string) {
    this.router.navigate(['insured-details', id]);
  }

}
