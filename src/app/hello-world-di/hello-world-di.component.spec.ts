import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HelloWorldDiComponent } from './hello-world-di.component';

describe('HelloWorldDiComponent', () => {
  let component: HelloWorldDiComponent;
  let fixture: ComponentFixture<HelloWorldDiComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [HelloWorldDiComponent]
    });
    fixture = TestBed.createComponent(HelloWorldDiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
