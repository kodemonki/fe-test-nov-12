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
    <div className="fade-in step-0">
      <div className="Header">Make a booking</div>
      <header className="container">
        <p style={{ fontSize: "18px", color: "#2d88d9", fontWeight: "bold" }}>
          Book from scratch
        </p>
        <Formik
          initialValues={{ beenBefore: false, grade: "" }}
          validate={(values) => {
            const errors = {};
            if (values.grade === "") {
              errors.grade = "Required";
            }
            return errors;
          }}
          onSubmit={(values, actions) => {
            let ed = endDate;
            if (ed === null) {
              ed = startDate;
            }
            let newObj = {
              dateStart:
                startDate.getDate() +
                ":" +
                (startDate.getMonth() + 1) +
                ":" +
                startDate.getFullYear(),
              dateEnd:
                ed.getDate() +
                ":" +
                (ed.getMonth() + 1) +
                ":" +
                ed.getFullYear(),
              timeStart: startTime.getHours() + ":" + startTime.getMinutes(),
              timeEnd: endTime.getHours() + ":" + endTime.getMinutes(),
            };
            dispatch(
              allActions.formDataActions.updateData({ ...values, ...newObj })
            );
            props.setCurrentPage(2);
          }}
        >
          {({
            values,
            errors,
            touched,
            handleChange,
            handleBlur,
            handleSubmit,
            isSubmitting,
          }) => (
            <Form>
              <div>
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
                {errors.grade && <span style={{ fontSize: "12px", color:"red", display:'block' }}>{errors.grade}</span>}
              </div>
              <br />
              <div>
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
              <div>
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
              <div>
                <label>
                  <Field type="checkbox" name="beenBefore" />
                  <span style={{ fontSize: "16px" }}>{"Been Before"}</span>
                </label>
              </div>
              <div>
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
              <div>
                <button type="submit">Create Bookings</button>
              </div>
            </Form>
          )}
        </Formik>
      </header>
    </div>
  );
}

export default Page1;
