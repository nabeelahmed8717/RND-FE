import React from "react";
import "react-quill/dist/quill.bubble.css";
const ReactQuill = typeof window === 'object' ? require('react-quill') : () => false;

let modules: any;

if (typeof window === 'object') {
  const Quill = ReactQuill.Quill;
  var Font = Quill.import("formats/font");
  Font.whitelist = ["Roboto", "Raleway", "Montserrat", "Lato", "Rubik"];
  Quill.register(Font, true);

  //Add custom Font Sizes to the Editor
  var Size = Quill.import("attributors/style/size");
  Size.whitelist = [
    "12px",
    "14px",
    "16px",
    "18px",
    "20px",
    "24px",
  ];
  Quill.register(Size, true);
  modules = {
    toolbar: [
      [{ font: Font.whitelist }],
      [{
        size: Size.whitelist
      }],
      ["bold", "italic", "underline"],
      [{ align: 'justify' },],
      [{ align: '' },],
      [{ align: 'right' },],
      ["link"],
    ],
    clipboard: {
      matchVisual: false,
    },
  }
}
const Editor = (props: any) => {
  const { setAddTitle, classname, placeholder, defaultvalue, setValue } = props;
  return (
    <div>
      <ReactQuill
        bounds='.sidebar > .css-1ka2ygo > .css-1dufrio'
        theme="bubble"
        className={classname}
        onFocus={() => setAddTitle("add-field-background")}
        placeholder={placeholder}
        defaultValue={defaultvalue}
        onChange={setValue}
        modules={modules}
      />
    </div>
  );
};
export default Editor;