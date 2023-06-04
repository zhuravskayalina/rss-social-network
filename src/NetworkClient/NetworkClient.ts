/* eslint-disable no-console */

import { HttpClient } from '../HttpClient/HttpClient';
import { NewFriend, PostItem, User } from '../types/interfaces';

enum Path {
  users = '/users',
  newsfeed = '/newsfeed',
  user = '/user',
  friends = '/friends',
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

  public getFriends = async (id: string) => {
    try {
      const response = await HttpClient.get(`${this.baseUrl}${Path.friends}/${id}`);
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
      const response = await HttpClient.post(`${this.baseUrl}${Path.user}`, body);

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

  public updatePost = async (id: string, body: PostItem) => {
    try {
      const response = await HttpClient.put(`${this.baseUrl}${Path.newsfeed}/${id}`, body);

      if (response.ok) {
        return await response.json();
      }
      throw new Error(`${response.status}`);
    } catch (error) {
      console.error(`Something went wrong: ${error}`);
    }
  };

  public updateUser = async (id: string, body: User) => {
    try {
      const response = await HttpClient.put(`${this.baseUrl}${Path.users}/${id}`, body);
    } catch (error) {
      console.error(`Something went wrong about updating user: ${error}`);
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

  public deleteFriend = async (userId: string, friendId: string) => {
    try {
      const response = await HttpClient.delete(
        `${this.baseUrl}${Path.friends}/${userId}/${friendId}`,
      );

      if (!response.ok) {
        throw new Error(`Got an error: ${response.status}`);
      }
    } catch (error) {
      console.error(`Something went wrong: ${error}`);
    }
  };

  public addFriend = async (userId: string, body: NewFriend) => {
    try {
      const response = await HttpClient.post(`${this.baseUrl}${Path.friends}/${userId}`, body);

      if (!response.ok) {
        throw new Error(`Got an error: ${response.status}`);
      }
    } catch (error) {
      console.error(`Something went wrong: ${error}`);
    }
  };
}

export const NetworkClient = new NetworkClientMethods();
