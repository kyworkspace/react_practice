import React, { PureComponent } from "react";
import PropTypes from "prop-types";

class InputWithStyle extends PureComponent {
  constructor(props) {
    super(props);
    this.setRef = this.setRef.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(e) {
    const { name, onChange } = this.props;
    if (onChange) {
      console.log(name, e.target.value);
      onChange(name, e.target.value);
    }
  }

  componentDidMount() {
    if (this.props.autoFocus) {
      //오토 포커스 값이 true 일때 엘리먼트 포커스
      console.log("마운트");
      this.ref.focus();
    }
  }
  componentDidUpdate() {
    if (this.props.autoFocus) {
      console.log("업뎃");
      this.ref.focus();
    }
  }

  setRef(ref) {
    this.ref = ref;
  }

  render() {
    const { errorMassage, label, name, value, type, onFocus } = this.props;
    return (
      <div className="input-field">
        <input
          className={`validate ${errorMassage && "invalid"}`}
          key={`input_${name}`}
          id={`input_${name}`}
          ref={this.setRef}
          onChange={this.handleChange}
          onFocus={onFocus}
          value={value}
          type={type}
        />
        <label htmlFor={`input_${name}`} className="active">
          {label}
        </label>
        {errorMassage && (
          <span className="helper-text" data-error={errorMassage}>
            {errorMassage}
          </span>
        )}
      </div>
    );
  }
}
InputWithStyle.propTypes = {
  type: PropTypes.oneOf(["text", "number", "price"]),
  name: PropTypes.string.isRequired,
  value: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  errorMassage: PropTypes.string,
  label: PropTypes.string,
  onChange: PropTypes.func,
  onFocus: PropTypes.func,
  autoFocus: PropTypes.bool,
};

InputWithStyle.defaultProps = {
  onChange: () => {},
  onFocus: () => {},
  autoFocus: false,
  type: "text",
};

export default InputWithStyle;
