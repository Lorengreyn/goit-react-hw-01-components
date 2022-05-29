import PropTypes from 'prop-types';
import FriendsListItem from './FriendsListItem';
import css from './Friends.module.css';

function FriendsLi({ friends }) {
  return (
    <ul className={css.itemList}>
      {friends.map(({ id, name, isOnline, avatar }) => (
        <FriendsListItem
          key={id}
          name={name}
          isOnline={isOnline}
          avatar={avatar}
        />
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