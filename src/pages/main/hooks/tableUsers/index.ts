import {useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import {type AppDispatch, type RootState} from "@app/state/store";
import {deleteUser, type IUser} from "@app/state/slices/usersListSlice";

export const useTableUsersHook = () => {

  const {users} = useSelector((state: RootState) => state.users);
  const dispatch = useDispatch<AppDispatch>();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [editableUser, setEditableUser] = useState<IUser>({} as IUser);

  const showModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const handlerDeleteUser = (id: number) => {
    dispatch(deleteUser(id));
  };

  const handlerEditUser = (user: IUser) => {
    setEditableUser(user);
    showModal();
  };
  return {
    closeModal, handlerDeleteUser, handlerEditUser, editableUser, isModalOpen, users
  };
};