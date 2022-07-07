export const fetchPosts = async () => {
    const respond = await fetch(`${API_URL}/posts`);
    const data = await respond.json();
    console.log('data')

}
