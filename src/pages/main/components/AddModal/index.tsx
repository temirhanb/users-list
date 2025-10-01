import React from "react";
import {Controller} from "react-hook-form";
import {Button, Form, Input, Select} from "antd";
import {useAddModalHook} from "@pages/main/hooks";
import {MaskedInput} from "antd-mask-input";

type IProps = {
  onClose: () => void
}

export const AddModal: React.FC<IProps> = ({onClose}) => {
  const {handleSubmit, errors, onSubmit, control} = useAddModalHook(onClose);

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
            <MaskedInput
              mask={"+7 (000) 000 00 00"}
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