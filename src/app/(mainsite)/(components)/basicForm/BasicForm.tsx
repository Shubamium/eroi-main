import React from "react";

type Props = {};

export default function BasicForm({}: Props) {
  return (
    <form id="submit-form">
      <div className="field">
        <label htmlFor="email">EMAIL ADDRESS</label>
        <input type="email" name="email" />
      </div>
      <div className="field">
        <label htmlFor="title">TITLE</label>
        <input type="title" name="title" />
      </div>
      <div className="field">
        <label htmlFor="message">TEXT</label>
        <textarea name="message"></textarea>
      </div>

      <div className="action">
        <button type="submit" className="btn submit">
          SUBMIT FORM
        </button>
      </div>
    </form>
  );
}
