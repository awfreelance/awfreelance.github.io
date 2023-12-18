import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ScrollService {
  private scrollSubject = new BehaviorSubject<string>('');

  sendScrollRequest(headerId: string): void {
    this.scrollSubject.next(headerId);
  }

  getScrollRequest(): Observable<string> {
    return this.scrollSubject.asObservable();
  }
}
