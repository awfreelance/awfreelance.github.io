import { Component, ElementRef, OnInit, OnDestroy } from '@angular/core';
import { ScrollService } from '../scroll.service';  
import { Subscription } from 'rxjs';


@Component({
  selector: 'app-home',
  standalone: true,
  imports: [],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent implements OnInit, OnDestroy {
  private scrollSubscription!: Subscription;

  constructor(private el: ElementRef, private scrollService: ScrollService) {};

  ngOnInit(): void {
    this.scrollSubscription = this.scrollService.getScrollRequest().subscribe((headerId: string) => {
      this.scrollToHeader(headerId);
    });
  }

  ngOnDestroy(): void {
    this.scrollSubscription.unsubscribe();
  }

  scrollToHeader(headerId: string): void {
    const header = this.el.nativeElement.querySelector(`#${headerId}`);
    if (header) {
      header.scrollIntoView({ behavior: 'smooth', block: 'start', inline: 'nearest'});
    }
  }



}
