import React from 'react';
import { Mutation } from "react-apollo";
import CreateBillForm from './createBillForm';
import { CREATE_BILL } from './queries';

const CreateBill = ({ history }) => {

  //Work on error messages.
  const onError = error => {
    return (
      <div>Error! {error.message}</div>
    )
  }

  const onCompleted = data => {
    let id = encodeURIComponent(data.createBill.id)
    history.push(`/bills/${id}`);
  }

  return (
    <Mutation
      mutation={CREATE_BILL}
      onCompleted={onCompleted}
      onError={onError}>
      {(createBill, { data }) => {
        return (
          <CreateBillForm createBill={createBill} />
        );
      }}
    </Mutation>
  );
};

export default CreateBill;