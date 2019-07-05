export const likeItem = (store, item) => {
  // TODO: Unlike
  if (item.liked) {
    return;
  }

  item.liked = true;

  const newLiked = store.state.liked;
  newLiked.unshift(item);
  store.setState({ liked: newLiked });
};
