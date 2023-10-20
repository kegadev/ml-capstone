import { useFormik } from "formik";
import * as Yup from "yup";

const BookingForm = (props) => {
  const handleDateChange = (event) => {
    props.handleDateChange(event);
  };

  const formik = useFormik({
    initialValues: {
      date: props.selectedDate,
      time: "",
      guests: "1",
      occasion: "Birthday",
    },
    validationSchema: Yup.object({
      date: Yup.date().required("Date is required"),
      time: Yup.string().required("Time is required"),
      guests: Yup.number()
        .min(1, "Must be at least 1")
        .max(10, "Must be 10 or less")
        .required("Number of guests is required"),
      occasion: Yup.string().required("Occasion is required"),
    }),

    onSubmit: () => {
      const formData = {
        date: formik.values.date,
        time: formik.values.time,
        guests: formik.values.guests,
        occasion: formik.values.occasion,
      };
      console.log("formData", formData);
      props.submitForm(formData);
    },
  });

  return (
    <form onSubmit={formik.handleSubmit}>
      <label htmlFor="res-date">Choose date</label>
      <input
        type="date"
        id="res-date"
        value={props.selectedDate}
        onChange={handleDateChange}
        {...formik.getFieldProps("date")}
      />
      <span className="error-message">
        {formik.touched.date && formik.errors.date ? formik.errors.date : null}
      </span>
      <label htmlFor="res-time">Choose time</label>
      <select id="res-time" {...formik.getFieldProps("time")}>
        {props.availableTimes?.map((time) => (
          <option key={time}>{time}</option>
        ))}
      </select>
      <span className="error-message">
        {formik.touched.time && formik.errors.time && formik.errors.time}
      </span>
      <label htmlFor="guests">Number of guests</label>
      <input
        type="number"
        placeholder="1"
        min="1"
        max="10"
        name="guests"
        id="guests"
        {...formik.getFieldProps("guests")}
      />
      <span className="error-message">
        {formik.touched.guests && formik.errors.guests}
      </span>
      <label htmlFor="occasion">Occasion</label>
      <select id="occasion" {...formik.getFieldProps("occasion")}>
        <option>Birthday</option>
        <option>Anniversary</option>
      </select>
      <span className="error-message">
        {formik.touched.occasion && formik.errors.occasion
          ? formik.errors.occasion
          : null}
      </span>
      <input
        disabled={!formik.isValid}
        aria-label="On Click"
        type="submit"
        value="Make Your reservation"
      />
    </form>
  );
};

export default BookingForm;
