import api from '../api';

/**
 * @async
 * @export
 * @function
 * @name user
 *
 * @description
 * Responsible for the tag
 */

export async function userProfile(username) {
  try {
    const response = await api.get(`/user/${username}`);
    return { error: false, user: response.data.user, blogs: response.data.blogs };
  } catch (error) {
    const { request } = error;
    return { error: true, message: JSON.parse(request.response) };
  }
}

export async function getProfile(token) {
  try {
    const response = await api.get('/user/profile', {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });

    return { error: false, data: response.data };
  } catch (error) {
    const { request } = error;

    return { error: true, message: JSON.parse(request.response) };
  }
}

export async function updateProfile(user, token) {
  try {
    const response = await api.put('/user/update', user, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    return { error: false, data: response.data };
  } catch (error) {
    const { request } = error;
    return { error: true, message: JSON.parse(request.response) };
  }
}
