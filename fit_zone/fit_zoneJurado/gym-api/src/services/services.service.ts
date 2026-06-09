import { Injectable } from '@nestjs/common';
import { CobrosDto } from './dto/cobros.dto';


@Injectable()
export class ServicesService {


 cobros(cobrosDto: CobrosDto) {
   let total_cobro = 0;
   const detalle: { nombre: string | undefined; recargo_pct: number; total_cobro: number; }[] = [];


   for (const socio of cobrosDto!.socios!) {
     let recargo_pct: number;


     if (socio.dias_atraso === 0)        recargo_pct = 0;
     else if (socio!.dias_atraso! <= 7)    recargo_pct = 5;
     else if (socio!.dias_atraso! <= 15)   recargo_pct = 10;
     else                                recargo_pct = 20;


     const recargo     = +(socio!.cuota! * recargo_pct / 100).toFixed(2);
     const cobro_socio = +(socio!.cuota! + recargo).toFixed(2);
     total_cobro       = +(total_cobro + cobro_socio).toFixed(2);


     detalle.push({
       nombre:     socio.nombre,
       recargo_pct,
       total_cobro: cobro_socio,
     });
   }


   return {
     total_socios: detalle.length,
     total_cobro,
     detalle,
   };
 }


}
