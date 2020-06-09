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
    console.log(this.innerWidth);
  }

  onHome(){
    this.router.navigateByUrl('', { relativeTo: this.route });
  }

  onInfo(){
    this.router.navigateByUrl('information', { relativeTo: this.route });
  }

  onSymp(){
    this.router.navigateByUrl('symptoms', { relativeTo: this.route });
  }

  onProtect(){
    this.router.navigateByUrl('protectyourself', { relativeTo: this.route });
  }

  onQA(){
    this.router.navigateByUrl('qa', { relativeTo: this.route });
  }

  onReload() {
    window.location.reload();
}


}
