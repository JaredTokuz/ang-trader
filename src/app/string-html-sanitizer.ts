import { SafeHtml } from '@angular/platform-browser';

export interface HtmlSanitizer {
  trustHtml: (html: string) => SafeHtml;
  sanitizeBridge: (data: any) => any;
}
