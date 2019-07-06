const unlikeItem = (store, item) => {
  item.liked = false;

  // Will improve this once results have IDs attached to them
  const newLiked = store.state.liked.filter(likedItem => (
    likedItem.id != item.id
  ));

  store.setState({ liked: newLiked });
}

export const likeItem = (store, item) => {
  if (item.liked) {
    return unlikeItem(store, item);
  }

  item.liked = true;

  const newLiked = store.state.liked;
  newLiked.unshift(item);
  store.setState({ liked: newLiked });
};
