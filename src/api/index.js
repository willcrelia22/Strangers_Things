const cohortName = "2206-FTB-ET-WEB-FT";
const APIURL = `https://strangers-things.herokuapp.com/api/${cohortName}`;

export const fetchAllPosts = async () => {
  try {
    const response = await fetch(`${APIURL}/posts`);
    const result = await response.json();
    console.log("API index", result);
    if (result.error) throw result.error;
    return result.data.posts;
  } catch (error) {
    console.error("Trouble fetching posts", error);
  }
};

export const registerPerson = async (
  registeredUsername,
  registeredPassword
) => {
  const response = await fetch(`${APIURL}/users/register`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      user: {
        username: registeredUsername,
        password: registeredPassword,
      },
    }),
  });
  const result = await response.json();
  const token = result.data.token;
  return token;
};

export const loginUser = async (username, password) => {
  try {
    const response = await fetch(`${APIURL}/users/login`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        user: {
          username: username,
          password: password,
        },
      }),
    });
    const result = await response.json();
    const token = result.data.token;
    return token;
  } catch (error) {
    console.error("Trouble fetching users", error);
  }
};

export const getProfile = async (token) => {
  const response = await fetch(`${APIURL}/users/me`, {
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
  });
  const result = await response.json();
  const data = result.data;
  console.log(data, "this is the data");
  return data;
};

export const addNewPost = async (token, addPost) => {
  const response = await fetch(`${APIURL}/posts`,
    {
      method: "POST",
      headers: {
        'Content-Type': 'apllication/json',
        'Authorization': `Bearer ${token}`
      },
      body: JSON.stringify({
        post: addPost
      })
    })
  const result = await response.json();
  const newUserPost = result.data.post;
  return newUserPost;
}

export const removePost = async (token, postID) => {
  const response = await fetch(`${APIURL}/posts`,
    {
      method: "DELETE",
      headers: {
        'Content-Type': 'application/json',
        'Auhtorization': `Bearer ${token}`
      },
    })
  const result = await response.json()
  return result;
}