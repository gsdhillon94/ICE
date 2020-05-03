import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RivalGamesComponent } from './rival-games.component';

describe('RivalGamesComponent', () => {
  let component: RivalGamesComponent;
  let fixture: ComponentFixture<RivalGamesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RivalGamesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RivalGamesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
