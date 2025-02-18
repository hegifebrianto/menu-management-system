import { apiClient } from "../axiosInstance";

export const menuApi = {
  async fetchMenus() {
    const response = await apiClient.get("/menus");
    return response.data;
  },

  async fetchParents() {
    const response = await apiClient.get("/menus/top-level");
    return response.data;
  },

  async addMenu(menuData: { name: string; parentId?: string }) {
    const response = await apiClient.post("/menus", menuData);
    return response.data;
  },

  // Changed to use URL parameter instead of query string
  async deleteMenu(id: string) {
    await apiClient.delete(`/menus/${id}`);
    return id;
  },

  // Changed to use URL parameter instead of query string
  async updateMenu(id: string, menuData: { name: string; parentId?: string }) {
    const response = await apiClient.put(`/menus/${id}`, menuData);
    return response.data;
  },
};
