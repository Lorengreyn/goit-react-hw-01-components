import PropTypes from 'prop-types';
import css from './Friends.module.css';

function FriendsLi({ friends }) {
  return (
    <ul className={css.itemList}>
      {friends.map(({ id, name, isOnline, avatar }) => (
            <li className={css.item}
                key={id}
                name={name}
                avatar={avatar}>
      <span className={isOnline ? css.statusOnline : css.statusOffline}></span>
      <img className={css.avatar} src={avatar} alt="User avatar" width="48" />
      <p className={css.friendsName}>{name}</p>
    </li>
      ))}
    </ul>
  );
}

FriendsLi.propTypes = {
  friends: PropTypes.arrayOf(
    PropTypes.shape({
      avatar: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      isOnline: PropTypes.bool.isRequired,
      id: PropTypes.number.isRequired,
    })
  ),
};

export default FriendsLi;