import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'hidePassword'
})
export class HidePasswordPipe implements PipeTransform {
  transform(value: string): string {
    if (value && value.length > 3) {
      return '***' + value.slice(3);
    }
    return value; // Return the original value if it's less than or equal to 3 characters
  }
}
