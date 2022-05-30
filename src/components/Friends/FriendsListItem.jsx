import PropTypes from 'prop-types';
import css from './Friends.module.css';

const FriendsListItem = ({ name, isOnline, avatar }) => {
  return (
    <li className={css.item}>
      <span className={isOnline ? css.statusOnline : css.statusOffline}></span>
      <img className={css.avatar} src={avatar} alt="User avatar" width="48" />
      <p className={css.friendsName}>{name}</p>
    </li>
  );
};

FriendsListItem.propTypes = {
  name: PropTypes.string.isRequired,
  isOnline: PropTypes.bool.isRequired,
  avatar: PropTypes.string.isRequired,
};

export default FriendsListItem;