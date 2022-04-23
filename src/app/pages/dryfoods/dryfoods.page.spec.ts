import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { DryfoodsPage } from './dryfoods.page';

describe('DryfoodsPage', () => {
  let component: DryfoodsPage;
  let fixture: ComponentFixture<DryfoodsPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DryfoodsPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(DryfoodsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
