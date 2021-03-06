import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ContentInfoPage } from './content-info.page';

describe('ContentInfoPage', () => {
  let component: ContentInfoPage;
  let fixture: ComponentFixture<ContentInfoPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ContentInfoPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ContentInfoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
