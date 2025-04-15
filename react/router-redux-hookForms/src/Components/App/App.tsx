import { useState, ChangeEvent, FormEvent } from "react";

import "./App.css";

interface FormData {
  firstName: string;
  lastName: string;
  password: string;
  number: string;
  email: string;
  url: string;
  tel: string;
  date: string;
  time: string;
  month: string;
  week: string;
  range: number;
  color: string;
  checkbox: boolean;
  radio: string;
  select: string;
  textarea: string;
  file: File | null;
  hidden: string;
}

// Type guard for checkbox input
function isCheckboxEvent(
  event: ChangeEvent<
    HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
  >,
): event is ChangeEvent<HTMLInputElement> {
  return (event.target as HTMLInputElement).type === "checkbox";
}

// Type guard for radio input
function isRadioEvent(
  event: ChangeEvent<
    HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
  >,
): event is ChangeEvent<HTMLInputElement> {
  return (event.target as HTMLInputElement).type === "radio";
}

// Type guard for text input (including email, url, etc.)
function isTextEvent(
  event: ChangeEvent<
    HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
  >,
): event is ChangeEvent<HTMLInputElement> {
  const inputType = (event.target as HTMLInputElement).type;
  return (
    inputType === "text" ||
    inputType === "email" ||
    inputType === "password" ||
    inputType === "url" ||
    inputType === "tel" ||
    inputType === "hidden" ||
    inputType === "date" ||
    inputType === "datetime-local" ||
    inputType === "month" ||
    inputType === "number" ||
    inputType === "search" ||
    inputType === "time" ||
    inputType === "week"
  );
}

// Type guard for textarea input
function isTextAreaEvent(
  event: ChangeEvent<
    HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
  >,
): event is ChangeEvent<HTMLTextAreaElement> {
  return event.target instanceof HTMLTextAreaElement;
}

// Type guard for select input
function isSelectEvent(
  event: ChangeEvent<
    HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
  >,
): event is ChangeEvent<HTMLSelectElement> {
  return event.target instanceof HTMLSelectElement;
}

// Type guard for file input
function isFileEvent(
  event: ChangeEvent<
    HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
  >,
): event is ChangeEvent<HTMLInputElement> {
  return (event.target as HTMLInputElement).type === "file";
}

// More robust type guard for HTMLInputElement
function isInputElement(
  event: ChangeEvent<EventTarget>,
): event is ChangeEvent<HTMLInputElement> {
  return event.target instanceof HTMLInputElement;
}

function App() {
  const [formData, setFormData] = useState<FormData>({
    firstName: "",
    lastName: "",
    password: "",
    number: "",
    email: "",
    url: "",
    tel: "",
    date: "",
    time: "",
    month: "",
    week: "",
    range: 50,
    color: "#000000",
    checkbox: false,
    radio: "",
    select: "",
    textarea: "",
    file: null,
    hidden: "secretValue",
  });

  const handleInputChange = (
    event: ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >,
  ) => {
    setFormData((prevData) => {
      const { name, value, type } = event.target;

      if (isCheckboxEvent(event)) {
        return {
          ...prevData,
          [name]: event.target.checked,
        };
      } else if (
        isRadioEvent(event) ||
        isTextEvent(event) ||
        isTextAreaEvent(event) ||
        isSelectEvent(event) ||
        isInputElement(event)
      ) {
        return {
          ...prevData,
          [name]: event.target.value,
        };
      } else if (isFileEvent(event)) {
        return {
          ...prevData,
          [name]: event.target.files,
        };
      } else {
        return {
          ...prevData,
        };
      }
    });
  };

  const handleSubmit = (event: FormEvent) => {
    event.preventDefault();

    alert("Form submitted! Check the console for data.");
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="max-w-xl mx-auto p-6 bg-white shadow-md rounded-md"
    >
      <h2 className="text-xl font-semibold mb-4">
        HTML Input Elements in a React Form
      </h2>

      <div className="mb-4">
        <label
          htmlFor="firstNameInput"
          className="block text-gray-700 text-sm font-bold mb-2"
        >
          First Name:
        </label>
        <input
          type="text"
          id="firstNameInput"
          name="firstName"
          value={formData.firstName}
          onChange={handleInputChange}
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
        />
      </div>

      <div className="mb-4">
        <label
          htmlFor="lastNameInput"
          className="block text-gray-700 text-sm font-bold mb-2"
        >
          Last Name:
        </label>
        <input
          type="text"
          id="lastNameInput"
          name="lastName"
          value={formData.lastName}
          onChange={handleInputChange}
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
        />
      </div>

      <div className="mb-4">
        <label
          htmlFor="passwordInput"
          className="block text-gray-700 text-sm font-bold mb-2"
        >
          Password:
        </label>
        <input
          type="password"
          id="passwordInput"
          name="password"
          value={formData.password}
          onChange={handleInputChange}
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
        />
      </div>

      <div className="mb-4">
        <label
          htmlFor="numberInput"
          className="block text-gray-700 text-sm font-bold mb-2"
        >
          Number:
        </label>
        <input
          type="number"
          id="numberInput"
          name="number"
          value={formData.number}
          onChange={handleInputChange}
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
        />
      </div>

      <div className="mb-4">
        <label
          htmlFor="emailInput"
          className="block text-gray-700 text-sm font-bold mb-2"
        >
          Email:
        </label>
        <input
          type="email"
          id="emailInput"
          name="email"
          value={formData.email}
          onChange={handleInputChange}
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
        />
      </div>

      <div className="mb-4">
        <label
          htmlFor="urlInput"
          className="block text-gray-700 text-sm font-bold mb-2"
        >
          URL:
        </label>
        <input
          type="url"
          id="urlInput"
          name="url"
          value={formData.url}
          onChange={handleInputChange}
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
        />
      </div>

      <div className="mb-4">
        <label
          htmlFor="telInput"
          className="block text-gray-700 text-sm font-bold mb-2"
        >
          Telephone:
        </label>
        <input
          type="tel"
          id="telInput"
          name="tel"
          value={formData.tel}
          onChange={handleInputChange}
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
        />
      </div>

      <div className="mb-4">
        <label
          htmlFor="dateInput"
          className="block text-gray-700 text-sm font-bold mb-2"
        >
          Date:
        </label>
        <input
          type="date"
          id="dateInput"
          name="date"
          value={formData.date}
          onChange={handleInputChange}
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
        />
      </div>

      <div className="mb-4">
        <label
          htmlFor="timeInput"
          className="block text-gray-700 text-sm font-bold mb-2"
        >
          Time:
        </label>
        <input
          type="time"
          id="timeInput"
          name="time"
          value={formData.time}
          onChange={handleInputChange}
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
        />
      </div>

      <div className="mb-4">
        <label
          htmlFor="monthInput"
          className="block text-gray-700 text-sm font-bold mb-2"
        >
          Month:
        </label>
        <input
          type="month"
          id="monthInput"
          name="month"
          value={formData.month}
          onChange={handleInputChange}
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
        />
      </div>

      <div className="mb-4">
        <label
          htmlFor="weekInput"
          className="block text-gray-700 text-sm font-bold mb-2"
        >
          Week:
        </label>
        <input
          type="week"
          id="weekInput"
          name="week"
          value={formData.week}
          onChange={handleInputChange}
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
        />
      </div>

      <div className="mb-4">
        <label
          htmlFor="rangeInput"
          className="block text-gray-700 text-sm font-bold mb-2"
        >
          Range:
        </label>
        <input
          type="range"
          id="rangeInput"
          name="range"
          min="0"
          max="100"
          value={formData.range}
          onChange={handleInputChange}
          className="w-full"
        />
        <span className="text-gray-600 text-sm">{formData.range}%</span>
      </div>

      <div className="mb-4">
        <label
          htmlFor="colorInput"
          className="block text-gray-700 text-sm font-bold mb-2"
        >
          Color:
        </label>
        <input
          type="color"
          id="colorInput"
          name="color"
          value={formData.color}
          onChange={handleInputChange}
          className="w-10 h-10 border rounded"
        />
      </div>

      <div className="mb-4">
        <label className="block text-gray-700 text-sm font-bold mb-2">
          Checkbox:
        </label>
        <input
          type="checkbox"
          name="checkbox"
          checked={formData.checkbox}
          onChange={handleInputChange}
          className="form-checkbox h-5 w-5 text-indigo-600 rounded focus:ring-indigo-500 border-gray-300"
        />
        <span className="ml-2 text-gray-700">
          {formData.checkbox ? "Checked" : "Unchecked"}
        </span>
      </div>

      <div className="mb-4">
        <label className="block text-gray-700 text-sm font-bold mb-2">
          Radio:
        </label>
        <div className="space-x-2">
          <label>
            <input
              type="radio"
              name="radio"
              value="option1"
              checked={formData.radio === "option1"}
              onChange={handleInputChange}
              className="form-radio h-5 w-5 text-indigo-600 rounded focus:ring-indigo-500 border-gray-300"
            />
            <span className="ml-2 text-gray-700">Option 1</span>
          </label>
          <label>
            <input
              type="radio"
              name="radio"
              value="option2"
              checked={formData.radio === "option2"}
              onChange={handleInputChange}
              className="form-radio h-5 w-5 text-indigo-600 rounded focus:ring-indigo-500 border-gray-300"
            />
            <span className="ml-2 text-gray-700">Option 2</span>
          </label>
        </div>
      </div>

      <div className="mb-4">
        <label
          htmlFor="selectInput"
          className="block text-gray-700 text-sm font-bold mb-2"
        >
          Select:
        </label>
        <select
          id="selectInput"
          name="select"
          value={formData.select}
          onChange={handleInputChange}
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
        >
          <option value="">-- Select an option --</option>
          <option value="optionA">Option A</option>
          <option value="optionB">Option B</option>
          <option value="optionC">Option C</option>
        </select>
      </div>

      <div className="mb-4">
        <label
          htmlFor="textareaInput"
          className="block text-gray-700 text-sm font-bold mb-2"
        >
          Textarea:
        </label>
        <textarea
          id="textareaInput"
          name="textarea"
          value={formData.textarea}
          onChange={handleInputChange}
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
        />
      </div>

      <div className="mb-4">
        <label
          htmlFor="fileInput"
          className="block text-gray-700 text-sm font-bold mb-2"
        >
          File:
        </label>
        <input
          type="file"
          id="fileInput"
          name="file"
          onChange={handleInputChange}
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
        />
        {formData.file && (
          <span className="text-gray-600 text-sm mt-1 block">
            Selected file: {formData.file.name}
          </span>
        )}
      </div>

      {/* Hidden Input - Not typically displayed */}
      <input type="hidden" name="hidden" value={formData.hidden} />

      <button
        type="submit"
        className="bg-indigo-500 hover:bg-indigo-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
      >
        Submit
      </button>
    </form>
  );
}

export default App;
