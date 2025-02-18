import { Injectable, Logger, NotFoundException } from '@nestjs/common';
import { MenuRepository } from './prisma';
import { CreateMenuDto, UpdateMenuDto } from './dto';
import { MenuResponseDto } from './dto/menu-response.dto';
import { MENU_CONSTANTS } from '../../common/constants/menu.constants';

@Injectable()
export class MenuService {
  private readonly logger = new Logger(MenuService.name);

  constructor(private readonly menuRepo: MenuRepository) {} // Renamed repository variable for uniqueness

  async registerMenuItem(menuData: CreateMenuDto): Promise<MenuResponseDto> {
    await this.verifyParentExistence(menuData.parentId);
    return this.menuRepo.create(menuData);
  }

  async retrieveTopLevelMenus(): Promise<MenuResponseDto[]> {
    return this.menuRepo.findParents();
  }

  async fetchMenuDetails(menuId: string): Promise<MenuResponseDto> {
    const menu = await this.menuRepo.findById(menuId);
    if (!menu) {
      throw new NotFoundException(MENU_CONSTANTS.ERROR_MESSAGES.NOT_FOUND);
    }
    return menu;
  }

  async retrieveAllMenus(): Promise<MenuResponseDto[]> {
    return this.menuRepo.findAll();
  }

  async modifyMenuEntry(menuId: string, updateData: UpdateMenuDto): Promise<MenuResponseDto> {
    await this.verifyParentExistence(updateData.parentId);
    try {
      return await this.menuRepo.update(menuId, updateData);
    } catch (error) {
      throw new NotFoundException(MENU_CONSTANTS.ERROR_MESSAGES.NOT_FOUND);
    }
  }

  async removeMenuEntry(menuId: string): Promise<MenuResponseDto> {
    try {
      return await this.menuRepo.delete(menuId);
    } catch (error) {
      throw new NotFoundException(MENU_CONSTANTS.ERROR_MESSAGES.NOT_FOUND);
    }
  }

  private async verifyParentExistence(parentId?: string): Promise<void> {
    if (!parentId) return;

    const parent = await this.menuRepo.findById(parentId);
    if (!parent) {
      throw new NotFoundException(
        MENU_CONSTANTS.ERROR_MESSAGES.PARENT_NOT_FOUND,
      );
    }

    if (parent.depth >= MENU_CONSTANTS.VALIDATION.MAX_DEPTH) {
      throw new Error(MENU_CONSTANTS.ERROR_MESSAGES.MAX_DEPTH_EXCEEDED);
    }
  }
}
