import { Injectable } from '@nestjs/common';
import axios from 'axios';

@Injectable()
export class DataService {
  private readonly baseUrl = 'https://jsonplaceholder.typicode.com';

  async getData() {
    try {
      const response = await axios.get(`${this.baseUrl}/posts`);
      return response.data;
    } catch (error) {
      throw error;
    }
  }

  async getDataById(id: number) {
    try {
      const response = await axios.get(`${this.baseUrl}/posts/${id}`);
      return response.data;
    } catch (error) {
      throw error;
    }
  }

  async getDataByUsername(username: string) {
    try {
      const response = await axios.get(`${this.baseUrl}/users?username=${username}`);
      const user = response.data[0];
      if (user) {
        const postsResponse = await axios.get(`${this.baseUrl}/posts?userId=${user.id}`);
        return postsResponse.data;
      } else {
        throw new Error('User not found');
      }
    } catch (error) {
      throw error;
    }
  }

  async createData(data: any) {
    try {
      const response = await axios.post(`${this.baseUrl}/posts`, data);
      return response.data;
    } catch (error) {
      throw error;
    }
  }

  async updateData(id: number, data: any) {
    try {
      const response = await axios.put(`${this.baseUrl}/posts/${id}`, data);
      return response.data;
    } catch (error) {
      throw error;
    }
  }

  async patchData(id: number, data: any) {
    try {
      const response = await axios.patch(`${this.baseUrl}/posts/${id}`, data);
      return response.data;
    } catch (error) {
      throw error;
    }
  }

  async deleteData(id: number) {
    try {
      const response = await axios.delete(`${this.baseUrl}/posts/${id}`);
      return response.data;
    } catch (error) {
      throw error;
    }
  }
}
