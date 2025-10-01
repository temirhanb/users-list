import {useState} from "react";

export const useHeaderHook = ()=>{
  const [isModalOpen, setIsModalOpen] = useState(false);

  const showModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };
  return{
    isModalOpen,showModal,closeModal
  }
}