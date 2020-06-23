import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SolicitarViagemComponent } from './solicitar-viagem.component';

describe('SolicitarViagemComponent', () => {
  let component: SolicitarViagemComponent;
  let fixture: ComponentFixture<SolicitarViagemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SolicitarViagemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SolicitarViagemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
