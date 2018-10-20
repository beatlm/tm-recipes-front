import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'tmFormat'
})
export class TmFormatPipe implements PipeTransform {

  transform(value: string): string {
    value=value.replace('vel',' / vel');
    value=value.replace('segundos','seg');
    value=value.replace('grados','º');
    value=value.replace('min','min /');
    value=value.replace('giro inverso','giro inv');
    value=value.replace('velocidad cuchara','vel cuchara');
   return value;
  }

}
