import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { MedicamentoModule } from './medicamento/medicamento.module';


@Module({
  imports: [TypeOrmModule.forRoot({
    type: 'mysql',
    host: 'localhost',
    port:  3306,
    username: 'root',
    password: '7800',
    database: 'db_farmacia',
    entities: [],
    synchronize: true, 
   
  }),
  MedicamentoModule,
],
 controllers: [],
  providers: [],

})
export class AppModule {}
