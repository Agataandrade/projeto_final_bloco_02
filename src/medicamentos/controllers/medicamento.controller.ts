import { Body, Controller, Delete, Get, HttpCode, HttpStatus, Param, ParseIntPipe, Post, Put } from "@nestjs/common";
import { MedicamentoService } from "../services/medicamento.service";
import { Medicamento } from "../entities/medicamento.entity";

@Controller("/medicamentos")
export class MedicamentoController {
    constructor(private readonly medicamentoService: MedicamentoService) { }

    @Get()
    @HttpCode(HttpStatus.OK)
    findAll(): Promise<Medicamento[]> {
        return this.medicamentoService.findByAll();
    }

    @Get('/:id')
    @HttpCode(HttpStatus.OK)
    findById(@Param('id', ParseIntPipe) id: number): Promise<Medicamento> {
        return this.medicamentoService.findById(id);
    }

    @Get('/nome/:nome')
    @HttpCode(HttpStatus.OK)
    findByNome(@Param('nome') nome: string): Promise<Medicamento[]> {
        return this.medicamentoService.findByNome(nome);
    }

    @Post()
    @HttpCode(HttpStatus.CREATED)
    create(@Body() medicamento: Medicamento): Promise<Medicamento> {
        return this.medicamentoService.create(medicamento);
    }

    @Put()
    @HttpCode(HttpStatus.CREATED)
    update(@Body() medicamento: Medicamento): Promise<Medicamento> {
        return this.medicamentoService.update(medicamento);
    }

    @Delete('/:id')
    @HttpCode(HttpStatus.NO_CONTENT)
    delete(@Param('id', ParseIntPipe) id: number) {
        return this.medicamentoService.delete(id);
    }
}
