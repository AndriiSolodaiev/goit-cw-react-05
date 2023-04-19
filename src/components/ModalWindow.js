import { useDispatch } from 'react-redux';
import { deleteUser } from 'redux/oparations';
import { useNavigate } from 'react-router-dom';

export const ModalWindow = ({ id, closeModal }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const handleCancel = () => {
    closeModal();
  };
  const handleDelete = () => {
    navigate('/users');
    dispatch(deleteUser(id));
  };
  return (
    <div>
      <p>Are you sure?</p>
      <button type="button" onClick={handleCancel}>
        Cancel
      </button>
      <button type="button" onClick={handleDelete}>
        Delete
      </button>
    </div>
  );
};
