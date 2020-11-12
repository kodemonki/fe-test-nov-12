import React, { useState } from "react";

import DatePicker from "react-datepicker";

import { Formik, Field, Form } from "formik";
import { useSelector, useDispatch } from "react-redux";
import allActions from "../actions";

import "../css/App.css";
import "react-datepicker/dist/react-datepicker.css";

function Page1(props) {
  const dispatch = useDispatch();

  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(null);

  const [startTime, setStartTime] = useState(new Date());
  const [endTime, setEndTime] = useState(new Date());

  const onChange = (dates) => {
    const [start, end] = dates;
    setStartDate(start);
    setEndDate(end);
  };

  return (
    <div className="App">
      <header className="App-header">
        <Formik
          initialValues={{ beenBefore: false, grade: "" }}
          onSubmit={(values, actions) => {
            console.dir(values);
            let newObj = {
              dateStart: startDate,
              dateEnd: endDate,
              timeStart: startTime.getHours() + ":" + startTime.getMinutes(),
              timeEnd: endTime.getHours() + ":" + endTime.getMinutes(),
            };
            let mergedObj = { ...values, ...newObj };
            dispatch(allActions.formDataActions.updateData(mergedObj));
            props.setCurrentPage(2);
          }}
        >
          <Form>
            <span style={{ fontSize: "16px" }}>Grade&nbsp;</span>
            <Field as="select" name="grade">
              <option value={""}>Please select</option>
              {props.data &&
                props.data.grades.map((grade, index) => (
                  <option key={"o" + index} value={grade}>
                    {grade}
                  </option>
                ))}
            </Field>
            <br />
            <br />
            <span style={{ fontSize: "16px" }}>{"Start Time"}&nbsp;</span>
            <DatePicker
              selected={startTime}
              onChange={(date) => setStartTime(date)}
              showTimeSelect
              showTimeSelectOnly
              timeIntervals={15}
              timeCaption="Time"
              dateFormat="h:mm aa"
            />
            <br />
            <span style={{ fontSize: "16px" }}>
              {"End Time"}&nbsp;&nbsp;&nbsp;
            </span>
            <DatePicker
              selected={endTime}
              onChange={(date) => setEndTime(date)}
              showTimeSelect
              showTimeSelectOnly
              timeIntervals={15}
              timeCaption="Time"
              dateFormat="h:mm aa"
            />
            <br />
            <br />
            <label>
              <Field type="checkbox" name="beenBefore" />
              <span style={{ fontSize: "16px" }}>{"Been Before"}</span>
            </label>
            <br />
            <br />
            <DatePicker
              selected={startDate}
              onChange={onChange}
              startDate={startDate}
              endDate={endDate}
              selectsRange
              inline
            />
            <br />
            <button type="submit">Create Bookings</button>
          </Form>
        </Formik>
      </header>
    </div>
  );
}

export default Page1;
