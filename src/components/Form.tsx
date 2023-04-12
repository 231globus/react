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
import { useDispatch } from 'react-redux';
import { HIDE_POP_UP, SHOW_POP_UP } from '../types/popup';
import { ADD_USER } from '../types/users';

const Form = () => {
  const formRef = useRef<HTMLFormElement>(null);

  const dispath = useDispatch();

  const { popup } = useTypeSelector((state) => state);

  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm<User>();

  const addUser = (data: User) => {
    dispath({
      type: ADD_USER,
      payload: data,
    });
  };

  const showPopUp = () => {
    dispath({
      type: SHOW_POP_UP,
    });
  };

  const hidePopUp = () => {
    dispath({
      type: HIDE_POP_UP,
    });
  };

  const onSubmit: SubmitHandler<User> = (data) => {
    addUser(data);
    showPopUp();
    setTimeout(() => {
      hidePopUp();
      formRef.current?.reset();
    }, 2000);
  };

  return (
    <>
      {popup.show ? <PopUp /> : <></>}
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
