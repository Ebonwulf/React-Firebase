import './NewEventForm.css';

export default function NewEventForm() {
  return (
    <form className='new-event-form'>
      {/* <label htmlFor="title">Event Title:</label>
      <input type="text" id="title" /> */}
      {/*wrapping the input element inside the label element means it will automatically be connected to the label, this works for anything you put inside the label and means you don't need to give each element an id and the label a htmlfor to connect them together*/}
      <label>
        <span>Event Title:</span>
        <input type='text' />
      </label>
      <label>
        <span>Event Date:</span>
        <input type='date' />
      </label>
      <button>Submit</button>
    </form>
  );
}
