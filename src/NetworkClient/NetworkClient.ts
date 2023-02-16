/* eslint-disable */

import { HttpClient } from '../HttpClient/HttpClient';
import { PostItem, User } from '../types/interfaces';

enum Path {
  users = '/users',
  newsfeed = '/newsfeed',
}

export class NetworkClientMethods {
  private readonly baseUrl: string;

  constructor() {
    this.baseUrl = 'http://localhost:6969';
  }

  public getUsers = async () => {
    try {
      const response = await HttpClient.get(`${this.baseUrl}${Path.users}`);

      if (response.ok) {
        return await response.json();
      }
      throw new Error(`${response.status}`);
    } catch (error) {
      console.error(`Something went wrong about getting user: ${error}`);
    }
  };

  public getPosts = async () => {
    try {
      const response = await HttpClient.get(`${this.baseUrl}${Path.newsfeed}`);

      if (response.ok) {
        return await response.json();
      }
      throw new Error(`${response.status}`);
    } catch (error) {
      console.error(`Something went wrong: ${error}`);
    }
  };

  public getUser = async (id: string) => {
    try {
      const response = await HttpClient.get(`${this.baseUrl}${Path.users}/${id}`);
      if (response.ok) {
        return await response.json();
      }
      throw new Error(`${response.status}`);
    } catch (error) {
      console.error(`Something went wrong: ${error}`);
    }
  };

  public createUser = async (body: Omit<User, 'id'>) => {
    try {
      const response = await HttpClient.post(`${this.baseUrl}${Path.users}`, body);

      if (response.ok) {
        return await response.json();
      }
      throw new Error(`${response.status}`);
    } catch (error) {
      console.error(`Something went wrong: ${error}`);
    }
  };

  public createPost = async (body: Omit<PostItem, 'id'>) => {
    try {
      const response = await HttpClient.post(`${this.baseUrl}${Path.newsfeed}`, body);

      if (response.ok) {
        return await response.json();
      }
      throw new Error(`${response.status}`);
    } catch (error) {
      console.error(`Something went wrong: ${error}`);
    }
  };

  public deleteUser = async (id: string) => {
    try {
      const response = await HttpClient.delete(`${this.baseUrl}${Path.users}/${id}`);

      if (response.ok) {
        return await response.json();
      }
      throw new Error(`Got an error: ${response.status}`);
    } catch (error) {
      console.error(`Something went wrong: ${error}`);
    }
  };

  public deletePost = async (id: string) => {
    try {
      const response = await HttpClient.delete(`${this.baseUrl}${Path.newsfeed}/${id}`);

      if (!response.ok) {
        throw new Error(`Got an error: ${response.status}`);
      }
    } catch (error) {
      console.error(`Something went wrong: ${error}`);
    }
  };
}

// TODO: update post & user

export const NetworkClient = new NetworkClientMethods();
