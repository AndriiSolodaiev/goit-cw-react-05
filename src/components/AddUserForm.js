import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { addUser } from 'redux/oparations';

export const AddUserForm = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const handleSubmit = e => {
    e.preventDefault();
    dispatch(
      addUser({
        name: e.currentTarget.elements.name.value,
        avatar: e.currentTarget.elements.avatar.value,
      })
    );
    e.currentTarget.reset();
    navigate('/users');
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Name
        <input type="text" name="name" placeholder="Name" />
      </label>
      <label>
        Image url
        <input type="url" name="avatar" />
      </label>
      <button>Create</button>
    </form>
  );
};
