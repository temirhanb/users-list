import React from "react";
import {Controller, type SubmitHandler, useForm} from "react-hook-form";
import {Button, Form, Input, Select} from "antd";
import {useDispatch} from "react-redux";
import {z} from "zod";
import {zodResolver} from "@hookform/resolvers/zod";

import {addUser, type IUser} from "@app/state/slices/usersListSlice";
import {type AppDispatch} from "@app/state/store";
import {SCHEMA_FORM} from "@/shared";

type FormData = z.infer<typeof SCHEMA_FORM>;

type IProps = {
  onClose: () => void
}

export const AddModal: React.FC<IProps> = ({onClose}) => {

  const dispatch = useDispatch<AppDispatch>();
  const {
    handleSubmit,
    control,
    formState: {errors},
  } = useForm<FormData>({
    resolver: zodResolver(SCHEMA_FORM),

    defaultValues: {
      role: "User",
      name: "",
      phone: "",
      email: "",
    },
  });

  const onSubmit: SubmitHandler<FormData> = (data) => {

    const newUser: IUser = {
      id: Math.floor(Math.random() * 9999999),
      name: data.name,
      email: data.email,
      phone: data.phone,
      role: data.role,
    };
    dispatch(addUser(newUser));
    onClose();
  };
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