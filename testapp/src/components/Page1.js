import React, { useState } from "react";

import DatePicker from "react-datepicker";

import { Formik, Field, Form } from "formik";
import { useDispatch } from "react-redux";
import allActions from "../actions";

import "../css/App.css";
import "react-datepicker/dist/react-datepicker.css";

function Page1(props) {
  const dispatch = useDispatch();

  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(new Date());

  const [startTime, setStartTime] = useState(new Date());
  const [endTime, setEndTime] = useState(new Date());

  const onChange = (dates) => {
    const [start, end] = dates;
    setStartDate(start);
    setEndDate(end);
  };

  return (
    <div className="App fade-in step-0" >
      <header className="container">
        <Formik
          initialValues={{ beenBefore: false, grade: "" }}
          onSubmit={(values, actions) => {
            let newObj = {
              dateStart:
                startDate.getDate() +
                ":" +
                (startDate.getMonth() + 1) +
                ":" +
                startDate.getFullYear(),
              dateEnd:
                endDate.getDate() +
                ":" +
                (endDate.getMonth() + 1) +
                ":" +
                endDate.getFullYear(),
              timeStart: startTime.getHours() + ":" + startTime.getMinutes(),
              timeEnd: endTime.getHours() + ":" + endTime.getMinutes(),
            };
            dispatch(
              allActions.formDataActions.updateData({ ...values, ...newObj })
            );
            props.setCurrentPage(2);
          }}
        >
          <Form>
            <div className=" ">
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
            </div>
            <br/>
            <div className=" ">
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
            </div>
            <div className=" ">
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
            </div>
            <div className=" ">
              <label>
                <Field type="checkbox" name="beenBefore" />
                <span style={{ fontSize: "16px" }}>{"Been Before"}</span>
              </label>
            </div>
            <div className=" ">
              <DatePicker
                selected={startDate}
                onChange={onChange}
                startDate={startDate}
                endDate={endDate}
                selectsRange
                inline
              />
            </div>
            <br />
            <div className=" ">
              <button type="submit">Create Bookings</button>
            </div>
          </Form>
        </Formik>
      </header>
    </div>
  );
}

export default Page1;
