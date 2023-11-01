import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MorepackagesComponent } from './morepackages.component';

describe('MorepackagesComponent', () => {
  let component: MorepackagesComponent;
  let fixture: ComponentFixture<MorepackagesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MorepackagesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MorepackagesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
