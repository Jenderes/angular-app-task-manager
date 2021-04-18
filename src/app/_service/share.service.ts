import { Injectable, EventEmitter } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ShareService {
  private contactId = -1;
  private pageName = 'Задачи';
    constructor() { }

  public setId(id: number): void {
    this.contactId = id;
  }
  public getId(): number {
    return this.contactId;
  }
  public setPage(name): void {
    this.pageName = name;
  }
  public getPage(): string {
    return this.pageName;
  }
}
