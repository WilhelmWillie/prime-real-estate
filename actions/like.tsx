export const likeItem = (store, item) => {
  const newLiked = store.state.liked;
  newLiked.push(item);
  store.setState({ liked: newLiked });
};
