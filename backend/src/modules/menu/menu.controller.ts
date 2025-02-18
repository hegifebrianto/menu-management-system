import { Controller, Get, Post, Put, Delete, Body, Param } from '@nestjs/common';
import { ApiTags, ApiOperation, ApiResponse } from '@nestjs/swagger';
import { MenuService } from './menu.service';
import { CreateMenuDto, UpdateMenuDto } from './dto';
import { MenuResponseDto } from './dto/menu-response.dto';

@ApiTags('Menus')
@Controller('menus')
export class MenuController {
  constructor(private readonly menuHandler: MenuService) {}

  @Post()
  @ApiOperation({ summary: 'Register a new menu item' })
  @ApiResponse({ status: 201, type: MenuResponseDto })
  async registerMenu(@Body() menuData: CreateMenuDto): Promise<MenuResponseDto> {
    return this.menuHandler.registerMenuItem(menuData);
  }

  @Get('top-level')
  @ApiOperation({ summary: 'Retrieve all top-level menus' })
  @ApiResponse({ status: 200, type: [MenuResponseDto] })
  async retrieveTopLevelMenus(): Promise<MenuResponseDto[]> {
    return this.menuHandler.retrieveTopLevelMenus();
  }

  @Get(':id')
  @ApiOperation({ summary: 'Fetch details of a menu item' })
  @ApiResponse({ status: 200, type: MenuResponseDto })
  async fetchMenuDetails(@Param('id') menuId: string): Promise<MenuResponseDto> {
    return this.menuHandler.fetchMenuDetails(menuId);
  }

  @Get()
  @ApiOperation({ summary: 'Retrieve all menus' })
  @ApiResponse({ status: 200, type: [MenuResponseDto] })
  async retrieveAllMenus(): Promise<MenuResponseDto[]> {
    return this.menuHandler.retrieveAllMenus();
  }

  @Put(':id')
  @ApiOperation({ summary: 'Modify an existing menu entry' })
  @ApiResponse({ status: 200, type: MenuResponseDto })
  async modifyMenuEntry(
    @Param('id') menuId: string,
    @Body() updateData: UpdateMenuDto,
  ): Promise<MenuResponseDto> {
    return this.menuHandler.modifyMenuEntry(menuId, updateData);
  }

  @Delete(':id')
  @ApiOperation({ summary: 'Remove a menu entry' })
  @ApiResponse({ status: 200, type: MenuResponseDto })
  async removeMenuEntry(@Param('id') menuId: string): Promise<MenuResponseDto> {
    return this.menuHandler.removeMenuEntry(menuId);
  }
}
