import React from "react";
import {Controller} from "react-hook-form";
import {Button, Form, Input, Select} from "antd";

import {type IUser} from "@app/state/slices/usersListSlice";
import {useEditModalHook} from "@pages/main/hooks";

type TProps = {
  user: IUser,
  onClose: () => void

}

export const EditModal: React.FC<TProps> = ({onClose, user}) => {

  const {handleSubmit, onSubmit, control, errors} = useEditModalHook(onClose, user);

  return (
    <Form onFinish={handleSubmit(onSubmit)}>
      <Form.Item
        validateStatus={errors.name ? "error" : ""}
        help={errors.name?.message}
        label="Name:">
        <Controller
          name="name"
          control={control}
          render={({field}) =>
            <Input
              placeholder={"Example: John..."}
              variant={"underlined"} {...field}
            />}
        />
      </Form.Item>
      <Form.Item
        validateStatus={errors.email ? "error" : ""}
        help={errors.email?.message}
        label="Email:">
        <Controller
          name="email"
          control={control}
          render={({field}) =>
            <Input
              placeholder={"Example: example@mail.com"}
              variant={"underlined"}
              {...field}
            />}
        />
      </Form.Item>
      <Form.Item
        validateStatus={errors.phone ? "error" : ""}
        help={errors.phone?.message}
        label="Phone:">
        <Controller
          name="phone"
          control={control}
          render={({field}) =>
            <Input
              placeholder={"Example: +7 999 999 99 99"}
              variant={"underlined"}
              {...field}
            />}
        />
      </Form.Item>
      <Form.Item
        label="Role">
        <Controller
          control={control}
          name="role"
          render={({field}) => (
            <Select
              {...field}
              variant={"underlined"}
              options={[
                {value: "Admin", label: "Admin"},
                {value: "User", label: "User"},
                {value: "Manager", label: "Manager"},
              ]}
            />
          )}
        />
      </Form.Item>
      <Form.Item>
        <Button htmlType="submit" color={"green"} variant={"solid"}>Save</Button>
      </Form.Item>
    </Form>
  );
};