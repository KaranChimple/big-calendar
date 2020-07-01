const defaultUserInfo = {
  name: 'Demo User',
  image: 'https://icons.iconarchive.com/icons/paomedia/small-n-flat/512/user-male-icon.png'
};

export default function reducer(state = {
  user: defaultUserInfo
}, action) {
  return state;
}