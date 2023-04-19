import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { addUser } from 'redux/oparations';

export const AddUserForm = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const handleSubmit = e => {
    e.preventDefault();
    const { name, avatar, email, phone, address } = e.currentTarget.elements;
    if (name.value) {
      dispatch(
        addUser({
          name: name.value,
          avatar: avatar.value,
          email: email.value,
          phone: phone.value,
          address: address.value,
        })
      );
      e.currentTarget.reset();
      navigate('/users');
      return;
    }
    alert('Please, fill in "name" fiels!');
    return;
  };

  return (
    <form
      onSubmit={handleSubmit}
      style={{ display: 'flex', flexDirection: 'column' }}
    >
      <label>
        Name
        <input type="text" name="name" placeholder="Name" />
      </label>
      <label>
        Image url
        <input type="url" name="avatar" placeholder="Image url" />
      </label>
      <label>
        Email
        <input type="text" name="email" placeholder="Email" />
      </label>
      <label>
        Phone
        <input type="text" name="phone" placeholder="Phone" />
      </label>
      <label>
        Address
        <input type="text" name="address" placeholder="Address" />
      </label>
      <button>Create</button>
    </form>
  );
};
