import {Button, Modal, Space, Table, type TableProps, Tag} from "antd";
import {useDispatch, useSelector} from "react-redux";

import {deleteUser, type IUser} from "@app/state/slices/usersListSlice";
import {type AppDispatch, type RootState} from "@app/state/store";

import "@shared/styles/headers.scss";
import React, {useState} from "react";
import {EditModal} from "@pages/main/components";

export const TableUsersList: React.FC = () => {

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
  const columns: TableProps<IUser>["columns"] = [
    {
      title: "Id",
      dataIndex: "id",
      key: "id",
      responsive: ["md"],
    },
    {
      title: "Name",
      dataIndex: "name",
      key: "name",
    },
    {
      title: "Email",
      dataIndex: "email",
      key: "email",
      responsive: ["md"],
    },
    {
      title: "Phone",
      dataIndex: "phone",
      key: "phone",
      responsive: ["sm"],
    },
    {
      title: "Role",
      key: "role",
      dataIndex: "role",
      responsive: ["sm"],
      render: (_, {role}) => (
        <>
          <Tag color={"green"} key={role}>
            {role.toUpperCase()}
          </Tag>
        </>
      ),
    },
    {
      title: "Action",
      key: "action",
      render: (record) => (
        <Space size="middle" align={"center"}>
          <Button onClick={() => handlerEditUser(record)} color={"primary"} variant={"outlined"}>Edit</Button>
          <Button onClick={() => handlerDeleteUser(record.id)} color={"danger"} variant={"outlined"}>Delete</Button>
        </Space>
      ),
    },
  ];

  return (
    <>
      <Table<IUser> columns={columns} pagination={{position: ["bottomCenter"]}} dataSource={users}/>
      <Modal
        title="Edit user"
        open={isModalOpen}
        footer={null}
      >
        <EditModal onClose={closeModal} user={editableUser}/>
      </Modal>
    </>
  );
};

