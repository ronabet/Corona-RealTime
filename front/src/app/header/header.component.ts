import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  constructor(private router: Router, private route: ActivatedRoute) { }

  public innerWidth: any;

  ngOnInit(): void {
    this.innerWidth = window.innerWidth;
  }

  onHome(){
    this.router.navigateByUrl('', { relativeTo: this.route });
  }


  onSymp(){
    this.router.navigateByUrl('symptoms', { relativeTo: this.route });
  }

  onCharts(){
    this.router.navigateByUrl('charts', { relativeTo: this.route });
  }

  onQA(){
    this.router.navigateByUrl('qa', { relativeTo: this.route });
  }

  onReload() {
    window.location.reload();
}


}
