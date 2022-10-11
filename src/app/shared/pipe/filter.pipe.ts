import { Pipe, PipeTransform } from '@angular/core';
@Pipe({
  name: 'filter',
    pure: false
})
export class ProductPipe implements PipeTransform {
     transform(args: any[],value: string ): any 
     {
      if(!args||!value)
      {
        return args;
      }
      return args.filter(product => String(product.productName).toLowerCase()?.indexOf(value.toLowerCase())>-1);
      }
    
 }