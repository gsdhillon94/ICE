import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NearbyVenueComponent } from './nearby-venue.component';

describe('NearbyVenueComponent', () => {
  let component: NearbyVenueComponent;
  let fixture: ComponentFixture<NearbyVenueComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NearbyVenueComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NearbyVenueComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
