import React, { Component } from 'react';
import { Form, Field } from 'react-final-form';
import './App.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      showPassword: false,
    };
  }

  submitTheForm(e, form) {
    console.log('logging in!', form.getState().values);
    // fire mutation with form values
    !form.invalid && form.reset();
  }

  validate(values) {
    const errors = {};
    if (!values.Input1 || values.Input1.length < 4) {
      errors.Input1 = true;
    }
    if (!values.Input2 || values.Input2.length < 4) {
      errors.Input2 = true;
    }
    return errors;
  }

  render() {
    return (
      <div className="App">
        <Form
          validate={values => this.validate(values)}
          onSubmit={(e, form) => this.submitTheForm(e, form)}
          render={({ handleSubmit, invalid, pristine }) => (
            <form onSubmit={e => handleSubmit(e)}>
              <fieldset>
                <label or="Input1">
                  username:{' '}
                  <Field
                    name="Input1"
                    render={({ input, meta }) => (
                      <input
                        id="Input1"
                        name="Input1"
                        type="text"
                        placeholder="Add some input"
                        {...input}
                      />
                    )}
                  />
                </label>
                <label htmlFor="Input2">
                  password:{' '}
                  <Field
                    name="Input2"
                    render={({ input, meta }) => (
                      <input
                        id="Input2"
                        name="Input2"
                        type={this.state.showPassword ? 'text' : 'password'}
                        placeholder="Add more input"
                        {...input}
                      />
                    )}
                  />
                </label>
              </fieldset>
              <fieldset>
                <button
                  id="submit"
                  type="submit"
                  disabled={pristine || invalid}
                >
                  login
                </button>
                <button
                  onClick={() =>
                    this.setState({ showPassword: !this.state.showPassword })
                  }
                >
                  👁
                </button>
              </fieldset>
            </form>
          )}
        />
      </div>
    );
  }
}

export default App;
