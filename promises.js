const posts = [];

function createPost(post) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      posts.push(post);
      resolve(post);
    }, 2000);
  });
}

function deletePost(post) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const index = posts.indexOf(post);
      if (index !== -1) {
        posts.splice(index, 1);
        resolve(post);
      } else {
        reject(new Error('Post not found'));
      }
    }, 1000);
  });
}

function updateLastUserActivityTime() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const now = new Date();
      console.log(`User last active at: ${now}`);
      resolve();
    }, 1000);
  });
}

function getColdDrinks() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log('Got cold drinks!');
      resolve();
    }, 1500);
  });
}

async function createAndDeletePost() {
  try {
    const post1 = await createPost({ title: 'First Post', content: 'This is the first post' });
    const post2 = await createPost({ title: 'Second Post', content: 'This is the second post' });

    await Promise.all([updateLastUserActivityTime(), getColdDrinks()]);

    console.log('All posts:', posts);

    await deletePost(post2);

    console.log('New posts:', posts);
  } catch (error) {
    console.error(error);
  }
}

createAndDeletePost();

