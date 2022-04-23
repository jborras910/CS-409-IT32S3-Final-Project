import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { RawfoodsPage } from './rawfoods.page';

describe('RawfoodsPage', () => {
  let component: RawfoodsPage;
  let fixture: ComponentFixture<RawfoodsPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RawfoodsPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(RawfoodsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
