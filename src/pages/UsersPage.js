import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { selectUsers } from 'redux/selectors';
import { useEffect } from 'react';
import { fetchUsers } from 'redux/oparations';

export const UsersPage = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchUsers());
  }, [dispatch]);
  const users = useSelector(selectUsers);
  console.log(users);
  return (
    <>
      <ul>
        {users.map(({ name, id }) => (
          <li key={id}>
            <Link to={`${id}`}>{name}</Link>
          </li>
        ))}
      </ul>
      <Link to="add">Add user</Link>
    </>
  );
};
