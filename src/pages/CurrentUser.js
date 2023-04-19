import { useDispatch, useSelector } from 'react-redux';
import { selectCurrentUser } from 'redux/selectors';
import { useEffect, useState } from 'react';
import { fetchCurrentUser } from 'redux/oparations';
import { useParams } from 'react-router-dom';
import { ModalWindow } from 'components/ModalWindow';
import { ModalUpdateForm } from 'components/ModalUpdateForm';

export const CurrentUser = () => {
  const [currentId, setCurrentId] = useState('');
  const [userIdToUpdate, setUserIdToUpdate] = useState('');
  const { id } = useParams();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchCurrentUser(id));
  }, [id, dispatch]);

  const user = useSelector(selectCurrentUser);

  const handleClick = () => {
    setCurrentId(id);
  };
  const deleteCurrentId = () => {
    setCurrentId('');
  };
  const closeUpdateModal = () => {
    setUserIdToUpdate('');
  };
  return (
    <>
      {user && (
        <div>
          <img src={user.avatar} alt={user.name} />
          <p>{user.name}</p>
          <p>email: {user.email}</p>
          <p>phone: {user.phone}</p>
          <p>address: {user.address}</p>

          <button type="button" onClick={handleClick}>
            Delete
          </button>
          {currentId && (
            <ModalWindow id={currentId} closeModal={deleteCurrentId} />
          )}
          <button
            type="button"
            onClick={() => {
              setUserIdToUpdate(id);
            }}
          >
            Update
          </button>
          {userIdToUpdate && (
            <ModalUpdateForm
              id={userIdToUpdate}
              userPrevData={user}
              closeUpdateModal={closeUpdateModal}
            />
          )}
        </div>
      )}
    </>
  );
};
