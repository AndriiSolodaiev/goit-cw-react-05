import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { updateUser } from 'redux/oparations';

export const ModalUpdateForm = ({ id, userPrevData, closeUpdateModal }) => {
  const [avatar, setAvatar] = useState(userPrevData.avatar);
  const [name, setName] = useState(userPrevData.name);
  const [email, setEmail] = useState(userPrevData.email);
  const [phone, setPhone] = useState(userPrevData.phone);
  const [address, setAddress] = useState(userPrevData.address);
  const dispatch = useDispatch();
  const handleSubmit = e => {
    e.preventDefault();
    const userNewData = { id, name, avatar, email, phone, address };
    dispatch(updateUser(userNewData));
    closeUpdateModal();
  };
  return (
    <div>
      <form
        style={{ display: 'flex', flexDirection: 'column' }}
        onSubmit={handleSubmit}
      >
        <label>
          Avatar
          <input
            type="text"
            name="avatar"
            value={avatar}
            onChange={e => {
              setAvatar(e.target.value);
            }}
          />
        </label>
        <label>
          Name
          <input
            type="text"
            name="name"
            value={name}
            onChange={e => {
              setName(e.target.value);
            }}
          />
        </label>
        <label>
          Email
          <input
            type="email"
            name="email"
            value={email}
            onChange={e => {
              setEmail(e.target.value);
            }}
          />
        </label>
        <label>
          Phone
          <input
            type="text"
            name="phone"
            value={phone}
            onChange={e => {
              setPhone(e.target.value);
            }}
          />
        </label>
        <label>
          Address
          <input
            type="text"
            name="address"
            value={address}
            onChange={e => {
              setAddress(e.target.value);
            }}
          />
        </label>
        <button>Update</button>
      </form>
    </div>
  );
};
