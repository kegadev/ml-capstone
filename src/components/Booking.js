import BookingForm from "./BookingForm";
const Booking = (props) => {
  return (
    <div className="booking-page">
      <h1>Booking</h1>
      <BookingForm
        availableTimes={props.availableTimes}
        selectedDate={props.selectedDate}
        handleDateChange={props.handleDateChange}
        dispatch={props.dispatch}
        submitForm={props.submitForm}
      ></BookingForm>
    </div>
  );
};

export default Booking;
