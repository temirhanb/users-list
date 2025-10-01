import {useDispatch} from "react-redux";
import {type AppDispatch} from "@app/state/store";
import {type SubmitHandler, useForm} from "react-hook-form";
import {zodResolver} from "@hookform/resolvers/zod";
import {SCHEMA_FORM} from "@/shared";
import {addUser, type IUser} from "@app/state/slices/usersListSlice";
import {z} from "zod";

type FormData = z.infer<typeof SCHEMA_FORM>;

export const useAddModalHook = (onClose: () => void) => {
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

  return {handleSubmit, onSubmit, onClose, control, errors};
};