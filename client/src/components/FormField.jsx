import React from 'react';

const FormField = ({
  labelName,
  type,
  name,
  placeholder,
  value,
  handleChange,
  isDisable,
  handleSurpriseMe,
  isSurpriseMe,
}) => {
  return (
    <div>
      <div className="mb-2 flex items-center gap-2">
        <label
          htmlFor={name}
          className="block text-sm font-medium text-gray-900"
        >
          {labelName}
        </label>
        {isSurpriseMe && (
          <button
            type="button"
            onClick={handleSurpriseMe}
            className="rounded-[5px] bg-[#ececf1] py-1 px-2 text-xs font-medium text-black"
          >
            Surprise Me
          </button>
        )}
      </div>
      <input
        type={type}
        id={name}
        name={name}
        placeholder={placeholder}
        value={value}
        onChange={handleChange}
        required
        disabled={isDisable}
        className={`block w-full rounded-lg border border-gray-300 bg-gray-50 p-3 text-sm text-gray-900 outline-none focus:border-[#4649ff] focus:ring-[#4649ff] ${
          isDisable ? 'disabled:bg-gray-300 disabled:opacity-50' : ''
        }`}
      />
    </div>
  );
};

export default FormField;
