import { Controller, Get, Post, Put, Patch, Delete, Body, Param, Query } from '@nestjs/common';
import { DataService } from './data.service';

@Controller('data')
export class DataController {
  constructor(private readonly dataService: DataService) {}

  @Get()
  async getData() {
    return this.dataService.getData();
  }

  @Get(':id')
  async getDataById(@Param('id') id: number) {
    return this.dataService.getDataById(id);
  }

  @Get('username/:username')
  async getDataByUsername(@Param('username') username: string) {
    return this.dataService.getDataByUsername(username);
  }

  @Post()
  async createData(@Body() data: any) {
    return this.dataService.createData(data);
  }

  @Put(':id')
  async updateData(@Param('id') id: number, @Body() data: any) {
    return this.dataService.updateData(id, data);
  }

  @Patch(':id')
  async patchData(@Param('id') id: number, @Body() data: any) {
    return this.dataService.patchData(id, data);
  }

  @Delete(':id')
  async deleteData(@Param('id') id: number) {
    return this.dataService.deleteData(id);
  }
}
