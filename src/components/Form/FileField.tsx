import React, { Component, FormEventHandler } from 'react';

type FileFieldProps = {
  inputFile: React.RefObject<HTMLInputElement>;
};

type FileFieldState = {
  text: string;
};

class FileField extends Component<FileFieldProps, FileFieldState> {
  constructor(props: FileFieldProps | Readonly<FileFieldProps>) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
    this.state = {
      text: 'Max file size 2mb',
    };
  }
  handleChange() {
    this.setState({ text: this.props.inputFile.current?.value as string });
  }
  render() {
    const { inputFile } = this.props;
    return (
      <div>
        <label className="form__file form__input">
          <input type="file" ref={inputFile} onChange={this.handleChange} />
          <span className="form__file-btn">Chose photo</span>
          <span className="form__file-text">{this.state.text}</span>
        </label>
        <span className="form__error"></span>
      </div>
    );
  }
}

export default FileField;
