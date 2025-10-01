import {useDispatch} from "react-redux";
import {z} from "zod";
import {type AppDispatch} from "@app/state/store";
import {type SubmitHandler, useForm} from "react-hook-form";
import {zodResolver} from "@hookform/resolvers/zod";
import {SCHEMA_FORM} from "@/shared";
import {editUser, type IUser} from "@app/state/slices/usersListSlice";

type FormData = z.infer<typeof SCHEMA_FORM>;

export const useEditModalHook = (onClose: () => void, user: IUser) => {
  const dispatch = useDispatch<AppDispatch>();
  const {
    handleSubmit,
    control,
    reset,
    formState: {errors},
  } = useForm<FormData>({
    resolver: zodResolver(SCHEMA_FORM),

    defaultValues: {
      role: user.role,
      name: user.name,
      phone: user.phone,
      email: user.email,
    },
  });

  const onSubmit: SubmitHandler<FormData> = (data) => {

    const editableUser: IUser = {
      id: user.id,
      name: data.name,
      email: data.email,
      phone: data.phone,
      role: data.role,
    };
    dispatch(editUser(editableUser));
    reset();
    onClose();
  };
  return {handleSubmit, onSubmit, onClose, control, errors};
};