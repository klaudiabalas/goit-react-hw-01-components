import PropTypes from 'prop-types';
import css from './Friend.module.css';

export const FriendList = ({ friends }) => {
  return (
    <>
      <div className={css.friends}>
        <ul class={css.friendList}>
          {friends.map(({ avatar, name, isOnline }) => (
            <li className={css.friends__item}>
              <span className={`${css.status} ${css[isOnline]}`}>
                {isOnline}
              </span>
              <img className={css.avatar} src={avatar} alt={name} />
              <p className={css.friends__name}>{name}</p>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
};

FriendList.propTypes = {
  avatar: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  isOnline: PropTypes.bool.isRequired,
};
