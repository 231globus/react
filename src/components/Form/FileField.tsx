import React, { Component } from 'react';

type FileFieldProps = {
  inputFile: React.RefObject<HTMLInputElement>;
  errorMessage: ErrorMessage;
};

type FileFieldState = {
  text: string;
};

class FileField extends Component<FileFieldProps, FileFieldState> {
  constructor(props: FileFieldProps | Readonly<FileFieldProps>) {
    super(props);
  }
  handleChange() {
    this.setState({ text: this.props.inputFile.current?.value as string });
  }

  render() {
    const { inputFile } = this.props;
    const { file } = this.props.errorMessage;
    return (
      <div className="form__filed form__input">
        <input type="file" ref={inputFile} />
        <span className="form__error">{file}</span>
      </div>
    );
  }
}

export default FileField;
