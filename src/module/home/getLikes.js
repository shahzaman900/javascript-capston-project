const urlLike = 'https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/Ix2mMVLk4DRU3xtKMCQq/likes/';

const getLike = async () => {
  const likes = await fetch(urlLike).then((res) => res.json());
  return likes;
};

export default getLike;
