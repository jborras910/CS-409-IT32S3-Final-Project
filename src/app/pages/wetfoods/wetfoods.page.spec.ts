import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { WetfoodsPage } from './wetfoods.page';

describe('WetfoodsPage', () => {
  let component: WetfoodsPage;
  let fixture: ComponentFixture<WetfoodsPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WetfoodsPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(WetfoodsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
