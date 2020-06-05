import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { H2HGamesComponent } from './h2-hgames.component';

describe('H2HGamesComponent', () => {
  let component: H2HGamesComponent;
  let fixture: ComponentFixture<H2HGamesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ H2HGamesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(H2HGamesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
