import React, { Component, Fragment } from "react";
import Input from "../helperComponents/Input";
import { RenderDatePicker } from "../helperComponents/RenderDatePicker";
import { RenderDatePickerMultiDay } from "../helperComponents/RenderDatePickerMultiDay";
import { Field, reduxForm, InjectedFormProps } from "redux-form";
import { connect } from "react-redux";
//form validation fn
import * as formVal from "./validationFunctions";
//actions
import { createTrade } from "../../actions/index";
//css
import "../../App.css";
import "../../styles/formComponents/EnterTrades.css";
import { MyFormProps, Trade, WindowSize } from "../Interfaces";
import { Profile } from "../../components/authComponents/Profile";

interface MyReduxProps {
  createTrade: Function;
  history: {
    push: Function;
  };
  formData: {
    tradeForm: {
      values: {
        ticker: string;
        number_of_shares: Number;
        short_or_long: string;
        buy_price: Number;
        sell_price: Number;
        short_price: Number;
        cover_price: Number;
        day_or_swing: string;
        start_date: string;
        end_date: string;
      };
    };
  };
  match: { params: { id: String } };
  wS: WindowSize;
  isUpdating: Boolean;
  trades: Trade[];
  clearFields: (
    form: String,
    keepTouched: boolean,
    persistentSubmitErrors: boolean,
    ...fields: string[]
  ) => void;
}

class _EnterTrades extends Component<
  InjectedFormProps<MyFormProps, MyReduxProps> & MyReduxProps
> {
  componentDidMount() {
    this.props.initialize({
      number_of_shares: 100,
      short_or_long: "Long",
      day_or_swing: "Day Trade",
    });
  }

  onSubmit = (formData: {}) => {
    this.props.createTrade(formData);
    this.props.history.push("/dashboard");
  };

  render() {
    return (
      <div className="ui container">
        <Profile />
        <div className="ui centered one column padded grid">
          <div className="column">
            <h2
              className="ui center aligned icon header"
              style={{ color: "white" }}
            >
              <i className="circular users blue icon"></i>
              Trades
            </h2>
            <div
              className="ui horizontal divider sixteen wide column"
              style={{ color: "white" }}
            ></div>
          </div>
          <form
            className="ui huge form error"
            onSubmit={this.props.handleSubmit(this.onSubmit)}
            autoComplete="off"
            id="enter-trades-form"
          >
            <div className="ui one column centered grid">
              <Field
                name="ticker"
                label="Ticker :"
                component={Input}
                validate={[
                  formVal.required,
                  formVal.onlyAlpha,
                  formVal.maxLength5,
                ]}
                placeholder={`E.g 'TSLA' or 'AAPL'`}
                normalize={(val: string) => val.toUpperCase()}
              />
              <Field
                name="number_of_shares"
                label="# of Shares:"
                type="number"
                step="any"
                validate={[formVal.required, formVal.number]}
                parse={(val: string) => parseFloat(val)}
                component={Input}
              />
              <div className="ui two column centered padded grid">
                <div className="middle aligned row">
                  <div className="eight wide column">
                    <div className="">
                      <div className="ui centered aligned header">
                        <Field
                          type="radio"
                          name="short_or_long"
                          value="Long"
                          id="long"
                          component="input"
                          onChange={(event, newValue, previousValue, name) => {
                            if (newValue === "Long") {
                              this.props.clearFields(
                                "tradeEnter",
                                false,
                                false,
                                "short_price",
                                "cover_price"
                              );
                            }
                          }}
                          className=""
                          checked={
                            this.props.formData?.tradeForm?.values
                              ?.short_or_long === "Long"
                          }
                        />
                      </div>
                      <div className="ui centered grid">
                        <label
                          className="ui centered blue horizontal large label"
                          id="enter-trades-form-label"
                          htmlFor="long"
                        >
                          Long Trade
                        </label>
                      </div>
                    </div>
                  </div>
                  <div className="eight wide column">
                    <div className="">
                      <div className="ui center aligned header">
                        <Field
                          type="radio"
                          name="short_or_long"
                          value="Short"
                          id="short"
                          component="input"
                          onChange={(event, newValue, previousValue, name) => {
                            if (newValue === "Short") {
                              this.props.clearFields(
                                "tradeEnter",
                                false,
                                false,
                                "buy_price",
                                "sell_price"
                              );
                            }
                          }}
                          checked={
                            this.props.formData?.tradeForm?.values
                              ?.short_or_long === "Short"
                          }
                          className=""
                        />
                      </div>
                      <div className="ui centered grid">
                        <label
                          className="ui centered blue horizontal large label"
                          id="enter-trades-form-label"
                          htmlFor="short"
                        >
                          Short Trade
                        </label>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              {this.props.formData?.tradeForm?.values?.short_or_long ===
              "Long" ? (
                <Fragment>
                  <Field
                    name="buy_price"
                    label="Buy Price :"
                    icon={<i className="yellow dollar sign big icon"></i>}
                    component={Input}
                    validate={[formVal.required, formVal.number]}
                    placeholder={`(3.14, .2333, etc.)`}
                    type="number"
                    step=".01"
                    parse={(val: string) => parseFloat(val)}
                  />
                  <Field
                    name="sell_price"
                    label="Sell Price :"
                    icon={<i className="yellow dollar sign big icon"></i>}
                    component={Input}
                    validate={[formVal.required]}
                    placeholder={`(3.14, .2333, etc.)`}
                    type="number"
                    step=".01"
                    parse={(val: string) => parseFloat(val)}
                  />
                </Fragment>
              ) : (
                <Fragment>
                  <Field
                    name="short_price"
                    label="Short Price :"
                    icon={<i className="yellow dollar sign big icon"></i>}
                    component={Input}
                    validate={[formVal.required, formVal.number]}
                    placeholder={`(3.14, .2333, etc.)`}
                    type="number"
                    step=".01"
                    parse={(val: string) => parseFloat(val)}
                  />
                  <Field
                    name="cover_price"
                    label="Cover Price :"
                    icon={<i className="yellow dollar sign big icon"></i>}
                    component={Input}
                    validate={[formVal.required, formVal.number]}
                    placeholder={`(3.14, .2333, etc.)`}
                    type="number"
                    step=".01"
                    parse={(val: string) => parseFloat(val)}
                  />
                </Fragment>
              )}
              <div className="ui two column centered padded grid">
                <div className="middle aligned row">
                  <div className="eight wide column">
                    <div className="ui center aligned header">
                      <Field
                        type="radio"
                        name="day_or_swing"
                        value="Day Trade"
                        id="dayTrade"
                        component="input"
                        className=""
                        onChange={(event, newValue, previousValue, name) => {
                          if (newValue === "Day Trade") {
                            this.props.clearFields(
                              "tradeEnter",
                              false,
                              false,
                              "end_date"
                            );
                          }
                        }}
                        checked={
                          this.props.formData?.tradeForm?.values
                            ?.day_or_swing === "Day Trade"
                        }
                      />
                    </div>
                    <div className="ui centered grid">
                      <label
                        className="ui centered blue horizontal large label"
                        id="enter-trades-form-label"
                        htmlFor="dayTrade"
                      >
                        Day Trade
                      </label>
                    </div>
                  </div>

                  <div className="eight wide column">
                    <div className="">
                      <div className="ui centered header">
                        <Field
                          type="radio"
                          name="day_or_swing"
                          value="Swing Trade"
                          id="swingTrade"
                          component="input"
                          className=""
                          checked={
                            this.props.formData?.tradeForm?.values
                              ?.day_or_swing === "Swing Trade"
                          }
                        />
                      </div>
                      <div className="ui centered grid">
                        <label
                          className="ui centered blue horizontal large label"
                          id="enter-trades-form-label"
                          htmlFor="swingTrade"
                        >
                          Swing Trade
                        </label>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              {this.props.formData?.tradeForm?.values?.day_or_swing ===
              "Day Trade" ? (
                <Fragment>
                  <Field
                    name="start_date"
                    label="Date :"
                    component={RenderDatePicker}
                    validate={[formVal.required]}
                    parse={(val: Date | null) => (val ? new Date(val) : null)}
                  />
                </Fragment>
              ) : (
                <Fragment>
                  <Field
                    name="start_date"
                    label="Date(s) :"
                    component={RenderDatePickerMultiDay}
                    validate={[formVal.required]}
                    parse={(val: Date | null) => (val ? new Date(val) : null)}
                    whatItSelects={`selectsStart`}
                    startDate={
                      this.props.formData?.tradeForm?.values?.start_date
                    }
                    endDate={this.props.formData?.tradeForm?.values?.end_date}
                  />{" "}
                  <div
                    className="ui horizontal divider sixteen wide field"
                    style={{ color: "white" }}
                  >
                    Thru
                  </div>
                  <Field
                    name="end_date"
                    label="Dates:"
                    idCSS="no-display"
                    component={RenderDatePickerMultiDay}
                    validate={[formVal.required]}
                    parse={(val: Date | null) => (val ? new Date(val) : null)}
                    whatItSelects={`selectsEnd`}
                    startDate={
                      this.props.formData?.tradeForm?.values?.start_date
                    }
                    endDate={this.props.formData?.tradeForm?.values?.end_date}
                  />
                </Fragment>
              )}
              <div
                className="one column eight wide centered row"
                id="submit-button-enter-trades-form"
              >
                <div className="center aligned column">
                  <button className="ui button blue huge" type="submit">
                    Submit
                  </button>
                </div>
              </div>
            </div>
          </form>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state: { form: FormData; trades: Trade[] }): {} => {
  return {
    formData: state.form,
    trades: state.trades,
  };
};

const connector = connect(mapStateToProps, {
  createTrade,
});

// const initialValues: {
//   number_of_shares: Number;
//   short_or_long: string;
//   day_or_swing: string;
// } = {
//   number_of_shares: 100,
//   short_or_long: "Long",
//   day_or_swing: "Day Trade",
// };

export const EnterTrades = connector(
  reduxForm<MyFormProps, MyReduxProps>({
    form: "tradeForm",
  })(_EnterTrades)
);
