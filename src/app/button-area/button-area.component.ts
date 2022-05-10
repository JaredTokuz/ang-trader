import { HttpClient } from '@angular/common/http';
import {
  AfterViewInit,
  Component,
  ElementRef,
  Input,
  ViewChild,
} from '@angular/core';
import { finalize } from 'rxjs';
import { environment } from '../../environments/environment';
import { ButtonAreaConfig, ButtonConfig, ButtonState } from '../app.interfaces';

@Component({
  selector: 'app-button-area',
  templateUrl: './button-area.component.html',
  styleUrls: ['./button-area.component.css'],
})
export class ButtonAreaComponent implements AfterViewInit {
  @Input() config: ButtonAreaConfig;
  @ViewChild('fileUpload') fileUpload: ElementRef;
  insertedButton: (Partial<ButtonConfig> & ButtonState) | undefined;
  constructor(private http: HttpClient) {}
  ngAfterViewInit(): void {
    console.info('fileupload', this.fileUpload);
  }
  buttonClick(b: Partial<ButtonConfig> & ButtonState) {
    if (b.fn) {
      b.fn();
    }
    if (b.fileConfig) {
      this.insertedButton = b;
      this.fileUpload.nativeElement.click();
    }
  }
  // when a file is selected it will run a http post with loading icon functionality
  // TODO if response is an error could make the button show a red X icon
  onFileSelected(event: Event) {
    const target = event.target as HTMLInputElement;
    const files = target.files as FileList;
    const file: File = files[0];

    if (file) {
      const formData = new FormData();
      formData.append('data', file);

      if (!this.insertedButton) {
        throw new Error('inserted button empty');
      }
      if (!this.insertedButton.fileConfig?.urlPath) {
        throw new Error('button url path empty');
      }

      const request$ = this.http
        .post(
          environment.backend + this.insertedButton.fileConfig.urlPath,
          formData,
          this.insertedButton.fileConfig.options
        )
        .pipe(finalize(() => this.reset()))
        .subscribe();

      this.insertedButton.isLoading = true;
    }
  }
  reset() {
    if (this.insertedButton) {
      this.insertedButton.isLoading = false;
    }
    this.insertedButton = undefined;
  }
}
