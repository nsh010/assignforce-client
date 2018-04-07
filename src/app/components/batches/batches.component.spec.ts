import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BatchesComponent } from './batches.component';
import { AppMaterialModule } from '../../material.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BatchesTimelineComponent } from '../batches-timeline/batches-timeline.component';
import { BatchesTimelineFilterComponent } from '../batches-timeline-filter/batches-timeline-filter.component';
import { BatchControllerService } from '../../services/api/batch-controller/batch-controller.service';
import { TrainerControllerService } from '../../services/api/trainer-controller/trainer-controller.service';
import { CurriculumControllerService } from '../../services/api/curriculum-controller/curriculum-controller.service';
import { LocationControllerService } from '../../services/api/location-controller/location-controller.service';

describe('BatchesComponent', () => {
  let component: BatchesComponent;
  let fixture: ComponentFixture<BatchesComponent>;

  beforeEach(
    async(() => {
      TestBed.configureTestingModule({
        imports: [
          AppMaterialModule,
          ReactiveFormsModule,
          FormsModule,
          HttpClientTestingModule,
          BrowserAnimationsModule
        ],
        declarations: [BatchesComponent, BatchesTimelineComponent, BatchesTimelineFilterComponent],
        providers: [
          BatchControllerService,
          TrainerControllerService,
          LocationControllerService,
          CurriculumControllerService
        ]
      }).compileComponents();
    })
  );

  beforeEach(() => {
    fixture = TestBed.createComponent(BatchesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
