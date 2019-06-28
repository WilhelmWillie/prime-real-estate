export const likeItem = (store, item) => {
  const newLiked = store.state.liked;
  newLiked.unshift(item);
  store.setState({ liked: newLiked });
};
