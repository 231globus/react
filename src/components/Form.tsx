import { useTypeSelector } from '../hooks/useTypeSelector';
import React, { useRef } from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';
import { User } from 'types/types';
import AgreeInput from './FormFields/AgreeInput';
import CoffeeInput from './FormFields/CoffeeInput';
import DateInput from './FormFields/DateInput';
import FileInput from './FormFields/FileInput';
import GenderSelect from './FormFields/GenderSelect';
import NameInput from './FormFields/NameInput';
import PopUp from './PopUp';
import { useTypeDispatch } from '../hooks/useTypeDispatch';
import { modalReducer } from '../store/reducers/modal.reducer';
import { usersReducer } from '../store/reducers/users.reducer';

const Form = () => {
  const formRef = useRef<HTMLFormElement>(null);

  const dispatch = useTypeDispatch();
  const { show } = useTypeSelector((state) => state.modalReducer);
  const { showModal, hideModal } = modalReducer.actions;
  const { addUser } = usersReducer.actions;

  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm<User>();

  const onSubmit: SubmitHandler<User> = (data) => {
    const formData = {
      ...data,
      image: URL.createObjectURL(data.file['0']),
    };
    dispatch(addUser(formData));
    dispatch(showModal());
    setTimeout(() => {
      dispatch(hideModal());
      formRef.current?.reset();
    }, 2000);
  };

  return (
    <>
      {show ? <PopUp /> : <></>}
      <form className="form" role="form" ref={formRef} onSubmit={handleSubmit(onSubmit)}>
        <NameInput label="Name:" register={register} errors={errors} required />
        <DateInput label="Date:" register={register} errors={errors} required />
        <GenderSelect label="Select gender:" register={register} errors={errors} required />
        <CoffeeInput label="Coffee?" register={register} errors={errors} required />
        <FileInput label="File:" register={register} errors={errors} required />
        <AgreeInput label="Confirm to create  " register={register} errors={errors} required />
        <input type="submit" value="Submit" />
      </form>
    </>
  );
};

export default Form;
