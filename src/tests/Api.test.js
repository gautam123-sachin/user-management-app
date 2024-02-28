import { getUsers } from '../api/index'; 

describe('getUsers function', () => {
  beforeEach(() => {
    global.fetch = jest.fn();
  });

  afterEach(() => {
    global.fetch.mockClear();
  });

  it('fetches users successfully', async () => {
    const usersData = [
      { id: 1, name: 'John Doe', username: 'john_doe' },
      { id: 2, name: 'Jane Smith', username: 'jane_smith' },
    ];

    global.fetch.mockResolvedValue({
      ok: true,
      json: async () => usersData,
    });

    const users = await getUsers();

    expect(users).toEqual(usersData); 
    expect(fetch).toHaveBeenCalledTimes(1); 
    expect(fetch).toHaveBeenCalledWith('https://jsonplaceholder.typicode.com/users');
  });

  it('throws an error when fetching users fails', async () => {
    global.fetch.mockResolvedValue({
      ok: false,
    });

    await expect(getUsers()).rejects.toThrow('Failed to fetch users');

    expect(fetch).toHaveBeenCalledTimes(1);
    expect(fetch).toHaveBeenCalledWith('https://jsonplaceholder.typicode.com/users');
  });
});
