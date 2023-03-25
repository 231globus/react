import React, { Component } from 'react';

type FileFieldProps = {
  inputFile: React.RefObject<HTMLInputElement>;
};

class FileField extends Component<FileFieldProps> {
  constructor(props: FileFieldProps | Readonly<FileFieldProps>) {
    super(props);
  }
  render() {
    const { inputFile } = this.props;
    return (
      <div>
        <label className="form__file">
          <input type="file" ref={inputFile} />
          <span className="form__file-btn">Chose photo</span>
          <span className="form__file-text">Max file size 2mb</span>
        </label>
      </div>
    );
  }
}

export default FileField;
